"use client";

import {
  BookOpen,
  Brain,
  CheckCircle2,
  Circle,
  ClipboardList,
  GraduationCap,
  ListChecks,
  RotateCcw,
  Target,
  Trophy,
  XCircle,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { chapters, totalQuestionCount, type Chapter, type Question } from "@/data/course";

type Mode = "theory" | "study" | "exam" | "wrong";

type ChapterScore = {
  lastScore: number;
  total: number;
  date: string;
};

type Progress = {
  answers: Record<string, string>;
  incorrect: string[];
  scores: Record<string, ChapterScore>;
  lastChapterId: number;
};

const STORAGE_KEY = "on-tap-phai-sinh-progress-v1";

const emptyProgress: Progress = {
  answers: {},
  incorrect: [],
  scores: {},
  lastChapterId: 1,
};

function loadProgress(): Progress {
  if (typeof window === "undefined") return emptyProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...emptyProgress, ...JSON.parse(raw) } : emptyProgress;
  } catch {
    return emptyProgress;
  }
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function getQuestionMap() {
  const map = new Map<string, { chapter: Chapter; question: Question }>();
  chapters.forEach((chapter) => {
    chapter.questions.forEach((question) => map.set(question.id, { chapter, question }));
  });
  return map;
}

export default function Home() {
  const [progress, setProgress] = useState<Progress>(emptyProgress);
  const [selectedChapterId, setSelectedChapterId] = useState(1);
  const [mode, setMode] = useState<Mode>("theory");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      const stored = loadProgress();
      setProgress(stored);
      setSelectedChapterId(stored.lastChapterId || 1);
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (hydrated && typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [hydrated, progress]);

  const questionMap = useMemo(() => getQuestionMap(), []);
  const selectedChapter = chapters.find((chapter) => chapter.id === selectedChapterId) ?? chapters[0];
  const wrongItems = progress.incorrect
    .map((id) => questionMap.get(id))
    .filter((item): item is { chapter: Chapter; question: Question } => Boolean(item));

  const answeredCount = Object.keys(progress.answers).length;
  const wrongCount = progress.incorrect.length;

  function selectChapter(chapterId: number) {
    setSelectedChapterId(chapterId);
    setMode("theory");
    setProgress((current) => ({ ...current, lastChapterId: chapterId }));
  }

  function storeAnswer(chapter: Chapter, question: Question, answer: string) {
    const isCorrect = answer === question.correctAnswer;
    setProgress((current) => {
      const incorrect = new Set(current.incorrect);
      if (isCorrect) incorrect.delete(question.id);
      else incorrect.add(question.id);

      return {
        ...current,
        answers: { ...current.answers, [question.id]: answer },
        incorrect: Array.from(incorrect),
        lastChapterId: chapter.id,
      };
    });
  }

  function saveExamScore(chapter: Chapter, score: number) {
    setProgress((current) => ({
      ...current,
      scores: {
        ...current.scores,
        [chapter.id]: {
          lastScore: score,
          total: chapter.questions.length,
          date: new Date().toISOString(),
        },
      },
      lastChapterId: chapter.id,
    }));
  }

  function resetProgress() {
    setProgress({ ...emptyProgress, lastChapterId: selectedChapterId });
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1f2723]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 lg:flex-row lg:px-6">
        <aside className="lg:sticky lg:top-5 lg:h-[calc(100vh-40px)] lg:w-80 lg:shrink-0">
          <section className="flex h-full flex-col rounded-lg border border-[#d9d1c3] bg-white">
            <div className="border-b border-[#e6dfd3] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0f766e] text-white">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#6d6559]">Ôn tập</p>
                  <h1 className="text-xl font-bold">Phái sinh tài chính</h1>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
                <Metric label="Câu" value={totalQuestionCount} />
                <Metric label="Đã làm" value={answeredCount} />
                <Metric label="Câu sai" value={wrongCount} tone={wrongCount ? "danger" : "normal"} />
              </div>
            </div>

            <nav className="flex-1 overflow-auto p-2">
              {chapters.map((chapter) => {
                const done = chapter.questions.filter((question) => progress.answers[question.id]).length;
                const score = progress.scores[chapter.id];
                const isActive = chapter.id === selectedChapter.id;
                return (
                  <button
                    key={chapter.id}
                    onClick={() => selectChapter(chapter.id)}
                    className={cx(
                      "mb-1 w-full rounded-md px-3 py-2 text-left transition",
                      isActive
                        ? "bg-[#0f766e] text-white"
                        : "text-[#343b36] hover:bg-[#f1ede4]"
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold">Chương {chapter.id}</span>
                      <span className={cx("text-xs", isActive ? "text-[#d8fff7]" : "text-[#7a7266]")}>
                        {done}/{chapter.questions.length}
                      </span>
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-sm">{chapter.title}</p>
                    {score ? (
                      <p className={cx("mt-1 text-xs", isActive ? "text-[#d8fff7]" : "text-[#7a7266]")}>
                        Thi thử: {score.lastScore}/{score.total}
                      </p>
                    ) : null}
                  </button>
                );
              })}
            </nav>

            <div className="border-t border-[#e6dfd3] p-3">
              <button
                onClick={() => setMode("wrong")}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-[#d9d1c3] px-3 py-2 text-sm font-semibold hover:bg-[#f1ede4]"
              >
                <Target size={16} />
                Ôn câu sai
              </button>
            </div>
          </section>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="rounded-lg border border-[#d9d1c3] bg-white p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#0f766e]">Chương {selectedChapter.id}</p>
                <h2 className="mt-1 text-2xl font-bold tracking-normal lg:text-3xl">{selectedChapter.title}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#625b51]">{selectedChapter.summary}</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-sm lg:w-72">
                <Metric label="Câu hỏi" value={selectedChapter.questions.length} />
                <Metric
                  label="Đã làm"
                  value={selectedChapter.questions.filter((q) => progress.answers[q.id]).length}
                />
                <Metric label="Điểm" value={progress.scores[selectedChapter.id]?.lastScore ?? "-"} />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <ModeButton active={mode === "theory"} onClick={() => setMode("theory")} icon={<BookOpen size={17} />}>
                Lý thuyết
              </ModeButton>
              <ModeButton active={mode === "study"} onClick={() => setMode("study")} icon={<Brain size={17} />}>
                Luyện từng câu
              </ModeButton>
              <ModeButton active={mode === "exam"} onClick={() => setMode("exam")} icon={<ClipboardList size={17} />}>
                Thi thử
              </ModeButton>
              <ModeButton active={mode === "wrong"} onClick={() => setMode("wrong")} icon={<Target size={17} />}>
                Ôn câu sai
              </ModeButton>
              <button
                onClick={resetProgress}
                className="ml-auto flex items-center gap-2 rounded-md border border-[#d9d1c3] px-3 py-2 text-sm font-semibold text-[#625b51] hover:bg-[#f1ede4]"
              >
                <RotateCcw size={16} />
                Xóa tiến độ
              </button>
            </div>
          </header>

          <div className="mt-5">
            {mode === "theory" ? <TheoryPanel chapter={selectedChapter} /> : null}
            {mode === "study" ? (
              <StudyPanel key={selectedChapter.id} chapter={selectedChapter} progress={progress} onAnswer={storeAnswer} />
            ) : null}
            {mode === "exam" ? (
              <ExamPanel key={selectedChapter.id} chapter={selectedChapter} onSubmitScore={saveExamScore} />
            ) : null}
            {mode === "wrong" ? (
              <WrongPanel items={wrongItems} progress={progress} onAnswer={storeAnswer} />
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}

function Metric({ label, value, tone = "normal" }: { label: string; value: number | string; tone?: "normal" | "danger" }) {
  return (
    <div className="rounded-md border border-[#e6dfd3] bg-[#fbfaf7] px-2 py-2">
      <div className={cx("text-lg font-bold", tone === "danger" ? "text-[#b42318]" : "text-[#1f2723]")}>{value}</div>
      <div className="text-xs text-[#746b5d]">{label}</div>
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition",
        active ? "bg-[#1f2723] text-white" : "border border-[#d9d1c3] bg-white text-[#343b36] hover:bg-[#f1ede4]"
      )}
    >
      {icon}
      {children}
    </button>
  );
}

function TheoryPanel({ chapter }: { chapter: Chapter }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
      <section className="rounded-lg border border-[#d9d1c3] bg-white p-5">
        <div className="flex items-center gap-2">
          <BookOpen className="text-[#0f766e]" size={22} />
          <h3 className="text-xl font-bold">Lý thuyết chương {chapter.id}</h3>
        </div>
        <div className="mt-5 space-y-5">
          {chapter.theory.map((section) => (
            <article key={section.heading} className="border-l-4 border-[#0f766e] pl-4">
              <h4 className="font-bold">{section.heading}</h4>
              <p className="mt-2 leading-7 text-[#504940]">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="rounded-lg border border-[#d9d1c3] bg-white p-5">
        <div className="flex items-center gap-2">
          <ListChecks className="text-[#b7791f]" size={20} />
          <h3 className="font-bold">Thuật ngữ cần thuộc</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {chapter.keyTerms.map((term) => (
            <span key={term} className="rounded-md bg-[#fff4d6] px-2.5 py-1 text-sm font-medium text-[#6f4e00]">
              {term}
            </span>
          ))}
        </div>
      </aside>
    </div>
  );
}

function StudyPanel({
  chapter,
  progress,
  onAnswer,
}: {
  chapter: Chapter;
  progress: Progress;
  onAnswer: (chapter: Chapter, question: Question, answer: string) => void;
}) {
  const [index, setIndex] = useState(0);
  const question = chapter.questions[index] ?? chapter.questions[0];
  const selected = progress.answers[question.id];

  return (
    <section className="rounded-lg border border-[#d9d1c3] bg-white p-5">
      <QuestionHeader chapter={chapter} question={question} index={index} />
      <AnswerOptions
        question={question}
        selected={selected}
        reveal
        onSelect={(answer) => onAnswer(chapter, question, answer)}
      />
      {selected ? <Explanation question={question} selected={selected} /> : null}
      <QuestionNav
        index={index}
        total={chapter.questions.length}
        onPrev={() => setIndex((value) => Math.max(0, value - 1))}
        onNext={() => setIndex((value) => Math.min(chapter.questions.length - 1, value + 1))}
      />
    </section>
  );
}

function ExamPanel({ chapter, onSubmitScore }: { chapter: Chapter; onSubmitScore: (chapter: Chapter, score: number) => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = chapter.questions.reduce(
    (total, question) => total + (answers[question.id] === question.correctAnswer ? 1 : 0),
    0
  );

  function submit() {
    setSubmitted(true);
    onSubmitScore(chapter, score);
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 rounded-lg border border-[#d9d1c3] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="text-[#b7791f]" size={22} />
          <h3 className="text-xl font-bold">Thi thử chương {chapter.id}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {submitted ? (
            <span className="rounded-md bg-[#e6f4ef] px-3 py-2 text-sm font-bold text-[#0f766e]">
              Điểm: {score}/{chapter.questions.length}
            </span>
          ) : null}
          <button
            onClick={submit}
            className="rounded-md bg-[#0f766e] px-4 py-2 text-sm font-bold text-white hover:bg-[#115e59]"
          >
            Nộp bài
          </button>
        </div>
      </div>

      {chapter.questions.map((question, index) => (
        <article key={question.id} className="rounded-lg border border-[#d9d1c3] bg-white p-5">
          <QuestionHeader chapter={chapter} question={question} index={index} compact />
          <AnswerOptions
            question={question}
            selected={answers[question.id]}
            reveal={submitted}
            onSelect={(answer) => {
              if (!submitted) setAnswers((current) => ({ ...current, [question.id]: answer }));
            }}
          />
          {submitted ? <Explanation question={question} selected={answers[question.id]} /> : null}
        </article>
      ))}
    </section>
  );
}

function WrongPanel({
  items,
  progress,
  onAnswer,
}: {
  items: Array<{ chapter: Chapter; question: Question }>;
  progress: Progress;
  onAnswer: (chapter: Chapter, question: Question, answer: string) => void;
}) {
  if (!items.length) {
    return (
      <section className="rounded-lg border border-[#d9d1c3] bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto text-[#0f766e]" size={42} />
        <h3 className="mt-3 text-xl font-bold">Chưa có câu sai</h3>
        <p className="mt-2 text-[#625b51]">Khi làm sai, câu đó sẽ xuất hiện ở đây để ôn lại.</p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      {items.map(({ chapter, question }, index) => (
        <article key={question.id} className="rounded-lg border border-[#d9d1c3] bg-white p-5">
          <p className="mb-2 text-sm font-semibold text-[#0f766e]">Chương {chapter.id}: {chapter.title}</p>
          <QuestionHeader chapter={chapter} question={question} index={index} compact />
          <AnswerOptions
            question={question}
            selected={progress.answers[question.id]}
            reveal
            onSelect={(answer) => onAnswer(chapter, question, answer)}
          />
          <Explanation question={question} selected={progress.answers[question.id]} />
        </article>
      ))}
    </section>
  );
}

function QuestionHeader({
  chapter,
  question,
  index,
  compact = false,
}: {
  chapter: Chapter;
  question: Question;
  index: number;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mb-4" : "mb-5"}>
      <div className="flex flex-wrap items-center gap-2 text-sm text-[#746b5d]">
        <span className="font-semibold">Chương {chapter.id}</span>
        <span>•</span>
        <span>Câu {question.number}</span>
        <span>•</span>
        <span>Thứ tự {index + 1}</span>
      </div>
      <h3 className={cx("mt-2 font-bold leading-7", compact ? "text-lg" : "text-xl")}>{question.prompt}</h3>
    </div>
  );
}

function AnswerOptions({
  question,
  selected,
  reveal,
  onSelect,
}: {
  question: Question;
  selected?: string;
  reveal: boolean;
  onSelect: (answer: string) => void;
}) {
  return (
    <div className="grid gap-2">
      {question.options.map((option) => {
        const isSelected = selected === option.id;
        const isCorrect = option.id === question.correctAnswer;
        const stateClass =
          reveal && isCorrect
            ? "border-[#0f766e] bg-[#e6f4ef]"
            : reveal && isSelected && !isCorrect
              ? "border-[#d92d20] bg-[#fff1f0]"
              : isSelected
                ? "border-[#b7791f] bg-[#fff7e6]"
                : "border-[#e2d9ca] bg-white hover:bg-[#fbfaf7]";

        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={cx("flex min-h-11 items-start gap-3 rounded-md border px-3 py-2 text-left", stateClass)}
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
              {option.id}
            </span>
            <span className="leading-6">{option.text}</span>
            <span className="ml-auto mt-0.5 shrink-0">
              {reveal && isCorrect ? <CheckCircle2 className="text-[#0f766e]" size={18} /> : null}
              {reveal && isSelected && !isCorrect ? <XCircle className="text-[#d92d20]" size={18} /> : null}
              {!reveal && isSelected ? <Circle className="text-[#b7791f]" size={18} /> : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function Explanation({ question, selected }: { question: Question; selected?: string }) {
  const isCorrect = selected === question.correctAnswer;
  return (
    <div
      className={cx(
        "mt-4 rounded-md border p-4",
        isCorrect ? "border-[#9bd3c5] bg-[#f0fbf7]" : "border-[#f2b8b5] bg-[#fff7f6]"
      )}
    >
      <div className="flex items-center gap-2 font-bold">
        {isCorrect ? <CheckCircle2 className="text-[#0f766e]" size={19} /> : <XCircle className="text-[#d92d20]" size={19} />}
        {isCorrect ? "Đúng" : "Cần xem lại"}
      </div>
      <p className="mt-2 leading-7 text-[#4d463d]">{question.explanation}</p>
      <details className="mt-3 text-sm text-[#625b51]">
        <summary className="cursor-pointer font-semibold">Xem câu gốc tiếng Anh</summary>
        <p className="mt-2 leading-6">{question.sourcePrompt}</p>
      </details>
    </div>
  );
}

function QuestionNav({
  index,
  total,
  onPrev,
  onNext,
}: {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mt-5 flex items-center justify-between">
      <button
        onClick={onPrev}
        disabled={index === 0}
        className="rounded-md border border-[#d9d1c3] px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40"
      >
        Câu trước
      </button>
      <span className="text-sm text-[#746b5d]">
        {index + 1}/{total}
      </span>
      <button
        onClick={onNext}
        disabled={index === total - 1}
        className="rounded-md bg-[#1f2723] px-4 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        Câu sau
      </button>
    </div>
  );
}
