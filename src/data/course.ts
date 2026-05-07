export type Option = {
  id: string;
  text: string;
  sourceText?: string;
};

export type Question = {
  id: string;
  number: string;
  prompt: string;
  sourcePrompt?: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
};

export type TheorySection = {
  heading: string;
  body: string;
};

export type Chapter = {
  id: number;
  title: string;
  sourceTitle: string;
  summary: string;
  keyTerms: string[];
  theory: TheorySection[];
  questions: Question[];
};

export const chapters: Chapter[] = [
  {
    "id": 1,
    "title": "Giới thiệu về công cụ phái sinh",
    "sourceTitle": "CHAPTER 1:  INTRODUCTION",
    "summary": "Chương 1 tập trung vào giới thiệu về công cụ phái sinh. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Công cụ phái sinh",
      "Tài sản cơ sở",
      "Thị trường giao ngay",
      "Call/Put",
      "Hedging",
      "Arbitrage"
    ],
    "theory": [
      {
        "heading": "Bản chất của phái sinh",
        "body": "Công cụ phái sinh là hợp đồng có giá trị ăn theo một tài sản hoặc biến số khác như cổ phiếu, trái phiếu, hàng hóa, tỷ giá hoặc lãi suất. Khi tài sản cơ sở thay đổi, giá trị hợp đồng phái sinh cũng thay đổi."
      },
      {
        "heading": "Mục đích sử dụng",
        "body": "Phái sinh thường dùng để phòng ngừa rủi ro, đầu cơ hoặc khai thác chênh lệch giá. Người phòng ngừa rủi ro muốn giảm biến động bất lợi; người đầu cơ chấp nhận rủi ro để kiếm lời; người arbitrage tìm cơ hội mua rẻ bán đắt."
      },
      {
        "heading": "Quyền và nghĩa vụ",
        "body": "Option là quyền, không phải nghĩa vụ đối với người mua. Forward và futures là nghĩa vụ mua hoặc bán trong tương lai. Đây là khác biệt nền tảng nhất khi làm bài."
      }
    ],
    "questions": [
      {
        "id": "c1-q1",
        "number": "1",
        "prompt": "Tổng giá trị thị trường của các hợp đồng phái sinh trên toàn thế giới",
        "sourcePrompt": "The market value of the derivatives contracts worldwide totals",
        "options": [
          {
            "id": "A",
            "text": "ít hơn một nghìn tỷ đô la",
            "sourceText": "less than a trillion dollars"
          },
          {
            "id": "B",
            "text": "trong hàng trăm nghìn tỷ đô la",
            "sourceText": "in the hundreds of trillion dollars"
          },
          {
            "id": "C",
            "text": "hơn một nghìn tỷ đô la nhưng ít hơn một trăm nghìn tỷ",
            "sourceText": "over a trillion dollars but less than a hundred trillion"
          },
          {
            "id": "D",
            "text": "hơn triệu đô la",
            "sourceText": "over quadrillion dollars"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: hơn một nghìn tỷ đô la nhưng ít hơn một trăm nghìn tỷ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q2",
        "number": "2",
        "prompt": "Thị trường tiền mặt còn được gọi là",
        "sourcePrompt": "Cash markets are also known as",
        "options": [
          {
            "id": "A",
            "text": "thị trường đầu cơ",
            "sourceText": "speculative markets"
          },
          {
            "id": "B",
            "text": "thị trường giao ngay",
            "sourceText": "spot markets"
          },
          {
            "id": "C",
            "text": "thị trường phái sinh",
            "sourceText": "derivative markets"
          },
          {
            "id": "D",
            "text": "thị trường đô la",
            "sourceText": "dollar markets"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: thị trường giao ngay. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q3",
        "number": "3",
        "prompt": "Quyền chọn mua mang lại cho người nắm giữ",
        "sourcePrompt": "A call option gives the holder",
        "options": [
          {
            "id": "A",
            "text": "quyền mua thứ gì đó",
            "sourceText": "the right to buy something"
          },
          {
            "id": "B",
            "text": "quyền bán một cái gì đó",
            "sourceText": "the right to sell something"
          },
          {
            "id": "C",
            "text": "nghĩa vụ phải mua một cái gì đó",
            "sourceText": "the obligation to buy something"
          },
          {
            "id": "D",
            "text": "nghĩa vụ phải bán một cái gì đó",
            "sourceText": "the obligation to sell something"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: quyền mua thứ gì đó. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q4",
        "number": "4",
        "prompt": "Công cụ nào sau đây là hợp đồng nhưng không phải là chứng khoán",
        "sourcePrompt": "Which of the following instruments are contracts but are not securities",
        "options": [
          {
            "id": "A",
            "text": "cổ phiếu",
            "sourceText": "stocks"
          },
          {
            "id": "B",
            "text": "quyền chọn",
            "sourceText": "options"
          },
          {
            "id": "C",
            "text": "hoán đổi",
            "sourceText": "swaps"
          },
          {
            "id": "D",
            "text": "A và B",
            "sourceText": "a and b"
          },
          {
            "id": "E",
            "text": "b và c",
            "sourceText": "b and c"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: b và c. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q5",
        "number": "5",
        "prompt": "Mối quan hệ tích cực giữa rủi ro và lợi nhuận được gọi là",
        "sourcePrompt": "The positive relationship between risk and return is called",
        "options": [
          {
            "id": "A",
            "text": "lợi nhuận kỳ vọng",
            "sourceText": "expected return"
          },
          {
            "id": "B",
            "text": "Hiệu quả thị trường",
            "sourceText": "market efficiency"
          },
          {
            "id": "C",
            "text": "quy luật một giá",
            "sourceText": "the law of one price"
          },
          {
            "id": "D",
            "text": "chênh lệch giá",
            "sourceText": "arbitrage"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có cái nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q6",
        "number": "6",
        "prompt": "Giao dịch trong đó nhà đầu tư nắm giữ vị thế trên thị trường giao ngay và bán hợp đồng tương lai hoặc thực hiện quyền chọn mua là",
        "sourcePrompt": "A transaction in which an investor holds a position in the spot market and sells a futures contract or writes a call is",
        "options": [
          {
            "id": "A",
            "text": "một canh bạc",
            "sourceText": "a gamble"
          },
          {
            "id": "B",
            "text": "một vị trí đầu cơ",
            "sourceText": "a speculative position"
          },
          {
            "id": "C",
            "text": "một phòng ngừa rủi ro",
            "sourceText": "a hedge"
          },
          {
            "id": "D",
            "text": "giao dịch không rủi ro",
            "sourceText": "a risk-free transaction"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một phòng ngừa rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q7",
        "number": "7",
        "prompt": "Ưu điểm nào sau đây của chứng khoán phái sinh?",
        "sourcePrompt": "Which of the following are advantages of derivatives?",
        "options": [
          {
            "id": "A",
            "text": "chi phí giao dịch thấp hơn so với chứng khoán và hàng hóa",
            "sourceText": "lower transaction costs than securities and commodities"
          },
          {
            "id": "B",
            "text": "tiết lộ thông tin về giá dự kiến và biến động",
            "sourceText": "reveal information about expected prices and volatility"
          },
          {
            "id": "C",
            "text": "giúp kiểm soát rủi ro",
            "sourceText": "help control risk"
          },
          {
            "id": "D",
            "text": "làm cho giá giao ngay gần với giá trị thực của chúng",
            "sourceText": "make spot prices stay closer to their true values"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: tất cả những điều trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q8",
        "number": "8",
        "prompt": "Hợp đồng kỳ hạn có đặc điểm nào sau đây?",
        "sourcePrompt": "A forward contract has which of the following characteristics?",
        "options": [
          {
            "id": "A",
            "text": "có một người mua và một người bán",
            "sourceText": "has a buyer and a seller"
          },
          {
            "id": "B",
            "text": "giao dịch trên một sàn giao dịch có tổ chức",
            "sourceText": "trades on an organized exchange"
          },
          {
            "id": "C",
            "text": "có một khoản thanh toán hàng ngày",
            "sourceText": "has a daily settlement"
          },
          {
            "id": "D",
            "text": "trao quyền nhưng không có nghĩa vụ phải mua",
            "sourceText": "gives the right but not the obligation to buy"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: có một người mua và một người bán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q9",
        "number": "9",
        "prompt": "Quyền chọn trên hợp đồng tương lai còn được gọi là",
        "sourcePrompt": "Options on futures are also known as",
        "options": [
          {
            "id": "A",
            "text": "quyền chọn giao ngay",
            "sourceText": "spot options"
          },
          {
            "id": "B",
            "text": "quyền chọn hàng hóa",
            "sourceText": "commodity options"
          },
          {
            "id": "C",
            "text": "quyền chọn trao đổi",
            "sourceText": "exchange options"
          },
          {
            "id": "D",
            "text": "quyền chọn bảo mật",
            "sourceText": "security options"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quyền chọn hàng hóa. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q10",
        "number": "10",
        "prompt": "Một thị trường trong đó giá cả bằng với giá trị kinh tế thực",
        "sourcePrompt": "A market in which the price equals the true economic value",
        "options": [
          {
            "id": "A",
            "text": "không có rủi ro",
            "sourceText": "is risk-free"
          },
          {
            "id": "B",
            "text": "có lợi nhuận kỳ vọng cao",
            "sourceText": "has high expected returns"
          },
          {
            "id": "C",
            "text": "được tổ chức",
            "sourceText": "is organized"
          },
          {
            "id": "D",
            "text": "là hiệu quả",
            "sourceText": "is efficient"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: là hiệu quả. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q11",
        "number": "11",
        "prompt": "Giao dịch nào sau đây được diễn ra trên sàn giao dịch (thị trường tập trung)",
        "sourcePrompt": "Which of the following trades on organized exchanges?",
        "options": [
          {
            "id": "A",
            "text": "Vốn hoá",
            "sourceText": "caps"
          },
          {
            "id": "B",
            "text": "Hợp đồng kỳ hạn",
            "sourceText": "forwards"
          },
          {
            "id": "C",
            "text": "hợp đồng quyền chọn",
            "sourceText": "options"
          },
          {
            "id": "D",
            "text": "hợp đồng hoán đổi",
            "sourceText": "swaps"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: hợp đồng quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q12",
        "number": "12",
        "prompt": "Thị trường nào sau đây được cho là cung cấp dịch vụ hình thành giá? hình thành giá:là một quy trình chung, dù bằng một cách rõ ràng hay từ suy luận, để thiết lập mức giá giao ngay hoặc giá hợp lý của một tài sản, chứng khoán, hàng hóa hay tiền tệ",
        "sourcePrompt": "Which of the following markets is/are said to provide price discovery?",
        "options": [
          {
            "id": "A",
            "text": "Hợp đồng giao sau",
            "sourceText": "futures"
          },
          {
            "id": "B",
            "text": "Hợp đồng kỳ hạn",
            "sourceText": "forwards"
          },
          {
            "id": "C",
            "text": "Hợp đồng quyền chọn",
            "sourceText": "options"
          },
          {
            "id": "D",
            "text": "A và B",
            "sourceText": "a and b"
          },
          {
            "id": "E",
            "text": "b và c",
            "sourceText": "b and c"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: A và B. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q13",
        "number": "13",
        "prompt": "Những nhà đầu tư không xem xét rủi ro trong các quyết định của mình được cho là",
        "sourcePrompt": "Investors who do not consider risk in their decisions are said to be",
        "options": [
          {
            "id": "A",
            "text": "đầu cơ",
            "sourceText": "speculating"
          },
          {
            "id": "B",
            "text": "bán khống",
            "sourceText": "short selling"
          },
          {
            "id": "C",
            "text": "rủi ro trung lập (risk neutral)",
            "sourceText": "risk neutral"
          },
          {
            "id": "D",
            "text": "người giao dịch",
            "sourceText": "traders"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: rủi ro trung lập (risk neutral). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q14",
        "number": "14",
        "prompt": "Phát biểu nào sau đây không đúng về luật một giá",
        "sourcePrompt": "Which of the following statements is not true about the law of one price",
        "options": [
          {
            "id": "A",
            "text": "các nhà đầu tư thích nhiều của cải hơn",
            "sourceText": "investors prefer more wealth to less"
          },
          {
            "id": "B",
            "text": "các khoản đầu tư mang lại lợi nhuận như nhau ở tất cả các tiểu bang phải trả lãi suất phi rủi ro",
            "sourceText": "investments that offer the same return in all states must pay the risk-free rate"
          },
          {
            "id": "C",
            "text": "nếu hai cơ hội đầu tư mang lại kết quả tương đương, chúng phải có cùng mức giá",
            "sourceText": "if two investment opportunities offer equivalent outcomes, they must have the same price"
          },
          {
            "id": "D",
            "text": "nhà đầu tư trung lập với rủi ro (risk neutral)",
            "sourceText": "investors are risk neutral"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nhà đầu tư trung lập với rủi ro (risk neutral). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q15",
        "number": "15",
        "prompt": "Hợp đồng nào sau đây bắt buộc người mua phải mua hoặc bán một thứ gì đó vào ngày đáo hạn?",
        "sourcePrompt": "Which of the following contracts obligates a buyer to buy or sell something at a later date?",
        "options": [
          {
            "id": "A",
            "text": "quyền mua",
            "sourceText": "call"
          },
          {
            "id": "B",
            "text": "hợp đồng giao sau",
            "sourceText": "futures"
          },
          {
            "id": "C",
            "text": "vốn hoá",
            "sourceText": "cap"
          },
          {
            "id": "D",
            "text": "quyền bán",
            "sourceText": "put"
          },
          {
            "id": "E",
            "text": "hợp đồng hoán đổi",
            "sourceText": "swaption"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hợp đồng giao sau. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q16",
        "number": "16",
        "prompt": "Quá trình tạo ra các sản phẩm tài chính mới đôi khi được gọi là",
        "sourcePrompt": "The process of creating new financial products is sometimes referred to as",
        "options": [
          {
            "id": "A",
            "text": "biên giới tài chính (financial frontiering)",
            "sourceText": "financial frontiering"
          },
          {
            "id": "B",
            "text": "kỹ thuật tài chính",
            "sourceText": "financial engineering"
          },
          {
            "id": "C",
            "text": "mô hình tài chính",
            "sourceText": "financial modeling"
          },
          {
            "id": "D",
            "text": "đổi mới tài chính",
            "sourceText": "financial innovation"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: kỹ thuật tài chính. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q17",
        "number": "17",
        "prompt": "Quá trình bán tài sản vay mượn với ý định mua lại vào ngày đáo hạn với giá thấp hơn được gọi là",
        "sourcePrompt": "The process of selling borrowed assets with the intention of buying them back at a later date and lower price is referred to as",
        "options": [
          {
            "id": "A",
            "text": "longing a asset (mua tài sản)",
            "sourceText": "longing an asset"
          },
          {
            "id": "B",
            "text": "asset flipping (mua tài sản có sẵn,",
            "sourceText": "asset flipping"
          },
          {
            "id": "C",
            "text": "bán khống",
            "sourceText": "shorting"
          },
          {
            "id": "D",
            "text": "kinh doanh chênh lệch giá với dự đoán giá giảm",
            "sourceText": "anticipated price fall arbitrage"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: bán khống. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q18",
        "number": "18",
        "prompt": "Trong một trong các loại hợp đồng sau đây giữa người bán và người mua, người bán đồng ý bán một tài sản cụ thể cho người mua vào ngày hôm nay và sau đó mua lại tài sản đó vào một thời điểm xác định trong tương lai với mức giá đã thỏa thuận trong tương lai.",
        "sourcePrompt": "In which one of the following types of contract between a seller and a buyer does the seller agree to sell a specified asset to the buyer today and then buy it back at a specified time in the future at an agreed future price.",
        "options": [
          {
            "id": "A",
            "text": "thỏa thuận mua lại",
            "sourceText": "repurchase agreement"
          },
          {
            "id": "B",
            "text": "bán khống",
            "sourceText": "short selling"
          },
          {
            "id": "C",
            "text": "hợp đồng hoán đổi",
            "sourceText": "swap"
          },
          {
            "id": "D",
            "text": "quyền chọn mua",
            "sourceText": "call"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: thỏa thuận mua lại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q19",
        "number": "19",
        "prompt": "Lợi nhuận kỳ vọng trừ lãi suất phi rủi ro được gọi là",
        "sourcePrompt": "The expected return minus the risk-free rate is called",
        "options": [
          {
            "id": "A",
            "text": "phần bù rủi ro",
            "sourceText": "the risk premium"
          },
          {
            "id": "B",
            "text": "tỷ lệ phần trăm lợi nhuận",
            "sourceText": "the percentage return"
          },
          {
            "id": "C",
            "text": "the asset’s beta",
            "sourceText": "the asset’s beta"
          },
          {
            "id": "D",
            "text": "phần bù lợi nhuận",
            "sourceText": "the return premium"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: phần bù rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q20",
        "number": "20",
        "prompt": "Khi luật một giá bị vi phạm trong đó cùng một hàng hóa được bán với hai mức giá khác nhau, cơ hội cho loại giao dịch nào được tạo ra?",
        "sourcePrompt": "When the law of one price is violated in that the same good is selling for two different prices, an opportunity for what type of transaction is created?",
        "options": [
          {
            "id": "A",
            "text": "giao dịch trở lại trạng thái cân bằng",
            "sourceText": "return-to-equilibrium transaction"
          },
          {
            "id": "B",
            "text": "giao dịch giả định rủi ro",
            "sourceText": "risk-assuming transaction"
          },
          {
            "id": "C",
            "text": "giao dịch đầu cơ",
            "sourceText": "speculative transaction"
          },
          {
            "id": "D",
            "text": "giao dịch chênh lệch giá",
            "sourceText": "arbitrage transaction"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giao dịch chênh lệch giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 2,
    "title": "Cấu trúc thị trường quyền chọn",
    "sourceTitle": "CHAPTER 2:  STRUCTURE OF OPTIONS MARKETS",
    "summary": "Chương 2 tập trung vào cấu trúc thị trường quyền chọn. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "OTC và sở giao dịch",
      "Premium",
      "Strike price",
      "In-the-money",
      "Market maker",
      "Clearinghouse",
      "Margin"
    ],
    "theory": [
      {
        "heading": "Thị trường có tổ chức và OTC",
        "body": "Sở giao dịch có tổ chức dùng hợp đồng chuẩn hóa, có quy định rõ và có clearinghouse bảo đảm thực hiện. OTC là thỏa thuận riêng, linh hoạt và tùy chỉnh hơn nhưng rủi ro đối tác cao hơn."
      },
      {
        "heading": "Giá option và giá thực hiện",
        "body": "Premium là số tiền trả để mua option. Strike price hoặc exercise price là mức giá dùng khi thực hiện quyền. Đề thường gài bằng cách cho cả premium và strike."
      },
      {
        "heading": "Thanh khoản, ký quỹ và thanh toán",
        "body": "Market maker báo giá mua/bán để tạo thanh khoản. Clearinghouse đứng giữa bảo đảm nghĩa vụ. Margin call xảy ra khi tài khoản ký quỹ xuống dưới maintenance margin và phải nộp thêm để quay lại initial margin."
      }
    ],
    "questions": [
      {
        "id": "c2-q1",
        "number": "1",
        "prompt": "Xác định phát biểu đúng về các sàn giao dịch phái sinh lớn nhất.",
        "sourcePrompt": "Identify the true statement regarding the largest derivatives exchanges.",
        "options": [
          {
            "id": "A",
            "text": "CME Group là một trong năm sàn giao dịch phái sinh lớn nhất, dựa trên khối lượng",
            "sourceText": "CME Group is one of the top five largest derivatives exchange, based on volume"
          },
          {
            "id": "B",
            "text": "Intercontinental Exchange is one of the top five largest derivatives exchange, based on volume",
            "sourceText": "Intercontinental Exchange is one of the top five largest derivatives exchange, based on volume"
          },
          {
            "id": "C",
            "text": "Khối lượng giao dịch vượt quá một tỷ trên mỗi trong số năm sàn giao dịch phái sinh hàng đầu",
            "sourceText": "The volume of trading exceeded one billion on each of the top five derivatives exchanges"
          },
          {
            "id": "D",
            "text": "Trong số 20 sàn giao dịch phái sinh hàng đầu, một số châu lục khác nhau được đại diện",
            "sourceText": "Among the top 20 derivatives exchanges, several different continents are represented"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: tất cả những điều trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q2",
        "number": "2",
        "prompt": "Quyền chọn mua có giá 2 đô la với 1 cổ phiếu có giá 30 đô la và giá thực hiện là 35 đô la cho phép người nắm giữ mua cổ phiếu với giá",
        "sourcePrompt": "A call option priced at $2 with a stock price of $30 and an exercise price of $35 allows the holder to buy the stock at",
        "options": [
          {
            "id": "A",
            "text": "$2",
            "sourceText": "$2"
          },
          {
            "id": "B",
            "text": "$32",
            "sourceText": "$32"
          },
          {
            "id": "C",
            "text": "$33",
            "sourceText": "$33"
          },
          {
            "id": "D",
            "text": "$35",
            "sourceText": "$35"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $35. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q3",
        "number": "3",
        "prompt": "Một quyền chọn bán trong đó giá cổ phiếu là 60 đô la và giá thực hiện là 65 đô la được cho là",
        "sourcePrompt": "A put option in which the stock price is $60 and the exercise price is $65 is said to be",
        "options": [
          {
            "id": "A",
            "text": "trên giá",
            "sourceText": "in-the-money"
          },
          {
            "id": "B",
            "text": "kiệt giá",
            "sourceText": "out-of-the-money"
          },
          {
            "id": "C",
            "text": "bằng giá",
            "sourceText": "at-the-money"
          },
          {
            "id": "D",
            "text": "có thể thực hiện được",
            "sourceText": "exercisable"
          },
          {
            "id": "E",
            "text": "không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: trên giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q4",
        "number": "4",
        "prompt": "Thị trường quyền chọn có tổ chức khác với thị trường quyền chọn mua tự do vì tất cả các lý do sau ngoại trừ",
        "sourcePrompt": "Organized options markets are different from over-the-counter options markets for all of the following reasons except",
        "options": [
          {
            "id": "A",
            "text": "điều khoản thực hiện",
            "sourceText": "exercise terms"
          },
          {
            "id": "B",
            "text": "sàn giao dịch vật lý",
            "sourceText": "physical trading floor"
          },
          {
            "id": "C",
            "text": "Quy định",
            "sourceText": "regulation"
          },
          {
            "id": "D",
            "text": "hợp đồng chuẩn hóa",
            "sourceText": "standardized contracts"
          },
          {
            "id": "E",
            "text": "rủi ro tín dụng",
            "sourceText": "credit risk"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: điều khoản thực hiện. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q5",
        "number": "5",
        "prompt": "Số lượng quyền chọn có được khi một hợp đồng được mua trên một sàn giao dịch là",
        "sourcePrompt": "The number of options acquired when one contract is purchased on an exchange is",
        "options": [
          {
            "id": "A",
            "text": "1",
            "sourceText": "1"
          },
          {
            "id": "B",
            "text": "5",
            "sourceText": "5"
          },
          {
            "id": "C",
            "text": "100",
            "sourceText": "100"
          },
          {
            "id": "D",
            "text": "500",
            "sourceText": "500"
          },
          {
            "id": "E",
            "text": "8,000",
            "sourceText": "8,000"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 100. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q6",
        "number": "6",
        "prompt": "Ưu điểm của thị trường quyền chọn mua tự do bao gồm tất cả những điều sau ngoại trừ",
        "sourcePrompt": "The advantages of the over-the-counter options market include all of the following except",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng tùy chỉnh",
            "sourceText": "customized contracts"
          },
          {
            "id": "B",
            "text": "thực hiện riêng tư",
            "sourceText": "privately executed"
          },
          {
            "id": "C",
            "text": "tự do khỏi quy định của chính phủ",
            "sourceText": "freedom from government regulation"
          },
          {
            "id": "D",
            "text": "giá thấp hơn",
            "sourceText": "lower prices"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giá thấp hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q7",
        "number": "7",
        "prompt": "Điều nào sau đây không phải là một loại chi phí giao dịch trong giao dịch quyền chọn?",
        "sourcePrompt": "Which one of the following is not a type of transaction cost in options trading?",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch giá thầu",
            "sourceText": "the bid-ask spread"
          },
          {
            "id": "B",
            "text": "Ủy ban",
            "sourceText": "the commission"
          },
          {
            "id": "C",
            "text": "phí bù trừ",
            "sourceText": "clearing fees"
          },
          {
            "id": "D",
            "text": "chi phí để có được báo giá",
            "sourceText": "the cost of obtaining a quote"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: chi phí để có được báo giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q8",
        "number": "8",
        "prompt": "Nếu nhà tạo lập thị trường sẽ mua ở mức 4 và bán ở mức 4,50, chênh lệch giá mua-bán là",
        "sourcePrompt": "If the market maker will buy at 4 and sell at 4.50, the bid-ask spread is",
        "options": [
          {
            "id": "A",
            "text": "8.50",
            "sourceText": "8.50"
          },
          {
            "id": "B",
            "text": "4.25",
            "sourceText": "4.25"
          },
          {
            "id": "C",
            "text": "0.50",
            "sourceText": "0.50"
          },
          {
            "id": "D",
            "text": "4.00",
            "sourceText": "4.00"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 0.50. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q9",
        "number": "9",
        "prompt": "Loại nào sau đây là một loại lệnh hợp pháp trên sàn giao dịch?",
        "sourcePrompt": "Which of the following is a legitimate type of option order on the exchange?",
        "options": [
          {
            "id": "A",
            "text": "đơn đặt hàng",
            "sourceText": "purchase order"
          },
          {
            "id": "B",
            "text": "lệnh giới hạn",
            "sourceText": "limit order"
          },
          {
            "id": "C",
            "text": "lệnh thực hiện",
            "sourceText": "execution order"
          },
          {
            "id": "D",
            "text": "thứ tự sàn",
            "sourceText": "floor order"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lệnh giới hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q10",
        "number": "10",
        "prompt": "Giá thực hiện có thể được đặt ở bất kỳ mức mong muốn nào đối với từng loại quyền chọn sau ngoại trừ",
        "sourcePrompt": "The exercise price can be set at any desired level on each of the following types of options except",
        "options": [
          {
            "id": "A",
            "text": "tùy chọn FLEX",
            "sourceText": "FLEX options"
          },
          {
            "id": "B",
            "text": "quyền chọn vốn chủ sở hữu",
            "sourceText": "equity options"
          },
          {
            "id": "C",
            "text": "tùy chọn mua tự do",
            "sourceText": "over-the-counter options"
          },
          {
            "id": "D",
            "text": "all of the above",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quyền chọn vốn chủ sở hữu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q11",
        "number": "11",
        "prompt": "Nhà đầu tư sở hữu quyền chọn mua (call option) có thể đóng vị thế bằng bất kỳ loại giao dịch nào sau đây ngoại trừ",
        "sourcePrompt": "An investor who owns a call option can close out the position by any of the following types of transactions except",
        "options": [
          {
            "id": "A",
            "text": "tập thể dục",
            "sourceText": "exercise"
          },
          {
            "id": "B",
            "text": "bù đắp",
            "sourceText": "offset"
          },
          {
            "id": "C",
            "text": "hết tiền hết hạn",
            "sourceText": "expiring out-of-the-money"
          },
          {
            "id": "D",
            "text": "mua một quyền chọn bán",
            "sourceText": "buying a put"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: mua một quyền chọn bán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q12",
        "number": "12",
        "prompt": "Điều nào sau đây không phải là nhiệm vụ của các nhà tạo lập thị trường?",
        "sourcePrompt": "Which of the following is not the task of market makers?",
        "options": [
          {
            "id": "A",
            "text": "cung cấp thanh khoản",
            "sourceText": "provide liquidity"
          },
          {
            "id": "B",
            "text": "đề nghị mua và bán",
            "sourceText": "offer to buy and sell"
          },
          {
            "id": "C",
            "text": "minh bạch về giá",
            "sourceText": "provide price transparency"
          },
          {
            "id": "D",
            "text": "làm việc như một chuyên gia duy nhất",
            "sourceText": "work as a sole specialist"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: làm việc như một chuyên gia duy nhất. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q13",
        "number": "13",
        "prompt": "Giá quyền chọn còn được gọi là",
        "sourcePrompt": "The option price is also referred to as the",
        "options": [
          {
            "id": "A",
            "text": "giá thực hiện",
            "sourceText": "strike"
          },
          {
            "id": "B",
            "text": "Lan tràn",
            "sourceText": "spread"
          },
          {
            "id": "C",
            "text": "phần thưởng",
            "sourceText": "premium"
          },
          {
            "id": "D",
            "text": "phí",
            "sourceText": "fee"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: phần thưởng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q14",
        "number": "14",
        "prompt": "Điều khoản hợp đồng nào sau đây không được quy định bởi sàn giao dịch kỳ hạn?",
        "sourcePrompt": "Which of the following contract terms is not set by the futures exchange?",
        "options": [
          {
            "id": "A",
            "text": "ngày giao hàng có thể xảy ra",
            "sourceText": "the dates on which delivery can occur"
          },
          {
            "id": "B",
            "text": "những tháng hết hạn",
            "sourceText": "the expiration months"
          },
          {
            "id": "C",
            "text": "giá",
            "sourceText": "the price"
          },
          {
            "id": "D",
            "text": "các mặt hàng có thể giao",
            "sourceText": "the deliverable commodities"
          },
          {
            "id": "E",
            "text": "quy mô của hợp đồng",
            "sourceText": "the size of the contract"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q15",
        "number": "15",
        "prompt": "Nếu một nhà đầu tư thực hiện một công cụ phái sinh thanh toán bằng tiền mặt,",
        "sourcePrompt": "If an investor exercises a cash settled derivative,",
        "options": [
          {
            "id": "A",
            "text": "giao dịch chỉ yêu cầu một bút toán kế toán",
            "sourceText": "the transaction entails only a bookkeeping entry"
          },
          {
            "id": "B",
            "text": "phải mua công cụ cơ bản từ người viết",
            "sourceText": "must purchase the underlying instrument from the writer"
          },
          {
            "id": "C",
            "text": "ngay lập tức mua quyền chọn bán để bù đắp quyền chọn mua",
            "sourceText": "immediately buy a put option to offset the call option"
          },
          {
            "id": "D",
            "text": "ngay lập tức viết một tùy chọn cuộc gọi khác để bù đắp",
            "sourceText": "immediately write another call option to offset"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giao dịch chỉ yêu cầu một bút toán kế toán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q16",
        "number": "16",
        "prompt": "Tổ chức nào sau đây có cơ quan quản lý tối cao trong ngành công nghiệp kỳ hạn?",
        "sourcePrompt": "Which of the following organizations has the ultimate regulatory authority in the futures industry?",
        "options": [
          {
            "id": "A",
            "text": "Hiệp hội tương lai quốc gia",
            "sourceText": "National Futures Association"
          },
          {
            "id": "B",
            "text": "Ủy ban giao dịch hàng hóa tương lai",
            "sourceText": "Commodity Futures Trading Commission"
          },
          {
            "id": "C",
            "text": "Sở giao dịch hàng hóa",
            "sourceText": "Commodity Exchange Authority"
          },
          {
            "id": "D",
            "text": "Ủy ban Chứng khoán và Hối đoái",
            "sourceText": "Securities and Exchange Commission"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Ủy ban giao dịch hàng hóa tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q17",
        "number": "17",
        "prompt": "Sàn giao dịch phái sinh có khối lượng giao dịch lớn nhất là",
        "sourcePrompt": "The derivatives exchange with the largest trading volume is the",
        "options": [
          {
            "id": "A",
            "text": "Moscow Exchange",
            "sourceText": "Moscow Exchange"
          },
          {
            "id": "B",
            "text": "Nasdaq OMX",
            "sourceText": "Nasdaq OMX"
          },
          {
            "id": "C",
            "text": "CME Group",
            "sourceText": "CME Group"
          },
          {
            "id": "D",
            "text": "Pacific Stock Exchange",
            "sourceText": "Pacific Stock Exchange"
          },
          {
            "id": "E",
            "text": "National Stock Exchange of India",
            "sourceText": "National Stock Exchange of India"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: CME Group. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q18",
        "number": "18",
        "prompt": "Người viết được chọn để thực hiện quyền chọn được gọi là",
        "sourcePrompt": "A writer selected to exercise an option is said to be",
        "options": [
          {
            "id": "A",
            "text": "cận biên",
            "sourceText": "marginal"
          },
          {
            "id": "B",
            "text": "giao ngay",
            "sourceText": "assigned"
          },
          {
            "id": "C",
            "text": "hạn chế",
            "sourceText": "restricted"
          },
          {
            "id": "D",
            "text": "chỉ định",
            "sourceText": "designated"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giao ngay. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q19",
        "number": "19",
        "prompt": "ất cả những điều sau đây là hình thức của các tùy chọn ngoại trừ",
        "sourcePrompt": "All of the following are forms of options except",
        "options": [
          {
            "id": "A",
            "text": "trái phiếu chuyển đổi",
            "sourceText": "convertible bonds"
          },
          {
            "id": "B",
            "text": "Trái phiếu có thể gọi",
            "sourceText": "callable bonds"
          },
          {
            "id": "C",
            "text": "s trái phiếu có thể đặt",
            "sourceText": "puttable bonds"
          },
          {
            "id": "D",
            "text": "quỹ tương hỗ",
            "sourceText": "mutual funds"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: quỹ tương hỗ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q20",
        "number": "20",
        "prompt": "Nếu ký quỹ ban đầu là 5.000 đô la, ký quỹ duy trì là 3.500 đô la và số dư của bạn là 4.000 đô la, bạn phải gửi bao nhiêu?",
        "sourcePrompt": "If the initial margin is $5,000, the maintenance margin is $3,500 and your balance is $4,000, how much must you deposit?",
        "options": [
          {
            "id": "A",
            "text": "nothing",
            "sourceText": "nothing"
          },
          {
            "id": "B",
            "text": "$6,000",
            "sourceText": "$6,000"
          },
          {
            "id": "C",
            "text": "$1,500",
            "sourceText": "$1,500"
          },
          {
            "id": "D",
            "text": "$9,000",
            "sourceText": "$9,000"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: nothing. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q21",
        "number": "21",
        "prompt": "Thị trường quyền chọn có tổ chức bắt nguồn từ thành phố nào?",
        "sourcePrompt": "In which city did organized option markets originate?",
        "options": [
          {
            "id": "A",
            "text": "New York",
            "sourceText": "New York"
          },
          {
            "id": "B",
            "text": "Chicago",
            "sourceText": "Chicago"
          },
          {
            "id": "C",
            "text": "Philadelphia",
            "sourceText": "Philadelphia"
          },
          {
            "id": "D",
            "text": "San Francisco",
            "sourceText": "San Francisco"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Chicago. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q22",
        "number": "22A",
        "prompt": "Nếu ký quỹ ban đầu là 5.000 đô la, ký quỹ duy trì là 3.500 đô la và số dư của bạn là 3.100 đô la, bạn phải gửi bao nhiêu?",
        "sourcePrompt": "If the initial margin is $5,000, the maintenance margin is $3,500 and your balance is $3,100, how much must you deposit?",
        "options": [
          {
            "id": "A",
            "text": "$1,500",
            "sourceText": "$1,500"
          },
          {
            "id": "B",
            "text": "$400",
            "sourceText": "$400"
          },
          {
            "id": "C",
            "text": "0",
            "sourceText": "0"
          },
          {
            "id": "D",
            "text": "$1,900",
            "sourceText": "$1,900"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $1,900. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q23",
        "number": "22B",
        "prompt": "Một đơn đặt hàng xác định mức giá tối đa phải trả nếu mua là một",
        "sourcePrompt": "An order that specifies a maximum price to pay if buying is a",
        "options": [
          {
            "id": "A",
            "text": "lệnh dừng",
            "sourceText": "stop order"
          },
          {
            "id": "B",
            "text": "đặt hàng ở siêu thị",
            "sourceText": "market order"
          },
          {
            "id": "C",
            "text": "lệnh giới hạn",
            "sourceText": "limit order"
          },
          {
            "id": "D",
            "text": "tất cả hoặc không có thứ tự",
            "sourceText": "all or none order"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: lệnh giới hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q24",
        "number": "23",
        "prompt": "gười viết quyền chọn phải trả số tiền bao nhiêu nếu quyền chọn mua chỉ số thanh toán bằng tiền mặt được thực hiện?",
        "sourcePrompt": "What amount must a call writer pay if a cash–settled index call is exercised?",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch giữa mức chỉ số và giá thực hiện",
            "sourceText": "difference between the index level and the exercise price"
          },
          {
            "id": "B",
            "text": "giá thực hiện",
            "sourceText": "exercise price"
          },
          {
            "id": "C",
            "text": "chênh lệch giữa giá thực hiện và mức chỉ số",
            "sourceText": "difference between the exercise price and the index level"
          },
          {
            "id": "D",
            "text": "mức chỉ mục",
            "sourceText": "index level"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: chênh lệch giữa giá thực hiện và mức chỉ số. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q25",
        "number": "24",
        "prompt": "Các nhà giao dịch quyền chọn phải chịu loại chi phí nào sau đây?",
        "sourcePrompt": "Option traders incur which of the following types of costs?",
        "options": [
          {
            "id": "A",
            "text": "yêu cầu ký quỹ",
            "sourceText": "margin requirements"
          },
          {
            "id": "B",
            "text": "thuế",
            "sourceText": "taxes"
          },
          {
            "id": "C",
            "text": "hoa hồng giao dịch chứng khoán",
            "sourceText": "stock trading commissions"
          },
          {
            "id": "D",
            "text": "a and b",
            "sourceText": "a and b"
          },
          {
            "id": "E",
            "text": "a, b and c",
            "sourceText": "a, b and c"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: a, b and c. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q26",
        "number": "25",
        "prompt": "Tổng số hợp đồng quyền chọn mua đang lưu hành tại bất kỳ thời điểm nào được gọi là",
        "sourcePrompt": "The total number of long option contracts outstanding at any given time is called the",
        "options": [
          {
            "id": "A",
            "text": "vốn hóa thị trường tùy chọn",
            "sourceText": "market cap"
          },
          {
            "id": "B",
            "text": "sum nổi bật (SOO)",
            "sourceText": "sum options outstanding (SOO)"
          },
          {
            "id": "C",
            "text": "option sự giàu có nổi bật (OWO)",
            "sourceText": "option wealth outstanding (OWO)"
          },
          {
            "id": "D",
            "text": "tiền lãi mở",
            "sourceText": "open interest"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tiền lãi mở. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q27",
        "number": "26A",
        "prompt": "Số lượng các vị thế mua hoặc bán tương lai đang lưu hành được gọi là",
        "sourcePrompt": "The number of long or short futures positions outstanding is called the",
        "options": [
          {
            "id": "A",
            "text": "vị trí có thể báo cáo",
            "sourceText": "reportable position"
          },
          {
            "id": "B",
            "text": "lãi suất mở",
            "sourceText": "open interest"
          },
          {
            "id": "C",
            "text": "khối lượng tối thiểu",
            "sourceText": "minimum volume"
          },
          {
            "id": "D",
            "text": "vị trí lây lan",
            "sourceText": "spread position"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lãi suất mở. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q28",
        "number": "26B",
        "prompt": "Cá nhân này duy trì và cố gắng thực hiện các lệnh quyền chọn công khai nhưng không tiết lộ chúng cho người khác.",
        "sourcePrompt": "This individual maintains and attempts to fill public option orders but does not disclose them to others.",
        "options": [
          {
            "id": "A",
            "text": "nhà cung cấp thanh khoản",
            "sourceText": "liquidity provider"
          },
          {
            "id": "B",
            "text": "người môi giới hội đồng quản trị",
            "sourceText": "board broker"
          },
          {
            "id": "C",
            "text": "put hàng chính thức",
            "sourceText": "order book official"
          },
          {
            "id": "D",
            "text": "nhà giao dịch quyền chọn đã đăng ký",
            "sourceText": "registered option trader"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: nhà cung cấp thanh khoản. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q29",
        "number": "27",
        "prompt": "Trung gian nào đảm bảo hiệu suất của người viết quyền chọn?",
        "sourcePrompt": "What intermediary guarantees an option writer’s performance?",
        "options": [
          {
            "id": "A",
            "text": "công ty đánh giá mức độ xứng đáng tín dụng",
            "sourceText": "credit worthiness rating company"
          },
          {
            "id": "B",
            "text": "môi giới",
            "sourceText": "brokerage"
          },
          {
            "id": "C",
            "text": "đơn hàng tốt cho đến khi bị hủy",
            "sourceText": "good-till-canceled order"
          },
          {
            "id": "D",
            "text": "thanh toán bù trừ",
            "sourceText": "clearinghouse"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: thanh toán bù trừ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q30",
        "number": "28",
        "prompt": "Giả sử bạn nắm giữ quyền chọn mua. Giá cổ phiếu gần đây đang tăng lên làm cho quyền chọn mua của bạn có giá trị hơn. Thông qua quy trình nào bạn có thể tận dụng tính chất thanh khoản của thị trường quyền chọn?",
        "sourcePrompt": "Suppose you hold a call option. The stock price has recently been increasing-making your call option more valuable. Through what process might you take advantage of the liquid nature of the options market?",
        "options": [
          {
            "id": "A",
            "text": "thứ tự",
            "sourceText": "offsetting order"
          },
          {
            "id": "B",
            "text": "Hòa giải hợp đồng",
            "sourceText": "contract reconciliation"
          },
          {
            "id": "C",
            "text": "đánh dấu lệnh thị trường",
            "sourceText": "mark to market order"
          },
          {
            "id": "D",
            "text": "định cư",
            "sourceText": "settling up"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: thứ tự. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q31",
        "number": "29",
        "prompt": "Thị trường tương lai của Hoa Kỳ bắt nguồn từ đâu?",
        "sourcePrompt": "Where did the U.S. futures market originate?",
        "options": [
          {
            "id": "A",
            "text": "Kansas",
            "sourceText": "Kansas"
          },
          {
            "id": "B",
            "text": "New York",
            "sourceText": "New York"
          },
          {
            "id": "C",
            "text": "Minneapolis",
            "sourceText": "Minneapolis"
          },
          {
            "id": "D",
            "text": "Chicago",
            "sourceText": "Chicago"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Chicago. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q32",
        "number": "30",
        "prompt": "Biên độ dao động là điều nào sau đây?",
        "sourcePrompt": "Variation margin is which of the following?",
        "options": [
          {
            "id": "A",
            "text": "tiền ký quỹ được ký gửi là kết quả của việc đánh dấu thị trường",
            "sourceText": "margin deposited as a result of marking-to-market"
          },
          {
            "id": "B",
            "text": "sự khác biệt về tỷ suất lợi nhuận giữa người phòng ngừa rủi ro và nhà đầu cơ",
            "sourceText": "the difference in margin between hedger and speculator"
          },
          {
            "id": "C",
            "text": "chênh lệch ký quỹ theo phong cách giao dịch",
            "sourceText": "margin differences according to trading style"
          },
          {
            "id": "D",
            "text": "biên độ được thiết lập bởi sự thay đổi của giá tương lai",
            "sourceText": "margin set by the variability of a futures price"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: tiền ký quỹ được ký gửi là kết quả của việc đánh dấu thị trường. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q33",
        "number": "31",
        "prompt": "Nhiệm vụ nào sau đây không được thực hiện bởi trung tâm thanh toán bù trừ?",
        "sourcePrompt": "Which of the following duties is not performed by the clearinghouse?",
        "options": [
          {
            "id": "A",
            "text": "giữ tiền gửi ký quỹ",
            "sourceText": "holding margin deposits"
          },
          {
            "id": "B",
            "text": "đảm bảo hiệu suất của người mua và nhà văn",
            "sourceText": "guaranteeing performance of buyer and writer"
          },
          {
            "id": "C",
            "text": "duy trì hồ sơ giao dịch",
            "sourceText": "maintaining records of transactions"
          },
          {
            "id": "D",
            "text": "cho vay tiền để đáp ứng yêu cầu ký quỹ",
            "sourceText": "lending money to meet margin requirements"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: cho vay tiền để đáp ứng yêu cầu ký quỹ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q34",
        "number": "32",
        "prompt": "Bộ ngắt mạch là gì?",
        "sourcePrompt": "What are circuit breakers?",
        "options": [
          {
            "id": "A",
            "text": "quy tắc ngừng giao dịch khi hợp đồng tương lai sắp hết hạn",
            "sourceText": "rules that stop trading when futures are about to expire"
          },
          {
            "id": "B",
            "text": "một hệ thống tắt máy tính trao đổi trong thời gian khối lượng bất thường",
            "sourceText": "a system that shuts down the exchange computer during periods of abnormal volume"
          },
          {
            "id": "C",
            "text": "giới hạn về số lượng hợp đồng có thể được giao dịch vào những ngày có khối lượng giao dịch cao",
            "sourceText": "limits on the number of contracts that can be traded on high volume days"
          },
          {
            "id": "D",
            "text": "quy tắc giới hạn số lượng hợp đồng mà một nhà đầu cơ có thể nắm giữ",
            "sourceText": "rules that limit the number of contracts a speculator can hold"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q35",
        "number": "33",
        "prompt": "Một hợp đồng tương lai bao gồm 5000 bảng với mức thay đổi giá tối thiểu là 0,01 đô la được bán với giá 31,60 đô la một bảng. Nếu số tiền ký quỹ ban đầu là 2.525 đô la và số tiền ký quỹ duy trì là 1.000 đô la, thì sẽ có một cuộc gọi ký quỹ ở mức giá nào?",
        "sourcePrompt": "A futures contract covers 5000 pounds with a minimum price change of $0.01 is sold for $31.60 per pound. If the initial margin is $2,525 and the maintenance margin is $1,000, at what price would there be a margin call?",
        "options": [
          {
            "id": "A",
            "text": "31.91",
            "sourceText": "31.91"
          },
          {
            "id": "B",
            "text": "32.11",
            "sourceText": "32.11"
          },
          {
            "id": "C",
            "text": "31.29",
            "sourceText": "31.29"
          },
          {
            "id": "D",
            "text": "31.09",
            "sourceText": "31.09"
          },
          {
            "id": "E",
            "text": "31.80",
            "sourceText": "31.80"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 31.91. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q36",
        "number": "34",
        "prompt": "Một trong những ưu điểm của thị trường kỳ hạn là",
        "sourcePrompt": "One of the advantages of forward markets is",
        "options": [
          {
            "id": "A",
            "text": "một. hiệu suất được đảm bảo bởi G-30",
            "sourceText": "performance is guaranteed by the G-30"
          },
          {
            "id": "B",
            "text": "giao dịch được tiến hành vào buổi tối qua máy tính",
            "sourceText": "trading is conducted in the evening over computers"
          },
          {
            "id": "C",
            "text": "các hợp đồng là riêng tư và tùy chỉnh",
            "sourceText": "the contracts are private and customized"
          },
          {
            "id": "D",
            "text": "giao dịch ít tốn kém hơn và được quản lý bởi nhiều quy tắc hơn",
            "sourceText": "trading is less costly and governed by more rules"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: các hợp đồng là riêng tư và tùy chỉnh. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q37",
        "number": "35",
        "prompt": "Các cá nhân tham gia vào loại chiến lược giao dịch này được đặc trưng bởi nỗ lực kiếm lợi nhuận từ việc đoán hướng của thị trường",
        "sourcePrompt": "Individuals engaging in this type of trading strategy are characterized by their attempt to profit from guessing the direction of the market",
        "options": [
          {
            "id": "A",
            "text": "hedgers",
            "sourceText": "hedgers"
          },
          {
            "id": "B",
            "text": "spreaders",
            "sourceText": "spreaders"
          },
          {
            "id": "C",
            "text": "người đầu cơ",
            "sourceText": "speculators"
          },
          {
            "id": "D",
            "text": "arbitrageurs",
            "sourceText": "arbitraguers"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: người đầu cơ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q38",
        "number": "36",
        "prompt": "Mặc dù hợp đồng kỳ hạn có nhiều rủi ro tín dụng hơn hợp đồng tương lai, nhưng hợp đồng kỳ hạn mang lại lợi thế chính nào so với hợp đồng tương lai?",
        "sourcePrompt": "Despite the fact that forward contracts carry more credit risk than futures contracts, forward contracts offer what primary advantage over futures contracts?",
        "options": [
          {
            "id": "A",
            "text": "thị trường giao sau phi tập trung là thị trường được điều tiết chặt chẽ hợp đồng",
            "sourceText": "the over-the-counter forward market is a highly regulated market"
          },
          {
            "id": "B",
            "text": "forward ngăn cản người viết giả định rủi ro tín dụng của người mua",
            "sourceText": "forward contracts prevent the writer from assuming the credit risk of the buyer"
          },
          {
            "id": "C",
            "text": "các điều khoản và điều kiện được điều chỉnh theo nhu cầu cụ thể của hai bên liên quan",
            "sourceText": "terms and conditions are tailored to the specific needs of the two parties involved"
          },
          {
            "id": "D",
            "text": "thông tin giao dịch giữa hai bên liên quan đến hợp đồng kỳ hạn được công bố rộng rãi",
            "sourceText": "transaction information between the two parties involved in the forward contract is readily available to the public"
          },
          {
            "id": "E",
            "text": "Các điều kiện của hợp đồng kỳ hạn, chẳng hạn như ngày và địa điểm giao hàng, không thể thay đổi",
            "sourceText": "conditions of the forward contract, such as delivery date and location, cannot be altered"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: các điều khoản và điều kiện được điều chỉnh theo nhu cầu cụ thể của hai bên liên quan. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q39",
        "number": "37",
        "prompt": "Trình tự nào sau đây đúng với quy trình thanh toán hàng ngày?",
        "sourcePrompt": "Which of the following correctly orders the process of daily settlement?",
        "options": [
          {
            "id": "A",
            "text": "quan chức thanh toán bù trừ thiết lập một mức giá thanh toán; mỗi tài khoản được đánh dấu để thị trường; tài khoản của những người nắm giữ các vị thế mua/bán được ghi có/ghi nợ thích hợp; chênh lệch giữa giá thanh toán hôm nay và giá thanh toán ngày hôm trước được xác định",
            "sourceText": "clearinghouse officials establish a settlement price; each account is marked to market; accounts of those holding long/short positions are credited/debited appropriately; differences between today’s settlement price and the previous days settlement price are determined"
          },
          {
            "id": "B",
            "text": "quan chức thanh toán bù trừ thiết lập một mức giá thanh toán; mỗi tài khoản được đánh dấu để thị trường; chênh lệch giữa giá thanh toán của ngày hôm nay và giá thanh to án của ngày hôm trước được xác định; tài khoản của những người nắm giữ các vị thế mua/bán được ghi có/ghi nợ thích hợp",
            "sourceText": "clearinghouse officials establish a settlement price; each account is marked to market; differences between today’s settlement price and the previous day’s settlement price are determined; accounts of those holding long/short positions are credited/debited appropriately"
          },
          {
            "id": "C",
            "text": "xác định chênh lệch giữa giá thanh toán hôm nay và giá thanh toán ngày hôm trước; tài khoản được đánh dấu để thị trường; các quan chức thanh toán bù trừ thiết lập một mức giá thanh toán; tài khoản của những người nắm giữ các vị thế mua/bán được ghi có/ghi nợ thích hợp",
            "sourceText": "differences between today’s settlement price and the previous day’s settlement price are determined; accounts are marked to market; clearinghouse officials establish a settlement price; accounts of those holding long/short positions are credited/debited appropriately"
          },
          {
            "id": "D",
            "text": "quan chức thanh toán bù trừ thiết lập một mức giá thanh toán; chênh lệch giữa giá thanh toán ngày hôm nay và giá thanh toán ngày hôm trước được xác định; tài khoản của những người nắm giữ các vị thế mua/bán được ghi có/ghi nợ thích hợp; mỗi tài khoản được đánh dấu vào thị trường",
            "sourceText": "clearinghouse officials establish a settlement price; differences between today’s settlement price and the previous days settlement price are determined; accounts of those holding long/short positions are credited/debited appropriately; each account is marked to market"
          },
          {
            "id": "E",
            "text": "xác định chênh lệch giữa giá thanh toán hôm nay và giá thanh toán ngày hôm trước; tài khoản được đánh dấu để thị trường; các quan chức thanh toán bù trừ thiết lập một mức giá thanh toán; tài khoản của những người nắm giữ các vị thế mua/bán được ghi có/ghi nợ thích hợp",
            "sourceText": "differences between today’s settlement price and the previous day’s settlement price are determined; accounts are marked to market; clearinghouse officials establish a settlement price; accounts of those holding long/short positions are credited/debited appropriately"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quan chức thanh toán bù trừ thiết lập một mức giá thanh toán; mỗi tài khoản được đánh dấu để thị trường; chênh lệch giữa giá thanh toán của ngày hôm nay và giá thanh to án của ngày hôm trước được xác định; tài khoản của những người nắm giữ các vị thế mua/bán được ghi có/ghi nợ thích hợp. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 3,
    "title": "Nguyên lý định giá quyền chọn",
    "sourceTitle": "CHAPTER 3: PRINCIPLES OF OPTION PRICING",
    "summary": "Chương 3 tập trung vào nguyên lý định giá quyền chọn. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Giá trị nội tại",
      "Giá trị thời gian",
      "Put-call parity",
      "Lower bound",
      "Early exercise",
      "Volatility"
    ],
    "theory": [
      {
        "heading": "Hai thành phần của giá option",
        "body": "Giá option gồm giá trị nội tại và giá trị thời gian. Giá trị nội tại là lợi ích nếu thực hiện ngay; giá trị thời gian phản ánh khả năng option có lợi hơn trong tương lai."
      },
      {
        "heading": "Put-call parity",
        "body": "Put-call parity liên kết giá call, put, cổ phiếu và trái phiếu phi rủi ro. Nếu quan hệ này bị vi phạm, có thể xuất hiện arbitrage."
      },
      {
        "heading": "Giới hạn giá và early exercise",
        "body": "Option không thể có giá thấp hơn các lower bound hợp lý. American option có thể thực hiện sớm, nhưng việc thực hiện sớm chỉ hợp lý trong một số trường hợp cụ thể."
      }
    ],
    "questions": [
      {
        "id": "c3-q1",
        "number": "1",
        "prompt": "Xem xét một danh mục đầu tư bao gồm một quyền chọn mua với giá thực hiện là X, một vị thế bán đối với một cổ phiếu không trả cổ tức với giá ban đầu là S0 và việc mua trái phiếu phi rủi ro với mệnh giá là X và đáo hạn khi quyền chọn hết hạn.. Một danh mục đầu tư như vậy nên có giá trị gì?",
        "sourcePrompt": "Consider a portfolio consisting of a long call with an exercise price of X, a short position in a non-dividend paying stock at an initial price of S0, and the purchase of riskless bonds with a face value of X and maturing when the call expires. What should such a portfolio be worth?",
        "options": [
          {
            "id": "A",
            "text": "C + P – X(1 + r)-T",
            "sourceText": "C + P – X(1 + r)-T"
          },
          {
            "id": "B",
            "text": "C – S0",
            "sourceText": "C – S0"
          },
          {
            "id": "C",
            "text": "P – X",
            "sourceText": "P – X"
          },
          {
            "id": "D",
            "text": "P + S0 – X(1 + r)-T",
            "sourceText": "P + S0 – X(1 + r)-T"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có cái nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q2",
        "number": "2",
        "prompt": "Giá trị thấp nhất có thể có của một quyền chọn bán kiểu Châu Âu là bao nhiêu?",
        "sourcePrompt": "What is the lowest possible value of a European put?",
        "options": [
          {
            "id": "A",
            "text": "Max(0, X – S0)",
            "sourceText": "Max(0, X – S0)"
          },
          {
            "id": "B",
            "text": "X(1 + r)-T",
            "sourceText": "X(1 + r)-T"
          },
          {
            "id": "C",
            "text": "Max[0, S0 – X(1 + r)-T]",
            "sourceText": "Max[0, S0 – X(1 + r)-T]"
          },
          {
            "id": "D",
            "text": "Max[0, X(1 + r)-T – S0)]",
            "sourceText": "Max[0, X(1 + r)-T – S0)]"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Max[0, X(1 + r)-T – S0)]. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q3",
        "number": "3",
        "prompt": "Một biểu thức khác cho giá trị nội tại là",
        "sourcePrompt": "Another expression for intrinsic value is",
        "options": [
          {
            "id": "A",
            "text": "Ngang bằng",
            "sourceText": "parity"
          },
          {
            "id": "B",
            "text": "Giá trị chẵn lẻ",
            "sourceText": "parity value"
          },
          {
            "id": "C",
            "text": "giá trị thực hiện",
            "sourceText": "exercise value"
          },
          {
            "id": "D",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tất cả những điều trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q4",
        "number": "4",
        "prompt": "Vào ngày 2 tháng 3, m ột tín phiếu kho bạc hết hạn vào ngày 20 tháng 4 có chiết khấu giá mua là 5,86 và chi ết khấu giá bán là 5,80. Ư ớc tính tốt nhất về tỷ lệ phi rủi ro như được đưa ra trong văn bản là gì?",
        "sourcePrompt": "On March 2, a Treasury bill expiring on April 20 had a bid discount of 5.86, and an ask discount of 5.80. What is the best estimate of the risk-free rate as given in the text?",
        "options": [
          {
            "id": "A",
            "text": "5.86 %",
            "sourceText": "5.86 %"
          },
          {
            "id": "B",
            "text": "5.83 %",
            "sourceText": "5.83 %"
          },
          {
            "id": "C",
            "text": "6.11 %",
            "sourceText": "6.11 %"
          },
          {
            "id": "D",
            "text": "6.14 %",
            "sourceText": "6.14 %"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 6.11 %. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q5",
        "number": "5",
        "prompt": "Giả sử bạn sử dụng ngang giá quyền chọn mua để tính giá quyền chọn mua ở châu Âu từ giá quyền chọn bán ở châu Âu, giá cổ phiếu và lãi suất phi rủi ro. Bạn thấy giá thị trường của quyền chọn mua thấp hơn giá được đưa ra bởi tính ngang giá quyền chọn bán. Bỏ qua chi phí giao dịch, bạn nên thực hiện giao dịch nào?",
        "sourcePrompt": "Suppose you use put-call parity to compute a European call price from the European put price, the stock price, and the risk-free rate. You find the market price of the call to be less than the price given by put-call parity. Ignoring transaction costs, what trades should you do?",
        "options": [
          {
            "id": "A",
            "text": "mua quyền chọn mua và trái phiếu phi rủi ro và bán quyền chọn mua và cổ phiếu",
            "sourceText": "buy the call and the risk-free bonds and sell the put and the stock"
          },
          {
            "id": "B",
            "text": "mua cổ phiếu và trái phi ếu phi r ủi ro và bán quy ền chọn bán và quy ền chọn mua",
            "sourceText": "buy the stock and the risk-free bonds and sell the put and the call"
          },
          {
            "id": "C",
            "text": "mua quy ền chọn bán và c ổ phiếu và bán trái phi ếu phi rủi ro và quy ền chọn mua",
            "sourceText": "buy the put and the stock and sell the risk-free bonds and the call"
          },
          {
            "id": "D",
            "text": "mua quyền chọn bán và quyền chọn bán và bán trái phiếu phi rủi ro và cổ phiếu",
            "sourceText": "buy the put and the call and sell the risk-free bonds and the stock"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: mua quyền chọn mua và trái phiếu phi rủi ro và bán quyền chọn mua và cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q6",
        "number": "6",
        "prompt": "Nếu không có cổ tức trên một cổ phiếu, phát biểu nào sau đây là đúng?",
        "sourcePrompt": "If there are no dividends on a stock, which of the following statements is correct?",
        "options": [
          {
            "id": "A",
            "text": "Quyền chọn kiểu Mỹ sẽ được bán với giá cao hơn cuộc gọi kiểu Châu Âu",
            "sourceText": "An American call will sell for more than a European call"
          },
          {
            "id": "B",
            "text": "Quyền chọn kiểu Châu Âu sẽ được bán với giá cao hơn cuộc gọi kiểu Mỹ",
            "sourceText": "A European call will sell for more than an American call"
          },
          {
            "id": "C",
            "text": "Một Quyền chọn của người Mỹ sẽ được thực hiện ngay lập tức",
            "sourceText": "An American call will be immediately exercised"
          },
          {
            "id": "D",
            "text": "Quy ền chọn mua kiểu Mỹ và quyền chọn bán kiểu Mỹ sẽ được bán với cùng một mức giá",
            "sourceText": "An American call and an American put will sell for the same price"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên Các báo giá sau đây được quan sát đối với các quyền chọn đối với một cổ phiếu nhất định vào ngày 1 tháng 11 của một năm nhất định. Đây là những quyền chọn của người Mỹ trừ khi được chỉ định. Sử dụng thông tin để trả lời các câu hỏi từ 7 đến 20. Calls Puts Strike Nov Dec Jan Nov Dec Jan 8.40 11.50 5.30 1.30 2.00 4.40 7.10 8.30 0.90 2.50 3.80 1.50 3.90 5.30 2.80 4.80 4.80 Giá cổ phiếu là 113,25. Lãi su ất phi rủi ro là 7,30% (tháng 11), 7,50% (tháng 12) và 7,62% (tháng 1). Thời gian đáo hạn là 0,0384 (tháng 11), 0,1342 (tháng 12) và 0,211 (tháng 1). Giả sử không có cổ tức trừ khi được chỉ định.",
            "sourceText": "none of the above The following quotes were observed for options on a given stock on November 1 of a given year. These are American calls except where indicated. Use the information to answer questions 7 through 20. The stock price was 113.25. The risk-free rates were 7.30 percent (November), 7.50 percent (December) and 7.62 percent (January). The times to expiration were 0.0384 (November), 0.1342 (December), and 0.211 (January). Assume no dividends unless indicated."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có cái nào ở trên Các báo giá sau đây được quan sát đối với các quyền chọn đối với một cổ phiếu nhất định vào ngày 1 tháng 11 của một năm nhất định. Đây là những quyền chọn của người Mỹ trừ khi được chỉ định. Sử dụng thông tin để trả lời các câu hỏi từ 7 đến 20. Calls Puts Strike Nov Dec Jan Nov Dec Jan 8.40 11.50 5.30 1.30 2.00 4.40 7.10 8.30 0.90 2.50 3.80 1.50 3.90 5.30 2.80 4.80 4.80 Giá cổ phiếu là 113,25. Lãi su ất phi rủi ro là 7,30% (tháng 11), 7,50% (tháng 12) và 7,62% (tháng 1). Thời gian đáo hạn là 0,0384 (tháng 11), 0,1342 (tháng 12) và 0,211 (tháng 1). Giả sử không có cổ tức trừ khi được chỉ định.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q7",
        "number": "7",
        "prompt": "Giá trị nội tại của quyền chọn bán vào ngày 115 tháng 12 là bao nhiêu?",
        "sourcePrompt": "What is the intrinsic value of the December 115 put?",
        "options": [
          {
            "id": "A",
            "text": "1.75",
            "sourceText": "1.75"
          },
          {
            "id": "B",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "3.90",
            "sourceText": "3.90"
          },
          {
            "id": "D",
            "text": "3.00",
            "sourceText": "3.00"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1.75. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q8",
        "number": "8",
        "prompt": "Giá trị nội tại của quyền chọn bán 105 tháng 11 là gì?",
        "sourcePrompt": "What is the intrinsic value of the November 105 put?",
        "options": [
          {
            "id": "A",
            "text": "0.30",
            "sourceText": "0.30"
          },
          {
            "id": "B",
            "text": "8.25",
            "sourceText": "8.25"
          },
          {
            "id": "C",
            "text": "8.50",
            "sourceText": "8.50"
          },
          {
            "id": "D",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 0.00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q9",
        "number": "9",
        "prompt": "Giá trị nội tại của cuộc gọi 110 tháng 1 là gì?",
        "sourcePrompt": "What is the intrinsic value of the January 110 call?",
        "options": [
          {
            "id": "A",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "B",
            "text": "8.30",
            "sourceText": "8.30"
          },
          {
            "id": "C",
            "text": "3.75",
            "sourceText": "3.75"
          },
          {
            "id": "D",
            "text": "5.00",
            "sourceText": "5.00"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có cái nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q10",
        "number": "10",
        "prompt": "Giá trị nội tại của cuộc gọi 115 tháng 11 là gì?",
        "sourcePrompt": "What is the intrinsic value of the November 115 call?",
        "options": [
          {
            "id": "A",
            "text": "1.50",
            "sourceText": "1.50"
          },
          {
            "id": "B",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "2.80",
            "sourceText": "2.80"
          },
          {
            "id": "D",
            "text": "1.75",
            "sourceText": "1.75"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 0.00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q11",
        "number": "11",
        "prompt": "Giá trị thời gian của quyền chọn bán ngày 105 tháng 12 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the December 105 put?",
        "options": [
          {
            "id": "A",
            "text": "1.30",
            "sourceText": "1.30"
          },
          {
            "id": "B",
            "text": "8.30",
            "sourceText": "8.30"
          },
          {
            "id": "C",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "D",
            "text": "7.00",
            "sourceText": "7.00"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1.30. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q12",
        "number": "12",
        "prompt": "Giá trị thời gian của quyền chọn bán 115 tháng 11 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the November 115 put?",
        "options": [
          {
            "id": "A",
            "text": "1.75",
            "sourceText": "1.75"
          },
          {
            "id": "B",
            "text": "2.80",
            "sourceText": "2.80"
          },
          {
            "id": "C",
            "text": "1.10",
            "sourceText": "1.10"
          },
          {
            "id": "D",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above(1.05)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có cái nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q13",
        "number": "13",
        "prompt": "Giá trị thời gian của quyền chọn mua 110 tháng 11 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the November 110 call?",
        "options": [
          {
            "id": "A",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "B",
            "text": "4.40",
            "sourceText": "4.40"
          },
          {
            "id": "C",
            "text": "1.15",
            "sourceText": "1.15"
          },
          {
            "id": "D",
            "text": "3.25",
            "sourceText": "3.25"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 1.15. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q14",
        "number": "14",
        "prompt": "Giá trị thời gian của quyền chọn mua 115 tháng 1 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the January 115 call?",
        "options": [
          {
            "id": "A",
            "text": "5.30",
            "sourceText": "5.30"
          },
          {
            "id": "B",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "3.50",
            "sourceText": "3.50"
          },
          {
            "id": "D",
            "text": "1.70",
            "sourceText": "1.70"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 5.30. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q15",
        "number": "15",
        "prompt": "Giới hạn dưới của quyền chọn mua kiểu châu Âu tháng 12 giá th ực hiện 105 là gì?",
        "sourcePrompt": "What is the European lower bound of the December 105 call?",
        "options": [
          {
            "id": "A",
            "text": "9.86",
            "sourceText": "9.86"
          },
          {
            "id": "B",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "8.25",
            "sourceText": "8.25"
          },
          {
            "id": "D",
            "text": "9.26",
            "sourceText": "9.26"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 9.26. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q16",
        "number": "16",
        "prompt": "Giới hạn dưới châu Âu của quyền chọn mua 115 tháng 11 là bao nhiêu?",
        "sourcePrompt": "What is the European lower bound of the November 115 call?",
        "options": [
          {
            "id": "A",
            "text": "1.44",
            "sourceText": "1.44"
          },
          {
            "id": "B",
            "text": "0.00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "1.75",
            "sourceText": "1.75"
          },
          {
            "id": "D",
            "text": "2.06",
            "sourceText": "2.06"
          },
          {
            "id": "E",
            "text": "none of the above",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 0.00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q17",
        "number": "17",
        "prompt": "Từ ngang giá quyền chọn bán của Mỹ, giá trị tối thiểu và tối đa của tổng giá cổ phiếu và giá quyền chọn vào ngày 110 tháng 12 có thể là bao nhiêu?",
        "sourcePrompt": "From American put-call parity, what are the minimum and maximum values that the sum of the stock price and December 110 put price can be?",
        "options": [
          {
            "id": "A",
            "text": "101.81 và 102.87",
            "sourceText": "101.81 and 102.87"
          },
          {
            "id": "B",
            "text": "2.50 và 113.25",
            "sourceText": "2.50 and 113.25"
          },
          {
            "id": "C",
            "text": "116.038 và 117.10",
            "sourceText": "116.038 and 117.10"
          },
          {
            "id": "D",
            "text": "7.125 và 110",
            "sourceText": "7.125 and 110"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào đúng.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 116.038 và 117.10. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q18",
        "number": "18",
        "prompt": "Sự khác biệt lớn nhất giữa các quyền chọn mua tháng 1 105 và 110 là giá trị nào sau đây?",
        "sourcePrompt": "The maximum difference between the January 105 and 110 calls is which of the following?",
        "options": [
          {
            "id": "A",
            "text": "11.50",
            "sourceText": "11.50"
          },
          {
            "id": "B",
            "text": "4.92",
            "sourceText": "4.92"
          },
          {
            "id": "C",
            "text": "5.00",
            "sourceText": "5.00"
          },
          {
            "id": "D",
            "text": "4.0",
            "sourceText": "4.0"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào đúng.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 5.00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q19",
        "number": "19",
        "prompt": "Giả sử bạn biết rằng các quyền chọn mua vào ngày 115 tháng 1 đã đượ c định giá đúng nhưng lại nghi ngờ rằng cổ phiếu đã bị định giá sai. Sử dụng quyền chọn bán ngang giá, bạn mong đợi giá cổ phiếu sẽ là bao nhiêu? Đối với vấn đề này, hãy xử lý các tùy chọn như thể chúng là kiểu Châu Âu.",
        "sourcePrompt": "Suppose you knew that the January 115 options were correctly priced but suspected that the stock was mispriced. Using put-call parity, what would you expect the stock price to be? For this problem, treat the options as if they were European.",
        "options": [
          {
            "id": "A",
            "text": "113.73",
            "sourceText": "113.73"
          },
          {
            "id": "B",
            "text": "123.23",
            "sourceText": "123.23"
          },
          {
            "id": "C",
            "text": "121.23",
            "sourceText": "121.23"
          },
          {
            "id": "D",
            "text": "112.77",
            "sourceText": "112.77"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 113.73. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q20",
        "number": "20",
        "prompt": "Giả sử cổ phiếu sắp hết hạn trong một ngày nữa. Cổ tức sẽ là $4,00. Bạn sẽ xem xét quyền chọn mua nào sau đây để thực hiện?",
        "sourcePrompt": "Suppose the stock is about to go ex-dividend in one day. The dividend will be $4.00. Which of the following calls will you consider for exercise?",
        "options": [
          {
            "id": "A",
            "text": "115 tháng 11",
            "sourceText": "November 115"
          },
          {
            "id": "B",
            "text": "110 tháng 11",
            "sourceText": "November 110"
          },
          {
            "id": "C",
            "text": "115 tháng 12",
            "sourceText": "December 115"
          },
          {
            "id": "D",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 110 tháng 11. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q21",
        "number": "21",
        "prompt": "Giá trị thời gian của quyền chọn còn được gọi là một",
        "sourcePrompt": "The time value of an option is also referred to as the",
        "options": [
          {
            "id": "A",
            "text": "giá tổng hợp",
            "sourceText": "synthetic value"
          },
          {
            "id": "B",
            "text": "giá thực hiện",
            "sourceText": "strike value"
          },
          {
            "id": "C",
            "text": "giá đầu cơ",
            "sourceText": "speculative value"
          },
          {
            "id": "D",
            "text": "ngang giá",
            "sourceText": "parity value"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá đầu cơ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q22",
        "number": "22",
        "prompt": "Điều nào sau đây là giá trị thấp nhất có thể có của quyền chọn mua của người Mỹ đối với một cổ phiếu không có cổ tức?",
        "sourcePrompt": "Which of the following is the lowest possible value of an American call on a stock with no dividends?",
        "options": [
          {
            "id": "A",
            "text": "Max[0, S0 – X(1 + r)-T]",
            "sourceText": "Max[0, S0 – X(1 + r)-T]"
          },
          {
            "id": "B",
            "text": "S0",
            "sourceText": "S0"
          },
          {
            "id": "C",
            "text": "Max(0, S0 – X)",
            "sourceText": "Max(0, S0 – X)"
          },
          {
            "id": "D",
            "text": "Max[0, S0 (1 + r)-T – X]",
            "sourceText": "Max[0, S0 (1 + r)-T – X]"
          },
          {
            "id": "E",
            "text": "Không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Max[0, S0 – X(1 + r)-T]. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q23",
        "number": "23",
        "prompt": "Điều nào sau đây là giá trị thấp nhất có thể có của một người Mỹ mua một cổ phiếu không có cổ tức?",
        "sourcePrompt": "Which of the following is the lowest possible value of an American put on a stock with no dividends?",
        "options": [
          {
            "id": "A",
            "text": "X(1 + r)-T",
            "sourceText": "X(1 + r)-T"
          },
          {
            "id": "B",
            "text": "X",
            "sourceText": "X"
          },
          {
            "id": "C",
            "text": "Max[0, X(1 + r)-T – S0]",
            "sourceText": "Max[0, X(1 + r)-T – S0]"
          },
          {
            "id": "D",
            "text": "Max(0, X – S0)",
            "sourceText": "Max(0, X – S0)"
          },
          {
            "id": "E",
            "text": "Không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Max(0, X – S0). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q24",
        "number": "24",
        "prompt": "Chênh lệch giữa mệnh giá của tín phiếu kho bạc và giá của nó được gọi là",
        "sourcePrompt": "The difference between a Treasury bill's face value and its price is called the",
        "options": [
          {
            "id": "A",
            "text": "a.giá trị thời gian",
            "sourceText": "time value"
          },
          {
            "id": "B",
            "text": "chiết khấu",
            "sourceText": "discount"
          },
          {
            "id": "C",
            "text": "lãi suất trái phiếu",
            "sourceText": "coupon rate"
          },
          {
            "id": "D",
            "text": "giá mua",
            "sourceText": "bid"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chiết khấu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q25",
        "number": "25",
        "prompt": "Phát biểu nào sau đây về quyền chọn mua kiểu Mỹ là không đúng?",
        "sourcePrompt": "Which of the following statements about an American call is not true?",
        "options": [
          {
            "id": "A",
            "text": "a.Giá trị thời gian của nó giảm khi sắp hết hạn",
            "sourceText": "Its time value decreases as expiration approaches"
          },
          {
            "id": "B",
            "text": "Giá trị tối đa của nó là giá cổ phiếu",
            "sourceText": "Its maximum value is the stock price"
          },
          {
            "id": "C",
            "text": "Nó có thể được thực hiện trước khi hết hạn",
            "sourceText": "It can be exercised prior to expiration"
          },
          {
            "id": "D",
            "text": "Nó trả cổ tức",
            "sourceText": "It pays dividends"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Nó trả cổ tức. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q26",
        "number": "26",
        "prompt": "Với một quyền chọn mua kiểu Mỹ có thời hạn dài hơn và quyền chọn mua kiểu Mỹ có thời hạn ngắn hơn với cùng các điều khoản, quyền chọn mua có thời hạn dài hơn phải luôn có giá trị.",
        "sourcePrompt": "Given a longer-lived American call and a shorter-lived American call with the same terms, the longer-lived call must always be worth",
        "options": [
          {
            "id": "A",
            "text": "tối đa giá trị của quyền chọn mua có thời gian tồn tại ngắn hơn",
            "sourceText": "at most the value of the shorter-lived call"
          },
          {
            "id": "B",
            "text": "tối thiểu giá trị của quyền chọn mua có thời gian tồn tại ngắn hơn",
            "sourceText": "at least as much as the shorter-lived call"
          },
          {
            "id": "C",
            "text": "hoàn toàn giống như quyền chọn mua có thời gian tồn tại ngắn hơn",
            "sourceText": "exactly the same as the shorter-lived call"
          },
          {
            "id": "D",
            "text": "quyền chọn mua có thời gian tồn tại ngắn hơn được chiết khấu theo quyền chọn mua có thời gian tồn tại lâu hơn",
            "sourceText": "the shorter-lived call discounted to the length of the longer-lived call"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: hoàn toàn giống như quyền chọn mua có thời gian tồn tại ngắn hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q27",
        "number": "27",
        "prompt": "Bất đẳng thức nào sau đây phát biểu đúng mối quan hệ giữa chênh lệch giá của hai quyền chọn mua kiểu Châu Âu chỉ khác nhau về giá thực hiện",
        "sourcePrompt": "Which of the following inequalities correctly states the relationship between the difference in the prices of two European calls that differ only by exercise price",
        "options": [
          {
            "id": "A",
            "text": "(X2­ – X1)(1 + r)-T ≥ Ce(S0,T,X1) – Ce(S0,T,X2)",
            "sourceText": "(X2¬ – X1)(1 + r)-T ≥ Ce(S0,T,X1) – Ce(S0,T,X2)"
          },
          {
            "id": "B",
            "text": "(X2­ – X1) ≥ Ce(S0,T,X2) – Ce(S0,T,X1)",
            "sourceText": "(X2¬ – X1) ≥ Ce(S0,T,X2) – Ce(S0,T,X1)"
          },
          {
            "id": "C",
            "text": "(X2 – X1)(1 + r)-T ≥ Ce(S0,T,X1) + Ce(S0,T,X2)",
            "sourceText": "(X2 – X1)(1 + r)-T ≥ Ce(S0,T,X1) + Ce(S0,T,X2)"
          },
          {
            "id": "D",
            "text": "(X2­ – X1) ≥ Ce(S0,T,X1) – Ce(S0,T,X2)",
            "sourceText": "(X2¬ – X1) ≥ Ce(S0,T,X1) – Ce(S0,T,X2)"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: (X2­ – X1)(1 + r)-T ≥ Ce(S0,T,X1) – Ce(S0,T,X2). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q28",
        "number": "28",
        "prompt": "Giả sử bạn quan sát một quyền chọn kiểu Châu Âu đối với một loại tiền tệ có tỷ giá hối đoái là S0 và tỷ giá phi rủi ro nước ngoài là r. Bất đẳng thức nào sau đây thể hiện đúng cận dưới của quyền chọn mua?",
        "sourcePrompt": "Suppose that you observe a European option on a currency with an exchange rate of S0 and a foreign risk-free rate of . Which of the following inequalities correctly expresses the lower bound of the call?",
        "options": [
          {
            "id": "A",
            "text": "Ce(S0,T,X) ≥ Max[0,S0(1 + r)-T + X(1 + r)-T]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T + X(1 + r)-T]"
          },
          {
            "id": "B",
            "text": "Ce(S0,T,X) ≥ Max[0,S0 – X(1 + r)-T]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0 – X(1 + )-T]"
          },
          {
            "id": "C",
            "text": "Ce(S0,T,X) ≥ Max[0,S0(1 + r)-T – X]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T – X]"
          },
          {
            "id": "D",
            "text": "Ce(S0,T,X) ≥ Max[0,S0(1 + r)-T – X(1 + r)-T]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T – X(1 + r)-T]"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Ce(S0,T,X) ≥ Max[0,S0(1 + r)-T – X(1 + r)-T]. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q29",
        "number": "29",
        "prompt": "Một tình huống trong đó việc thực hiện sớm quyền chọn bán kiểu Mỹ có thực được biện minh là",
        "sourcePrompt": "A situation in which early exercise of an American put can be justified is",
        "options": [
          {
            "id": "A",
            "text": "a.phá sản",
            "sourceText": "bankruptcy"
          },
          {
            "id": "B",
            "text": "sáp nhập",
            "sourceText": "merger"
          },
          {
            "id": "C",
            "text": "nếu X vượt quá S0 lớn hơn bất kỳ chi phí giao dịch nào.",
            "sourceText": "if X exceeds S0 by greater than any transaction costs."
          },
          {
            "id": "D",
            "text": "cả A và B",
            "sourceText": "both a and b"
          },
          {
            "id": "E",
            "text": "cả a và b và c",
            "sourceText": "both a and b and c"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: a.phá sản. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q30",
        "number": "30",
        "prompt": "Ảnh hưởng của sự biến động đối với giá của quyền chọn mua/bán là",
        "sourcePrompt": "The effect of volatility on a call/put’s price is",
        "options": [
          {
            "id": "A",
            "text": "a.giảm giá do giảm tổn thất có thể",
            "sourceText": "decreased price due to decreased possible losses"
          },
          {
            "id": "B",
            "text": "biến động danh nghĩa sẽ không ảnh hưởng đáng kể đến giá của một cuộc gọi / đặt",
            "sourceText": "nominal volatility will not noticeably effect a call/put’s price"
          },
          {
            "id": "C",
            "text": "tăng giá do tăng lợi nhuận có thể",
            "sourceText": "increased price due to increased possible gains"
          },
          {
            "id": "D",
            "text": "giá giảm do tổn thất có thể tăng",
            "sourceText": "decreased price due to increased possible losses"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: tăng giá do tăng lợi nhuận có thể. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 4,
    "title": "Mô hình nhị phân định giá quyền chọn",
    "sourceTitle": "CHAPTER 4: OPTION PRICING MODELS: THE BINOMIAL MODEL",
    "summary": "Chương 4 tập trung vào mô hình nhị phân định giá quyền chọn. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Binomial tree",
      "Risk-neutral probability",
      "Replicating portfolio",
      "Delta",
      "One-step và multi-step"
    ],
    "theory": [
      {
        "heading": "Ý tưởng mô hình nhị phân",
        "body": "Mô hình nhị phân giả định giá tài sản mỗi bước chỉ có thể đi lên hoặc đi xuống. Từ hai trạng thái đó, ta xây cây giá và chiết khấu giá trị kỳ vọng trung lập rủi ro."
      },
      {
        "heading": "Xác suất trung lập rủi ro",
        "body": "Risk-neutral probability không phải xác suất thật ngoài đời. Nó là công cụ định giá sao cho lợi suất kỳ vọng của tài sản bằng lãi suất phi rủi ro trong thế giới định giá."
      },
      {
        "heading": "Danh mục mô phỏng",
        "body": "Giá option có thể được suy ra bằng danh mục gồm cổ phiếu và trái phiếu mô phỏng đúng payoff của option. Nếu payoff giống nhau thì giá phải nhất quán theo quy luật một giá."
      }
    ],
    "questions": [
      {
        "id": "c4-q1",
        "number": "1",
        "prompt": "Một danh mục đầu tư kết hợp cổ phiếu cơ sở với một vị thế bán quyền chọn được gọi là",
        "sourcePrompt": "A portfolio that combines the underlying stock and a short position in an option is called",
        "options": [
          {
            "id": "A",
            "text": "danh mục kinh doanh chênh lệch rủi ro (risk arbitrage portfolio)",
            "sourceText": "a risk arbitrage portfolio"
          },
          {
            "id": "B",
            "text": "danh mục phòng ngừa rủi ro (hedge portfolio)",
            "sourceText": "a hedge portfolio"
          },
          {
            "id": "C",
            "text": "danh mục theo tỷ số (ratio portfolio)",
            "sourceText": "a ratio portfolio"
          },
          {
            "id": "D",
            "text": "danh mục hai trạng thái (two-state portfolio)",
            "sourceText": "a two-state portfolio"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: danh mục phòng ngừa rủi ro (hedge portfolio). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q2",
        "number": "2",
        "prompt": "Trong mô hình nhị thức, nếu giá quyền chọn mua trên thị trường cao hơn giá do mô hình tính ra, anh/chị nên",
        "sourcePrompt": "In a binomial model, if the call price in the market is higher than the call price given by the model, you should",
        "options": [
          {
            "id": "A",
            "text": "bán quyền chọn mua và bán khống cổ phiếu",
            "sourceText": "sell the call and sell short the stock"
          },
          {
            "id": "B",
            "text": "mua quyền chọn mua và bán khống cổ phiếu",
            "sourceText": "buy the call and sell short the stock"
          },
          {
            "id": "C",
            "text": "mua cổ phiếu và bán quyền chọn mua",
            "sourceText": "buy the stock and sell the call"
          },
          {
            "id": "D",
            "text": "mua quyền chọn mua và mua cổ phiếu",
            "sourceText": "buy the call and buy the stock"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: mua cổ phiếu và bán quyền chọn mua. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q3",
        "number": "3",
        "prompt": "Trong mô hình nhị thức hai giai đoạn, một quyền chọn mua được định giá sai sẽ tạo ra lợi nhuận từ kinh doanh chênh lệch giá khi",
        "sourcePrompt": "In a two-period binomial world, a mispriced call will lead to an arbitrage profit if",
        "options": [
          {
            "id": "A",
            "text": "tỷ số phòng ngừa hợp lý được duy trì xuyên suốt hai giai đoạn",
            "sourceText": "the proper hedge ratio is maintained over the two periods"
          },
          {
            "id": "B",
            "text": "danh mục phòng ngừa được thanh lý sau một giai đoạn",
            "sourceText": "the hedge portfolio is terminated after one period"
          },
          {
            "id": "C",
            "text": "quyền chọn chuyển từ định giá quá cao sang định giá quá thấp hoặc ngược lại",
            "sourceText": "the option goes from over- to underpriced or vice versa"
          },
          {
            "id": "D",
            "text": "quyền chọn vẫn bị định giá sai trong cả hai giai đoạn",
            "sourceText": "the option remains mispriced over both periods"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: tỷ số phòng ngừa hợp lý được duy trì xuyên suốt hai giai đoạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q4",
        "number": "4",
        "prompt": "Các giá trị u và d trong mô hình nhị thức là giá trị nào sau đây?",
        "sourcePrompt": "The values of u and d are which of the following?",
        "options": [
          {
            "id": "A",
            "text": "tỷ suất sinh lời của cổ phiếu nếu giá tăng và giảm tương ứng",
            "sourceText": "the return on the stock if it goes up and down, respectively"
          },
          {
            "id": "B",
            "text": "nghịch đảo của tỷ lệ giữa xác suất tăng và giảm, tương ứng với lãi suất phi rủi ro",
            "sourceText": "the inverse of the ratio of the up and down probabilities, respectively, and the risk-free rate"
          },
          {
            "id": "C",
            "text": "xác suất chuẩn (normal probabilities) của các biến động tăng và giảm",
            "sourceText": "the normal probabilities of up and down movements, respectively"
          },
          {
            "id": "D",
            "text": "một cộng với tỷ suất sinh lời của cổ phiếu nếu giá tăng và giảm tương ứng",
            "sourceText": "one plus the return on the stock if it goes up and down, respectively"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: một cộng với tỷ suất sinh lời của cổ phiếu nếu giá tăng và giảm tương ứng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q5",
        "number": "5",
        "prompt": "Nếu cổ phiếu chi trả một khoản cổ tức bằng tiền (dạng số tuyệt đối) và giá cổ phiếu (đã bao gồm cổ tức) tuân theo các hệ số tăng/giảm nhị thức, điều nào sau đây sẽ xảy ra?",
        "sourcePrompt": "If the stock pays a specific dollar dividend and the stock price, to include the dividend, follows the binomial up and down factors, which of the following will happen?",
        "options": [
          {
            "id": "A",
            "text": "cây nhị thức sẽ trùng nhánh (recombine)",
            "sourceText": "the binomial tree will recombine"
          },
          {
            "id": "B",
            "text": "cây nhị thức sẽ không trùng nhánh",
            "sourceText": "the binomial tree will not recombine"
          },
          {
            "id": "C",
            "text": "quyền chọn sẽ bị định giá sai",
            "sourceText": "the option will be mispriced"
          },
          {
            "id": "D",
            "text": "không thể tạo được lợi nhuận kinh doanh chênh lệch giá",
            "sourceText": "an arbitrage profit will not be possible"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: cây nhị thức sẽ không trùng nhánh. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q6",
        "number": "6",
        "prompt": "Khi định giá quyền chọn bán bằng mô hình nhị thức, điều nào sau đây là đúng?",
        "sourcePrompt": "When puts are priced with the binomial model, which of the following is true?",
        "options": [
          {
            "id": "A",
            "text": "quyền chọn bán phải là kiểu Mỹ",
            "sourceText": "the puts must be American"
          },
          {
            "id": "B",
            "text": "quyền chọn bán không thể được phòng ngừa rủi ro đúng cách",
            "sourceText": "the puts cannot be properly hedged"
          },
          {
            "id": "C",
            "text": "quyền chọn bán sẽ vi phạm ngang giá quyền chọn mua – bán (put-call parity)",
            "sourceText": "the puts will violate put-call parity"
          },
          {
            "id": "D",
            "text": "tỷ số phòng ngừa bằng 1 trên toàn bộ cây nhị thức",
            "sourceText": "the hedge ratio is one throughout the tree"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không phương án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q7",
        "number": "7",
        "prompt": "Nếu mở rộng mô hình nhị thức thành nhiều giai đoạn với tuổi đời quyền chọn cố định, cần thực hiện điều chỉnh nào sau đây?",
        "sourcePrompt": "If the binomial model is extended to multiple periods for a fixed option life, which of the following adjustments must be made?",
        "options": [
          {
            "id": "A",
            "text": "phải tăng các hệ số tăng và giảm",
            "sourceText": "the up and down factors must be increased"
          },
          {
            "id": "B",
            "text": "phải tăng lãi suất phi rủi ro",
            "sourceText": "the risk-free rate must be increased"
          },
          {
            "id": "C",
            "text": "phải giảm các hệ số tăng, giảm và lãi suất phi rủi ro",
            "sourceText": "the up and down factors and the risk-free rate must be decreased"
          },
          {
            "id": "D",
            "text": "phải giảm tỷ lệ thuận giá cổ phiếu ban đầu",
            "sourceText": "the initial stock price must be proportionately reduced"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: phải giảm các hệ số tăng, giảm và lãi suất phi rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q8",
        "number": "8",
        "prompt": "Khi cổ phiếu chi trả tỷ suất cổ tức không đổi (constant dividend yield), những loại nào sau đây không phải quyền chọn phụ thuộc đường đi (path-dependent)?",
        "sourcePrompt": "Which of the following are not path-dependent options when the stock pays a constant dividend yield?",
        "options": [
          {
            "id": "A",
            "text": "quyền chọn mua kiểu Châu Âu và quyền chọn bán kiểu Châu Âu",
            "sourceText": "European calls and European puts"
          },
          {
            "id": "B",
            "text": "quyền chọn mua kiểu Châu Âu và quyền chọn bán kiểu Mỹ",
            "sourceText": "European calls and American puts"
          },
          {
            "id": "C",
            "text": "quyền chọn bán kiểu Mỹ và quyền chọn bán kiểu Châu Âu",
            "sourceText": "American puts and European puts"
          },
          {
            "id": "D",
            "text": "quyền chọn bán kiểu Mỹ và quyền chọn mua kiểu Châu Âu",
            "sourceText": "American puts and European calls"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: quyền chọn mua kiểu Châu Âu và quyền chọn bán kiểu Châu Âu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q9",
        "number": "9",
        "prompt": "Trong cây nhị thức không trùng nhánh, số đường đi có thể xảy ra sau ba giai đoạn là",
        "sourcePrompt": "In a non-recombining tree, the number of paths that will occur after three periods is",
        "options": [
          {
            "id": "A",
            "text": "ba",
            "sourceText": "three"
          },
          {
            "id": "B",
            "text": "bốn",
            "sourceText": "four"
          },
          {
            "id": "C",
            "text": "mười",
            "sourceText": "ten"
          },
          {
            "id": "D",
            "text": "tám",
            "sourceText": "eight"
          },
          {
            "id": "E",
            "text": "sáu",
            "sourceText": "six"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tám. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q10",
        "number": "10",
        "prompt": "Khi số giai đoạn trong mô hình nhị thức rất lớn, giá trị của quyền chọn mua kiểu Châu Âu sẽ",
        "sourcePrompt": "When the number of time periods in a binomial model is large, a European call option value does what?",
        "options": [
          {
            "id": "A",
            "text": "dao động xung quanh giá trị nội tại",
            "sourceText": "fluctuates around its intrinsic value"
          },
          {
            "id": "B",
            "text": "hội tụ về một giá trị xác định",
            "sourceText": "converges to a specific value"
          },
          {
            "id": "C",
            "text": "tăng không giới hạn",
            "sourceText": "increases without limit"
          },
          {
            "id": "D",
            "text": "hội tụ về cận dưới của quyền chọn kiểu Châu Âu",
            "sourceText": "converges to the European lower bound"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hội tụ về một giá trị xác định. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q11",
        "number": "11",
        "prompt": "Khi số giai đoạn trong mô hình nhị thức rất lớn, xác suất nhị thức của một bước tăng giá sẽ",
        "sourcePrompt": "When the number of time periods in a binomial model is large, what happens to the binomial probability of an up move?",
        "options": [
          {
            "id": "A",
            "text": "tiến tới 1,0",
            "sourceText": "it approaches 1.0"
          },
          {
            "id": "B",
            "text": "tiến tới 0",
            "sourceText": "it approaches zero"
          },
          {
            "id": "C",
            "text": "dao động không theo quy luật",
            "sourceText": "it fluctuates without pattern"
          },
          {
            "id": "D",
            "text": "hội tụ về 0,5",
            "sourceText": "it converges to 0.5"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên Hãy xét một thế giới nhị thức trong đó giá cổ phiếu hiện tại là 80 có thể tăng 10% hoặc giảm 8%. Lãi suất phi rủi ro là 4%. Giả định mô hình một giai đoạn. Trả lời các câu 12 đến 15 cho quyền chọn mua có giá thực hiện 80.",
            "sourceText": "none of the above Consider a binomial world in which the current stock price of 80 can either go up by 10 percent or down by 8 percent. The risk-free rate is 4 percent. Assume a one-period world. Answer questions 12 through 15 about a call with an exercise price of 80."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: hội tụ về 0,5. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q12",
        "number": "12",
        "prompt": "Giá quyền chọn mua sẽ là bao nhiêu nếu giá cổ phiếu tăng?",
        "sourcePrompt": "What would be the call's price if the stock goes up?",
        "options": [
          {
            "id": "A",
            "text": "3,60",
            "sourceText": "3.60"
          },
          {
            "id": "B",
            "text": "8,00",
            "sourceText": "8.00"
          },
          {
            "id": "C",
            "text": "5,71",
            "sourceText": "5.71"
          },
          {
            "id": "D",
            "text": "4,39",
            "sourceText": "4.39"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 8,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q13",
        "number": "13",
        "prompt": "Giá quyền chọn mua sẽ là bao nhiêu nếu giá cổ phiếu giảm?",
        "sourcePrompt": "What would be the call's price if the stock goes down?",
        "options": [
          {
            "id": "A",
            "text": "8,00",
            "sourceText": "8.00"
          },
          {
            "id": "B",
            "text": "3,60",
            "sourceText": "3.60"
          },
          {
            "id": "C",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "D",
            "text": "9,00",
            "sourceText": "9.00"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 0,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q14",
        "number": "14",
        "prompt": "Tỷ số phòng ngừa rủi ro (hedge ratio) bằng bao nhiêu?",
        "sourcePrompt": "What is the hedge ratio?",
        "options": [
          {
            "id": "A",
            "text": "0,429",
            "sourceText": "0.429"
          },
          {
            "id": "B",
            "text": "0,714",
            "sourceText": "0.714"
          },
          {
            "id": "C",
            "text": "0,571",
            "sourceText": "0.571"
          },
          {
            "id": "D",
            "text": "0,823",
            "sourceText": "0.823"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không phương án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q15",
        "number": "15",
        "prompt": "Giá trị lý thuyết của quyền chọn mua là bao nhiêu?",
        "sourcePrompt": "What is the theoretical value of the call?",
        "options": [
          {
            "id": "A",
            "text": "8,00",
            "sourceText": "8.00"
          },
          {
            "id": "B",
            "text": "4,39",
            "sourceText": "4.39"
          },
          {
            "id": "C",
            "text": "5,15",
            "sourceText": "5.15"
          },
          {
            "id": "D",
            "text": "5,36",
            "sourceText": "5.36"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên Bây giờ mở rộng mô hình nhị thức một giai đoạn thành thế giới hai giai đoạn. Trả lời các câu 16 đến 18.",
            "sourceText": "none of the above Now extend the one-period binomial model to a two-period world. Answer questions 16 through 18."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 5,15. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q16",
        "number": "16",
        "prompt": "Giá trị của quyền chọn mua bằng bao nhiêu nếu cổ phiếu tăng giá rồi giảm giá?",
        "sourcePrompt": "What is the value of the call if the stock goes up, then down?",
        "options": [
          {
            "id": "A",
            "text": "0,96",
            "sourceText": "0.96"
          },
          {
            "id": "B",
            "text": "16,80",
            "sourceText": "16.80"
          },
          {
            "id": "C",
            "text": "8,00",
            "sourceText": "8.00"
          },
          {
            "id": "D",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,96. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q17",
        "number": "17",
        "prompt": "Tỷ số phòng ngừa rủi ro bằng bao nhiêu nếu cổ phiếu giảm giá ở giai đoạn đầu?",
        "sourcePrompt": "What is the hedge ratio if the stock goes down one period?",
        "options": [
          {
            "id": "A",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "B",
            "text": "0,0725",
            "sourceText": "0.0725"
          },
          {
            "id": "C",
            "text": "1,00",
            "sourceText": "1.00"
          },
          {
            "id": "D",
            "text": "0,73",
            "sourceText": "0.73"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 0,0725. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q18",
        "number": "18",
        "prompt": "Giá trị hiện tại của quyền chọn mua bằng bao nhiêu?",
        "sourcePrompt": "What is the current value of the call?",
        "options": [
          {
            "id": "A",
            "text": "8,00",
            "sourceText": "8.00"
          },
          {
            "id": "B",
            "text": "7,30",
            "sourceText": "7.30"
          },
          {
            "id": "C",
            "text": "11,13",
            "sourceText": "11.13"
          },
          {
            "id": "D",
            "text": "0,619",
            "sourceText": "0.619"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 7,30. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q19",
        "number": "19",
        "prompt": "Trong mô hình nhị thức, nếu một quyền chọn không có khả năng kết thúc ở trạng thái lỗ (out-of-the-money), tỷ số phòng ngừa rủi ro sẽ là",
        "sourcePrompt": "In the binomial model, if an option has no chance of expiring out-of-the-money, the hedge ratio will be",
        "options": [
          {
            "id": "A",
            "text": "0,5",
            "sourceText": "0.5"
          },
          {
            "id": "B",
            "text": "vô cùng",
            "sourceText": "infinite"
          },
          {
            "id": "C",
            "text": "1",
            "sourceText": "1"
          },
          {
            "id": "D",
            "text": "0",
            "sourceText": "0"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 1. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q20",
        "number": "20",
        "prompt": "Giả sử S = 70, X = 65, r = 0,05, p = 0,6, Cu = 7,17, Cd = 1,22 và còn một giai đoạn cuối cùng trong tuổi đời của quyền chọn mua kiểu Mỹ. Quyền chọn này có giá trị bằng bao nhiêu?",
        "sourcePrompt": "Suppose S = 70, X = 65, r = 0.05, p = 0.6, Cu = 7.17, Cd = 1.22 and there is one period left in an American call's life. What will the option be worth?",
        "options": [
          {
            "id": "A",
            "text": "6,83",
            "sourceText": "6.83"
          },
          {
            "id": "B",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "4,56",
            "sourceText": "4.56"
          },
          {
            "id": "D",
            "text": "5,00",
            "sourceText": "5.00"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 5,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q21",
        "number": "21",
        "prompt": "Trong mô hình nhị thức một giai đoạn với Su = 49,5; Sd = 40,5; p = 0,8; r = 0,06; S = 45 và X = 50, giá trị của quyền chọn bán kiểu Châu Âu bằng bao nhiêu?",
        "sourcePrompt": "In a one-period binomial model with Su = 49.5, Sd = 40.5, p = 0.8, r = 0.06, S = 45 and X = 50, what is a European put worth?",
        "options": [
          {
            "id": "A",
            "text": "2,17",
            "sourceText": "2.17"
          },
          {
            "id": "B",
            "text": "0,50",
            "sourceText": "0.50"
          },
          {
            "id": "C",
            "text": "9,50",
            "sourceText": "9.50"
          },
          {
            "id": "D",
            "text": "5,00",
            "sourceText": "5.00"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 2,17. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q22",
        "number": "22",
        "prompt": "Phát biểu nào sau đây về mô hình nhị thức là KHÔNG đúng?",
        "sourcePrompt": "Which of the following statements about the binomial model is incorrect?",
        "options": [
          {
            "id": "A",
            "text": "nó hội tụ về mô hình Black-Scholes-Merton",
            "sourceText": "it converges to the Black-Scholes-Merton model"
          },
          {
            "id": "B",
            "text": "nó có thể tính đến quyền thực hiện sớm (early exercise)",
            "sourceText": "it can accommodate early exercise"
          },
          {
            "id": "C",
            "text": "nó chỉ cho phép có hai mức giá cổ phiếu tại thời điểm đáo hạn",
            "sourceText": "it allows only two stock prices at expiration"
          },
          {
            "id": "D",
            "text": "nó có thể được mở rộng cho số lượng giai đoạn lớn",
            "sourceText": "it can be extended to a large number of time periods"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: nó chỉ cho phép có hai mức giá cổ phiếu tại thời điểm đáo hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q23",
        "number": "23",
        "prompt": "Một cổ phiếu có giá 50 có thể tăng hoặc giảm 10% qua hai giai đoạn. Lãi suất phi rủi ro là 4%. Giá trị nào sau đây là giá đúng của quyền chọn bán kiểu Mỹ với giá thực hiện 55?",
        "sourcePrompt": "A stock priced at 50 can go up or down by 10 percent over two periods. The risk-free rate is 4 percent. Which of the following is the correct price of an American put with an exercise price of 55?",
        "options": [
          {
            "id": "A",
            "text": "7,88",
            "sourceText": "7.88"
          },
          {
            "id": "B",
            "text": "3,38",
            "sourceText": "3.38"
          },
          {
            "id": "C",
            "text": "4,00",
            "sourceText": "4.00"
          },
          {
            "id": "D",
            "text": "5,00",
            "sourceText": "5.00"
          },
          {
            "id": "E",
            "text": "1,65",
            "sourceText": "1.65"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 5,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q24",
        "number": "24",
        "prompt": "Xác định giá trị của u trong bài toán nhị thức ba giai đoạn khi tuổi đời quyền chọn là nửa năm và độ biến động (volatility) là 0,48. Sử dụng công thức tính u không cần đến lãi suất phi rủi ro.",
        "sourcePrompt": "Determine the value of u for a three period binomial problem when the option’s life is one-half a year and the volatility is 0.48. Use the model for u that does not require the risk-free rate.",
        "options": [
          {
            "id": "A",
            "text": "1,22",
            "sourceText": "1.22"
          },
          {
            "id": "B",
            "text": "1,48",
            "sourceText": "1.48"
          },
          {
            "id": "C",
            "text": "1,40",
            "sourceText": "1.40"
          },
          {
            "id": "D",
            "text": "1,32",
            "sourceText": "1.32"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1,22. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q25",
        "number": "25",
        "prompt": "Phát biểu nào sau đây về mô hình định giá quyền chọn nhị thức KHÔNG phải lúc nào cũng đúng?",
        "sourcePrompt": "Which of the following statements about the binomial option pricing model is not always true?",
        "options": [
          {
            "id": "A",
            "text": "nó có thể phản ánh tác động của việc thực hiện sớm",
            "sourceText": "it can capture the effect of early exercise"
          },
          {
            "id": "B",
            "text": "nó có thể tính đến số lượng lớn các mức giá cổ phiếu khả dĩ tại thời điểm đáo hạn",
            "sourceText": "it can accommodate a large number of possible stock prices at expiration"
          },
          {
            "id": "C",
            "text": "nó phản ánh tác động của giá cổ phiếu, giá thực hiện, lãi suất phi rủi ro, độ biến động và thời gian đến hạn",
            "sourceText": "it reflects the effects of the stock price, exercise price, risk-free rate, volatility and time to expiration"
          },
          {
            "id": "D",
            "text": "nó cho ra mức giá mà quyền chọn sẽ được giao dịch trên thị trường",
            "sourceText": "it gives the price at which the option will trade in the market."
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó cho ra mức giá mà quyền chọn sẽ được giao dịch trên thị trường. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q26",
        "number": "26",
        "prompt": "Tất cả các biến số sau đây đều được dùng để xác định giá quyền chọn mua, NGOẠI TRỪ",
        "sourcePrompt": "All of the following are variables used to determine a call option’s price except",
        "options": [
          {
            "id": "A",
            "text": "lãi suất phi rủi ro",
            "sourceText": "the risk-free rate"
          },
          {
            "id": "B",
            "text": "xác suất biến động giá cổ phiếu",
            "sourceText": "the probability of stock price movement"
          },
          {
            "id": "C",
            "text": "giá thực hiện",
            "sourceText": "the exercise price"
          },
          {
            "id": "D",
            "text": "các mức giá cổ phiếu khả dĩ tại thời điểm đáo hạn",
            "sourceText": "the possible future stock prices at expiration"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: xác suất biến động giá cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q27",
        "number": "27",
        "prompt": "Định giá quyền chọn bán bằng mô hình nhị thức theo cùng một quy trình như định giá quyền chọn mua, NGOẠI TRỪ ở chỗ",
        "sourcePrompt": "Pricing a put with the binomial model is the same procedure as pricing with a call, except that the",
        "options": [
          {
            "id": "A",
            "text": "cổ phiếu cơ sở không được chi trả cổ tức",
            "sourceText": "underlying stock must not pay dividends"
          },
          {
            "id": "B",
            "text": "mô hình nhị thức không thể xác định được giá trị tại thời điểm đáo hạn",
            "sourceText": "binomial model cannot account for expiration payoffs"
          },
          {
            "id": "C",
            "text": "giá trị của tài sản cơ sở phải được chiết khấu về thời điểm hiện tại",
            "sourceText": "value of the underlying must be discounted back to the current time period"
          },
          {
            "id": "D",
            "text": "giá trị tại thời điểm đáo hạn phản ánh việc quyền chọn là quyền được bán cổ phiếu cơ sở",
            "sourceText": "expiration payoffs reflect the fact that the option is the right to sell the underlying stock"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giá trị tại thời điểm đáo hạn phản ánh việc quyền chọn là quyền được bán cổ phiếu cơ sở. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q28",
        "number": "28",
        "prompt": "Tất cả các nội dung sau đều là ứng dụng thực tiễn của mô hình nhị thức, NGOẠI TRỪ",
        "sourcePrompt": "All of the following are practical applications of the binomial model except",
        "options": [
          {
            "id": "A",
            "text": "lựa chọn liên quan đến quyền chọn thực (real options)",
            "sourceText": "choices regarding real options"
          },
          {
            "id": "B",
            "text": "quyền chọn liên quan đến chương trình khuyến khích cho ban điều hành",
            "sourceText": "options regarding executive incentive plans"
          },
          {
            "id": "C",
            "text": "các mô hình trong đó giá cổ phiếu có thể tăng, giảm, hoặc không đổi ở giai đoạn kế tiếp",
            "sourceText": "models in which the stock price can go up, down, or remain constant in the next period"
          },
          {
            "id": "D",
            "text": "quyền chọn kèm theo (embedded options) trong các chứng khoán nợ",
            "sourceText": "embedded options within debt securities"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: các mô hình trong đó giá cổ phiếu có thể tăng, giảm, hoặc không đổi ở giai đoạn kế tiếp. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q29",
        "number": "29",
        "prompt": "Xác định giá trị của d trong mô hình nhị thức bốn giai đoạn khi tuổi đời quyền chọn là một phần tư năm và độ biến động là 0,64. Sử dụng công thức cho u và d không cần đến lãi suất phi rủi ro.",
        "sourcePrompt": "Determine the value of d for a four period binomial model when the option’s life is one-fourth of a year and the volatility is 0.64. Use the model for u and d that does not require the risk-free rate.",
        "options": [
          {
            "id": "A",
            "text": "0,85",
            "sourceText": "0.85"
          },
          {
            "id": "B",
            "text": "1,17",
            "sourceText": "1.17"
          },
          {
            "id": "C",
            "text": "2,56",
            "sourceText": "2.56"
          },
          {
            "id": "D",
            "text": "0,90",
            "sourceText": "0.90"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,85. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q30",
        "number": "30",
        "prompt": "Mô hình định giá quyền chọn nhị thức sẽ hội tụ về giá trị nào khi số giai đoạn tăng lên?",
        "sourcePrompt": "The binomial option pricing model will converge to what value as the number of periods increases?",
        "options": [
          {
            "id": "A",
            "text": "một giá trị ngẫu nhiên",
            "sourceText": "a random value"
          },
          {
            "id": "B",
            "text": "giá trị Black-Scholes-Merton của quyền chọn",
            "sourceText": "the Black-Scholes-Merton value of the option"
          },
          {
            "id": "C",
            "text": "độ biến động nội tại (intrinsic volatility) của quyền chọn",
            "sourceText": "the intrinsic volatility of the option"
          },
          {
            "id": "D",
            "text": "giá trị thực của tài sản cơ sở",
            "sourceText": "the true value of the underlying"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá trị Black-Scholes-Merton của quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 5,
    "title": "Mô hình Black-Scholes-Merton",
    "sourceTitle": "CHAPTER 5: OPTION PRICING MODELS: THE",
    "summary": "Chương 5 tập trung vào mô hình black-scholes-merton. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Black-Scholes-Merton",
      "Delta hedging",
      "Volatility",
      "N(d1), N(d2)",
      "No dividends"
    ],
    "theory": [
      {
        "heading": "Black-Scholes-Merton dùng để làm gì",
        "body": "Mô hình Black-Scholes-Merton định giá option kiểu châu Âu trên tài sản không trả cổ tức hoặc có giả định cổ tức rõ ràng. Mô hình dùng S, X, r, T và độ biến động sigma."
      },
      {
        "heading": "Vai trò của volatility",
        "body": "Volatility càng cao thì cả call và put thường càng đắt vì khả năng giá đi xa khỏi strike lớn hơn. Người mua option hưởng lợi từ biến động lớn."
      },
      {
        "heading": "Delta hedging",
        "body": "Delta cho biết giá option thay đổi xấp xỉ bao nhiêu khi giá tài sản cơ sở thay đổi một đơn vị. Delta dùng để lập chiến lược hedge vị thế option."
      }
    ],
    "questions": [
      {
        "id": "c5-q1",
        "number": "1",
        "prompt": "Giá trị nào mà mô hình Black-Scholes-Merton dự đoán cho quyền chọn mua? (Do sự khác biệt trong cách làm tròn, phép tính của bạn có thể hơi khác một chút. Bạn chỉ nên chọn “không có câu nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 0,1.)",
        "sourcePrompt": "What value does the Black-Scholes-Merton model predict for the call? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 cents.)",
        "options": [
          {
            "id": "A",
            "text": "5,35",
            "sourceText": "5.35"
          },
          {
            "id": "B",
            "text": "1,10",
            "sourceText": "1.10"
          },
          {
            "id": "C",
            "text": "4,73",
            "sourceText": "4.73"
          },
          {
            "id": "D",
            "text": "6,50",
            "sourceText": "6.50"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 4,73. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q2",
        "number": "2",
        "prompt": "Giả sử bạn cảm thấy rằng quyền chọn mua bị định giá cao. Bạn nên sử dụng chiến lược nào để giải thích việc định giá sai đó? (Do sự khác biệt trong cách làm tròn, phép tính của bạn có thể hơi khác một chút. Bạn chỉ nên chọn “không có câu nào ở trên” nếu câu trả lời của bạn khác hơn 10 cổ phiếu.)",
        "sourcePrompt": "Suppose you feel that the call is overpriced. What strategy should you use to exploit the apparent mis-valuation? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 shares.)",
        "options": [
          {
            "id": "A",
            "text": "mua 791 cổ phiếu, bán 1,000 quyền chọn mua",
            "sourceText": "buy 791 shares, sell 1,000 calls"
          },
          {
            "id": "B",
            "text": "mua 705 cổ phiếu, bán 1,000 quyền chọn mua",
            "sourceText": "buy 705 shares, sell 1,000 calls"
          },
          {
            "id": "C",
            "text": "bán không 791 cổ phiếu, mua 1,000 quyền chọn mua",
            "sourceText": "sell short 791 shares, buy 1,000 calls"
          },
          {
            "id": "D",
            "text": "bán khống 705 cổ phiếu, mua 1,000 quyền chọn mua",
            "sourceText": "sell short 705 shares, buy 1,000 calls"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: mua 791 cổ phiếu, bán 1,000 quyền chọn mua. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q3",
        "number": "3",
        "prompt": "Giá của một quyền chọn bán cổ phiếu là: (Do sự khác biệt trong cách làm tròn, phép tính của bạn có thể hơi khác. Bạn chỉ nên chọn “không có câu nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 0,1.)",
        "sourcePrompt": "The price of a put on the stock is: (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 cents.)",
        "options": [
          {
            "id": "A",
            "text": "0,85",
            "sourceText": "0.85"
          },
          {
            "id": "B",
            "text": "8,64",
            "sourceText": "8.64"
          },
          {
            "id": "C",
            "text": "2,35",
            "sourceText": "2.35"
          },
          {
            "id": "D",
            "text": "4,88",
            "sourceText": "4.88"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,85. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q4",
        "number": "4",
        "prompt": "Để xây dựng một phòng ngừa rủi ro, số lượng quyền chọn bán trên 100 cổ phiếu được mua là: (Do sự khác biệt trong cách làm tròn, phép tính của bạn có thể hơi khác một chút. Bạn chỉ nên chọn “không có trường hợp nào ở trên” nếu câu trả lời của bạn khác hơn 0,01.)",
        "sourcePrompt": "To construct a riskless hedge, the number of puts per 100 shares purchased is: (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 0.01.)",
        "options": [
          {
            "id": "A",
            "text": "0,7580",
            "sourceText": "0.7580"
          },
          {
            "id": "B",
            "text": "0,2420",
            "sourceText": "0.2420"
          },
          {
            "id": "C",
            "text": "–0,2480",
            "sourceText": "–0.2480"
          },
          {
            "id": "D",
            "text": "–0,6628",
            "sourceText": "–0.6628"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có câu nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q5",
        "number": "5",
        "prompt": "Vega của quyền chọn mua là: (Do sự khác biệt trong cách làm tròn các phép tính của bạn có thể hơi khác một chút. Bạn chỉ nên chọn “không có câu nào ở trên” nếu câu trả lời của bạn khác hơn 0,05.)",
        "sourcePrompt": "The call's vega is: (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 0.05.)",
        "options": [
          {
            "id": "A",
            "text": "–3,02",
            "sourceText": "–3.02"
          },
          {
            "id": "B",
            "text": "0,046",
            "sourceText": "0.046"
          },
          {
            "id": "C",
            "text": "–0,792",
            "sourceText": "–0.792"
          },
          {
            "id": "D",
            "text": "4,67",
            "sourceText": "4.67"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 4,67. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q6",
        "number": "6",
        "prompt": "Nếu giá quyền chọn mua thực tế là 3,79, độ lệch chuẩn hàm ý là",
        "sourcePrompt": "If the actual call price is 3.79, the implied standard deviation is",
        "options": [
          {
            "id": "A",
            "text": "0,25",
            "sourceText": "0.25"
          },
          {
            "id": "B",
            "text": "lớn hơn 0,25",
            "sourceText": "greater than 0.25"
          },
          {
            "id": "C",
            "text": "ít hơn 0,25",
            "sourceText": "less than 0.25"
          },
          {
            "id": "D",
            "text": "vô hạn",
            "sourceText": "infinite"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: ít hơn 0,25. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q7",
        "number": "7",
        "prompt": "Nếu bây giờ chúng ta giả đị nh rằng cổ phiếu trả cổ tức với tỷ lệ cố định đã biết là 3,5%, chúng ta nên sử dụng giá cổ phiếu nào trong mô hình? (Do sự khác biệt trong cách làm tròn, phép tính của bạn có thể hơi khác một chút. Bạn chỉ nên chọn “không có câu nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 0,1.)",
        "sourcePrompt": "If we now assume that the stock pays a dividend at a known constant rate of 3.5 percent, what stock price should we use in the model? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 cents.)",
        "options": [
          {
            "id": "A",
            "text": "22,60",
            "sourceText": "22.60"
          },
          {
            "id": "B",
            "text": "19,65",
            "sourceText": "19.65"
          },
          {
            "id": "C",
            "text": "23,00",
            "sourceText": "23.00"
          },
          {
            "id": "D",
            "text": "21,99",
            "sourceText": "21.99"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 22,60. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q8",
        "number": "8",
        "prompt": "Nếu bây giờ chúng ta giả định rằng cổ phiếu trả một cổ tức duy nhất là 2,25 trong ba tháng, chúng ta nên sử dụng giá cổ phiếu nào trong mô hình? (Do sự khác biệt trong cách làm tròn, phép tính của bạn có thể hơi khác một chút. Bạn chỉ nên chọn “không có câu nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 0,1.)",
        "sourcePrompt": "If we now assume that the stock pays a single dividend of 2.25 in three months, what stock price should we use in the model? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 cents.)",
        "options": [
          {
            "id": "A",
            "text": "17,75",
            "sourceText": "17.75"
          },
          {
            "id": "B",
            "text": "20,75",
            "sourceText": "20.75"
          },
          {
            "id": "C",
            "text": "20,00",
            "sourceText": "20.00"
          },
          {
            "id": "D",
            "text": "20,80",
            "sourceText": "20.80"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 20,80. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q9",
        "number": "9",
        "prompt": "Nếu tỷ suất sinh lợi đơn của một trái phiếu kho bạc là 8,5% thì lãi suất phi rủi ro trong mô hình Black-Scholes-Merton là",
        "sourcePrompt": "If the simple return on a Treasury bill is 8.5 percent, the risk-free rate in the Black-Scholes-Merton model is",
        "options": [
          {
            "id": "A",
            "text": "8,77%",
            "sourceText": "8.77 percent"
          },
          {
            "id": "B",
            "text": "8,93%",
            "sourceText": "8.93 percent"
          },
          {
            "id": "C",
            "text": "8,55%",
            "sourceText": "8.55 percent"
          },
          {
            "id": "D",
            "text": "8,20%",
            "sourceText": "8.20 percent"
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 8,20%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q10",
        "number": "10",
        "prompt": "Biến nào sau đây trong mô hình định giá quyền chọn Black-Scholes-Merton là khó đạt được nhất?",
        "sourcePrompt": "Which of the following variables in the Black-Scholes-Merton option pricing model is the most difficult to obtain?",
        "options": [
          {
            "id": "A",
            "text": "sự biến động (the volatility)",
            "sourceText": "the volatility"
          },
          {
            "id": "B",
            "text": "lãi suất phi rủi ro",
            "sourceText": "the risk-free rate"
          },
          {
            "id": "C",
            "text": "giá cổ phiếu",
            "sourceText": "the stock price"
          },
          {
            "id": "D",
            "text": "thời gian đáo hạn (the time to expiration)",
            "sourceText": "the time to expiration"
          },
          {
            "id": "E",
            "text": "giá thực hiện",
            "sourceText": "the exercise price"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: sự biến động (the volatility). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q11",
        "number": "11",
        "prompt": "Giá nhị thức về mặt lý thuyết sẽ bằng giá Black-Scholes-Merton với điều kiện nào sau đây?",
        "sourcePrompt": "The binomial price will theoretically equal the Black-Scholes-Merton price under which of the following conditions?",
        "options": [
          {
            "id": "A",
            "text": "khi số chu kì thời gian lớn",
            "sourceText": "when the number of time periods is large"
          },
          {
            "id": "B",
            "text": "khi quyền chọn ngang giá",
            "sourceText": "when the option is at-the-money"
          },
          {
            "id": "C",
            "text": "khi quyền chọn kiệt giá",
            "sourceText": "when the option is in-the-money"
          },
          {
            "id": "D",
            "text": "khi tùy chọn cao giá",
            "sourceText": "when the option is out-of-the-money"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: khi số chu kì thời gian lớn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q12",
        "number": "12",
        "prompt": "Nếu giá cổ phiếu là 44, giá thực hiện là 40, giá quyền chọn bán là 1,54 và giá Black-Scholes-Merton là 0,28 khi độ biến động là 1,11, thì độ biến động ngụ ý sẽ là",
        "sourcePrompt": "If the stock price is 44, the exercise price is 40, the put price is 1.54, and the Black-Scholes-Merton price using 0.28 as the volatility is 1.11, the implied volatility will be",
        "options": [
          {
            "id": "A",
            "text": "cao hơn 0,28",
            "sourceText": "higher than 0.28"
          },
          {
            "id": "B",
            "text": "thấp hơn 0,28",
            "sourceText": "lower than 0.28"
          },
          {
            "id": "C",
            "text": "0,28",
            "sourceText": "0.28"
          },
          {
            "id": "D",
            "text": "thấp hơn lãi suất phi rủi ro",
            "sourceText": "lower than the risk-free rate"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: cao hơn 0,28. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q13",
        "number": "13",
        "prompt": "Phát biểu nào sau đây về mô hình Black-Scholes-Merton là không đúng?",
        "sourcePrompt": "Which of the following statements about the Black-Scholes-Merton model is not true?",
        "options": [
          {
            "id": "A",
            "text": "giảm sự biến động làm giảm giá mua",
            "sourceText": "decreasing the volatility lowers the call price"
          },
          {
            "id": "B",
            "text": "giá cổ phiếu kỳ vọng đóng một vai trò trong mô hình",
            "sourceText": "the expected stock price plays a role in the model"
          },
          {
            "id": "C",
            "text": "lãi suất phi rủi ro được gộp liên tục",
            "sourceText": "the risk-free rate is continuously compounded"
          },
          {
            "id": "D",
            "text": "mô hình phù hợp với ngang giá quyền chọn (put-call parity)",
            "sourceText": "the model is consistent with put-call parity"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá cổ phiếu kỳ vọng đóng một vai trò trong mô hình. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q14",
        "number": "14",
        "prompt": "Đặc điểm nào sau đây của mô hình Black-Scholes-Merton là không đúng?",
        "sourcePrompt": "Which of the following characteristics of the Black-Scholes-Merton model is not correct?",
        "options": [
          {
            "id": "A",
            "text": "nó là một mô hình thời gian rời rạc",
            "sourceText": "it is a discrete time model"
          },
          {
            "id": "B",
            "text": "nó là giới hạn của mô hình nhị thức",
            "sourceText": "it is the limit of the binomial model"
          },
          {
            "id": "C",
            "text": "nó là một mô hình thời gian liên tục",
            "sourceText": "it is a continuous time model"
          },
          {
            "id": "D",
            "text": "nó đưa ra giá của một quyền chọn châu Âu",
            "sourceText": "it gives the price of a European option"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: nó là một mô hình thời gian rời rạc. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q15",
        "number": "15",
        "prompt": "Giả định nào sau đây của mô hình Black-Scholes-Merton là không đúng?",
        "sourcePrompt": "Which of the following assumptions of the Black-Scholes-Merton model is not correct?",
        "options": [
          {
            "id": "A",
            "text": "sự biến động của cổ phiếu là không đổi",
            "sourceText": "the stock volatility is constant"
          },
          {
            "id": "B",
            "text": "lợi tức cổ phiếu tuân theo phân phối chuẩn",
            "sourceText": "the stock return follows a normal distribution"
          },
          {
            "id": "C",
            "text": "không có chi phí giao dịch",
            "sourceText": "there are no transaction costs"
          },
          {
            "id": "D",
            "text": "không có thuế",
            "sourceText": "there are no taxes"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lợi tức cổ phiếu tuân theo phân phối chuẩn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q16",
        "number": "16",
        "prompt": "Phát biểu nào sau đây về delta là không đúng?",
        "sourcePrompt": "Which of the following statements about the delta is not true?",
        "options": [
          {
            "id": "A",
            "text": "nó dao động từ không đến một",
            "sourceText": "it ranges from zero to one"
          },
          {
            "id": "B",
            "text": "nó hội tụ về 0 hoặc 1 khi đáo hạn",
            "sourceText": "it converges to zero or one at expiration"
          },
          {
            "id": "C",
            "text": "nó được thể hiện bởi N(d1) trong mô hình Black-Scholes-Merton",
            "sourceText": "it is given by N(d1) in the Black-Scholes-Merton model"
          },
          {
            "id": "D",
            "text": "nó thay đổi chậm khi gần hết hạn nếu quyền chọn là ngang giá",
            "sourceText": "it changes slowly near expiration if the option is at-the-money"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó thay đổi chậm khi gần hết hạn nếu quyền chọn là ngang giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q17",
        "number": "17",
        "prompt": "Ký tự \"Hy Lạp\" nào sau đây không phải là thước đo mức độ nhạy cảm của quyền chọn đối với sự thay đổi của một trong các giá trị đầu vào của nó?",
        "sourcePrompt": "Which of the following “Greeks” is not a measure of the option’s sensitivity to a change in one of its input values?",
        "options": [
          {
            "id": "A",
            "text": "delta",
            "sourceText": "delta"
          },
          {
            "id": "B",
            "text": "gamma",
            "sourceText": "gamma"
          },
          {
            "id": "C",
            "text": "rho",
            "sourceText": "rho"
          },
          {
            "id": "D",
            "text": "theta",
            "sourceText": "theta"
          },
          {
            "id": "E",
            "text": "sigma",
            "sourceText": "sigma"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: sigma. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q18",
        "number": "18",
        "prompt": "Phát biểu nào sau đây là đúng về mối quan hệ giữa giá quyền chọn và lãi suất phi rủi ro?",
        "sourcePrompt": "Which of the following statements is true about the relationship between the option price and the risk-free rate?",
        "options": [
          {
            "id": "A",
            "text": "giá quyền chọn gần như tuyến tính đối với lãi suất phi rủi ro",
            "sourceText": "a call price is nearly linear with respect to the risk-free rate"
          },
          {
            "id": "B",
            "text": "giá quyền chọn rất nhạy cảm với lãi suất phi rủi ro",
            "sourceText": "a call price is highly sensitive to the risk-free rate"
          },
          {
            "id": "C",
            "text": "lãi suất phi rủi ro ảnh hưởng đến quyền chọn mua nhưng không ảnh hưởng đến quyền chọn bán",
            "sourceText": "the risk-free rate affects a call but not a put"
          },
          {
            "id": "D",
            "text": "lãi suất phi rủi ro không ảnh hưởng đến giá quyền chọn mua",
            "sourceText": "the risk-free rate does not affect a call price"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giá quyền chọn gần như tuyến tính đối với lãi suất phi rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q19",
        "number": "19",
        "prompt": "Mối quan hệ giữa độ biến động và thời điểm đáo hạn được gọi là",
        "sourcePrompt": "The relationship between the volatility and the time to expiration is called the",
        "options": [
          {
            "id": "A",
            "text": "hiệu ứng nụ cười (volatility smile)",
            "sourceText": "volatility smile"
          },
          {
            "id": "B",
            "text": "biến động sai lệch",
            "sourceText": "volatility skew"
          },
          {
            "id": "C",
            "text": "cấu trúc kỳ hạn của biến động",
            "sourceText": "term structure of volatility"
          },
          {
            "id": "D",
            "text": "theta",
            "sourceText": "theta"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: cấu trúc kỳ hạn của biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q20",
        "number": "20",
        "prompt": "Lý do thực hiện phòng ngừa gamma là gì?",
        "sourcePrompt": "What is the reason for executing a gamma hedge?",
        "options": [
          {
            "id": "A",
            "text": "sự biến động có thể thay đổi",
            "sourceText": "the volatility can change"
          },
          {
            "id": "B",
            "text": "giá cổ phiếu có thể tạo ra một biến chuyển lớn",
            "sourceText": "the stock price can make a large move"
          },
          {
            "id": "C",
            "text": "biến động giá cổ phiếu quá nhỏ để phòng ngừa delta hoạt động",
            "sourceText": "the stock price moves are too small for a delta hedge to work"
          },
          {
            "id": "D",
            "text": "không có lãi suất phi rủi ro thực sự",
            "sourceText": "there is no true risk-free rate"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá cổ phiếu có thể tạo ra một biến chuyển lớn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q21",
        "number": "21",
        "prompt": "Phát biểu nào sau đây về độ biến động là không đúng?",
        "sourcePrompt": "Which of the following statements about the volatility is not true?",
        "options": [
          {
            "id": "A",
            "text": "sự biến động ngụ ý thường khác nhau giữa các quyền chọn với giá thực hiện (giá thực hiện) khác nhau",
            "sourceText": "the implied volatility often differs across options with different exercise prices"
          },
          {
            "id": "B",
            "text": "độ biến động ngụ ý bằng độ biến động lịch sử nếu quyền chọn được định giá chính xác",
            "sourceText": "the implied volatility equals the historical volatility if the option is correctly priced"
          },
          {
            "id": "C",
            "text": "sự biến động ngụ ý được xác định bằng thử và sai",
            "sourceText": "the implied volatility is determined by trial and error"
          },
          {
            "id": "D",
            "text": "sự biến động ngụ ý gần như liên quan tuyến tính với giá quyền chọn",
            "sourceText": "the implied volatility is nearly linearly related to the option price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: độ biến động ngụ ý bằng độ biến động lịch sử nếu quyền chọn được định giá chính xác. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q22",
        "number": "22",
        "prompt": "Mối quan hệ giữa giá quyền chọn và giá thực hiện được gọi là:",
        "sourcePrompt": "The relationship between the option price and the exercise price is called",
        "options": [
          {
            "id": "A",
            "text": "gamma",
            "sourceText": "the gamma"
          },
          {
            "id": "B",
            "text": "vega",
            "sourceText": "the vega"
          },
          {
            "id": "C",
            "text": "omega",
            "sourceText": "the omega"
          },
          {
            "id": "D",
            "text": "zeta",
            "sourceText": "the zeta"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có cái nào nêu trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q23",
        "number": "23",
        "prompt": "Chuyện gì sẽ xảy ra khi mức biến động bằng 0 trong mô hình Black-Scholes- Merton?",
        "sourcePrompt": "What happens when the volatility is zero in the Black-Scholes-Merton model?",
        "options": [
          {
            "id": "A",
            "text": "Giá quyền chọn hội tụ về 0 hoặc giới hạn dưới.",
            "sourceText": "the option price converges to either zero or the lower bound"
          },
          {
            "id": "B",
            "text": "Giá quyền chọn hội tụ về giá trị nội tại.",
            "sourceText": "the option price converges to the intrinsic value"
          },
          {
            "id": "C",
            "text": "Quyền chọn tự động kiệt giá.",
            "sourceText": "the option automatically expires out of the money"
          },
          {
            "id": "D",
            "text": "gamma và delta hội tụ.",
            "sourceText": "the gamma and delta converge"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Giá quyền chọn hội tụ về 0 hoặc giới hạn dưới.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q24",
        "number": "24",
        "prompt": "Câu nào không đúng về quyền chọn gamma?",
        "sourcePrompt": "Which of the following is not correct about a call’s gamma?",
        "options": [
          {
            "id": "A",
            "text": "Giống với quyền bán gamma",
            "sourceText": "it is the same as a put’s gamma"
          },
          {
            "id": "B",
            "text": "Lớn hơn khi quyền chọn mua tại điểm hòa vốn",
            "sourceText": "it is large when the call is at-the-money"
          },
          {
            "id": "C",
            "text": "Nó có thể được xem như một thước đo rủi ro của delta.",
            "sourceText": "it can be viewed as a measure of the risk of the delta"
          },
          {
            "id": "D",
            "text": "Đó là một nguồn rủi ro chỉ có thể được phòng ngừa bằng cách sử dụng một quyền chọn khác",
            "sourceText": "it is a source of risk that can be hedged only by using another option"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có cái nào nêu trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q25",
        "number": "25",
        "prompt": "Câu nào không đúng khi nói về mức biến động lịch sử?",
        "sourcePrompt": "Which of the following statements is incorrect about the historical volatility?",
        "options": [
          {
            "id": "A",
            "text": "Nếu được sử dụng trong mô hình Black-Scholes-Merton nó sẽ đưa ra giá thị trường hiện tại.",
            "sourceText": "if used in the Black-Scholes-Merton model, it gives the current market price"
          },
          {
            "id": "B",
            "text": "Dựa trên độ bất ổn của tỷ suất sinh lợi theo log của cổ phiếu",
            "sourceText": "it is based on the volatility of the log return on the stock"
          },
          {
            "id": "C",
            "text": "Nó yêu cầu một mẫu lợi nhuận gần đây",
            "sourceText": "it requires a sample of recent returns"
          },
          {
            "id": "D",
            "text": "Nó nên được chuyển đổi thành một biến động hàng năm.",
            "sourceText": "it should be converted to an annualized volatility"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Nếu được sử dụng trong mô hình Black-Scholes-Merton nó sẽ đưa ra giá thị trường hiện tại.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q26",
        "number": "26",
        "prompt": "Một danh mục phòng ngừa được thiết lập và duy trì bằng cách liên tục điều chỉnh tỷ lệ tương đối của cổ phiếu và quyền chọn, quá trình đó gọi là:",
        "sourcePrompt": "A hedge portfolio is established and maintained by constantly adjusting the relative proportions of stock and options, a process referred to as",
        "options": [
          {
            "id": "A",
            "text": "Quản lý tích cực",
            "sourceText": "actively managing"
          },
          {
            "id": "B",
            "text": "Hòa giải liên tục",
            "sourceText": "continuous reconciliation"
          },
          {
            "id": "C",
            "text": "Điều chỉnh theo thị trường",
            "sourceText": "marking to market"
          },
          {
            "id": "D",
            "text": "Giao dịch năng động",
            "sourceText": "dynamic trading"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Giao dịch năng động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q27",
        "number": "27",
        "prompt": "Biến ngẫu nhiên chuẩn tắc được sử dụng trong tính toán xác suất chuẩn tắc tích lũy trong mô hình định giá quyền chọn Black-Scholes-Merton là:",
        "sourcePrompt": "The standard normal random variable used in the calculation of cumulative normal probabilities within the Black-Scholes-Merton option pricing model is",
        "options": [
          {
            "id": "A",
            "text": "Phân phối xác suất loga chuẩn.",
            "sourceText": "the lognormal distribution"
          },
          {
            "id": "B",
            "text": "Thống kê d1 và d2",
            "sourceText": "the d1 and d2 statistic"
          },
          {
            "id": "C",
            "text": "Thống kê z",
            "sourceText": "the z statistic"
          },
          {
            "id": "D",
            "text": "Phân phối f",
            "sourceText": "the f distribution"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Thống kê z. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q28",
        "number": "28",
        "prompt": "Mô hình biến động trên giá thực hiện được gọi là:",
        "sourcePrompt": "The pattern of volatility across exercise prices is often called",
        "options": [
          {
            "id": "A",
            "text": "Biểu đồ dao động giá.",
            "sourceText": "the price-fluctuation graph"
          },
          {
            "id": "B",
            "text": "Hiệu ứng nụ cười",
            "sourceText": "the volatility smile"
          },
          {
            "id": "C",
            "text": "Cấu trúc thuật ngữ của biến động hàm ý",
            "sourceText": "the term structure of implied volatility"
          },
          {
            "id": "D",
            "text": "Độ lệch",
            "sourceText": "the skew"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Hiệu ứng nụ cười. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q29",
        "number": "30",
        "prompt": "Độ biến động hàm ý có được bằng cách tìm độ lệch chuẩn khi được sử dụng trong mô hình Black-Scholes-Merton, tạo ra:",
        "sourcePrompt": "The implied volatility is obtained by finding the standard deviation that, when used in the Black-Scholes-Merton model, makes the",
        "options": [
          {
            "id": "A",
            "text": "Giá mô hình đáo hạn bằng 0",
            "sourceText": "model price expire at zero"
          },
          {
            "id": "B",
            "text": "Giá mô hình bằng với giá thị trường của quyền chọn",
            "sourceText": "model price equal the market price of the option"
          },
          {
            "id": "C",
            "text": "Giá mô hình sao cho nó vượt quá giá trị quyền chọn thị trường hiện được giao dịch.",
            "sourceText": "model price such that it exceeds currently traded market option values"
          },
          {
            "id": "D",
            "text": "Giá mô hình bằng với giá trị nội tại của cổ phiếu cơ bản.",
            "sourceText": "model price equal the intrinsic value of the underlying stock"
          },
          {
            "id": "E",
            "text": "không có cái nào nêu trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Giá mô hình bằng với giá thị trường của quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 6,
    "title": "Chiến lược quyền chọn cơ bản",
    "sourceTitle": "CHAPTER 6: BASIC OPTION STRATEGIES",
    "summary": "Chương 6 tập trung vào chiến lược quyền chọn cơ bản. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Covered call",
      "Protective put",
      "Profit diagram",
      "Breakeven",
      "Maximum gain/loss"
    ],
    "theory": [
      {
        "heading": "Payoff và profit",
        "body": "Payoff là dòng tiền ở ngày đáo hạn. Profit là payoff trừ chi phí ban đầu. Khi làm bài chiến lược option, luôn xác định vị thế long/short, premium và strike trước."
      },
      {
        "heading": "Covered call và protective put",
        "body": "Covered call là nắm cổ phiếu và bán call để nhận premium, đổi lại bị giới hạn lợi nhuận khi giá tăng mạnh. Protective put là nắm cổ phiếu và mua put để bảo vệ khi giá giảm."
      },
      {
        "heading": "Điểm hòa vốn",
        "body": "Breakeven là mức giá tài sản cơ sở khiến profit bằng 0. Với nhiều chiến lược, chỉ cần dựng profit theo từng vùng giá là tìm được breakeven."
      }
    ],
    "questions": [
      {
        "id": "c6-q1",
        "number": "1",
        "prompt": "Lợi nhuận là bao nhiêu nếu bạn mua 1 quyền mua, giữ nó đến khi đáo hạn và giá thực hiện của cổ phiếu tại ngày đáo hạn là 37$?",
        "sourcePrompt": "What is your profit if you buy a call, hold it to expiration and the stock price at expiration is $37?",
        "options": [
          {
            "id": "A",
            "text": "$700",
            "sourceText": "$700"
          },
          {
            "id": "B",
            "text": "–$289",
            "sourceText": "–$289"
          },
          {
            "id": "C",
            "text": "$2,711",
            "sourceText": "$2,711"
          },
          {
            "id": "D",
            "text": "$411",
            "sourceText": "$411"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $411. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q2",
        "number": "2",
        "prompt": "Giá cổ phiếu hòa vốn khi đáo hạn trong giao dịch ở câu 1 là bao nhiêu?",
        "sourcePrompt": "What is the breakeven stock price at expiration on the transaction described in problem 1?",
        "options": [
          {
            "id": "A",
            "text": "$32.89",
            "sourceText": "$32.89"
          },
          {
            "id": "B",
            "text": "$30.00",
            "sourceText": "$30.00"
          },
          {
            "id": "C",
            "text": "$27.11",
            "sourceText": "$27.11"
          },
          {
            "id": "D",
            "text": "$32.15",
            "sourceText": "$32.15"
          },
          {
            "id": "E",
            "text": "Không có điểm hòa vốn",
            "sourceText": "there is no breakeven"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $32.89. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q3",
        "number": "3",
        "prompt": "Lợi nhuận tối đa trong giao dịch ở câu 1 là bao nhiêu?",
        "sourcePrompt": "What is the maximum profit on the transaction described in problem 1?",
        "options": [
          {
            "id": "A",
            "text": "$2,711",
            "sourceText": "$2,711"
          },
          {
            "id": "B",
            "text": "infinity",
            "sourceText": "infinity"
          },
          {
            "id": "C",
            "text": "zero",
            "sourceText": "zero"
          },
          {
            "id": "D",
            "text": "$3,289",
            "sourceText": "$3,289"
          },
          {
            "id": "E",
            "text": "$3,000",
            "sourceText": "$3,000"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: infinity. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q4",
        "number": "4",
        "prompt": "Lợi nhuận tối đa mà người phát hành quyền chọn mua có thể tạo ra là bao nhiêu?",
        "sourcePrompt": "What is the maximum profit that the writer of a call can make?",
        "options": [
          {
            "id": "A",
            "text": "$2,711",
            "sourceText": "$2,711"
          },
          {
            "id": "B",
            "text": "$289",
            "sourceText": "$289"
          },
          {
            "id": "C",
            "text": "$3,000",
            "sourceText": "$3,000"
          },
          {
            "id": "D",
            "text": "$3,289",
            "sourceText": "$3,289"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $289. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q5",
        "number": "5",
        "prompt": "Giả sử người mua quyền chọn mua trong giao dịch ở câu 1 bán quyền chọn mua trước khi đáo hạn 2 tháng khi giá cổ phiếu là 33$. Người mua này có thể kiếm được khoảng lợi nhuận là bao nhiêu?",
        "sourcePrompt": "Suppose the buyer of the call in problem 1 sold the call two months before expiration when the stock price was $33. How much profit would the buyer make?",
        "options": [
          {
            "id": "A",
            "text": "$32.89",
            "sourceText": "$32.89"
          },
          {
            "id": "B",
            "text": "$30.11",
            "sourceText": "$30.11"
          },
          {
            "id": "C",
            "text": "$78.00",
            "sourceText": "$78.00"
          },
          {
            "id": "D",
            "text": "$11.00",
            "sourceText": "$11.00"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $78.00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q6",
        "number": "6",
        "prompt": "Giả sử nhà đầu tư xây dựng quyền chọn mua được phòng ngừa Khi đáo hạn, giá cổ phiếu là $27. Lợi nhuận của nhà đầu tư là bao nhiêu?",
        "sourcePrompt": "Suppose the investor constructed a covered call. At expiration the stock price is $27. What is the investor's profit?",
        "options": [
          {
            "id": "A",
            "text": "$589",
            "sourceText": "$589"
          },
          {
            "id": "B",
            "text": "$289",
            "sourceText": "$289"
          },
          {
            "id": "C",
            "text": "$2,989",
            "sourceText": "$2,989"
          },
          {
            "id": "D",
            "text": "$2,711",
            "sourceText": "$2,711"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có câu nào đúng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q7",
        "number": "7",
        "prompt": "Giá cổ phiếu hòa vốn khi đáo hạn trong giao dịch ở câu 6 là bao nhiêu?",
        "sourcePrompt": "What is the breakeven stock price at expiration for the transaction described in problem 6?",
        "options": [
          {
            "id": "A",
            "text": "$27.11",
            "sourceText": "$27.11"
          },
          {
            "id": "B",
            "text": "$30.00",
            "sourceText": "$30.00"
          },
          {
            "id": "C",
            "text": "$32.89",
            "sourceText": "$32.89"
          },
          {
            "id": "D",
            "text": "$29.89",
            "sourceText": "$29.89"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $27.11. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q8",
        "number": "8",
        "prompt": "Nếu giao dịch ở câu 6 được đóng lại khi quyền chọn còn 3 tháng nữa và giá cổ phiếu là 36$, lợi nhuận của nhà đầu tư là bao nhiêu?",
        "sourcePrompt": "If the transaction described in problem 6 is closed out when the option has three months to go and the stock price is at $36, what is the investor's profit?",
        "options": [
          {
            "id": "A",
            "text": "$600",
            "sourceText": "$600"
          },
          {
            "id": "B",
            "text": "$311",
            "sourceText": "$311"
          },
          {
            "id": "C",
            "text": "$889",
            "sourceText": "$889"
          },
          {
            "id": "D",
            "text": "$229",
            "sourceText": "$229"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $229. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q9",
        "number": "9",
        "prompt": "Lợi nhuận tối đa từ giao dịch ở câu 6 là bao nhiêu nếu vị thế được giữ cho đến khi đáo hạn?",
        "sourcePrompt": "What is the maximum profit from the transaction described in Question 6 if the position is held to expiration?",
        "options": [
          {
            "id": "A",
            "text": "$3,289",
            "sourceText": "$3,289"
          },
          {
            "id": "B",
            "text": "$289",
            "sourceText": "$289"
          },
          {
            "id": "C",
            "text": "Vô cực",
            "sourceText": "infinity"
          },
          {
            "id": "D",
            "text": "$2,711",
            "sourceText": "$2,711"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $289. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q10",
        "number": "10",
        "prompt": "Lợi nhuận tối thiểu từ giao dịch ở câu 6 là bao nhiêu nếu vị thế được giữ cho đến khi đáo hạn?",
        "sourcePrompt": "What is the minimum profit from the transaction described in Question 6 if the position is held to expiration?",
        "options": [
          {
            "id": "A",
            "text": "–$2,711",
            "sourceText": "–$2,711"
          },
          {
            "id": "B",
            "text": "–$3,289",
            "sourceText": "–$3,289"
          },
          {
            "id": "C",
            "text": "–$3,000",
            "sourceText": "–$3,000"
          },
          {
            "id": "D",
            "text": "Âm vô cực",
            "sourceText": "negative infinity"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: –$2,711. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q11",
        "number": "11",
        "prompt": "Hãy xem xét hai quyền chọn bán chỉ khác nhau bởi giá thực hiện. Người có giá thực hiện cao hơn có",
        "sourcePrompt": "Consider two put options differing only by exercise price. The one with the higher exercise price has",
        "options": [
          {
            "id": "A",
            "text": "điểm hòa vốn thấp hơn và tiềm năng lợi nhuận thấp hơn",
            "sourceText": "the lower breakeven and lower profit potential"
          },
          {
            "id": "B",
            "text": "điểm hòa vốn thấp hơn và tiềm năng lợi nhuận lớn hơn",
            "sourceText": "the lower breakeven and greater profit potential"
          },
          {
            "id": "C",
            "text": "điểm hòa vốn cao hơn và tiềm năng lợi nhuận lớn hơn",
            "sourceText": "the higher breakeven and greater profit potential"
          },
          {
            "id": "D",
            "text": "điểm hòa vốn cao hơn và tiềm năng lợi nhuận thấp hơn",
            "sourceText": "the higher breakeven and lower profit potential"
          },
          {
            "id": "E",
            "text": "phí quyền chọn cao hơn và tiềm năng lợi nhuận thấp hơn",
            "sourceText": "the greater premium and lower profit potential"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: điểm hòa vốn cao hơn và tiềm năng lợi nhuận lớn hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q12",
        "number": "12",
        "prompt": "Phát biểu nào sau đây là đúng về việc đóng một vị thế mua quyền chọn mua trước khi đáo hạn so với việc giữ nó cho đến khi đáo hạn?",
        "sourcePrompt": "Which of the following statements is true about closing a long call position prior to expiration relative to holding it to expiration?",
        "options": [
          {
            "id": "A",
            "text": "lợi nhuận lớn hơn ở tất cả các giá cổ phiếu",
            "sourceText": "the profit is greater at all stock prices"
          },
          {
            "id": "B",
            "text": "lợi nhuận chỉ lớn hơn khi giá cổ phiếu thấp",
            "sourceText": "the profit is greater only at low stock prices"
          },
          {
            "id": "C",
            "text": "lợi nhuận chỉ lớn hơn khi giá cổ phiếu cao",
            "sourceText": "the profit is greater only at high stock prices"
          },
          {
            "id": "D",
            "text": "phạm vi lợi nhuận có thể lớn hơn",
            "sourceText": "the range of possible profits is greater"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above are true"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lợi nhuận lớn hơn ở tất cả các giá cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q13",
        "number": "13",
        "prompt": "Giao dịch nào sau đây không thu được lợi nhuận trong một thị trường giá lên mạnh mẽ.",
        "sourcePrompt": "Which of the following transactions does not profit in a strong bull market.",
        "options": [
          {
            "id": "A",
            "text": "Bán quyền chọn bán",
            "sourceText": "a short put"
          },
          {
            "id": "B",
            "text": "Quyền mua được phòng ngằ",
            "sourceText": "a covered call"
          },
          {
            "id": "C",
            "text": "Quyền chọn bán bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "D",
            "text": "Quyền chọn mua lai tạp",
            "sourceText": "a synthetic call"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có câu nào đúng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q14",
        "number": "14",
        "prompt": "Điều nào sau đây là tương đương với một quyền chọn mua lai tạp?",
        "sourcePrompt": "Which of the following is equivalent to a synthetic call?",
        "options": [
          {
            "id": "A",
            "text": "Mua cổ phiếu và bán quyền chọn bán",
            "sourceText": "a long stock and a short put position"
          },
          {
            "id": "B",
            "text": "Mua quyền chọn bán và mua cổ phiếu",
            "sourceText": "a long put and a long stock position"
          },
          {
            "id": "C",
            "text": "Mua quyền chọn bán và bán trải phiếu lãi suất phi rủi ro",
            "sourceText": "a long put and a short risk-free bond position"
          },
          {
            "id": "D",
            "text": "Mua cổ phiếu và và bán trải phiếu lãi suất phi rủi",
            "sourceText": "a long stock and a short risk-free bond position"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Mua quyền chọn bán và mua cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q15",
        "number": "15",
        "prompt": "Việc thực hiện sớm quyền chọn gây ra rủi ro cho tất cả trừ một trong các giao dịch sau.",
        "sourcePrompt": "Early exercise imposes a risk to all but one of the following transactions.",
        "options": [
          {
            "id": "A",
            "text": "Bán quyền chọn mua",
            "sourceText": "a short call"
          },
          {
            "id": "B",
            "text": "Bán quyền chọn bán",
            "sourceText": "a short put"
          },
          {
            "id": "C",
            "text": "Quyền chọn bán bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "D",
            "text": "Quyền chọn mua không được đảm bảo",
            "sourceText": "an uncovered call"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Quyền chọn bán bảo vệ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q16",
        "number": "16",
        "prompt": "Mỗi điều sau đây là một chiến lược tăng giá ngoại trừ",
        "sourcePrompt": "Each of the following is a bullish strategy except",
        "options": [
          {
            "id": "A",
            "text": "Mua quyền chọn mua",
            "sourceText": "a long call"
          },
          {
            "id": "B",
            "text": "Bán quyền chọn bán",
            "sourceText": "a short put"
          },
          {
            "id": "C",
            "text": "Bán khống cổ phiếu",
            "sourceText": "a short stock"
          },
          {
            "id": "D",
            "text": "Quyền chọn bán bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "E",
            "text": "Không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Bán khống cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q17",
        "number": "17",
        "prompt": "Chiến lược nào sau đây có khả năng thua lỗ lớn nhất?",
        "sourcePrompt": "Which of the following strategies has the greatest potential loss?",
        "options": [
          {
            "id": "A",
            "text": "Quyền chọn mua không được phòng ngừa",
            "sourceText": "an uncovered call"
          },
          {
            "id": "B",
            "text": "Mua quyền chọn bán",
            "sourceText": "a long put"
          },
          {
            "id": "C",
            "text": "Quyền chọn mua được phòng ngừa",
            "sourceText": "a covered call"
          },
          {
            "id": "D",
            "text": "Vị thế mua trên cổ phiếu",
            "sourceText": "a long position in the stock"
          },
          {
            "id": "E",
            "text": "Không thể biết được",
            "sourceText": "it is impossible to tell"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Quyền chọn mua không được phòng ngừa. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q18",
        "number": "18",
        "prompt": "Chiến lược nào sau đây về cơ bản có biểu đồ lợi nhuận giống như quyền chọn mua được phòng ngừa?",
        "sourcePrompt": "Which of the following strategies has essentially the same profit diagram as a covered call?",
        "options": [
          {
            "id": "A",
            "text": "Mua quyền chọn bán",
            "sourceText": "a long put"
          },
          {
            "id": "B",
            "text": "Bán quyền chọn bán",
            "sourceText": "a short put"
          },
          {
            "id": "C",
            "text": "Quyền chọn bán bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "D",
            "text": "Mua quyền chọn mua",
            "sourceText": "a long call"
          },
          {
            "id": "E",
            "text": "Không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Bán quyền chọn bán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q19",
        "number": "19",
        "prompt": "Phát biểu nào sau đây là đúng về việc mua một quyền chọn bảo vệ ở mức giá thực hiện cao hơn so với mức giá thực hiện thấp hơn?",
        "sourcePrompt": "Which of the following statements is true about the purchase of a protective put at a higher exercise price relative to a lower exercise price?",
        "options": [
          {
            "id": "A",
            "text": "mức hòa vốn thấp hơn",
            "sourceText": "the breakeven is lower"
          },
          {
            "id": "B",
            "text": "tổn thất tối đa lớn hơn",
            "sourceText": "the maximum loss is greater"
          },
          {
            "id": "C",
            "text": "phòng ngừa ít tốn kém hơn",
            "sourceText": "the insurance is less costly"
          },
          {
            "id": "D",
            "text": "phòng ngừa đắt hơn",
            "sourceText": "the insurance is more costly"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: phòng ngừa đắt hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q20",
        "number": "20",
        "prompt": "Đâu là nhược điểm của chiến lược chuyển đổi một quyền mua được phòng ngừa để tránh thực hiện?",
        "sourcePrompt": "What is the disadvantage of a strategy of rolling over a covered call to avoid exercise?",
        "options": [
          {
            "id": "A",
            "text": "phí quyền chọn mua về cơ bản bị loại bỏ",
            "sourceText": "the call premium is essentially thrown away"
          },
          {
            "id": "B",
            "text": "chi phí giao dịch có xu hướng cao",
            "sourceText": "transaction costs tend to be high"
          },
          {
            "id": "C",
            "text": "cổ phiếu sẽ bị lỗ",
            "sourceText": "the stock will incur losses"
          },
          {
            "id": "D",
            "text": "quyền mua sẽ đắt hơn khi chuyển đổi",
            "sourceText": "the call is more expensive when rolled over"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chi phí giao dịch có xu hướng cao. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q21",
        "number": "21",
        "prompt": "Cái nào sau đây là điểm hòa vốn cho một quyền chọn bán bảo vệ?",
        "sourcePrompt": "Which of the following is the breakeven for a protective put?",
        "options": [
          {
            "id": "A",
            "text": "X + S0 – P",
            "sourceText": "X + S0 – P"
          },
          {
            "id": "B",
            "text": "P + S0",
            "sourceText": "P + S0"
          },
          {
            "id": "C",
            "text": "X – ST",
            "sourceText": "X – ST"
          },
          {
            "id": "D",
            "text": "X – S0 – P",
            "sourceText": "X – S0 – P"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: P + S0. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q22",
        "number": "22",
        "prompt": "Phát biểu nào sau đây về chiến lược quyền chọn mua được phòng ngừa là đúng?",
        "sourcePrompt": "Which of the following statements about a covered call writing strategy is true?",
        "options": [
          {
            "id": "A",
            "text": "Khoản lỗ bị hạn chế",
            "sourceText": "the losses are limited"
          },
          {
            "id": "B",
            "text": "lợi nhuận và rủi ro lớn hơn so với việc chỉ nắm giữ cổ phiếu",
            "sourceText": "return and risk are greater than that of simply holding the stock"
          },
          {
            "id": "C",
            "text": "Nó là một hình thức phòng ngừa rẻ hơn so với quyền chọn bảo vệ",
            "sourceText": "it is a cheaper form of insurance than a protective put"
          },
          {
            "id": "D",
            "text": "Nó thường tạo ra một lượng lợi nhuận nhỏ",
            "sourceText": "it generally makes a large number of small profits"
          },
          {
            "id": "E",
            "text": "Không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Nó thường tạo ra một lượng lợi nhuận nhỏ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q23",
        "number": "23",
        "prompt": "Chênh lệch lợi nhuận từ quyền chọn bán thực tế và quyền chọn bán tổng hợp là",
        "sourcePrompt": "The difference in profit from an actual put and a synthetic put is",
        "options": [
          {
            "id": "A",
            "text": "X",
            "sourceText": "X"
          },
          {
            "id": "B",
            "text": "ST – X",
            "sourceText": "ST – X"
          },
          {
            "id": "C",
            "text": "X – ST",
            "sourceText": "X – ST"
          },
          {
            "id": "D",
            "text": "ST + X(1 + r)-T",
            "sourceText": "ST + X(1 + r)-T"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có điều nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q24",
        "number": "24",
        "prompt": "Một người mua quyền chọn mua được phòng ngừa, người thích ít rủi ro hơn nên",
        "sourcePrompt": "A covered call writer who prefers even less risk should",
        "options": [
          {
            "id": "A",
            "text": "loại bỏ quyền chọn mua",
            "sourceText": "get rid of the call"
          },
          {
            "id": "B",
            "text": "chuyển sang quyền chọn mua với giá thực hiện thấp hơn",
            "sourceText": "switch to a call with a lower exercise price"
          },
          {
            "id": "C",
            "text": "loại bỏ cổ phiếu",
            "sourceText": "get rid of the stock"
          },
          {
            "id": "D",
            "text": "chuyển sang quyền chọn mua với giá thực hiện cao hơn",
            "sourceText": "switch to a call with a higher exercise price"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chuyển sang quyền chọn mua với giá thực hiện thấp hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q25",
        "number": "25",
        "prompt": "Nhà đầu tư nào sau đây có thể bắt buộc phải mua cổ phiếu?",
        "sourcePrompt": "Which of the following investors may be obligated to buy stock?",
        "options": [
          {
            "id": "A",
            "text": "Người mua quyền chọn mua được phòng ngừa",
            "sourceText": "covered call writer"
          },
          {
            "id": "B",
            "text": "Người bán quyền chọn mua",
            "sourceText": "call buyer"
          },
          {
            "id": "C",
            "text": "Người bán quyền chọn bán",
            "sourceText": "put writer"
          },
          {
            "id": "D",
            "text": "Người mua quyền chọn bán được phòng ngừa",
            "sourceText": "protective put buyer"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Người bán quyền chọn bán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q26",
        "number": "26",
        "prompt": "Xác định phát biểu đúng liên quan đến việc lựa chọn giá thực hiện để mua quyền chọn mua.",
        "sourcePrompt": "Identify the correct statement related to the choice of exercise price for buying a call.",
        "options": [
          {
            "id": "A",
            "text": "giá thực hiện càng cao phí quyền chọn mua càng cao",
            "sourceText": "the higher the exercise price the higher the call premium"
          },
          {
            "id": "B",
            "text": "giá thực hiện càng thấp thì càng có nhiều khả năng quyền chọn mua hết hạn bị lỗ",
            "sourceText": "the lower the exercise price the more likely the call option will expire out-of-the-money"
          },
          {
            "id": "C",
            "text": "giá thực hiện cao hơn dẫn đến lợi nhuận nhỏ hơn khi tăng giá nhưng lỗ ít hơn khi giảm giá",
            "sourceText": "A higher strike price results in smaller gainson the upside but smaller losses on the downside"
          },
          {
            "id": "D",
            "text": "giá thực hiện càng cao thì cổ tức càng đóng góp vào lợi nhuận chung",
            "sourceText": "the higher the exercise price the more dividends contribute to the overall profit"
          },
          {
            "id": "E",
            "text": "không có câu nào ở trên là đúng liên quan đến việc lựa chọn giá thực hiện để mua quyền chọn mua",
            "sourceText": "none of the above are correct statements related to the choice of exercise price for buying a call"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá thực hiện cao hơn dẫn đến lợi nhuận nhỏ hơn khi tăng giá nhưng lỗ ít hơn khi giảm giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q27",
        "number": "27",
        "prompt": "Hãy xem xét câu sau đây liên quan đến quyền chọn mua không được phòng ngừa. Đối với một mức giá cổ phiếu n hất định, vị trí được giữ càng ____________ thì giá trị thời gian của nó càng mất đi và lợi nhuận càng ____. Xác định các từ thích hợp cho hai chỗ trống này.",
        "sourcePrompt": "Consider the following statement related to writing a naked call option. For a given stock price, the ____________ the position is held, the more time value it loses and the ___________ the profit. Identify the correct words for these two blanks.",
        "options": [
          {
            "id": "A",
            "text": "dài hơn, thấp hơn",
            "sourceText": "longer, lower"
          },
          {
            "id": "B",
            "text": "dài hơn, cao hơn",
            "sourceText": "longer, higher"
          },
          {
            "id": "C",
            "text": "ngắn hơn, thấp hơn",
            "sourceText": "shorter, lower"
          },
          {
            "id": "D",
            "text": "ngắn hơn, cao hơn",
            "sourceText": "shorter, higher"
          },
          {
            "id": "E",
            "text": "dài hơn, phẳng hơn",
            "sourceText": "longer, flatter"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: dài hơn, cao hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q28",
        "number": "28",
        "prompt": "Hãy xem xét phát biểu sau đây liên quan đến việc mua một quyền chọn bán. Đối với một mức giá cổ phiếu nhất định, vị thế càng được giữ ____, giá trị thời gian của nó càng mất đi và lợi nhuận càng ____; tuy nhiên, một ngoại lệ có thể xảy ra khi giá cổ phiếu ___________. Xác định các từ thích hợp cho hai chỗ trống này.",
        "sourcePrompt": "Consider the following statement related to buying a put option. For a given stock price, the ____________ the position is held, the more time value it loses and the ___________ the profit; however, an exception can occur when the stock price is ___________. Identify the correct words for these two blanks.",
        "options": [
          {
            "id": "A",
            "text": "dài hơn, thấp hơn, thấp",
            "sourceText": "longer, lower, low"
          },
          {
            "id": "B",
            "text": "dài hơn, cao hơn, cao",
            "sourceText": "longer, higher, high"
          },
          {
            "id": "C",
            "text": "ngắn hơn, thấp hơn, thấp",
            "sourceText": "shorter, lower, low"
          },
          {
            "id": "D",
            "text": "ngắn hơn, cao hơn, cao",
            "sourceText": "shorter, higher, high"
          },
          {
            "id": "E",
            "text": "dài hơn, phẳng hơn, thấp",
            "sourceText": "longer, flatter, low"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: dài hơn, thấp hơn, thấp. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q29",
        "number": "29",
        "prompt": "Một vị thế mua tổng hợp có thể được tạo với nhóm giao dịch nào sau đây.",
        "sourcePrompt": "A synthetic long call position can be created with which of the following sets of transactions.",
        "options": [
          {
            "id": "A",
            "text": "vay giá trị hiện tại của giá thực hiện, bán cổ phiếu, bán quyền chọn bán",
            "sourceText": "borrow the present value of the strike price, sell stock, sell put"
          },
          {
            "id": "B",
            "text": "cho vay giá trị hiện tại của giá thực hiện, bán cổ phiếu, mua quyền chọn bán",
            "sourceText": "lend the present value of the strike price, sell stock, buy put"
          },
          {
            "id": "C",
            "text": "bán quyền chọn mua, mua cổ phiếu, cho vay giá trị hiện tại của giá thực hiện",
            "sourceText": "sell put, buy stock, lend the present value of the strike price"
          },
          {
            "id": "D",
            "text": "mua cổ phiếu, mua quyền chọn bán, vay giá trị hiện tại của giá thực hiện",
            "sourceText": "buy stock, buy put, borrow the present value ofthe strike price"
          },
          {
            "id": "E",
            "text": "không điều nào ở trên tạo ra vị thế mua tổng hợp",
            "sourceText": "none of the above creates a synthetic long call position"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: mua cổ phiếu, mua quyền chọn bán, vay giá trị hiện tại của giá thực hiện. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q30",
        "number": "30",
        "prompt": "Một vị thế bán quyền chọn bán tổng hợp có thể được tạo bằng nhóm giao dịch nào sau đây.",
        "sourcePrompt": "A synthetic short put position can be created with which of the following sets of transactions.",
        "options": [
          {
            "id": "A",
            "text": "vay giá trị hiện tại của giá thực hiện, bán cổ phiếu, bán quyền chọn mua",
            "sourceText": "borrow the present value of the strike price, sell stock, sell call"
          },
          {
            "id": "B",
            "text": "cho vay giá trị hiện tại của giá thực hiện, bán cổ phiếu, mua quyền chọn mua",
            "sourceText": "lend the present value of the strike price, sell stock, buy call"
          },
          {
            "id": "C",
            "text": "bán quyền chọn mua, mua cổ phiếu, cho vay giá trị hiện tại của giá thực hiện",
            "sourceText": "sell call, buy stock, lend the present value ofthe strike price"
          },
          {
            "id": "D",
            "text": "mua cổ phiếu, mua quyền chọn mua, vay giá trị hiện tại của giá thực hiện",
            "sourceText": "buy stock, buy call, borrow the present value of the strike price"
          },
          {
            "id": "E",
            "text": "không điều nào ở trên tạo ra vị thế mua tổng hợp",
            "sourceText": "none of the above creates a synthetic long call position"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: bán quyền chọn mua, mua cổ phiếu, cho vay giá trị hiện tại của giá thực hiện. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 7,
    "title": "Chiến lược quyền chọn nâng cao",
    "sourceTitle": "CHAPTER 7: ADVANCED OPTION STRATEGIES",
    "summary": "Chương 7 tập trung vào chiến lược quyền chọn nâng cao. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Spreads",
      "Straddle",
      "Strangle",
      "Butterfly",
      "Calendar spread",
      "Collar"
    ],
    "theory": [
      {
        "heading": "Spread",
        "body": "Spread là kết hợp nhiều option cùng loại nhưng khác strike hoặc khác ngày đáo hạn. Spread thường giới hạn cả lợi nhuận và thua lỗ."
      },
      {
        "heading": "Straddle và strangle",
        "body": "Straddle mua call và put cùng strike, kỳ vọng biến động mạnh. Strangle dùng strike khác nhau, thường rẻ hơn nhưng cần biến động lớn hơn mới có lời."
      },
      {
        "heading": "Butterfly, collar, calendar",
        "body": "Butterfly thường kiếm lời khi giá ít biến động quanh vùng giữa. Collar dùng put bảo vệ và bán call để giảm chi phí. Calendar spread khai thác khác biệt thời gian đáo hạn."
      }
    ],
    "questions": [
      {
        "id": "c7-q1",
        "number": "1",
        "prompt": "Chi phí chênh lệch bao nhiêu?",
        "sourcePrompt": "How much will the spread cost?",
        "options": [
          {
            "id": "A",
            "text": "$986",
            "sourceText": "$986"
          },
          {
            "id": "B",
            "text": "$302",
            "sourceText": "$302"
          },
          {
            "id": "C",
            "text": "$283",
            "sourceText": "$283"
          },
          {
            "id": "D",
            "text": "$193",
            "sourceText": "$193"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $302. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q2",
        "number": "2",
        "prompt": "Lợi nhuận tối đa của chiến lược là bao nhiêu?",
        "sourcePrompt": "What is the maximum profit on the spread?",
        "options": [
          {
            "id": "A",
            "text": "$500",
            "sourceText": "$500"
          },
          {
            "id": "B",
            "text": "$802",
            "sourceText": "$802"
          },
          {
            "id": "C",
            "text": "$198",
            "sourceText": "$198"
          },
          {
            "id": "D",
            "text": "$302",
            "sourceText": "$302"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $198. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q3",
        "number": "3",
        "prompt": "Khoản lỗ tối đa của chiến lược là bao nhiêu?",
        "sourcePrompt": "What is the maximum loss on the spread?",
        "options": [
          {
            "id": "A",
            "text": "$500",
            "sourceText": "$500"
          },
          {
            "id": "B",
            "text": "$698",
            "sourceText": "$698"
          },
          {
            "id": "C",
            "text": "$198",
            "sourceText": "$198"
          },
          {
            "id": "D",
            "text": "$802",
            "sourceText": "$802"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q4",
        "number": "4",
        "prompt": "Lợi nhuận là bao nhiêu nếu giá cổ phiếu khi đáo hạn là $ 47?",
        "sourcePrompt": "What is the profit if the stock price at expiration is $47?",
        "options": [
          {
            "id": "A",
            "text": "-$102",
            "sourceText": "-$102"
          },
          {
            "id": "B",
            "text": "$398",
            "sourceText": "$398"
          },
          {
            "id": "C",
            "text": "-$302",
            "sourceText": "-$302"
          },
          {
            "id": "D",
            "text": "$500",
            "sourceText": "$500"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: -$102. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q5",
        "number": "5",
        "prompt": "Điểm hòa vốn là bao nhiêu?",
        "sourcePrompt": "What is the breakeven point?",
        "options": [
          {
            "id": "A",
            "text": "$48.02",
            "sourceText": "$48.02"
          },
          {
            "id": "B",
            "text": "$41.98",
            "sourceText": "$41.98"
          },
          {
            "id": "C",
            "text": "$55.66",
            "sourceText": "$55.66"
          },
          {
            "id": "D",
            "text": "$50.00",
            "sourceText": "$50.00"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $48.02. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q6",
        "number": "6",
        "prompt": "Giả sử bạn đóng vị thế 60 ngày sau đó. Lợi nhuận sẽ là bao nhiêu nếu giá cổ phiếu vẫn ở mức 50 đô la?",
        "sourcePrompt": "Suppose you closed the spread 60 days later. What will be the profit if the stock price is still at $50?",
        "options": [
          {
            "id": "A",
            "text": "$41",
            "sourceText": "$41"
          },
          {
            "id": "B",
            "text": "$198",
            "sourceText": "$198"
          },
          {
            "id": "C",
            "text": "$302",
            "sourceText": "$302"
          },
          {
            "id": "D",
            "text": "$102",
            "sourceText": "$102"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên Đối với câu hỏi 7 và 8, giả sử một nhà đầu tư kỳ vọng giá cổ phiếu sẽ duy trì ở mức khoảng 50 đô la và quy ết định thực hiện chiến lược chênh lệch con bướm (butterfly spread) bằng cách sử dụng quyền chọn mua tháng Sáu.",
            "sourceText": "none of the above For questions 7 and 8, suppose an investor expects the stock price to remain at about $50 and decides to execute a butterfly spread using the June calls."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $41. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q7",
        "number": "7",
        "prompt": "Chi phí của chiến lược butterfly là bao nhiêu?",
        "sourcePrompt": "What will be the cost of the butterfly spread?",
        "options": [
          {
            "id": "A",
            "text": "$1,195",
            "sourceText": "$1,195"
          },
          {
            "id": "B",
            "text": "$637",
            "sourceText": "$637"
          },
          {
            "id": "C",
            "text": "$79",
            "sourceText": "$79"
          },
          {
            "id": "D",
            "text": "$1,045",
            "sourceText": "$1,045"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $79. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q8",
        "number": "8",
        "prompt": "Lợi nhuận sẽ là bao nhiêu nếu giá cổ phiếu khi đáo hạn là $ 52.50?",
        "sourcePrompt": "What will be the profit if the stock price at expiration is $52.50?",
        "options": [
          {
            "id": "A",
            "text": "$171",
            "sourceText": "$171"
          },
          {
            "id": "B",
            "text": "$1,421",
            "sourceText": "$1,421"
          },
          {
            "id": "C",
            "text": "$1.037",
            "sourceText": "$1.037"
          },
          {
            "id": "D",
            "text": "$421",
            "sourceText": "$421"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $171. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q9",
        "number": "9",
        "prompt": "Giả sử bạn muốn xây d ựng một chiến lược chênh l ệch theo t ỉ lệ bằng cách sử dụng quyền chọn mua “March/June 50”. Bạn muốn mua 100 hợp đồng quyền ch ọn mua “June 50”. B ạn s ẽ bán đư ợc bao nhiêu quy ền ch ọn mua “March 50”?",
        "sourcePrompt": "Suppose you wish to construct a ratio spread using the March and June 50 calls. You want to buy 100 June 50 call contracts. How many March 50 calls would you sell?",
        "options": [
          {
            "id": "A",
            "text": "105",
            "sourceText": "105"
          },
          {
            "id": "B",
            "text": "95",
            "sourceText": "95"
          },
          {
            "id": "C",
            "text": "100",
            "sourceText": "100"
          },
          {
            "id": "D",
            "text": "57",
            "sourceText": "57"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên Trả lời các câu hỏi 10 và 11 v ề mức chênh lệch theo lịch(calendar spread) dựa trên giả định rằng giá cổ phiếu dự kiến sẽ không đổi. Sử dụng chiến lược chênh lệch quyền chọn mua “June/March 50”. Giá sử mỗi loại một hợp đồng.",
            "sourceText": "none of the above Answer questions 10 and 11 about a calendar spread based on the assumption that stock prices are expected to remain fairly constant. Use the June/March 50 call spread. Assume one contract of each."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 105. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q10",
        "number": "10",
        "prompt": "Chi phí chiến lược sẽ là bao nhiêu?",
        "sourcePrompt": "What will the spread cost?",
        "options": [
          {
            "id": "A",
            "text": "-$176",
            "sourceText": "-$176"
          },
          {
            "id": "B",
            "text": "$176",
            "sourceText": "$176"
          },
          {
            "id": "C",
            "text": "$558",
            "sourceText": "$558"
          },
          {
            "id": "D",
            "text": "$105",
            "sourceText": "$105"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $176. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q11",
        "number": "11",
        "prompt": "Lợi nhuận sẽ là bao nhiêu n ếu chiến lược được nắm giữ trong 90 ngày và giá cổ phiếu là 45 đô la?",
        "sourcePrompt": "What will be the profit if the spread is held 90 days and the stock price is $45?",
        "options": [
          {
            "id": "A",
            "text": "$36",
            "sourceText": "$36"
          },
          {
            "id": "B",
            "text": "$20",
            "sourceText": "$20"
          },
          {
            "id": "C",
            "text": "$558",
            "sourceText": "$558"
          },
          {
            "id": "D",
            "text": "-$20",
            "sourceText": "-$20"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên Trả lời các câu hỏi từ 12 đến 17 về xây dựng chiến lược long straddle sử dụng quyền chọn “June 50”.",
            "sourceText": "none of the above Answer questions 12 through 17 about a long straddle constructed using the June 50 options."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: -$20. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q12",
        "number": "12",
        "prompt": "Chi phí chiến lược straddle sẽ là bao nhiêu?",
        "sourcePrompt": "What will the straddle cost?",
        "options": [
          {
            "id": "A",
            "text": "$145",
            "sourceText": "$145"
          },
          {
            "id": "B",
            "text": "$690",
            "sourceText": "$690"
          },
          {
            "id": "C",
            "text": "$971",
            "sourceText": "$971"
          },
          {
            "id": "D",
            "text": "$413",
            "sourceText": "$413"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $971. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q13",
        "number": "13",
        "prompt": "Giá hòa vốn của hai cổ phiếu tại ngày đáo hạn là bao nhiêu?",
        "sourcePrompt": "What are the two breakeven stock prices at expiration?",
        "options": [
          {
            "id": "A",
            "text": "$55.58 và $45.87",
            "sourceText": "$55.58 and $45.87"
          },
          {
            "id": "B",
            "text": "$54.13 và $45.87",
            "sourceText": "$54.13 and $45.87"
          },
          {
            "id": "C",
            "text": "$55.58 và $44.42",
            "sourceText": "$55.58 and $44.42"
          },
          {
            "id": "D",
            "text": "$59.71 và $40.29",
            "sourceText": "$59.71 and $40.29"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $59.71 và $40.29. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q14",
        "number": "14",
        "prompt": "Lợi nhuận là bao nhiêu nếu giá cổ phiếu khi đáo hạn ở mức $ 64.75?",
        "sourcePrompt": "What is the profit if the stock price at expiration is at $64.75?",
        "options": [
          {
            "id": "A",
            "text": "-$971",
            "sourceText": "-$971"
          },
          {
            "id": "B",
            "text": "$1,475",
            "sourceText": "$1,475"
          },
          {
            "id": "C",
            "text": "-$3,525",
            "sourceText": "-$3,525"
          },
          {
            "id": "D",
            "text": "$500",
            "sourceText": "$500"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q15",
        "number": "15",
        "prompt": "Lợi nhuận là bao nhiêu nếu vị thế được giữ trong 90 ngày và giá cổ phiếu là 55 đô la?",
        "sourcePrompt": "What is the profit if the position is held for 90 days and the stock price is $55?",
        "options": [
          {
            "id": "A",
            "text": "-$971",
            "sourceText": "-$971"
          },
          {
            "id": "B",
            "text": "-$58",
            "sourceText": "-$58"
          },
          {
            "id": "C",
            "text": "-$109",
            "sourceText": "-$109"
          },
          {
            "id": "D",
            "text": "-$471",
            "sourceText": "-$471"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: -$109. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q16",
        "number": "16",
        "prompt": "Giả sử rằng, nhà đ ầu tư thêm m ột quyền chọn mua long straddle, m ột biến thể khác được biết là chiến lược strap. Điều này sẽ ảnh hưởng gì đến giá hòa vốn của cổ phiếu?",
        "sourcePrompt": "Suppose the investor adds a call to the long straddle, a transaction known as a strap. What will this do to the breakeven stock prices?",
        "options": [
          {
            "id": "A",
            "text": "Giảm cả mức hòa vốn tăng và giảm",
            "sourceText": "lower both the upside and downside breakevens"
          },
          {
            "id": "B",
            "text": "Tăng cả hai mức hòa vốn tăng và giảm",
            "sourceText": "raise both the upside and downside breakevens"
          },
          {
            "id": "C",
            "text": "Tăng mức hòa vốn tăng và giảm mức hòa vốn giảm",
            "sourceText": "raise the upside and lower the downside breakevens"
          },
          {
            "id": "D",
            "text": "Giảm mức hòa vốn giảm và tăng mức hòa vốn giảm",
            "sourceText": "lower the upside and raise the downside breakevens"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Giảm cả mức hòa vốn tăng và giảm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q17",
        "number": "17",
        "prompt": "Giả sử một quyền chọn bán được thêm vào chiến lược straddle, một biến thể khác được biết là chiến lược strip. Xác định lợi nhuận khi đáo hạn của chiến lược strip nếu giá cổ phiếu khi đáo hạn là $ 36.",
        "sourcePrompt": "Suppose a put is added to a straddle. This overall transaction is called a strip. Determine the profit at expiration on a strip if the stock price at expiration is $36.",
        "options": [
          {
            "id": "A",
            "text": "-$129",
            "sourceText": "-$129"
          },
          {
            "id": "B",
            "text": "$1,416",
            "sourceText": "$1,416"
          },
          {
            "id": "C",
            "text": "$429",
            "sourceText": "$429"
          },
          {
            "id": "D",
            "text": "$1,384",
            "sourceText": "$1,384"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên Trả lời các câu h ỏi từ 18 đến 20 về long box spread s ử dụng quyền chọn June 50 and 55.",
            "sourceText": "none of the above Answer questions 18 through 20 about a long box spread using the June 50 and 55 options."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $1,416. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q18",
        "number": "18",
        "prompt": "Chi phí của chiến lược hình hộp (box spread) là gì?",
        "sourcePrompt": "What is the cost of the box spread?",
        "options": [
          {
            "id": "A",
            "text": "$500",
            "sourceText": "$500"
          },
          {
            "id": "B",
            "text": "$2,018",
            "sourceText": "$2,018"
          },
          {
            "id": "C",
            "text": "$76",
            "sourceText": "$76"
          },
          {
            "id": "D",
            "text": "$484",
            "sourceText": "$484"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $484. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q19",
        "number": "19",
        "prompt": "Lợi nhuận là bao nhiêu nếu giá cổ phiếu khi đáo hạn là $ 52.50?",
        "sourcePrompt": "What is the profit if the stock price at expiration is $52.50?",
        "options": [
          {
            "id": "A",
            "text": "$16",
            "sourceText": "$16"
          },
          {
            "id": "B",
            "text": "$500",
            "sourceText": "$500"
          },
          {
            "id": "C",
            "text": "–$234",
            "sourceText": "–$234"
          },
          {
            "id": "D",
            "text": "$250",
            "sourceText": "$250"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $16. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q20",
        "number": "20",
        "prompt": "NPV của box spread là bao nhiêu?",
        "sourcePrompt": "What is the net present value of the box spread?",
        "options": [
          {
            "id": "A",
            "text": "$9.84",
            "sourceText": "$9.84"
          },
          {
            "id": "B",
            "text": "$5.00",
            "sourceText": "$5.00"
          },
          {
            "id": "C",
            "text": "$16.00",
            "sourceText": "$16.00"
          },
          {
            "id": "D",
            "text": "$1.84",
            "sourceText": "$1.84"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $1.84. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q21",
        "number": "21",
        "prompt": "Chiến lược nào sau đây không mang lại lợi nhuận trong thị trường đang tăng?",
        "sourcePrompt": "Which of the following strategies does not profit in a rising market?",
        "options": [
          {
            "id": "A",
            "text": "Đầu cơ giá lên quyền chọn bán (put bull spread)",
            "sourceText": "put bull spread"
          },
          {
            "id": "B",
            "text": "long straddle",
            "sourceText": "long straddle"
          },
          {
            "id": "C",
            "text": "Chiến lược vòng cổ (collar)",
            "sourceText": "collar"
          },
          {
            "id": "D",
            "text": "Đầu cơ giá lên quyền chọn mua (call bull spread)",
            "sourceText": "call bull spread"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q22",
        "number": "22",
        "prompt": "Giao dịch nào sau đây có thể bị lỗ không giới hạn?",
        "sourcePrompt": "Which of the following transactions can have an unlimited loss?",
        "options": [
          {
            "id": "A",
            "text": "long straddle",
            "sourceText": "long straddle"
          },
          {
            "id": "B",
            "text": "Chênh lệch theo lịch giao dịch (calendar spread)",
            "sourceText": "calendar spread"
          },
          {
            "id": "C",
            "text": "Chiến lược chênh lệch hình bướm (butterfly spread)",
            "sourceText": "butterfly spread"
          },
          {
            "id": "D",
            "text": "Chiến lược chênh lệch hộp đảo ngược (reverse box spread)",
            "sourceText": "reverse box spread"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Chênh lệch theo lịch giao dịch (calendar spread). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q23",
        "number": "23",
        "prompt": "Chiến lược nào sau đây là chi ến lược tốt nhất cho sự sụt giảm dự kiến của thị trường?",
        "sourcePrompt": "Which of the following is the best strategy for an expected fall in the market?",
        "options": [
          {
            "id": "A",
            "text": "long strip (2 puts and 1 call)",
            "sourceText": "long strip (2 puts and 1 call)"
          },
          {
            "id": "B",
            "text": "Chênh lệch đầu cơ giá lên quyền chọn bán (put bull spread)",
            "sourceText": "put bull spread"
          },
          {
            "id": "C",
            "text": "Chênh lệch theo lịch giao dịch (calendar spread)",
            "sourceText": "calendar spread"
          },
          {
            "id": "D",
            "text": "Chiến lược chênh lệch hình bướm (butterfly spread)",
            "sourceText": "butterfly spread"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: long strip (2 puts and 1 call). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q24",
        "number": "24",
        "prompt": "Thực hiện sớm quyền chọn là bất lợi trong giao dịch nào sau đây?",
        "sourcePrompt": "Early exercise is a disadvantage in which of the following transactions?",
        "options": [
          {
            "id": "A",
            "text": "short box spread",
            "sourceText": "short box spread"
          },
          {
            "id": "B",
            "text": "Chênh lệch đầu cơ giá xuống quyền chọn bán (put bear spread)",
            "sourceText": "put bear spread"
          },
          {
            "id": "C",
            "text": "long strip (2 puts và 1 call)",
            "sourceText": "long strip (2 puts and 1 call)"
          },
          {
            "id": "D",
            "text": "long strap (2 calls và 1 put)",
            "sourceText": "long strap (2 calls and 1 put)"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: short box spread. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q25",
        "number": "25",
        "prompt": "Cái nào sau đây có biểu đồ lợi nhuận tương tự nhau?",
        "sourcePrompt": "Which of the following have similar profit graphs?",
        "options": [
          {
            "id": "A",
            "text": "call bull spread và long box spread",
            "sourceText": "call bull spread and long box spread"
          },
          {
            "id": "B",
            "text": "put bear spread và short box spread",
            "sourceText": "put bear spread and short box spread"
          },
          {
            "id": "C",
            "text": "butterfly spread và ratio spread",
            "sourceText": "butterfly spread and ratio spread"
          },
          {
            "id": "D",
            "text": "calendar spread và call bear spread",
            "sourceText": "calendar spread and call bear spread"
          },
          {
            "id": "E",
            "text": "Không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q26",
        "number": "26",
        "prompt": "Việc mua một quyền chọn và bán một quyền chọn khác được gọi là",
        "sourcePrompt": "The purchase of one option and the sale of another is known as",
        "options": [
          {
            "id": "A",
            "text": "box",
            "sourceText": "box"
          },
          {
            "id": "B",
            "text": "bear strategy",
            "sourceText": "bear strategy"
          },
          {
            "id": "C",
            "text": "bull strategy",
            "sourceText": "bull strategy"
          },
          {
            "id": "D",
            "text": "collar",
            "sourceText": "collar"
          },
          {
            "id": "E",
            "text": "spread",
            "sourceText": "spread"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: spread. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q27",
        "number": "27",
        "prompt": "Chiến lược quyền chọn trong đó người nắm giữ vị thế mua cổ phiếu mua một vị thế bán với giá thực hiện thấp hơn giá cổ phiếu hiện tại và bán một vị thế mua với giá thực hiện cao hơn giá cổ phiếu hiện tại được gọi là",
        "sourcePrompt": "The option strategy where the holder of a long position in a stock buys a put with an exercise price lower than the current stock price and sells a call with an exercise price higher than the current stock price is known as",
        "options": [
          {
            "id": "A",
            "text": "box",
            "sourceText": "box"
          },
          {
            "id": "B",
            "text": "bear strategy",
            "sourceText": "bear strategy"
          },
          {
            "id": "C",
            "text": "bull strategy",
            "sourceText": "bull strategy"
          },
          {
            "id": "D",
            "text": "collar",
            "sourceText": "collar"
          },
          {
            "id": "E",
            "text": "spread",
            "sourceText": "spread"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: collar. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q28",
        "number": "28",
        "prompt": "Lợi nhuận từ chiến lược chênh l ệch đầu cơ giá xu ống quyền chọn bán khi cả hai quyền chọn đều OTM là",
        "sourcePrompt": "The profit from a put bear spread strategy when both options are out of the money is",
        "options": [
          {
            "id": "A",
            "text": "–X1 + ST + P1 + X2 – ST – P2",
            "sourceText": "–X1 + ST + P1 + X2 – ST – P2"
          },
          {
            "id": "B",
            "text": "–X1 + ST + P1 – P2",
            "sourceText": "–X1 + ST + P1 – P2"
          },
          {
            "id": "C",
            "text": "X1 – ST – P1 – X2 + ST + P2",
            "sourceText": "X1 – ST – P1 – X2 + ST + P2"
          },
          {
            "id": "D",
            "text": "P1 + X2 – ST – P2",
            "sourceText": "P1 + X2 – ST – P2"
          },
          {
            "id": "E",
            "text": "P1 – P2",
            "sourceText": "P1 – P2"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: P1 – P2. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q29",
        "number": "29",
        "prompt": "“Như chiến lược chênh lệch hình bướm, chiến lược chênh lệch theo lịch giao dịch là một trong những công cụ cơ bản của ___________ là yếu tố chính trong hiệu suất của nó.” Từ tốt nhất cho chỗ trống là từ nào sau đây?",
        "sourcePrompt": "“Like the butterfly spread, the calendar spread is one in which the underlying instrument’s ___________ is the major factor in its performance.” The best word for the blank is which of the following?",
        "options": [
          {
            "id": "A",
            "text": "biến động",
            "sourceText": "volatility"
          },
          {
            "id": "B",
            "text": "Tỷ suất lợi nhuận mong đợi",
            "sourceText": "expected rate of return"
          },
          {
            "id": "C",
            "text": "beta",
            "sourceText": "beta"
          },
          {
            "id": "D",
            "text": "Tương quan với chỉ số chuẩn",
            "sourceText": "correlation with the benchmark index"
          },
          {
            "id": "E",
            "text": "độ lệch",
            "sourceText": "skewness"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q30",
        "number": "30",
        "prompt": "Câu nào sau đây mô tả chính xác nhất bản chất của sự phân rã giá trị thời gian quyền chọn?",
        "sourcePrompt": "Which of the following statements best describes the nature of option time value decay?",
        "options": [
          {
            "id": "A",
            "text": "giá trị thời gian phân rã nhanh hơn khi giá c ổ phiếu tiến gần đến điểm hòa vốn",
            "sourceText": "time value decays more rapidly as the stock price approaches being at-the-money"
          },
          {
            "id": "B",
            "text": "giá trị thời gian phân rã nhanh hơn khi đáo hạn đến gần",
            "sourceText": "time value decays more rapidly as expiration approaches"
          },
          {
            "id": "C",
            "text": "Giá trị thời gian phân rã nhanh hơn đối với quyền chọn bán so với quyền chọn mua",
            "sourceText": "time value decays more rapidly for put option than call options"
          },
          {
            "id": "D",
            "text": "Sự phân rã giá trị thời gian không xảy ra đối với các chiến lược quyền chọn cổ áo",
            "sourceText": "time value decay does not occur for collar option strategies"
          },
          {
            "id": "E",
            "text": "Sự phân rã giá trị thời gian gây bất lợi cho một nhà giao dịch người mà bán quyền chọn mua",
            "sourceText": "time value decay is detrimental for a trader who is short call options"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá trị thời gian phân rã nhanh hơn khi đáo hạn đến gần. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 8,
    "title": "Nguyên lý định giá forward, futures và option trên futures",
    "sourceTitle": "CHAPTER 8: PRINCIPLES OF PRICING FORWARDS, FUTURES AND",
    "summary": "Chương 8 tập trung vào nguyên lý định giá forward, futures và option trên futures. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Cost of carry",
      "Forward price",
      "Futures price",
      "Convenience yield",
      "Option on futures"
    ],
    "theory": [
      {
        "heading": "Định giá forward/futures",
        "body": "Giá forward/futures phụ thuộc vào spot price, lãi suất, cổ tức hoặc lợi ích nắm giữ tài sản. Công thức cốt lõi là giá tương lai phản ánh chi phí nắm giữ tài sản đến ngày đáo hạn."
      },
      {
        "heading": "Cost of carry",
        "body": "Cost of carry gồm chi phí tài trợ, lưu kho, bảo hiểm trừ đi lợi ích nhận được như cổ tức hoặc convenience yield. Carry cao làm giá futures cao hơn spot."
      },
      {
        "heading": "Option trên futures",
        "body": "Option on futures là quyền chọn mà tài sản cơ sở là hợp đồng futures. Khi thực hiện, người mua nhận vị thế futures thay vì nhận trực tiếp tài sản vật chất."
      }
    ],
    "questions": [
      {
        "id": "c8-q1",
        "number": "1",
        "prompt": "Cận dưới của một quyền chọn mua kiểu Châu Âu trên hợp đồng tương lai là gì, trong đó f₀ là giá hợp đồng tương lai và X là giá thực hiện? Giả sử f₀ lớn hơn X.",
        "sourcePrompt": "What is the lower bound of a European call option on a futures contract where f0 is the futures price and X is the exercise price? Assume f0 is greater than X.",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch giữa f₀ và X",
            "sourceText": "the difference between f0 and X"
          },
          {
            "id": "B",
            "text": "không (zero)",
            "sourceText": "zero"
          },
          {
            "id": "C",
            "text": "giá trị hiện tại của chênh lệch giữa f₀ và X",
            "sourceText": "the present value of the difference between f0and X"
          },
          {
            "id": "D",
            "text": "tỷ số giữa f₀ và X",
            "sourceText": "the ratio of f0 to X"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá trị hiện tại của chênh lệch giữa f₀ và X. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q2",
        "number": "2",
        "prompt": "Phát biểu nào sau đây mô tả đúng nhất khái niệm bù hoãn mua thông thường (normal contango)?",
        "sourcePrompt": "Which of the following best describes normal contango?",
        "options": [
          {
            "id": "A",
            "text": "giá giao ngay nhỏ hơn giá hợp đồng tương lai",
            "sourceText": "the spot price is less than the futures price"
          },
          {
            "id": "B",
            "text": "giá hợp đồng tương lai nhỏ hơn giá giao ngay",
            "sourceText": "the futures price is less than the spot price"
          },
          {
            "id": "C",
            "text": "giá giao ngay kỳ vọng nhỏ hơn giá hợp đồng tương lai",
            "sourceText": "the expected spot price is less than the futuresprice"
          },
          {
            "id": "D",
            "text": "chi phí lưu giữ (cost of carry) là âm",
            "sourceText": "the cost of carry is negative"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá giao ngay kỳ vọng nhỏ hơn giá hợp đồng tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q3",
        "number": "3",
        "prompt": "Yếu tố nào sau đây có thể giải thích cho hiện tượng bù hoãn mua (contango)?",
        "sourcePrompt": "Which of the following can explain a contango?",
        "options": [
          {
            "id": "A",
            "text": "lãi suất vượt quá tỷ suất cổ tức (dividend yield)",
            "sourceText": "the interest rate exceeds the dividend yield"
          },
          {
            "id": "B",
            "text": "chi phí lưu giữ là âm",
            "sourceText": "the cost of carry is negative"
          },
          {
            "id": "C",
            "text": "giá hợp đồng tương lai vượt quá giá hợp đồng kỳ hạn",
            "sourceText": "futures prices exceed forward prices"
          },
          {
            "id": "D",
            "text": "thị trường ở trạng thái dưới mức lưu giữ đầy đủ (less than full carry)",
            "sourceText": "the market is at less than full carry"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lãi suất vượt quá tỷ suất cổ tức (dividend yield). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q4",
        "number": "4",
        "prompt": "Xác định giá hợp lý của quyền chọn bán kiểu Châu Âu trên hợp đồng tương lai nếu quyền chọn mua trị giá $6,55, lãi suất phi rủi ro tính lãi liên tục là 5,6%, giá hợp đồng tương lai là $80, giá thực hiện là $75, và thời gian đến hạn là 3 tháng.",
        "sourcePrompt": "Determine the appropriate price of a European put on a futures if the call is worth $6.55, the continuously compounded risk-free rate is 5.6 percent, the futures price is $80, the exercise price is $75, and the expiration is in three months.",
        "options": [
          {
            "id": "A",
            "text": "$12,56",
            "sourceText": "$12.56"
          },
          {
            "id": "B",
            "text": "$0,54",
            "sourceText": "$0.54"
          },
          {
            "id": "C",
            "text": "$11,48",
            "sourceText": "$11.48"
          },
          {
            "id": "D",
            "text": "$1,62",
            "sourceText": "$1.62"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $1,62. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q5",
        "number": "5",
        "prompt": "Giả sử anh/chị mua một hợp đồng kỳ hạn một năm với giá $65. Tại thời điểm đáo hạn, giá giao ngay là $73. Lãi suất phi rủi ro là 10%. Giá trị của hợp đồng tại thời điểm đáo hạn là bao nhiêu?",
        "sourcePrompt": "Suppose you buy a one-year forward contract at $65. At expiration, the spot price is $73. The risk-free rate is 10 percent. What is the value of the contract at expiration?",
        "options": [
          {
            "id": "A",
            "text": "$8,00",
            "sourceText": "$8.00"
          },
          {
            "id": "B",
            "text": "–$8,00",
            "sourceText": "–$8.00"
          },
          {
            "id": "C",
            "text": "$0,00",
            "sourceText": "$0.00"
          },
          {
            "id": "D",
            "text": "$7,27",
            "sourceText": "$7.27"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $8,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q6",
        "number": "6",
        "prompt": "Giả sử anh/chị bán một hợp đồng kỳ hạn ba tháng với giá $35. Một tháng sau, các hợp đồng kỳ hạn mới có điều khoản tương tự đang giao dịch ở mức $30. Lãi suất phi rủi ro tính lãi liên tục là 10%. Giá trị hợp đồng kỳ hạn của anh/chị là bao nhiêu?",
        "sourcePrompt": "Suppose you sell a three-month forward contract at $35. One month later, new forward contracts with similar terms are trading for $30. The continuously compounded risk-free rate is 10 percent. What is the value of your forward contract?",
        "options": [
          {
            "id": "A",
            "text": "$4,96",
            "sourceText": "$4.96"
          },
          {
            "id": "B",
            "text": "$5,00",
            "sourceText": "$5.00"
          },
          {
            "id": "C",
            "text": "$4,92",
            "sourceText": "$4.92"
          },
          {
            "id": "D",
            "text": "$4,55",
            "sourceText": "$4.55"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $4,92. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q7",
        "number": "7",
        "prompt": "Giả sử anh/chị mua một hợp đồng tương lai với giá $150. Nếu giá hợp đồng tương lai chuyển sang $147, giá trị của hợp đồng ngay trước thời điểm thanh toán theo thị trường (mark-to-market) là bao nhiêu?",
        "sourcePrompt": "Suppose you buy a futures contract at $150. If the futures price changes to $147, what is its value an instant before it is marked-to-market?",
        "options": [
          {
            "id": "A",
            "text": "0",
            "sourceText": "0"
          },
          {
            "id": "B",
            "text": "$3",
            "sourceText": "$3"
          },
          {
            "id": "C",
            "text": "–$3",
            "sourceText": "–$3"
          },
          {
            "id": "D",
            "text": "không thể xác định được",
            "sourceText": "it is impossible to tell"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: –$3. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q8",
        "number": "8",
        "prompt": "Tìm giá quyền chọn mua kiểu Châu Âu trên hợp đồng tương lai nếu giá hợp đồng tương lai là $106, giá thực hiện là $100, lãi suất phi rủi ro tính lãi liên tục là 7,2%, độ biến động (volatility) là 0,41 và quyền chọn đáo hạn sau 6 tháng.",
        "sourcePrompt": "Find the price of a European call on a futures contract if the futures price is $106, the exercise price is $100, the continuously compounded risk-free rate is 7.2 percent, the volatility is 0.41 and the call expires in six months.",
        "options": [
          {
            "id": "A",
            "text": "$14,57",
            "sourceText": "$14.57"
          },
          {
            "id": "B",
            "text": "$17,04",
            "sourceText": "$17.04"
          },
          {
            "id": "C",
            "text": "$6,00",
            "sourceText": "$6.00"
          },
          {
            "id": "D",
            "text": "$19,78",
            "sourceText": "$19.78"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $14,57. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q9",
        "number": "9",
        "prompt": "Một quyền chọn mua trên hợp đồng tương lai ở trạng thái lãi sâu (deep in-the-money) được thực hiện sớm vì",
        "sourcePrompt": "A deep in-the-money call option on futures is exercised early because",
        "options": [
          {
            "id": "A",
            "text": "giá trị nội tại được tối đa hóa",
            "sourceText": "the intrinsic value is maximized"
          },
          {
            "id": "B",
            "text": "nó hoạt động như một hợp đồng tương lai nhưng lại làm đóng băng vốn",
            "sourceText": "it behaves like a futures but ties up funds"
          },
          {
            "id": "C",
            "text": "giá hợp đồng tương lai khó có khả năng tăng thêm nữa",
            "sourceText": "the futures price is not likely to rise any further"
          },
          {
            "id": "D",
            "text": "tất cả các đáp án trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: nó hoạt động như một hợp đồng tương lai nhưng lại làm đóng băng vốn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q10",
        "number": "10",
        "prompt": "Tìm giá trị của quyền chọn bán kiểu Châu Âu trên hợp đồng tương lai nếu giá hợp đồng tương lai là 72, giá thực hiện là 70, lãi suất phi rủi ro tính lãi liên tục là 8,5%, độ biến động là 0,38 và thời gian đến hạn là 3 tháng.",
        "sourcePrompt": "Find the value of a European put option on futures if the futures price is 72, the exercise price is 70, the continuously compounded risk-free rate is 8.5 percent, the volatility is 0.38 and the time to expiration is three months.",
        "options": [
          {
            "id": "A",
            "text": "6,30",
            "sourceText": "6.30"
          },
          {
            "id": "B",
            "text": "12,90",
            "sourceText": "12.90"
          },
          {
            "id": "C",
            "text": "4,34",
            "sourceText": "4.34"
          },
          {
            "id": "D",
            "text": "2,00",
            "sourceText": "2.00"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 4,34. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q11",
        "number": "11",
        "prompt": "Giá hợp đồng tương lai khác với giá giao ngay bởi yếu tố nào sau đây?",
        "sourcePrompt": "Futures prices differ from spot prices by which one of the following factors?",
        "options": [
          {
            "id": "A",
            "text": "rủi ro hệ thống",
            "sourceText": "the systematic risk"
          },
          {
            "id": "B",
            "text": "chi phí lưu giữ (cost of carry)",
            "sourceText": "the cost of carry"
          },
          {
            "id": "C",
            "text": "khoảng chênh lệch (spread)",
            "sourceText": "the spread"
          },
          {
            "id": "D",
            "text": "phần bù rủi ro (risk premium)",
            "sourceText": "the risk premium"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chi phí lưu giữ (cost of carry). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q12",
        "number": "12",
        "prompt": "Tìm tỷ giá kỳ hạn của ngoại tệ Y nếu tỷ giá giao ngay là $4,50, lãi suất nội tệ là 6%, lãi suất ngoại tệ là 7% và hợp đồng kỳ hạn có thời hạn 9 tháng. (Lãi suất tính lãi liên tục.)",
        "sourcePrompt": "Find the forward rate of foreign currency Y if the spot rate is $4.50, the domestic interest rate is 6 percent, the foreign interest rate is 7 percent, and the forward contract is for nine months. (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "$4,458",
            "sourceText": "$4.458"
          },
          {
            "id": "B",
            "text": "$5,104",
            "sourceText": "$5.104"
          },
          {
            "id": "C",
            "text": "$4,468",
            "sourceText": "$4.468"
          },
          {
            "id": "D",
            "text": "$4,532",
            "sourceText": "$4.532"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $4,468. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q13",
        "number": "13",
        "prompt": "Thị trường bù hoãn mua (contango) đi liền với điều nào sau đây?",
        "sourcePrompt": "A contango market is consistent with",
        "options": [
          {
            "id": "A",
            "text": "khoảng chênh lệch cơ sở (basis) âm",
            "sourceText": "a negative basis"
          },
          {
            "id": "B",
            "text": "giá hợp đồng tương lai vượt quá giá giao ngay",
            "sourceText": "futures prices exceeding spot prices"
          },
          {
            "id": "C",
            "text": "chi phí lưu giữ dương",
            "sourceText": "a positive cost of carry"
          },
          {
            "id": "D",
            "text": "tất cả các đáp án trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tất cả các đáp án trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q14",
        "number": "14",
        "prompt": "Cận dưới của quyền chọn mua ngoại tệ kiểu Châu Âu là bao nhiêu nếu tỷ giá giao ngay là $2,25, lãi suất nội tệ là 5,5%, lãi suất ngoại tệ là 6,2%, quyền chọn đáo hạn sau 3 tháng và giá thực hiện là $2,20? (Lãi suất tính lãi liên tục.)",
        "sourcePrompt": "What is the lower bound of a European foreign currency call if the spot rate is $2.25, the domestic interest rate is 5.5 percent, the foreign interest rate is 6.2 percent, the option expires in three months, and the exercise price is $2.20? (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "$0,0457",
            "sourceText": "$0.0457"
          },
          {
            "id": "B",
            "text": "$0,05",
            "sourceText": "$0.05"
          },
          {
            "id": "C",
            "text": "$0,0793",
            "sourceText": "$0.0793"
          },
          {
            "id": "D",
            "text": "$0,0529",
            "sourceText": "$0.0529"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $0,0457. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q15",
        "number": "15",
        "prompt": "Giả sử có phần bù rủi ro $0,50. Giá giao ngay là $20 và giá hợp đồng tương lai là $22. Giá giao ngay kỳ vọng tại thời điểm đáo hạn là bao nhiêu?",
        "sourcePrompt": "Suppose there is a risk premium of $0.50. The spot price is $20 and the futures price is $22. What is the expected spot price at expiration?",
        "options": [
          {
            "id": "A",
            "text": "$21,50",
            "sourceText": "$21.50"
          },
          {
            "id": "B",
            "text": "$22,50",
            "sourceText": "$22.50"
          },
          {
            "id": "C",
            "text": "$20,50",
            "sourceText": "$20.50"
          },
          {
            "id": "D",
            "text": "$24,50",
            "sourceText": "$24.50"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $22,50. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q16",
        "number": "16",
        "prompt": "Tìm giá trị của quyền chọn mua ngoại tệ kiểu Châu Âu nếu tỷ giá giao ngay là $5,25, giá thực hiện là $5,40, lãi suất nội tệ là 6,1%, lãi suất ngoại tệ là 5,5%, quyền chọn mua đáo hạn sau 1 tháng và độ biến động là 0,32. (Lãi suất tính lãi liên tục.)",
        "sourcePrompt": "Find the value of a European foreign currency call if the spot rate is $5.25, the exercise price is $5.40, the domestic interest rate is 6.1 percent, the foreign interest rate is 5.5 percent, the call expires in one month, and the volatility is 0.32. (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "$0,167",
            "sourceText": "$0.167"
          },
          {
            "id": "B",
            "text": "$0,15",
            "sourceText": "$0.15"
          },
          {
            "id": "C",
            "text": "$0,140",
            "sourceText": "$0.140"
          },
          {
            "id": "D",
            "text": "$0,131",
            "sourceText": "$0.131"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $0,131. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q17",
        "number": "17",
        "prompt": "Giá giao ngay sẽ là bao nhiêu nếu giá hợp đồng tương lai chỉ số cổ phiếu là $75, lãi suất phi rủi ro là 10%, tỷ suất cổ tức tính lãi liên tục là 3% và hợp đồng tương lai đáo hạn sau 3 tháng?",
        "sourcePrompt": "What would be the spot price if a stock index futures price were $75, the risk-free rate were 10 percent, the continuously compounded dividend yield is 3 percent, and the futures contract expires in three months?",
        "options": [
          {
            "id": "A",
            "text": "$73,70",
            "sourceText": "$73.70"
          },
          {
            "id": "B",
            "text": "$77,48",
            "sourceText": "$77.48"
          },
          {
            "id": "C",
            "text": "$72,60",
            "sourceText": "$72.60"
          },
          {
            "id": "D",
            "text": "$76,32",
            "sourceText": "$76.32"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $73,70. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q18",
        "number": "18",
        "prompt": "Tìm cận dưới của quyền chọn bán ngoại tệ kiểu Châu Âu nếu tỷ giá giao ngay là $3,50, lãi suất nội tệ là 8%, lãi suất ngoại tệ là 7%, quyền chọn đáo hạn sau 6 tháng và giá thực hiện là $3,75. (Lãi suất tính lãi liên tục.)",
        "sourcePrompt": "Find the lower bound of a European foreign currency put if the spot rate is $3.50, the domestic interest rate is 8 percent, the foreign interest rate is 7 percent, the option expires in six months, and the exercise price is $3.75. (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "không (zero)",
            "sourceText": "zero"
          },
          {
            "id": "B",
            "text": "$0,250",
            "sourceText": "$0.250"
          },
          {
            "id": "C",
            "text": "$0,366",
            "sourceText": "$0.366"
          },
          {
            "id": "D",
            "text": "$0,108",
            "sourceText": "$0.108"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không phương án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q19",
        "number": "19",
        "prompt": "Giả sử hiện tại là tháng Bảy. Giá hợp đồng tương lai tháng Chín là $60 và giá hợp đồng tương lai tháng Mười Hai là $68. Khoảng chênh lệch (spread) $8 đại diện cho điều gì?",
        "sourcePrompt": "Suppose it is currently July. The September futures price is $60 and the December futures price is $68. What does the spread of $8 represent?",
        "options": [
          {
            "id": "A",
            "text": "chi phí lưu giữ từ tháng Bảy đến tháng Chín",
            "sourceText": "the cost of carry from July to September"
          },
          {
            "id": "B",
            "text": "phần bù rủi ro kỳ vọng từ tháng Bảy đến tháng Chín",
            "sourceText": "the expected risk premium from July to September"
          },
          {
            "id": "C",
            "text": "chi phí lưu giữ từ tháng Chín đến tháng Mười Hai",
            "sourceText": "the cost of carry from September to December"
          },
          {
            "id": "D",
            "text": "phần bù rủi ro kỳ vọng từ tháng Chín đến tháng Mười Hai",
            "sourceText": "the expected risk premium from September to December"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: chi phí lưu giữ từ tháng Chín đến tháng Mười Hai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q20",
        "number": "20",
        "prompt": "Tại sao giá trị ban đầu của một hợp đồng tương lai bằng không?",
        "sourcePrompt": "Why is the initial value of a futures contract zero?",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng tương lai được thanh toán theo thị trường (mark-to-market) ngay lập tức",
            "sourceText": "the futures is immediately marked-to-market"
          },
          {
            "id": "B",
            "text": "không phải bỏ ra khoản tiền nào để mở vị thế",
            "sourceText": "you do not pay anything for it"
          },
          {
            "id": "C",
            "text": "khoảng chênh lệch cơ sở (basis) sẽ hội tụ về không",
            "sourceText": "the basis will converge to zero"
          },
          {
            "id": "D",
            "text": "lợi nhuận kỳ vọng bằng không",
            "sourceText": "the expected profit is zero"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: không phải bỏ ra khoản tiền nào để mở vị thế. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q21",
        "number": "21",
        "prompt": "Giá giao ngay cộng với chi phí lưu giữ bằng",
        "sourcePrompt": "The spot price plus the cost of carry equals",
        "options": [
          {
            "id": "A",
            "text": "lợi suất tiện ích (convenience yield)",
            "sourceText": "the convenience yield"
          },
          {
            "id": "B",
            "text": "giá giao ngay tương lai kỳ vọng",
            "sourceText": "the expected future spot price"
          },
          {
            "id": "C",
            "text": "phần bù rủi ro",
            "sourceText": "the risk premium"
          },
          {
            "id": "D",
            "text": "giá hợp đồng tương lai",
            "sourceText": "the futures price"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giá hợp đồng tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q22",
        "number": "22",
        "prompt": "Xác định giá trị của quyền chọn bán ngoại tệ kiểu Châu Âu nếu giá quyền chọn mua là $0,05, tỷ giá giao ngay là $0,5702, giá thực hiện là $0,59, lãi suất nội tệ là 5,75%, lãi suất ngoại tệ là 4,95% và các quyền chọn đáo hạn sau 45 ngày. (Lãi suất tính lãi liên tục.)",
        "sourcePrompt": "Determine the value of a European foreign currency put if the call is at $0.05, the spot rate is $0.5702, the exercise price is $0.59, the domestic interest rate is 5.75 percent, the foreign interest rate is 4.95 percent and the options expire in 45 days. (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "$0,069",
            "sourceText": "$0.069"
          },
          {
            "id": "B",
            "text": "$0,031",
            "sourceText": "$0.031"
          },
          {
            "id": "C",
            "text": "$0,050",
            "sourceText": "$0.050"
          },
          {
            "id": "D",
            "text": "$0,517",
            "sourceText": "$0.517"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $0,069. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q23",
        "number": "23",
        "prompt": "Ngang giá lãi suất (interest rate parity) thực chất tương đương với",
        "sourcePrompt": "Interest rate parity is essentially the same as",
        "options": [
          {
            "id": "A",
            "text": "quan hệ tỷ giá chéo (cross-rate)",
            "sourceText": "the cross-rate relationship"
          },
          {
            "id": "B",
            "text": "quan hệ chi phí lưu giữ (cost of carry)",
            "sourceText": "the cost of carry relationship"
          },
          {
            "id": "C",
            "text": "mô hình Garman-Kohlhagen",
            "sourceText": "the Garman-Kohlhagen model"
          },
          {
            "id": "D",
            "text": "tất cả các đáp án trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quan hệ chi phí lưu giữ (cost of carry). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q24",
        "number": "24",
        "prompt": "Giao dịch khai thác chênh lệch giữa giá lý thuyết và giá thực tế của hợp đồng kỳ hạn hoặc hợp đồng tương lai ngoại tệ được gọi là",
        "sourcePrompt": "A transaction that exploits differences in the theoretical and actual values of a foreign currency forward or futures contract is called",
        "options": [
          {
            "id": "A",
            "text": "kinh doanh chênh lệch lãi suất có bảo hiểm (covered interest arbitrage)",
            "sourceText": "covered interest arbitrage"
          },
          {
            "id": "B",
            "text": "kinh doanh chênh lệch tam giác (triangular arbitrage)",
            "sourceText": "triangular arbitrage"
          },
          {
            "id": "C",
            "text": "chuyển đổi (conversion)",
            "sourceText": "a conversion"
          },
          {
            "id": "D",
            "text": "ngang giá lãi suất",
            "sourceText": "interest-rate parity"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: kinh doanh chênh lệch lãi suất có bảo hiểm (covered interest arbitrage). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q25",
        "number": "25",
        "prompt": "Chi phí lưu giữ bao gồm tất cả những khoản sau, NGOẠI TRỪ",
        "sourcePrompt": "The cost of carry consists of all the following except",
        "options": [
          {
            "id": "A",
            "text": "lãi suất phi rủi ro",
            "sourceText": "the risk–free rate"
          },
          {
            "id": "B",
            "text": "chi phí lưu kho",
            "sourceText": "the cost of storage"
          },
          {
            "id": "C",
            "text": "chi phí bảo hiểm cho tài sản",
            "sourceText": "insurance on the asset"
          },
          {
            "id": "D",
            "text": "phần bù rủi ro",
            "sourceText": "the risk premium"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: phần bù rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q26",
        "number": "26",
        "prompt": "Giá trị của vị thế mua trong hợp đồng kỳ hạn tại thời điểm đáo hạn là",
        "sourcePrompt": "The value of a long position in a forward contract at expiration is",
        "options": [
          {
            "id": "A",
            "text": "giá giao ngay cộng với giá kỳ hạn ban đầu",
            "sourceText": "the spot price plus the original forward price"
          },
          {
            "id": "B",
            "text": "giá giao ngay trừ đi giá kỳ hạn ban đầu",
            "sourceText": "the spot price minus the original forward price"
          },
          {
            "id": "C",
            "text": "giá kỳ hạn ban đầu được chiết khấu về thời điểm đáo hạn",
            "sourceText": "the original forward price discounted to expiration"
          },
          {
            "id": "D",
            "text": "giá giao ngay trừ đi giá kỳ hạn ban đầu được chiết khấu về thời điểm đáo hạn",
            "sourceText": "the spot price minus the original forward price discounted to expiration"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá giao ngay trừ đi giá kỳ hạn ban đầu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q27",
        "number": "27",
        "prompt": "Giá trị của hợp đồng tương lai ngay sau khi được thanh toán theo thị trường (mark-to-market) là",
        "sourcePrompt": "The value of a futures contract immediately after being marked to market is",
        "options": [
          {
            "id": "A",
            "text": "bằng đúng số tiền thanh toán hằng ngày (daily settlement)",
            "sourceText": "numerically equal to the daily settlement amount"
          },
          {
            "id": "B",
            "text": "giá giao ngay cộng với giá kỳ hạn ban đầu",
            "sourceText": "the spot price plus the original forward price"
          },
          {
            "id": "C",
            "text": "bằng mức biến động giá kể từ khi mở hợp đồng",
            "sourceText": "equal to the amount by which the price changed since the contract was opened"
          },
          {
            "id": "D",
            "text": "đơn giản là bằng không",
            "sourceText": "simply zero"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: đơn giản là bằng không. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q28",
        "number": "28",
        "prompt": "Trong điều kiện không chắc chắn và nhà đầu tư có ác cảm rủi ro (risk aversion), giá giao ngay hiện tại bằng",
        "sourcePrompt": "Under uncertainty and risk aversion, today’s spot price equals",
        "options": [
          {
            "id": "A",
            "text": "giá giao ngay tương lai kỳ vọng, trừ chi phí lưu kho, trừ lãi vay đã bỏ qua, trừ phần bù rủi ro",
            "sourceText": "the expected future spot price, minus the storage costs, minus the interest forgone, minus the risk premium"
          },
          {
            "id": "B",
            "text": "giá giao ngay tương lai kỳ vọng, trừ chi phí lưu kho, trừ lãi vay đã bỏ qua, cộng phần bù rủi ro",
            "sourceText": "the expected future spot price, minus the storage costs, minus the interest forgone, plus the risk premium"
          },
          {
            "id": "C",
            "text": "giá giao ngay tương lai kỳ vọng, trừ chi phí lưu kho, trừ phần bù rủi ro",
            "sourceText": "the expected future spot price, minus the storage costs, minus the risk premium"
          },
          {
            "id": "D",
            "text": "giá giao ngay tương lai trừ đi chi phí lưu kho",
            "sourceText": "the future spot price minus the cost of storage"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giá giao ngay tương lai kỳ vọng, trừ chi phí lưu kho, trừ lãi vay đã bỏ qua, trừ phần bù rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q29",
        "number": "29",
        "prompt": "Khoản lợi tức tăng thêm có được từ việc nắm giữ hàng hóa khan hiếm hoặc lợi ích phi tiền tệ từ tài sản được gọi là",
        "sourcePrompt": "The additional return earned by holding a commodity that is in short supply or a nonpecuniary gain from an asset is referred to as",
        "options": [
          {
            "id": "A",
            "text": "chi phí lưu giữ âm",
            "sourceText": "the negative cost of carry"
          },
          {
            "id": "B",
            "text": "lợi suất tiện ích (convenience yield)",
            "sourceText": "the convenience yield"
          },
          {
            "id": "C",
            "text": "lợi nhuận không có dòng tiền (cash-flow free gains)",
            "sourceText": "cash-flow free gains"
          },
          {
            "id": "D",
            "text": "lợi nhuận từ tài sản cơ sở",
            "sourceText": "gains on the underlying"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lợi suất tiện ích (convenience yield). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q30",
        "number": "30",
        "prompt": "Ngang giá quyền chọn mua – quyền chọn bán – hợp đồng tương lai (put-call-futures parity) là mối quan hệ giữa giá quyền chọn bán, quyền chọn mua và hợp đồng tương lai trên một tài sản. Giả định lãi suất phi rủi ro không đổi và quyền chọn kiểu Châu Âu, công thức nào sau đây diễn đạt đúng quan hệ ngang giá quyền chọn mua – quyền chọn bán – hợp đồng tương lai?",
        "sourcePrompt": "Put-call-futures parity is the relationship between the prices of puts, calls, and futures on an asset. Assuming a constant risk-free rate and European options, which of the following correctly expresses the relationship of put-call-futures parity?",
        "options": [
          {
            "id": "A",
            "text": "Pe(S0,T) = Ce(S0,T) + (X – f0(T))(1 + r)^(-T)",
            "sourceText": "Pe(S0,T) = Ce(S0,T) + (X – f0(T))(1 + r)-T"
          },
          {
            "id": "B",
            "text": "Pe(S0,T,X) = Ce(S0,T) – (X – f0(T))(1 + r)^(-T)",
            "sourceText": "Pe(S0,T,X) = Ce(S0,T) – (X – f0(T))(1 + r)-T"
          },
          {
            "id": "C",
            "text": "Pe(S0,T,X) = Ce(S0,T,X) + (X – f0(T))(1 + r)^(-T)",
            "sourceText": "Pe(S0,T,X) = Ce(S0,T,X) + (X – f0(T))(1 + r)-T"
          },
          {
            "id": "D",
            "text": "Pe(S0,T,X) = Ce(S0,T,X)(X – f0(T))(1 + r)^(-T)",
            "sourceText": "Pe(S0,T,X) = Ce(S0,T,X)(X – f0(T))(1 + r)-T"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Pe(S0,T) = Ce(S0,T) + (X – f0(T))(1 + r)^(-T). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 9,
    "title": "Chiến lược arbitrage futures",
    "sourceTitle": "CHAPTER 9: FUTURES ARBITRAGE STRATEGIES",
    "summary": "Chương 9 tập trung vào chiến lược arbitrage futures. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Cash-and-carry",
      "Reverse cash-and-carry",
      "Implied repo rate",
      "Index arbitrage",
      "Currency arbitrage"
    ],
    "theory": [
      {
        "heading": "Cash-and-carry arbitrage",
        "body": "Nếu futures quá cao so với spot cộng chi phí carry, nhà đầu tư có thể mua spot, vay tiền tài trợ và bán futures để khóa lợi nhuận."
      },
      {
        "heading": "Reverse cash-and-carry",
        "body": "Nếu futures quá thấp, chiến lược ngược lại là bán khống spot hoặc dùng vị thế tương đương và mua futures."
      },
      {
        "heading": "Implied rate",
        "body": "Nhiều bài hỏi implied repo rate hoặc implied return. Ý tưởng là tìm lợi suất ẩn mà futures đang hàm ý, rồi so với lãi suất thị trường để xác định arbitrage."
      }
    ],
    "questions": [
      {
        "id": "c9-q1",
        "number": "1A",
        "prompt": "Giao dịch được thiết kế để khai thác định giá sai trong mối quan hệ giữa hợp đồng tương lai và giá giao ngay được gọi là",
        "sourcePrompt": "The transaction designed to exploit mispricing in the relationship between futures and spot prices is called",
        "options": [
          {
            "id": "A",
            "text": "thỏa thuận mua lại",
            "sourceText": "a repurchase agreement"
          },
          {
            "id": "B",
            "text": "phòng ngừa",
            "sourceText": "a hedge"
          },
          {
            "id": "C",
            "text": "Đầu cơ",
            "sourceText": "speculation"
          },
          {
            "id": "D",
            "text": "kinh doanh chênh lệch giá",
            "sourceText": "carry arbitrage"
          },
          {
            "id": "E",
            "text": "không có ý nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: kinh doanh chênh lệch giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q2",
        "number": "2",
        "prompt": "Lãi suất repo ngụ ý tương tự như lãi suất",
        "sourcePrompt": "The implied repo rate is similar to the",
        "options": [
          {
            "id": "A",
            "text": "tỷ suất hoàn vốn nội bộ",
            "sourceText": "internal rate of return"
          },
          {
            "id": "B",
            "text": "chi phí phòng ngừa rủi ro",
            "sourceText": "cost of hedging"
          },
          {
            "id": "C",
            "text": "lợi nhuận trên hợp đồng tương lai (hợp đồng tương lai)",
            "sourceText": "yield on the futures contract"
          },
          {
            "id": "D",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: tỷ suất hoàn vốn nội bộ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q3",
        "number": "3A",
        "prompt": "Trên cơ sở thanh khoản, hợp đồng tương lai tốt nhất để phòng ngừa rủi ro lãi suất ngắn hạn là",
        "sourcePrompt": "On the basis of liquidity, the best futures contract for hedging short-term interest rates is",
        "options": [
          {
            "id": "A",
            "text": "Tín phiếu kho bạc",
            "sourceText": "Treasury bills"
          },
          {
            "id": "B",
            "text": "Lãi suất cơ bản",
            "sourceText": "the prime rate"
          },
          {
            "id": "C",
            "text": "Thương phiếu",
            "sourceText": "commercial paper"
          },
          {
            "id": "D",
            "text": "Đồng Euro",
            "sourceText": "Eurodollars"
          },
          {
            "id": "E",
            "text": "Tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Đồng Euro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q4",
        "number": "4",
        "prompt": "Một trong những lựa chọn nào sau đây không liên quan đến hợp đồng tương lai trái phiếu kho bạc?",
        "sourcePrompt": "Which one of the following options is not associated with the Treasury bond futures contract?",
        "options": [
          {
            "id": "A",
            "text": "Quyền chọn end-of-the-month",
            "sourceText": "end-of-the-month"
          },
          {
            "id": "B",
            "text": "Quyền chọn chênh lệch giá",
            "sourceText": "spread option"
          },
          {
            "id": "C",
            "text": "Quyền chọn wild card",
            "sourceText": "wild card option"
          },
          {
            "id": "D",
            "text": "Quyền chọn quality",
            "sourceText": "quality option"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Quyền chọn chênh lệch giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q5",
        "number": "5",
        "prompt": "Giao dịch trong đó chênh lệch hợp đồng tương lai trái phiếu kho bạc được kết hợp với giao dịch hợp đồng tương lai của Fed được gọi là",
        "sourcePrompt": "The transaction in which a Treasury bond futures spread is combined with a Fed funds futures transaction is called a",
        "options": [
          {
            "id": "A",
            "text": "Spread trái phiếu kho bạc",
            "sourceText": "Bond-bill spread"
          },
          {
            "id": "B",
            "text": "Spread MOB",
            "sourceText": "MOB spread"
          },
          {
            "id": "C",
            "text": "Đầu tư tự động",
            "sourceText": "designated order turnaround"
          },
          {
            "id": "D",
            "text": "Phương pháp giao dịch con rùa",
            "sourceText": "turtle trade"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Phương pháp giao dịch con rùa. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q6",
        "number": "6",
        "prompt": "Cơ hội để khóa giá hóa đơn và mua trái phiếu kho bạc có thể giao sau này được gọi là",
        "sourcePrompt": "The opportunity to lock in the invoice price and purchase the deliverable Treasury bond later is called",
        "options": [
          {
            "id": "A",
            "text": "bảo hiểm trái phiếu",
            "sourceText": "bond insurance"
          },
          {
            "id": "B",
            "text": "chương trình giao dịch",
            "sourceText": "program trading"
          },
          {
            "id": "C",
            "text": "Wild card",
            "sourceText": "the wild card"
          },
          {
            "id": "D",
            "text": "Chênh lệch giá giao hàng",
            "sourceText": "delivery arbitrage"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Wild card. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q7",
        "number": "1B",
        "prompt": "Nếu giá hợp đồng tương lai lúc 3:00 chiều là 122, giá giao ngay là 142,5 và CF là 1,1575, thì giá giao ngay phải giảm bao nhiêu vào lúc 5:00 chiều để biện minh cho việc giao hàng?",
        "sourcePrompt": "1575, by how much must the spot price fall by 5:00 p.m. to justify delivery?",
        "options": [
          {
            "id": "A",
            "text": "1.285",
            "sourceText": "1.285"
          },
          {
            "id": "B",
            "text": "1.1102",
            "sourceText": "1.1102"
          },
          {
            "id": "C",
            "text": "20.50",
            "sourceText": "20.50"
          },
          {
            "id": "D",
            "text": "17,71",
            "sourceText": "17.71"
          },
          {
            "id": "E",
            "text": "42.94",
            "sourceText": "42.94"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1.285. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q8",
        "number": "8",
        "prompt": "Chi phí của một tùy chọn giao hàng được thanh toán như thế nào?",
        "sourcePrompt": "How is the cost of a delivery option paid?",
        "options": [
          {
            "id": "A",
            "text": "người mua trả người bán ngắn bằng cách thanh toán bằng tiền mặt",
            "sourceText": "the long pays the short with a cash settlement"
          },
          {
            "id": "B",
            "text": "người bán trả tiền cho người mua bằng cách thanh toán bằng tiền mặt",
            "sourceText": "the short pays the long with a cash settlement"
          },
          {
            "id": "C",
            "text": "giá hợp đồng tương lai đóng cửa cao hơn",
            "sourceText": "a higher closing futures price"
          },
          {
            "id": "D",
            "text": "giá hợp đồng tương lai đóng cửa thấp hơn",
            "sourceText": "a lower closing futures price"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giá hợp đồng tương lai đóng cửa thấp hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q9",
        "number": "112A",
        "prompt": "Tìm lãi suất repo ngụ ý hàng năm trên chênh lệch giá trái phiếu T nếu giá giao ngay là 112,25, lãi tích lũy là 1,35, giá hợp đồng tương lai là 114,75, CF là 1,0125, lãi tích lũy khi giao hàng là 0,95 và thời gian nắm giữ là ba tháng.",
        "sourcePrompt": "25, the accrued interest is 1.35, the futures price is 114.75, the CF is 1.0125, the accrued interest at delivery is 0.95, and the holding period is three months.",
        "options": [
          {
            "id": "A",
            "text": "1.85%",
            "sourceText": "1.85 percent"
          },
          {
            "id": "B",
            "text": "0.77%",
            "sourceText": "0.77 percent"
          },
          {
            "id": "C",
            "text": "14.77%",
            "sourceText": "14.77 percent"
          },
          {
            "id": "D",
            "text": "13.04%",
            "sourceText": "13.04 percent"
          },
          {
            "id": "E",
            "text": "2.23%",
            "sourceText": "2.23 percent"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 13.04%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q10",
        "number": "10",
        "prompt": "Nếu một công tyđang có kế hoạch vay tiền trong tương lai, tỷ lệ mà công ty đang cố gắng khóa là",
        "sourcePrompt": "If a firm is planning to borrow money in the future, the rate it is trying to lock in is",
        "options": [
          {
            "id": "A",
            "text": "tỷ giá kỳ hạn hiện tại",
            "sourceText": "the current forward rate"
          },
          {
            "id": "B",
            "text": "tỷ giá giao ngay hiện tại",
            "sourceText": "the current spot rate"
          },
          {
            "id": "C",
            "text": "chênh lệch giữa tỷ giá giao ngay và tỷ giá kỳ hạn",
            "sourceText": "the difference between the spot rate and the forward rate"
          },
          {
            "id": "D",
            "text": "Tỷ lệ kỳ hạn khi chấm dứt hàng rào",
            "sourceText": "the forward rate at the termination of the hedge"
          },
          {
            "id": "E",
            "text": "Tất cả đều sai",
            "sourceText": "none of the above f."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: tỷ giá kỳ hạn hiện tại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q11",
        "number": "11",
        "prompt": "Xác định lãi suất repo ngụ ý hàng năm trên chênh lệch trái phiếu kho bạc, trong đó tháng 3 được mua ở mức 98,7 và tháng 6 được bán ở mức 99,5. CF tháng 3 là 1.225 và CF tháng 6 là 1.24. Tiền lãi tích lũy tính đến ngày 1 tháng 3 là 0,75 và tiền lãi tích lũy tính đến ngày 1 tháng 6 là 1,22.",
        "sourcePrompt": "Determine the annualized implied repo rate on a Treasury bond spread in which the March is bought at 98.7 and the June is sold at 99.5. The March CF is 1.225 and the June CF is 1.24. The accrued interest as of March 1 is 0.75 and the accrued interest as of June 1 is 1.22.",
        "options": [
          {
            "id": "A",
            "text": "5.21%",
            "sourceText": "5.21 percent"
          },
          {
            "id": "B",
            "text": "10.03%",
            "sourceText": "10.03 percent"
          },
          {
            "id": "C",
            "text": "1.28%",
            "sourceText": "1.28 percent"
          },
          {
            "id": "D",
            "text": ".2.42%",
            "sourceText": "2.42 percent"
          },
          {
            "id": "E",
            "text": "0.81%",
            "sourceText": "0.81 percent"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 10.03%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q12",
        "number": "12",
        "prompt": "Xác định số tiền mà hợp đồng tương lai chỉ số chứng khoán bị định giá sai nếu chỉ số chứng khoán ở mức 200, hợp đồng tương lai ở mức 202,5, tỷ lệ phi rủi ro là 6,45%, tỷ suất cổ tức là 2,75% và hợp đồng sẽ hết hạn sau ba tháng.",
        "sourcePrompt": "Determine the amount by which a stock index futures is mispriced if the stock index is at 200, the futures is at 202.5, the risk-free rate is 6.45 percent, the dividend yield is 2.75 percent, and the contract expires in three months.",
        "options": [
          {
            "id": "A",
            "text": "định giá thấp 0,64",
            "sourceText": "underpriced by 0.64"
          },
          {
            "id": "B",
            "text": "định giá cao 2,5",
            "sourceText": "overpriced by 2.5"
          },
          {
            "id": "C",
            "text": "định giá cao 9,76",
            "sourceText": "overpriced by 9.76"
          },
          {
            "id": "D",
            "text": "định giá cao 0,64",
            "sourceText": "overpriced by 0.64"
          },
          {
            "id": "E",
            "text": "định giá thấp 2,5",
            "sourceText": "underpriced by 2.5"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: định giá cao 0,64. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q13",
        "number": "13",
        "prompt": "Cái nào sau đây không phải là rủi ro giao dịch chương trình?",
        "sourcePrompt": "Which of the following is not a risk of program trading?",
        "options": [
          {
            "id": "A",
            "text": "cổ phiếu không thể được bán đồng thời khi hết hạn",
            "sourceText": "the stocks cannot be simultaneously sold at expiration"
          },
          {
            "id": "B",
            "text": "hợp đồng phân đoạn không thể được mua hoặc bán",
            "sourceText": "fractional contracts cannot be purchased or sold"
          },
          {
            "id": "C",
            "text": "Cổ tức không chắc chắn",
            "sourceText": "the dividends are not certain"
          },
          {
            "id": "D",
            "text": "Các cổ phiếu không thể được mua đồng thời",
            "sourceText": "the stocks cannot be purchased simultaneously"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: tất cả đều sai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q14",
        "number": "14",
        "prompt": "Lý do nào có thể được đưa ra cho việc không muốn phòng ngừa rủi ro cho việc phát hành trách nhiệm pháp lý trong tương lai nếu lãi suất cao bất thường?",
        "sourcePrompt": "What reason might be given for not wanting to hedge the future issuance of a liability if interest rates are unusually high?",
        "options": [
          {
            "id": "A",
            "text": "chi phí ký quỹ sẽ đắt",
            "sourceText": "the margin cost will be expensive"
          },
          {
            "id": "B",
            "text": "Bạn đang khóa với lãi suất cao",
            "sourceText": "you are locking in a high rate"
          },
          {
            "id": "C",
            "text": "Chi phí giao dịch cao hơn",
            "sourceText": "transaction costs are higher"
          },
          {
            "id": "D",
            "text": "giá kỳ hạn thấp hơn",
            "sourceText": "futures prices are lower"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Bạn đang khóa với lãi suất cao. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q15",
        "number": "15",
        "prompt": "Nếu chỉ số chứng khoán ở mức 148, giá hợp đồng tương lai ba tháng là 151, tỷ suất cổ tức là 5% và lãi suất là 8%, hãy xác định lợi nhuận từ chênh lệch giá chỉ số nếu cổ phiếu kết thúc ở mức 144 khi hết hạn. (Bỏ qua chi phí giao dịch.)",
        "sourcePrompt": "If the stock index is at 148, the three-month futures price is 151, the dividend yield is 5 percent and the interest rate is 8 percent, determine the profit from an index arbitrage if the stock ends up at 144 at expiration. (Ignore transaction costs.)",
        "options": [
          {
            "id": "A",
            "text": "1.89",
            "sourceText": "1.89"
          },
          {
            "id": "B",
            "text": "4.00",
            "sourceText": "4.00"
          },
          {
            "id": "C",
            "text": "7.00",
            "sourceText": "7.00"
          },
          {
            "id": "D",
            "text": "5.11",
            "sourceText": "5.11"
          },
          {
            "id": "E",
            "text": "–7.00",
            "sourceText": "–7.00"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1.89. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q16",
        "number": "16",
        "prompt": "Giao dịch trong đó tiền được vay bằng cách bán một chứng khoán và hứa sẽ mua lại nó trong vài tuần được gọi là",
        "sourcePrompt": "The transaction in which money is borrowed by selling a security and promising to buy it back in several weeks is called a",
        "options": [
          {
            "id": "A",
            "text": "term repo",
            "sourceText": "term repo"
          },
          {
            "id": "B",
            "text": "repo overnight",
            "sourceText": "overnight repo"
          },
          {
            "id": "C",
            "text": "chênh lệch kỳ hạn",
            "sourceText": "term arbitrage"
          },
          {
            "id": "D",
            "text": "MOB spread",
            "sourceText": "MOB spread"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: term repo. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q17",
        "number": "17",
        "prompt": "Quyền chọn end-of-the-month là",
        "sourcePrompt": "The end-of-the-month option is",
        "options": [
          {
            "id": "A",
            "text": "quyền thực hiện quyền chọn vào ngày cuối cùng của tháng",
            "sourceText": "the right to exercise an option on the last day of the month"
          },
          {
            "id": "B",
            "text": "quyền chọn hết hạn vào ngày cuối cùng của tháng",
            "sourceText": "an option expiring on the last day of the month"
          },
          {
            "id": "C",
            "text": "quyền chọn hết hạn trong bảy ngày làm việc cuối cùng của tháng",
            "sourceText": "the right to deliver during the last seven businessdays of the month"
          },
          {
            "id": "D",
            "text": "quyền chọn chỉ giao dịch vào cuối tháng",
            "sourceText": "an option that trades only at the end of the month"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: quyền chọn hết hạn trong bảy ngày làm việc cuối cùng của tháng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q18",
        "number": "18",
        "prompt": "Nếu bạn mua cả đĩa CD Eurodollar 30 ngày trả 6,7% và hợp đồng tương lai 90 ngày trên đĩa CD Eurodollar 90 ngày với mức giá ngụ ý lợi suất 7,2%, tổng lợi nhuận hàng năm của bạn là bao nhiêu? (Cả hai sản lượng đều dựa trên năm 360 ngày.)",
        "sourcePrompt": "If you buy both a 30-day Eurodollar CD paying 6.7 percent and a 90-day futures on a 90-day Eurodollar CD with a price implying a yield of 7.2 percent, what is your total annualized return? (Both yields are based on 360-day years.)",
        "options": [
          {
            "id": "A",
            "text": "7.25%",
            "sourceText": "7.25 percent"
          },
          {
            "id": "B",
            "text": "7.07%",
            "sourceText": "7.07 percent"
          },
          {
            "id": "C",
            "text": "10.15%",
            "sourceText": "10.15 percent"
          },
          {
            "id": "D",
            "text": "7.75%",
            "sourceText": "7.75 percent"
          },
          {
            "id": "E",
            "text": "6,95%",
            "sourceText": "6.95 percent"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 7.07%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q19",
        "number": "112B",
        "prompt": "Trái phiếu kho bạc có thể giao đã tích lũy lãi suất 3.42 trên 100 đô la, phiếu giảm giá 9.5%, giá 135 và hệ số chuyển đổi là 1.195. Giá hợp đồng tương lai là 112,25. Số tiền trên hóa đơn là bao nhiêu?",
        "sourcePrompt": "25. What is the invoice amount?",
        "options": [
          {
            "id": "A",
            "text": "137.56",
            "sourceText": "137.56"
          },
          {
            "id": "B",
            "text": "143.64",
            "sourceText": "143.64"
          },
          {
            "id": "C",
            "text": "161.33",
            "sourceText": "161.33"
          },
          {
            "id": "D",
            "text": "134.14",
            "sourceText": "134.14"
          },
          {
            "id": "E",
            "text": "Không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 137.56. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q20",
        "number": "20",
        "prompt": "Xác định hệ số chuyển đổi để giao 7 1/4 giảm ngày 15 tháng 5 năm 2026 trên hợp đồng tương lai T – bond tháng 3 năm 2010.",
        "sourcePrompt": "Determine the conversion factor for delivery of the 7 1/4’s off May 15, 2026 on the March 2010 T–bond futures contract.",
        "options": [
          {
            "id": "A",
            "text": "1.225",
            "sourceText": "1.225"
          },
          {
            "id": "B",
            "text": "0.932",
            "sourceText": "0.932"
          },
          {
            "id": "C",
            "text": "1.083",
            "sourceText": "1.083"
          },
          {
            "id": "D",
            "text": "1.127",
            "sourceText": "1.127"
          },
          {
            "id": "E",
            "text": "1.509",
            "sourceText": "1.509"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 1.127. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q21",
        "number": "21",
        "prompt": "Điều nào sau đây là không cần thiết khi tính toán tỷ lệ repo ngụ ý cho hợp đồng tương lai chỉ số chứng khoán?",
        "sourcePrompt": "Which of the following is not needed when calculating the implied repo rate for stock index futures?",
        "options": [
          {
            "id": "A",
            "text": "Giá hợp đồng tương lai",
            "sourceText": "futures price"
          },
          {
            "id": "B",
            "text": "hệ số chuyển đổi",
            "sourceText": "conversion factor"
          },
          {
            "id": "C",
            "text": "thời gian–đến–hết hạn",
            "sourceText": "time–to–expiration"
          },
          {
            "id": "D",
            "text": "Giá giao ngay",
            "sourceText": "spot price"
          },
          {
            "id": "E",
            "text": "Không có điều nào ở trên Sử dụng thông tin sau để trả lời các câu hỏi từ 22 đến 24. Vào ngày 1 tháng 4.50, tỷ lệ LIBOR một tháng là 5.00% và tỷ lệ LIBOR trong hai tháng là XNUMX%. Hợp đồng tương lai quỹ Fed tháng 11 được báo giá ở mức 94,50. Quy mô hợp đồng là $ 5,000,000.",
            "sourceText": "none of the above Use the following information to answer questions 22 through 24. On October 1, the one-month LIBOR rate is 4.50 percent and the two month LIBOR rate is 5.00 percent. The November Fed funds futures is quoted at 94.50. The contract size is $5,000,000."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hệ số chuyển đổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q22",
        "number": "22",
        "prompt": "Giá trị đô la của mức tăng một điểm cơ bản trong giá tương lai của Fed là",
        "sourcePrompt": "The dollar value of a one basis point rise in the Fed funds futures price is",
        "options": [
          {
            "id": "A",
            "text": "–$25.00",
            "sourceText": "–$25.00"
          },
          {
            "id": "B",
            "text": "$41.67",
            "sourceText": "$41.67"
          },
          {
            "id": "C",
            "text": "$5,000",
            "sourceText": "$5,000"
          },
          {
            "id": "D",
            "text": "$25.00",
            "sourceText": "$25.00"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $41.67. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q23",
        "number": "23",
        "prompt": "Tất cả những điều sau đây là những hạn chế đối với chênh lệch giá tương lai của quỹ Fed, ngoại trừ",
        "sourcePrompt": "All of the following are limitations to Fed funds futures arbitrage, except",
        "options": [
          {
            "id": "A",
            "text": "Lãi suất quỹ Fed được xác định theo chính sách của Ngân hàng Dự trữ Liên bang",
            "sourceText": "Fed funds rates are determined by Federal ReserveBank policy"
          },
          {
            "id": "B",
            "text": "rủi ro giữa các quỹ của Fed và LIBOR",
            "sourceText": "basis risk between Fed funds and LIBOR"
          },
          {
            "id": "C",
            "text": "Tỷ giá repo có thể thay đổi đối với trading horizon",
            "sourceText": "repo rate is variable for the trading horizon"
          },
          {
            "id": "D",
            "text": "thanh toán dựa trên mức trung bình trong tháng giao hàng",
            "sourceText": "settlement is based on average in delivery month"
          },
          {
            "id": "E",
            "text": "Chi phí giao dịch",
            "sourceText": "transaction costs"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Lãi suất quỹ Fed được xác định theo chính sách của Ngân hàng Dự trữ Liên bang. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q24",
        "number": "24",
        "prompt": "Tính toán lãi hoặc lỗ bằng đô la từ việc vay giá trị hiện tại là 5.000.000 đô la tại LIBOR một tháng và cho vay cùng một số tiền tại LIBOR hai tháng trong khi đồng thời bán một hợp đồng tương lai quỹ Fed tháng XNUMX. Giả sử rằng lãi suất vào ngày 1 tháng 11 là 7%, không có rủi ro cơ bản và vị thế được mở ra vào ngày 1 tháng 11. Chọn câu trả lời gần nhất.",
        "sourcePrompt": "Compute the dollar profit or loss from borrowing the present value of $5,000,000 at one month LIBOR and lending the same amount at two month LIBOR while simultaneously selling one November Fed funds futures contract. Assume that rates on November 1 were 7 percent, there is no basis risk, and the position is unwound on November 1. Select the closest answer.",
        "options": [
          {
            "id": "A",
            "text": "–$3,150",
            "sourceText": "–$3,150"
          },
          {
            "id": "B",
            "text": "$0",
            "sourceText": "$0"
          },
          {
            "id": "C",
            "text": "$3,150",
            "sourceText": "$3,150"
          },
          {
            "id": "D",
            "text": "$940",
            "sourceText": "$940"
          },
          {
            "id": "E",
            "text": "–$940",
            "sourceText": "–$940"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: –$3,150. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q25",
        "number": "25",
        "prompt": "Hình thức giao dịch chương trình nào sau đây?",
        "sourcePrompt": "Which of the following is a form of program trading?",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch chỉ số",
            "sourceText": "index arbitrage"
          },
          {
            "id": "B",
            "text": "chênh lệch wild card",
            "sourceText": "wild card arbitrage"
          },
          {
            "id": "C",
            "text": "chênh lệch giá hình tam giác",
            "sourceText": "triangular arbitrage"
          },
          {
            "id": "D",
            "text": "thời gian chênh lệch giá",
            "sourceText": "timing arbitrage"
          },
          {
            "id": "E",
            "text": "Không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: chênh lệch chỉ số. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q26",
        "number": "26",
        "prompt": "Giả sử bạn quan sát chỉ số S&P 500 giao ngay ở mức 1.210 và hợp đồng tương lai chỉ số S&P 500 ba tháng ở mức 1.205. Dựa trên chênh lệch giá thực hiện, bạn kết luận",
        "sourcePrompt": "Suppose you observe the spot S&P 500 index at 1,210 and the three month S&P 500 index futures at 1,205. Based on carry arbitrage, you conclude",
        "options": [
          {
            "id": "A",
            "text": "Thị trường hợp đồng tương lai này không hiệu quả vì giá hợp đồng tương lai thấp hơn giá giao ngay",
            "sourceText": "this futures market is inefficient because the futures price is below the spot price"
          },
          {
            "id": "B",
            "text": "Thị trường tương lai này đang chỉ ra rằng giá giao ngay dự kiến sẽ giảm",
            "sourceText": "this futures market is indicating that the spot price is expected to fall"
          },
          {
            "id": "C",
            "text": "giá giao ngay cao so với giá hợp đồng tương lai quan sát được",
            "sourceText": "the spot price is too high relative to the observed futures price"
          },
          {
            "id": "D",
            "text": "Tỷ suất cổ tức cao hơn lãi suất phi rủi ro",
            "sourceText": "the dividend yield is higher than the risk-freeinterest rate"
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Tỷ suất cổ tức cao hơn lãi suất phi rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q27",
        "number": "27",
        "prompt": "Giả sử bạn quan sát đồng euro giao ngay ở mức 1,3 8 đô la / € và hợp đồng tương lai euro ba tháng ở mức 1,379 đô la / €. Dựa trên chênh lệch giá thực hiện, bạn kết luận",
        "sourcePrompt": "Suppose you observe the spot euro at $1.38/€ and the three month euro futures at $1.379/€. Based on carry arbitrage, you conclude",
        "options": [
          {
            "id": "A",
            "text": "Thị trường hợp đồng tương lai này không hiệu quả vì giá hợp đồng tương lai thấp hơn giá giao ngay",
            "sourceText": "this futures market is inefficient because the futures price is below the spot price"
          },
          {
            "id": "B",
            "text": "Thị trường tương lai này đang chỉ ra rằng giá giao ngay dự kiến sẽ giảm",
            "sourceText": "this futures market is indicating that the spot price is expected to fall"
          },
          {
            "id": "C",
            "text": "giá giao ngay quá cao so với giá hợp đồng tương lai quan sát được",
            "sourceText": "the spot price is too high relative to the observed futures price"
          },
          {
            "id": "D",
            "text": "tỷ lệ phi rủi ro ở châu Âu cao hơn tỷ lệ phi rủi ro ở Mỹ.",
            "sourceText": "the risk-free rate in Europe is higher than therisk-free rate in the U. S."
          },
          {
            "id": "E",
            "text": "tất cả đều sai",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tỷ lệ phi rủi ro ở châu Âu cao hơn tỷ lệ phi rủi ro ở Mỹ.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q28",
        "number": "0",
        "prompt": "Giả sử bạn quan sát đồng euro giao ngay ở mức 1,38 đô la / €, lãi suất phi rủi ro của Hoa Kỳ là 0,25% (liên tục gộp) và lãi suất phi rủi ro châu Âu là 0,75% (lãi kép liên tục). Xác định giá trị lý thuyết của hợp đồng tương lai ngoại hối sáu tháng (chọn câu trả lời gần nhất).",
        "sourcePrompt": "25% (continuously compounded), and the European risk-free interest rate of 0.75% (continuously compounded). Identify the theoretical value of a six month foreign exchange futures contract (select the closest answer).",
        "options": [
          {
            "id": "A",
            "text": "$1.3815/€",
            "sourceText": "$1.3815/€"
          },
          {
            "id": "B",
            "text": "$1.3765/€",
            "sourceText": "$1.3765/€"
          },
          {
            "id": "C",
            "text": "$1.3785/€",
            "sourceText": "$1.3785/€"
          },
          {
            "id": "D",
            "text": "$1.3825/€",
            "sourceText": "$1.3825/€"
          },
          {
            "id": "E",
            "text": "$1.3755/€",
            "sourceText": "$1.3755/€"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $1.3765/€. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q29",
        "number": "3B",
        "prompt": "Giả sử bạn quan sát đồng euro giao ngay ở mức 1,50 đô la / €, lãi suất phi rủi ro của Hoa Kỳ là 3,25% (liên tục gộp) và giá hợp đồng tương lai sáu tháng là 1,50 đô la / €. Xác định lãi suất phi rủi ro châu Âu ngụ ý chính xác (chọn câu trả lời gần nhất).",
        "sourcePrompt": "25% (continuously compounded), and the six month futures price of $1.50/€. Identify the correct implied European risk-free interest rate (select the closest answer).",
        "options": [
          {
            "id": "A",
            "text": "–3.25%",
            "sourceText": "–3.25%"
          },
          {
            "id": "B",
            "text": "–1.0%",
            "sourceText": "–1.0%"
          },
          {
            "id": "C",
            "text": "0.0%",
            "sourceText": "0.0%"
          },
          {
            "id": "D",
            "text": "1.0%",
            "sourceText": "1.0%"
          },
          {
            "id": "E",
            "text": "3.25%",
            "sourceText": "3.25%"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: 3.25%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q30",
        "number": "30",
        "prompt": "Chênh lệch lãi suất được bảo hiểm từ góc độ đô la Mỹ khi giá hợp đồng tương lai euro (được biểu thị bằng $/€) quá cao liên quan đến",
        "sourcePrompt": "Covered interest arbitrage from a U. S. dollar perspective when the euro futures price (expressed in $/€) is too high involves",
        "options": [
          {
            "id": "A",
            "text": "Mua hợp đồng tương lai ngoại hối",
            "sourceText": "buying foreign exchange futures contracts"
          },
          {
            "id": "B",
            "text": "Bán hợp đồng tương lai lãi suất",
            "sourceText": "selling interest rate futures contracts"
          },
          {
            "id": "C",
            "text": "Các quỹ cho vay trong đầu tư Euro không rủi ro",
            "sourceText": "lending funds in risk-free euro investment"
          },
          {
            "id": "D",
            "text": "Bán euro",
            "sourceText": "selling euros"
          },
          {
            "id": "E",
            "text": "mua ETF chỉ số chứng khoán euro",
            "sourceText": "buying euro stock index ETFs"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Các quỹ cho vay trong đầu tư Euro không rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 10,
    "title": "Hedging, spread và chiến lược mục tiêu với futures",
    "sourceTitle": "CHAPTER 10: FORWARD AND FUTURES HEDGING, SPREAD, AND",
    "summary": "Chương 10 tập trung vào hedging, spread và chiến lược mục tiêu với futures. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Long hedge",
      "Short hedge",
      "Basis risk",
      "Hedge ratio",
      "Cross hedge",
      "Spread"
    ],
    "theory": [
      {
        "heading": "Long hedge và short hedge",
        "body": "Long hedge dùng khi lo giá tăng trong tương lai nên mua futures. Short hedge dùng khi đang hoặc sẽ nắm tài sản và lo giá giảm nên bán futures."
      },
      {
        "heading": "Basis risk",
        "body": "Basis là chênh lệch giữa spot và futures. Hedge không hoàn hảo vì basis có thể thay đổi trước khi đóng vị thế."
      },
      {
        "heading": "Hedge ratio",
        "body": "Hedge ratio cho biết cần dùng bao nhiêu hợp đồng futures để phòng ngừa rủi ro. Bài tính thường cần quy mô vị thế, quy mô hợp đồng và hệ số tương quan/độ biến động."
      }
    ],
    "questions": [
      {
        "id": "c10-q1",
        "number": "1",
        "prompt": "Phòng ngừa vị thế bán là vị thế trong đó:",
        "sourcePrompt": "A short hedge is one in which",
        "options": [
          {
            "id": "A",
            "text": "yêu cầu ký quỹ được miễn",
            "sourceText": "the margin requirement is waived"
          },
          {
            "id": "B",
            "text": "Công cụ phòng ngừa là bán hợp đồng giao sau",
            "sourceText": "the hedger is short futures"
          },
          {
            "id": "C",
            "text": "người phòng ngừa rủi ro bán khống trên thị trường giao ngay",
            "sourceText": "the hedger is short in the spot market"
          },
          {
            "id": "D",
            "text": "giá kỳ hạn thấp hơn giá giao ngay",
            "sourceText": "the futures price is lower than the spot price"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Công cụ phòng ngừa là bán hợp đồng giao sau. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q2",
        "number": "2",
        "prompt": "Phòng ngừa tiên liệu) (An anticipatory) là một trong đó",
        "sourcePrompt": "An anticipatory hedge is one in which",
        "options": [
          {
            "id": "A",
            "text": "cơ sở dự kiến sẽ giảm",
            "sourceText": "the basis is expected to fall"
          },
          {
            "id": "B",
            "text": "người phòng hộ kỳ vọng kiếm được lợi nhuận từ hợp đồng tương lai",
            "sourceText": "the hedger expects to make a profit on the futures"
          },
          {
            "id": "C",
            "text": "vị trí giao ngay sẽ được thực hiện trong tương lai",
            "sourceText": "the spot position will be taken in the future"
          },
          {
            "id": "D",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có cái nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: vị trí giao ngay sẽ được thực hiện trong tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q3",
        "number": "3",
        "prompt": "Tăng cường năng lực giám sát có nghĩa là",
        "sourcePrompt": "A strengthening of the basis means",
        "options": [
          {
            "id": "A",
            "text": "Giá giao ngay tăng hơn giá giao sau",
            "sourceText": "the spot price rises more than the futures price"
          },
          {
            "id": "B",
            "text": "giá giao sau giảm hơn giá giao ngay",
            "sourceText": "the futures price falls more than the spot price"
          },
          {
            "id": "C",
            "text": "lợi ích của người phòng ngừa rủi ro ngắn hạn",
            "sourceText": "a short hedger benefits"
          },
          {
            "id": "D",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tất cả những điều trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q4",
        "number": "4",
        "prompt": "Một phòng ngừa rủi ro trong đó tài sản làm cơ sở cho hợp đồng tương lai không phải là tài sản được phòng ngừa rủi ro là",
        "sourcePrompt": "A hedge in which the asset underlying the futures is not the asset being hedged is",
        "options": [
          {
            "id": "A",
            "text": "bảo hộ chéo",
            "sourceText": "a cross hedge"
          },
          {
            "id": "B",
            "text": "phòng ngừa tối ưu",
            "sourceText": "an optimal hedge"
          },
          {
            "id": "C",
            "text": "phòng ngừa cơ bản",
            "sourceText": "a basis hedge"
          },
          {
            "id": "D",
            "text": "phòng ngừa phương sai tối thiểu",
            "sourceText": "a minimum variance hedge"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: bảo hộ chéo. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q5",
        "number": "5",
        "prompt": "Khi hợp đồng tương lai hết hạn trước khi hàng rào được kết thúc và người phòng hộ chuyển sang thời điểm hết hạn của hợp đồng tương lai tiếp theo, nó được gọi là",
        "sourcePrompt": "When the futures expires before the hedge is terminated and the hedger moves into the next futures expiration, it is called",
        "options": [
          {
            "id": "A",
            "text": "phòng ngừa chênh lệch giá",
            "sourceText": "spreading the hedge"
          },
          {
            "id": "B",
            "text": "kéo dài kỳ hạn",
            "sourceText": "rolling the hedge forward"
          },
          {
            "id": "C",
            "text": "tối ưu hóa trọng số phòng ngừa",
            "sourceText": "optimally weighting the hedge"
          },
          {
            "id": "D",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: kéo dài kỳ hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q6",
        "number": "6",
        "prompt": "Thời hạn của hợp đồng tương lai được sử dụng trong tỷ lệ phòng ngừa nhạy cảm về giá là",
        "sourcePrompt": "The duration of the futures contract used in the price sensitivity hedge ratio is",
        "options": [
          {
            "id": "A",
            "text": "thời hạn của trái phiếu giao ngay được phòng hộ bằng cách sử dụng giá tương lai thay vì giá giao ngay",
            "sourceText": "the duration of the spot bond being hedged using the futures price instead of the spot price"
          },
          {
            "id": "B",
            "text": "thời hạn của trái phiếu có thể chuyển nhượng sử dụng giá giao ngay",
            "sourceText": "the duration of the deliverable bond using the spot price"
          },
          {
            "id": "C",
            "text": "thời hạn của trái phiếu có thể chuyển nhượng sử dụng giá tương lai",
            "sourceText": "the duration of the deliverable bond using thefutures price"
          },
          {
            "id": "D",
            "text": "thời lượng của danh mục đầu tư trái phiếu tổng thể",
            "sourceText": "the duration of the overall bond portfolio"
          },
          {
            "id": "E",
            "text": "không có câu nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: thời hạn của trái phiếu có thể chuyển nhượng sử dụng giá tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q7",
        "number": "7",
        "prompt": "Kỹ thuật nào có thể được sử dụng để tính toán tỷ lệ phòng ngừa phương sai tối thiểu?",
        "sourcePrompt": "Which technique can be used to compute the minimum variance hedge ratio?",
        "options": [
          {
            "id": "A",
            "text": "phân tích thời lượng",
            "sourceText": "duration analysis"
          },
          {
            "id": "B",
            "text": "giá trị hiện tại",
            "sourceText": "present value"
          },
          {
            "id": "C",
            "text": "hồi quy",
            "sourceText": "regression"
          },
          {
            "id": "D",
            "text": "tất cả những điều trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: hồi quy. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q8",
        "number": "8",
        "prompt": "Biện pháp nào sau đây được sử dụng trong tỷ lệ phòng ngừa độ nhạy giá đối với hợp đồng tương lai trái phiếu?",
        "sourcePrompt": "Which of the following measures is used in the price sensitivity hedge ratio for bond futures?",
        "options": [
          {
            "id": "A",
            "text": "bêta",
            "sourceText": "beta"
          },
          {
            "id": "B",
            "text": "thời gian đáo hạn bình quân",
            "sourceText": "duration"
          },
          {
            "id": "C",
            "text": "tương quan",
            "sourceText": "correlation"
          },
          {
            "id": "D",
            "text": "phương sai",
            "sourceText": "variance"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: thời gian đáo hạn bình quân. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q9",
        "number": "9",
        "prompt": "Giả sử bạn mua một tài sản ở mức 50 đô la và bán một hợp đồng tương lai ở mức 53 đô la. Lợi nhuận của bạn khi hết hạn là bao nhiêu nếu giá tài sản lên tới 49 đô la? (Bỏ qua chi phí vận chuyển)",
        "sourcePrompt": "Suppose you buy an asset at $50 and sell a futures contract at $53. What is your profit at expiration if the asset price goes to $49? (Ignore carrying costs)",
        "options": [
          {
            "id": "A",
            "text": "–$1",
            "sourceText": "–$1"
          },
          {
            "id": "B",
            "text": "–$4",
            "sourceText": "–$4"
          },
          {
            "id": "C",
            "text": "$3",
            "sourceText": "$3"
          },
          {
            "id": "D",
            "text": "$4",
            "sourceText": "$4"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $3. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q10",
        "number": "10",
        "prompt": "Giả sử bạn mua một tài sản ở mức 70 đô la và bán một hợp đồng tương lai ở mức 72 đô la. Lợi nhuận của bạn là bao nhiêu nếu trước khi hết hạn, bạn bán tài sản ở mức 75 đô la và giá tương lai là 78 đô la?",
        "sourcePrompt": "Suppose you buy an asset at $70 and sell a futures contract at $72. What is your profit if, prior to expiration, you sell the asset at $75 and the futures price is $78?",
        "options": [
          {
            "id": "A",
            "text": "–$1",
            "sourceText": "–$1"
          },
          {
            "id": "B",
            "text": "$2",
            "sourceText": "$2"
          },
          {
            "id": "C",
            "text": "$1",
            "sourceText": "$1"
          },
          {
            "id": "D",
            "text": "–$6",
            "sourceText": "–$6"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: –$1. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q11",
        "number": "11",
        "prompt": "Điều nào sau đây không phải là lý do để các công ty phòng ngừa rủi ro?",
        "sourcePrompt": "Which of the following is not a reason for firms to hedge?",
        "options": [
          {
            "id": "A",
            "text": "Các công ty có thể phòng ngừa rủi ro ít tốn kém hơn so với các cổ đông của họ",
            "sourceText": "Firms can hedge less expensively than can their shareholders"
          },
          {
            "id": "B",
            "text": "Các cổ đông không thể chấp nhận thua lỗ theo thị trường",
            "sourceText": "Shareholders cannot tolerate mark-to-market losses"
          },
          {
            "id": "C",
            "text": "Bảo hiểm rủi ro của các tập đoàn có thể có lợi thế về thuế",
            "sourceText": "Hedging by corporations can have tax advantages"
          },
          {
            "id": "D",
            "text": "Các cổ đông không phải lúc nào cũng nhận thức được rủi ro của công ty họ",
            "sourceText": "Shareholders are not always aware of their firms' risks"
          },
          {
            "id": "E",
            "text": "không đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Các cổ đông không thể chấp nhận thua lỗ theo thị trường. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q12",
        "number": "12",
        "prompt": "Tìm lợi nhuận nếu nhà đầu tư mua hợp đồng tương lai tháng 7 với giá 75, bán hợp đồng tương lai tháng 10 với giá 78 và sau đó đảo ngược hợp đồng tương lai tháng 7 với giá 72 và hợp đồng tương lai tháng 10 với giá 77.",
        "sourcePrompt": "Find the profit if the investor buys a July futures at 75, sells an October futures at 78 and then reverses the July futures at 72 and the October futures at 77.",
        "options": [
          {
            "id": "A",
            "text": "–3",
            "sourceText": "–3"
          },
          {
            "id": "B",
            "text": "–2",
            "sourceText": "–2"
          },
          {
            "id": "C",
            "text": "2",
            "sourceText": "2"
          },
          {
            "id": "D",
            "text": "1",
            "sourceText": "1"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: –2. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q13",
        "number": "13",
        "prompt": "Xác định tỷ lệ phòng ngừa tối ưu cho trái phiếu kho bạc trị giá 1.000.000 đô la với thời hạn sửa đổi là 12,45 nếu hợp đồng tương lai có giá 90.000 đô la và thời hạn sửa đổi là 8,5 năm.",
        "sourcePrompt": "Determine the optimal hedge ratio for Treasury bonds worth $1,000,000 with a modified duration of 12.45 if the futures contract has a price of $90,000 and a modified duration of 8.5 years.",
        "options": [
          {
            "id": "A",
            "text": "16,27",
            "sourceText": "16.27"
          },
          {
            "id": "B",
            "text": "15,93",
            "sourceText": "15.93"
          },
          {
            "id": "C",
            "text": "7,42",
            "sourceText": "7.42"
          },
          {
            "id": "D",
            "text": "11.11",
            "sourceText": "11.11"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 16,27. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q14",
        "number": "14",
        "prompt": "Lợi nhuận phòng ngừa rủi ro là bao nhiêu nếu trái phiếu được mua ở mức 150.000 đô la, hai hợp đồng tương lai được bán ở mức 72.500 đô la mỗi hợp đồng, sau đó trái phiếu được bán ở mức 147.500 đô la và hợp đồng tương lai được mua lại ở mức 74.000 đô la mỗi hợp đồng?",
        "sourcePrompt": "What is the profit on a hedge if bonds are purchased at $150,000, two futures contracts are sold at $72,500 each, then the bonds are sold at $147,500 and the futures are repurchased at $74,000 each?",
        "options": [
          {
            "id": "A",
            "text": "–$2,500",
            "sourceText": "–$2,500"
          },
          {
            "id": "B",
            "text": "–$5,500",
            "sourceText": "–$5,500"
          },
          {
            "id": "C",
            "text": "–$500",
            "sourceText": "–$500"
          },
          {
            "id": "D",
            "text": "–$3,000",
            "sourceText": "–$3,000"
          },
          {
            "id": "E",
            "text": "không đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: –$5,500. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q15",
        "number": "15",
        "prompt": "Tìm tỷ lệ phòng ngừa hợp đồng tương lai chỉ số chứng khoán tối ưu nếu danh mục đầu tư trị giá 1.200.000 đô la, hệ số beta là 1,15 và giá hợp đồng tương lai S&P 500 là 450,70 với hệ số nhân là 250.",
        "sourcePrompt": "Find the optimal stock index futures hedge ratio if the portfolio is worth $1,200,000, the beta is 1.15 and the S&P 500 futures price is 450.70 with a multiplier of 250.",
        "options": [
          {
            "id": "A",
            "text": "10,65",
            "sourceText": "10.65"
          },
          {
            "id": "B",
            "text": "12,25",
            "sourceText": "12.25"
          },
          {
            "id": "C",
            "text": "6123.80",
            "sourceText": "6123.80"
          },
          {
            "id": "D",
            "text": "5325.05",
            "sourceText": "5325.05"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 12,25. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q16",
        "number": "16",
        "prompt": "Bạn sẽ sử dụng bán khống trong trường hợp nào sau đây?",
        "sourcePrompt": "In which of the following situations would you use a short hedge?",
        "options": [
          {
            "id": "A",
            "text": "kế hoạch mua một cổ phiếu",
            "sourceText": "the planned purchase of a stock"
          },
          {
            "id": "B",
            "text": "kế hoạch mua thương phiếu",
            "sourceText": "the planned purchase of commercial paper"
          },
          {
            "id": "C",
            "text": "kế hoạch phát hành trái phiếu",
            "sourceText": "the planned issuance of bonds"
          },
          {
            "id": "D",
            "text": "kế hoạch mua lại cổ phiếu để trang trải cho một vị thế bán",
            "sourceText": "the planned repurchase of stock to cover a short position"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: kế hoạch phát hành trái phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q17",
        "number": "17",
        "prompt": "Bạn nắm giữ một danh mục đầu tư chứng khoán trị giá 15 triệu USD với hệ số beta là 1,05. Bạn muốn hạ hệ số beta xuống 0,90 bằng cách sử dụng hợp đồng tương lai S&P 500, có giá 460,20 và hệ số nhân là 250. Bạn nên thực hiện giao dịch nào? Làm tròn thành toàn bộ hợp đồng gần nhất.",
        "sourcePrompt": "You hold a stock portfolio worth $15 million with a beta of 1.05. You would like to lower the beta to 0.90 using S&P 500 futures, which have a price of 460.20 and a multiplier of 250. What transaction should you do? Round off to the nearest whole contract.",
        "options": [
          {
            "id": "A",
            "text": "bán 130 hợp đồng",
            "sourceText": "sell 130 contracts"
          },
          {
            "id": "B",
            "text": "bán 9.778 hợp đồng",
            "sourceText": "sell 9,778 contracts"
          },
          {
            "id": "C",
            "text": "bán 20 hợp đồng",
            "sourceText": "sell 20 contracts"
          },
          {
            "id": "D",
            "text": "mua 50.000 hợp đồng",
            "sourceText": "buy 50,000 contracts"
          },
          {
            "id": "E",
            "text": "bán 50.000 hợp đồng",
            "sourceText": "sell 50,000 contracts"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: bán 20 hợp đồng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q18",
        "number": "18",
        "prompt": "Bạn nắm giữ danh mục đầu tư trái phiếu trị giá 10 triệu đô la và thời hạn sửa đổi là 8,5. Bạn sẽ thực hiện giao dịch tương lai nào để tăng thời lượng lên 10 nếu giá tương lai là 93.000 đô la và thời hạn sửa đổi ngụ ý của nó là 9,25? Làm tròn đến toàn bộ hợp đồng gần nhất.",
        "sourcePrompt": "You hold a bond portfolio worth $10 million and a modified duration of 8.5. What futures transaction would you do to raise the duration to 10 if the futures price is $93,000 and its implied modified duration is 9.25? Round up to the nearest whole contract.",
        "options": [
          {
            "id": "A",
            "text": "mua 109 hợp đồng",
            "sourceText": "buy 109 contracts"
          },
          {
            "id": "B",
            "text": "mua 17 hợp đồng",
            "sourceText": "buy 17 contracts"
          },
          {
            "id": "C",
            "text": "mua 669 hợp đồng",
            "sourceText": "buy 669 contracts"
          },
          {
            "id": "D",
            "text": "bán 100 hợp đồng",
            "sourceText": "sell 100 contracts"
          },
          {
            "id": "E",
            "text": "bán 669 hợp đồng",
            "sourceText": "sell 669 contracts"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: mua 17 hợp đồng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q19",
        "number": "19",
        "prompt": "Phát biểu nào sau đây về việc sử dụng hợp đồng tương lai trong phân bổ tài sản chiến thuật là đúng?",
        "sourcePrompt": "Which of the following statements about the use of futures in tactical asset allocation is correct?",
        "options": [
          {
            "id": "A",
            "text": "Thực hiện phân bổ tài sản chiến thuật bằng cách sử dụng hợp đồng tương lai là một hình thức xác định thời điểm thị trường.",
            "sourceText": "Implementing tactical asset allocation using futures is a form of market timing."
          },
          {
            "id": "B",
            "text": "Hợp đồng tương lai có thể được sử dụng để mua hoặc bán cổ phiếu một cách tổng hợp nhưng bạn không thể điều chỉnh đồng thời hệ số beta hoặc thời hạn",
            "sourceText": "Futures can be used to synthetically buy or sell stocks but you cannot simultaneously adjust the beta or duration"
          },
          {
            "id": "C",
            "text": "Sự khác biệt giữa danh mục đầu tư được nắm giữ và chỉ số mà hợp đồng tương lai dựa vào sẽ tạo ra lợi nhuận cho nhà đầu tư.",
            "sourceText": "A difference between the portfolio held and the index on which the futures is based will generate a gain for the investor."
          },
          {
            "id": "D",
            "text": "Việc sử dụng hợp đồng tương lai trong phân bổ tài sản chiến thuật sẽ tạo ra tiền mặt từ việc bán tổng hợp, sau đó được sử dụng trong giao dịch mua tổng hợp.",
            "sourceText": "The use of futures in tactical asset allocation will generate cash from the synthetic sale, which is then used in the synthetic purchase."
          },
          {
            "id": "E",
            "text": "Không có câu nào ở trên",
            "sourceText": "None of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Hợp đồng tương lai có thể được sử dụng để mua hoặc bán cổ phiếu một cách tổng hợp nhưng bạn không thể điều chỉnh đồng thời hệ số beta hoặc thời hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q20",
        "number": "20",
        "prompt": "Mặc dù hàng rào chéo có rủi ro cao hơn một chút so với hàng rào thông thường, nhưng nó sẽ giảm rủi ro nếu điều nào sau đây xảy ra?",
        "sourcePrompt": "Though a cross hedge has somewhat higher risk than an ordinary hedge, it will reduce risk if which of the following occurs?",
        "options": [
          {
            "id": "A",
            "text": "giá kỳ hạn dễ biến động hơn giá giao ngay",
            "sourceText": "futures prices are more volatile than spot prices"
          },
          {
            "id": "B",
            "text": "hợp đồng giao ngay và hợp đồng tương lai được định giá chính xác ngay từ đầu",
            "sourceText": "the spot and futures contracts are correctly priced at the onset"
          },
          {
            "id": "C",
            "text": "giá giao ngay và giá kỳ hạn có tương quan thuận",
            "sourceText": "spot and futures prices are positively correlated"
          },
          {
            "id": "D",
            "text": "giá kỳ hạn ít biến động hơn giá giao ngay",
            "sourceText": "futures prices are less volatile than spot prices"
          },
          {
            "id": "E",
            "text": "không đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá giao ngay và giá kỳ hạn có tương quan thuận. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q21",
        "number": "21",
        "prompt": "Điều nào sau đây thể hiện chính xác lợi nhuận trên một hàng rào?",
        "sourcePrompt": "Which of the following correctly expresses the profit on a hedge?",
        "options": [
          {
            "id": "A",
            "text": "cơ sở khi hàng rào được đóng lại",
            "sourceText": "the basis when the hedge is closed"
          },
          {
            "id": "B",
            "text": "sự thay đổi trong cơ sở",
            "sourceText": "the change in the basis"
          },
          {
            "id": "C",
            "text": "lợi nhuận giao ngay trừ lợi nhuận tương lai",
            "sourceText": "the spot profit minus the futures profit"
          },
          {
            "id": "D",
            "text": "lợi nhuận kỳ hạn trừ lợi nhuận giao ngay",
            "sourceText": "the futures profit minus the spot profit"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: sự thay đổi trong cơ sở. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q22",
        "number": "22",
        "prompt": "Điều gì xảy ra với cơ sở trong suốt thời gian tồn tại của hợp đồng?",
        "sourcePrompt": "What happens to the basis through the contract's life?",
        "options": [
          {
            "id": "A",
            "text": "ban đầu giảm sau đó tăng",
            "sourceText": "it initially decreases, then increases"
          },
          {
            "id": "B",
            "text": "ban đầu tăng sau đó giảm",
            "sourceText": "it initially increases, then decreases"
          },
          {
            "id": "C",
            "text": "nó vẫn tương đối ổn định",
            "sourceText": "it remains relatively steady"
          },
          {
            "id": "D",
            "text": "nó di chuyển về phía không",
            "sourceText": "it moves toward zero"
          },
          {
            "id": "E",
            "text": "không có trường hợp nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó di chuyển về phía không. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q23",
        "number": "23",
        "prompt": "Tìm lợi nhuận nếu nhà đầu tư tham gia giao dịch chênh lệch giá trong thị trường bằng cách bán hợp đồng tương lai tháng 9 ở mức 4,5 đô la, mua hợp đồng tương lai tháng 12 ở mức 7,5 đô la và sau đó đảo ngược hợp đồng tương lai tháng 9 ở mức 5,5 đô la và hợp đồng tương lai tháng 12 ở mức 9,5 đô la.",
        "sourcePrompt": "Find the profit if the investor enters an intramarket spread transaction by selling a September futures at $4.5, buys an December futures at $7.5 and then reverses the September futures at $5.5 and the December futures at $9.5.",
        "options": [
          {
            "id": "A",
            "text": "–3",
            "sourceText": "–3"
          },
          {
            "id": "B",
            "text": "–2",
            "sourceText": "–2"
          },
          {
            "id": "C",
            "text": "2",
            "sourceText": "2"
          },
          {
            "id": "D",
            "text": "1",
            "sourceText": "1"
          },
          {
            "id": "E",
            "text": "không đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 1. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q24",
        "number": "24",
        "prompt": "Rủi ro về số lượng là",
        "sourcePrompt": "Quantity risk is",
        "options": [
          {
            "id": "A",
            "text": "khó khăn trong việc đo lường sự biến động",
            "sourceText": "the difficulty in measuring the volatility"
          },
          {
            "id": "B",
            "text": "sự không chắc chắn về kích thước của vị trí điểm",
            "sourceText": "the uncertainty about the size of the spot position"
          },
          {
            "id": "C",
            "text": "rủi ro do kỳ hạn hợp đồng tương lai không phù hợp với kỳ hạn giao ngay",
            "sourceText": "the risk of mismatching the futures maturity to the spot maturity"
          },
          {
            "id": "D",
            "text": "khả năng xảy ra lỗi hồi quy",
            "sourceText": "the possibility of regression error"
          },
          {
            "id": "E",
            "text": "không đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: khó khăn trong việc đo lường sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q25",
        "number": "25",
        "prompt": "Mối quan hệ giữa lợi suất giao ngay và lợi suất tính theo giá tương lai được gọi là",
        "sourcePrompt": "The relationship between the spot yield and the yield implied by the futures price is called",
        "options": [
          {
            "id": "A",
            "text": "năng suất beta",
            "sourceText": "the yield beta"
          },
          {
            "id": "B",
            "text": "sự nhạy cảm về giá",
            "sourceText": "the price sensitivity"
          },
          {
            "id": "C",
            "text": "cái đuôi",
            "sourceText": "the tail"
          },
          {
            "id": "D",
            "text": "tỷ lệ phòng hộ",
            "sourceText": "the hedge ratio"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: năng suất beta. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q26",
        "number": "26",
        "prompt": "Tất cả những điều sau đây là quyết định lựa chọn hợp đồng tương lai liên quan đến bảo hiểm rủi ro, ngoại trừ",
        "sourcePrompt": "All of the following are futures contract choice decisions related to hedging, except",
        "options": [
          {
            "id": "A",
            "text": "tài sản cơ sở tương lai nào",
            "sourceText": "which future underlying asset"
          },
          {
            "id": "B",
            "text": "giá đình công",
            "sourceText": "which strike price"
          },
          {
            "id": "C",
            "text": "hợp đồng tương lai nào hết hạn",
            "sourceText": "which futures contract expiration"
          },
          {
            "id": "D",
            "text": "nên đi dài hay ngắn",
            "sourceText": "whether to go long or short"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên là quyết định lựa chọn hợp đồng tương lai",
            "sourceText": "all of the above are futures contract choice decisions"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá đình công. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q27",
        "number": "27",
        "prompt": "Phòng ngừa rủi ro bằng hợp đồng tương lai kéo theo tất cả các rủi ro sau, ngoại trừ",
        "sourcePrompt": "Hedging with futures contracts entails all of the following risks, except",
        "options": [
          {
            "id": "A",
            "text": "đánh dấu thị trường có thể yêu cầu dòng tiền mặt lớn",
            "sourceText": "marking to market may require large cash outflows"
          },
          {
            "id": "B",
            "text": "thay đổi về yêu cầu ký quỹ",
            "sourceText": "changes in margin requirements"
          },
          {
            "id": "C",
            "text": "rủi ro cơ bản",
            "sourceText": "basis risk"
          },
          {
            "id": "D",
            "text": "rủi ro số lượng",
            "sourceText": "quantity risk"
          },
          {
            "id": "E",
            "text": "tất cả những điều trên đều là những rủi ro tiềm ẩn",
            "sourceText": "all of the above are potential risks"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: tất cả những điều trên đều là những rủi ro tiềm ẩn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q28",
        "number": "28",
        "prompt": "Dựa trên phương pháp tiếp cận tỷ lệ phòng ngừa phương sai tối thiểu, số lượng hợp đồng tương lai tối ưu để triển khai là bao nhiêu, với thông tin sau. Hệ số tương quan giữa những thay đổi về giá của công cụ cơ sở và những thay đổi về giá hợp đồng tương lai là 0,95, độ lệch chuẩn của những thay đổi về giá trị của vị thế cơ bản là 300% và độ lệch chuẩn của những thay đổi về giá của hợp đồng tương lai là 11,4%..",
        "sourcePrompt": "Based on the minimum variance hedge ratio approach, what is the optimal number of futures contracts to deploy, given the following information. The correlation coefficient between changes in the underlying instrument’s price and changes in the futures contract price is 0.95, the standard deviation of the changes in the underlying position’s value is 300%, and the standard deviation of the changes in the futures contract’s price is 11.4%.",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng tương lai dài 35",
            "sourceText": "long 35 futures contracts"
          },
          {
            "id": "B",
            "text": "hợp đồng tương lai dài 25",
            "sourceText": "long 25 futures contracts"
          },
          {
            "id": "C",
            "text": "hợp đồng tương lai dài 15",
            "sourceText": "long 15 futures contracts"
          },
          {
            "id": "D",
            "text": "hợp đồng tương lai ngắn 25",
            "sourceText": "short 25 futures contracts"
          },
          {
            "id": "E",
            "text": "bán 15 hợp đồng tương lai",
            "sourceText": "short 15 futures contracts"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: hợp đồng tương lai ngắn 25. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q29",
        "number": "29",
        "prompt": "Dựa trên phương pháp tiếp cận tỷ lệ phòng ngừa rủi ro phương sai tối thiểu hiệu quả phòng ngừa rủi ro là gì, cho các thông tin sau. Hệ số tương quan giữa những thay đổi về giá của công cụ cơ sở và những thay đổi về giá hợp đồng tương lai là 0,70, độ lệch chuẩn của những thay đổi về giá trị của vị thế cơ sở là 40% và độ lệch chuẩn của những thay đổi về giá của hợp đồng tương lai là 50%.. (Chọn câu trả lời gần nhất.)",
        "sourcePrompt": "Based on the minimum variance hedge ratio approach what is the hedging effectiveness, given the following information. The correlation coefficient between changes in the underlying instrument’s price and changes in the futures contract price is 0.70, the standard deviation of the changes in the underlying position’s value is 40%, and the standard deviation of the changes in the futures contract’s price is 50%. (Select the closest answer.)",
        "options": [
          {
            "id": "A",
            "text": "50%",
            "sourceText": "50%"
          },
          {
            "id": "B",
            "text": "45%",
            "sourceText": "45%"
          },
          {
            "id": "C",
            "text": "40%",
            "sourceText": "40%"
          },
          {
            "id": "D",
            "text": "35%",
            "sourceText": "35%"
          },
          {
            "id": "E",
            "text": "30%",
            "sourceText": "30%"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 50%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q30",
        "number": "30",
        "prompt": "Dựa trên phương pháp tiếp cận tỷ lệ phòng hộ nhạy cảm về giá, số lượng hợp đồng tương lai tối ưu để triển khai là bao nhiêu, với thông tin sau. Beta lợi suất là 0,65, giá trị hiện tại của thay đổi điểm cơ bản đối với danh mục đầu tư trái phiếu cơ bản là 33.000 đô la và giá trị hiện tại của thay đổi điểm cơ bản đối với hợp đồng tương lai trái phiếu là 325 đô la. (Chọn câu trả lời gần nhất.)",
        "sourcePrompt": "Based on the price sensitivity hedge ratio approach, what is the optimal number of futures contracts to deploy, given the following information. The yield beta is 0.65, the present value of a basis point change for the underlying bond portfolio is $33,000, and the present value of a basis point change for the bond futures contract is $325. (Select the closest answer.)",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng tương lai dài 100",
            "sourceText": "long 100 futures contracts"
          },
          {
            "id": "B",
            "text": "hợp đồng tương lai dài 55",
            "sourceText": "long 55 futures contracts"
          },
          {
            "id": "C",
            "text": "bán 66 hợp đồng tương lai",
            "sourceText": "short 66 futures contracts"
          },
          {
            "id": "D",
            "text": "bán 22 hợp đồng tương lai",
            "sourceText": "short 22 futures contracts"
          },
          {
            "id": "E",
            "text": "bán 11 hợp đồng tương lai",
            "sourceText": "short 11 futures contracts"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: bán 66 hợp đồng tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 11,
    "title": "Swaps",
    "sourceTitle": "CHAPTER 11: SWAPS",
    "summary": "Chương 11 tập trung vào swaps. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Interest rate swap",
      "Currency swap",
      "Equity swap",
      "Notional principal",
      "Swap rate",
      "Swap spread"
    ],
    "theory": [
      {
        "heading": "Bản chất swap",
        "body": "Swap là hợp đồng hoán đổi dòng tiền. Hai bên không nhất thiết trao đổi principal thật, thường chỉ trao đổi phần chênh lệch dòng tiền theo notional amount."
      },
      {
        "heading": "Interest rate swap",
        "body": "Trong swap lãi suất phổ biến, một bên trả cố định và nhận thả nổi, bên kia làm ngược lại. Swap rate là lãi suất cố định làm giá trị ban đầu của swap xấp xỉ bằng 0."
      },
      {
        "heading": "Các loại swap",
        "body": "Có interest rate swap, currency swap, commodity swap, equity swap. Settlement swap không phải loại swap tiêu chuẩn trong chương này."
      }
    ],
    "questions": [
      {
        "id": "c11-q1",
        "number": "1",
        "prompt": "Chênh lệch giữa lãi suất hoán đổi và lãi suất của một chứng khoán kho bạc có cùng kỳ hạn được gọi là",
        "sourcePrompt": "The difference between the swap rate and the rate on a Treasury security of the same maturity is called the",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch hoán đổi (swap spread)",
            "sourceText": "swap spread"
          },
          {
            "id": "B",
            "text": "phần bù rủi ro (risk premium)",
            "sourceText": "risk premium"
          },
          {
            "id": "C",
            "text": "swap basis",
            "sourceText": "swap basis"
          },
          {
            "id": "D",
            "text": "chênh lệch thanh toán (settlement spread)",
            "sourceText": "settlement spread"
          },
          {
            "id": "E",
            "text": "LIBOR",
            "sourceText": "LIBOR"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: chênh lệch hoán đổi (swap spread). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q2",
        "number": "2",
        "prompt": "Thanh toán hoán đổi lãi suất được thực hiện",
        "sourcePrompt": "Interest rate swap payments are made",
        "options": [
          {
            "id": "A",
            "text": "vào ngày cuối cùng của quý",
            "sourceText": "on the last day of the quarter"
          },
          {
            "id": "B",
            "text": "vào ngày đầu tiên của mỗi tháng",
            "sourceText": "on the first day of each month"
          },
          {
            "id": "C",
            "text": "vào bất kỳ ngày nào được thỏa thuận bởi các đối tác",
            "sourceText": "at whatever dates are agreed upon by the counterparties"
          },
          {
            "id": "D",
            "text": "vào ngày 15 của các tháng đã thỏa thuận",
            "sourceText": "on the 15th of the agreed-upon months"
          },
          {
            "id": "E",
            "text": "vào ngày cuối cùng của tháng",
            "sourceText": "on the last day of the month"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: vào bất kỳ ngày nào được thỏa thuận bởi các đối tác. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q3",
        "number": "3",
        "prompt": "Để xác định lãi suất cố định trên một giao dịch hoán đổi, bạn sẽ",
        "sourcePrompt": "To determine the fixed rate on a swap, you would",
        "options": [
          {
            "id": "A",
            "text": "sử dụng ngang giá quyền chọn mua – quyền chọn bán (put – call parity)",
            "sourceText": "use put-call parity"
          },
          {
            "id": "B",
            "text": "định giá nó như việc phát hành trái phiếu có lãi suất cố định và mua trái phiếu có lãi suất thả nổi hoặc ngược lại",
            "sourceText": "price it as the issuance of a fixed rate bond and purchase of a floating rate bond or vice versa"
          },
          {
            "id": "C",
            "text": "sử dụng như lãi suất cố định của trái phiếu không trả lãi suất có kỳ hạn tương đương",
            "sourceText": "use the same fixed rate as that of a zero coupon bond of equivalent maturity"
          },
          {
            "id": "D",
            "text": "sử dụng lãi suất kép liên tục cho trái phiếu có kỳ hạn ngắn nhất",
            "sourceText": "use the continuously compounded rate for the shortest maturity bond"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: định giá nó như việc phát hành trái phiếu có lãi suất cố định và mua trái phiếu có lãi suất thả nổi hoặc ngược lại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q4",
        "number": "4",
        "prompt": "Điều nào sau đây không phải là một loại hoán đổi?",
        "sourcePrompt": "Which of the following is not a type of swap?",
        "options": [
          {
            "id": "A",
            "text": "hoán đổi thanh toán",
            "sourceText": "settlement swaps"
          },
          {
            "id": "B",
            "text": "hoán đổi hàng hóa",
            "sourceText": "commodity swaps"
          },
          {
            "id": "C",
            "text": "hoán đổi lãi suất",
            "sourceText": "interest rate swaps"
          },
          {
            "id": "D",
            "text": "hoán đổi chứng khoán",
            "sourceText": "equity swaps"
          },
          {
            "id": "E",
            "text": "hoán đổi tiền tệ",
            "sourceText": "currency swaps"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: hoán đổi thanh toán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q5",
        "number": "5",
        "prompt": "Số tiền ban đầu mà các khoản thanh toán hoán đổi được thực hiện được gọi là:",
        "sourcePrompt": "The underlying amount of money on which the swap payments are made is called",
        "options": [
          {
            "id": "A",
            "text": "giá trị thanh toán",
            "sourceText": "settlement value"
          },
          {
            "id": "B",
            "text": "giá trị thị trường",
            "sourceText": "market value"
          },
          {
            "id": "C",
            "text": "vốn khái toán",
            "sourceText": "notional amount"
          },
          {
            "id": "D",
            "text": "giá trị cơ sở",
            "sourceText": "base value"
          },
          {
            "id": "E",
            "text": "giá trị chứng khoán",
            "sourceText": "equity value"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: vốn khái toán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q6",
        "number": "6",
        "prompt": "Loại hoán đổi cơ bản và phổ biến nhất được gọi là",
        "sourcePrompt": "The most basic and common type of swap is called",
        "options": [
          {
            "id": "A",
            "text": "hoán đổi basis",
            "sourceText": "basis swap"
          },
          {
            "id": "B",
            "text": "hoán đổi vanilla thuần nhất",
            "sourceText": "plain vanilla swap"
          },
          {
            "id": "C",
            "text": "hoán đổi giấy thường",
            "sourceText": "plain paper swap"
          },
          {
            "id": "D",
            "text": "hoán đổi thương phiếu",
            "sourceText": "commercial swap"
          },
          {
            "id": "E",
            "text": "hoán đổi trái phiếu",
            "sourceText": "bond swap"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hoán đổi vanilla thuần nhất. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q7",
        "number": "7",
        "prompt": "Một hoán đổi lãi suất mà cả hai bên đều trả lãi suất thả nổi được gọi là",
        "sourcePrompt": "An interest rate swap with both sides paying a floating rate is called a",
        "options": [
          {
            "id": "A",
            "text": "hoán đổi vanilla thuần nhất",
            "sourceText": "plain vanilla swap"
          },
          {
            "id": "B",
            "text": "hoán đổi hai chiều",
            "sourceText": "two-way swap"
          },
          {
            "id": "C",
            "text": "hoán đổi thả nổi",
            "sourceText": "floating swap"
          },
          {
            "id": "D",
            "text": "hoán đổi chênh lệch",
            "sourceText": "spread swap"
          },
          {
            "id": "E",
            "text": "hoán đổi basis",
            "sourceText": "basis swap"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: hoán đổi basis. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q8",
        "number": "8",
        "prompt": "Xem xét một giao dịch hoán đổi để thanh toán đồng tiền A thả nổi và nhận đồng tiền B thả nổi. Loại hợp đồng hoán đổi nào sẽ được kết hợp với hợp đồng hoán đổi này để tạo ra một hợp đồng hoán đổi vanilla thuần nhất định danh bằng đồng tiền",
        "sourcePrompt": "Consider a swap to pay currency A floating and receive currency B floating. What type of swap would be combined with this swap to produce a swap to produce a plain vanilla swap in currency B.",
        "options": [
          {
            "id": "A",
            "text": "a. trả B thả nổi, nhận A cố định",
            "sourceText": "pay currency B floating, receive currency A fixed"
          },
          {
            "id": "B",
            "text": "trả B cố định, nhận A thả nổi",
            "sourceText": "pay currency B fixed, receive currency A floating"
          },
          {
            "id": "C",
            "text": "trả B cố định, nhận A cố định",
            "sourceText": "pay currency B fixed, receive currency A fixed"
          },
          {
            "id": "D",
            "text": "trả B thả nổi, nhận A thả nổi",
            "sourceText": "pay currency B floating, receive currency A floating"
          },
          {
            "id": "E",
            "text": "không ý nào bên trên là đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: trả B cố định, nhận A thả nổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q9",
        "number": "9",
        "prompt": "Đối với một giao dịch hoán đổi tiền tệ với vốn khái toán là $10 triệu, khi trao đổi vốn khái toán tính bằng bảng Anh (₤) xấp xỉ bao nhiêu nếu tỷ giá hồi đoái là $1.55:",
        "sourcePrompt": "For a currency swap with $10 million notional amount, the notional amount in British pounds if the exchange rate is $1.55 is (approximately)",
        "options": [
          {
            "id": "A",
            "text": "₤11,55 triệu",
            "sourceText": "₤11.55 million"
          },
          {
            "id": "B",
            "text": "₤15,5 triệu",
            "sourceText": "₤15.5 million"
          },
          {
            "id": "C",
            "text": "₤10 triệu",
            "sourceText": "₤10 million"
          },
          {
            "id": "D",
            "text": "₤6,45 triệu",
            "sourceText": "₤6.45 million"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: ₤6,45 triệu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q10",
        "number": "10",
        "prompt": "Hợp đồng hoán đổi tiền tệ không có trao đổi vốn khái toán thường được sử dụng trong trường hợp nào?",
        "sourcePrompt": "A currency swap without the exchange of notional amount is most likely to be used in what situation?",
        "options": [
          {
            "id": "A",
            "text": "công ty phát hành trái phiếu",
            "sourceText": "a company issuing a bond"
          },
          {
            "id": "B",
            "text": "công ty tạo ra dòng tiền bằng ngoại tệ",
            "sourceText": "a company generating cash flows in a foreign currency"
          },
          {
            "id": "C",
            "text": "công ty vay nơ",
            "sourceText": "a company arranging a loan"
          },
          {
            "id": "D",
            "text": "dealer cố gắng để phòng ngừa rủi ro cho một quyền chọn tiền tệ",
            "sourceText": "a dealer trying to hedge a currency option"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: công ty tạo ra dòng tiền bằng ngoại tệ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q11",
        "number": "11",
        "prompt": "Điều nào sau đây phân biệt hoán đổi chứng khoán với hoán đổi tiền tệ?",
        "sourcePrompt": "Which of the following distinguishes equity swaps from currency swaps?",
        "options": [
          {
            "id": "A",
            "text": "khoản tiền thanh toán của hoán đổi chứng khoán luôn được phòng ngừa",
            "sourceText": "equity swap payments are always hedged"
          },
          {
            "id": "B",
            "text": "khoản tiền thanh toán của hoán đổi chứng khoán được thực hiện vào ngày đầu tiên của tháng",
            "sourceText": "equity swap payments are made on the first day of the month"
          },
          {
            "id": "C",
            "text": "khoản tiền thanh toán của hoán đổi chứng khoán có thể âm",
            "sourceText": "equity swap payments can be negative"
          },
          {
            "id": "D",
            "text": "khoản tiền thanh toán của hoán đổi chứng khoán có nhiều rủi ro tín dụng hơn",
            "sourceText": "equity swap payments have more credit risk"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: khoản tiền thanh toán của hoán đổi chứng khoán có thể âm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q12",
        "number": "12",
        "prompt": "Tìm khoản thanh toán ròng sắp tới trong một hợp đồng hoán đổi lãi suất vanilla thuần nhất, trong đó một bên trả cố định 10% và một bên trả lãi suất thả nổi, cho biết lãi suất thả nổi cho khoản thanh toán sắp tới là 9,5%. Vốn khái toán là $20 triệu và các khoản thanh toán dựa trên giả định là 180 ngày trong kỳ thanh toán và 360 ngày trong một năm.",
        "sourcePrompt": "Find the upcoming net payment in a plain vanilla interest rate swap in which the fixed party pays 10 percent and the floating rate for the upcoming payment is 9.5 percent. The notional amount is $20 million and payments are based on the assumption of 180 days in the payment period and 360 days in a year.",
        "options": [
          {
            "id": "A",
            "text": "bên thanh toán cố định trả $1.950.000",
            "sourceText": "fixed payer pays $1,950,000"
          },
          {
            "id": "B",
            "text": "bên thanh toán cố định trả $950.000",
            "sourceText": "fixed payer pays $950,000"
          },
          {
            "id": "C",
            "text": "bên thanh toán thả nổi trả $1 triệu",
            "sourceText": "floating payer pays $1 million"
          },
          {
            "id": "D",
            "text": "bên thanh toán thả nổi trả $50.000",
            "sourceText": "floating payer pays $50,000"
          },
          {
            "id": "E",
            "text": "bên thanh toán cố định trả $50.000",
            "sourceText": "fixed payer pays $50,000"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: bên thanh toán cố định trả $50.000. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q13",
        "number": "13",
        "prompt": "Tìm các khoản thanh toán lãi sắp tới trong một giao dịch hoán đổi tiền tệ trong đó bên A thanh toán US Dollar với lãi suất cố định 5% trên vốn khái toán là $50 triệu và bên B thanh toán đồng franc Thụy Sĩ với lãi suất cố định 4% trên vốn khái toán SF35 triệu. Các khoản thanh toán được thực hiện hàng năm với giả định là 360 ngày trong một năm và không có ròng.",
        "sourcePrompt": "Find the upcoming payment interest payments in a currency swap in which party A pays U. S. dollars at a fixed rate of 5 percent on notional amount of $50 million and party B pays Swiss francs at a fixed rate of 4 percent on notional amount of SF35 million. Payments are annual under the assumption of 360 days in a year, and there is no netting.",
        "options": [
          {
            "id": "A",
            "text": "Bên A thanh toán $2.500.000 và bên B thanh toán SF 1.400.000",
            "sourceText": "party A pays $2,500,000, and party B pays SF1,400,000"
          },
          {
            "id": "B",
            "text": "Bên A trả SF 1.400.000 và bên B trả $2.500.000",
            "sourceText": "party A pays SF1,400,000, and party B pays $2,500,000"
          },
          {
            "id": "C",
            "text": "Bên A thanh toán SF 1.750.000, bên B thanh toán SF 1.400.000",
            "sourceText": "party A pays SF1,750,000, and party B pays SF1,400,000"
          },
          {
            "id": "D",
            "text": "Bên A thanh toán $2.500.000 và bên B thanh toán $2.000.000",
            "sourceText": "party A pays $2,500,000, and party B pays $2,000,000"
          },
          {
            "id": "E",
            "text": "Bên A trả $50 triệu và bên B trả SF 35 triệu.",
            "sourceText": "party A pays $50 million, and party B pays SF35 million"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Bên A thanh toán $2.500.000 và bên B thanh toán SF 1.400.000. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q14",
        "number": "14",
        "prompt": "Tìm khoản thanh toán ròng trên một hợp đồng hoán đổi chứng khoán trong đó bên A trả theo tỷ suất sinh lợi của một chỉ số chứng khoán và bên B tr ả cố định 6%. Vốn khái là $10 triệu. Chỉ số chứng khoán bắt đầu ở mức 1.000 và ở mức 1.055,15 vào cuối kỳ. Việc trả lãi được tính trên cơ sở 180 ngày trong kỳ và 360 ngà y trong năm.",
        "sourcePrompt": "Find the net payment on an equity swap in which party A pays the return on a stock index and party B pays a fixed rate of 6 percent. The notional amount is $10 million. The stock index starts off at 1,000 and is at 1,055.15 at the end of the period. The interest payment is calculated based on 180 days in the period and 360 days in the year.",
        "options": [
          {
            "id": "A",
            "text": "Bên B thanh toán $851,500",
            "sourceText": "party B pays $851,500"
          },
          {
            "id": "B",
            "text": "Bên B thanh toán $48,500",
            "sourceText": "parry B pays $48,500"
          },
          {
            "id": "C",
            "text": "Bên B thanh toán $251,500",
            "sourceText": "party B pays $251,500"
          },
          {
            "id": "D",
            "text": "Bên A thanh toán $251,500",
            "sourceText": "party A pays $251,500"
          },
          {
            "id": "E",
            "text": "Bên A thanh toán $851,500",
            "sourceText": "party A pays $851,500"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Bên A thanh toán $251,500. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q15",
        "number": "15",
        "prompt": "Tìm khoản thanh toán ròng sắp tới (xấp xỉ) đối với một hợp đồng hoán đổi chứng khoán, trong đó bên A trả theo tý suất sinh lợi của chỉ số chứng khoán 1 và bên B trả theo tý suất sinh lợi của chỉ số chứng khoán 2. Vốn khái toán là $25 triệu. Chỉ số chứng khoán 1 đầu tiên ở mức 1500 và tăng lên 1600 vào cuối giai đoạn. Chỉ số chứng khoán 2 bắt đầu ở mức 3500 và trở về 3300 vào cuối giai đoạn.",
        "sourcePrompt": "Find the approximate upcoming net payment on an equity swap in which party A pays the return on stock index 1 and party B pays the return on stock index 2. The notional amount is $25 million. Stock index 1 starts the period at 1500 and goes up to 1600 at the end of the period. Stock index 2 starts the period at 3500 and goes up to 3300 at the end of the period.",
        "options": [
          {
            "id": "A",
            "text": "Bên thanh toán chỉ số 1 thanh toán khoảng $238,000",
            "sourceText": "The party paying index 1 pays about $238,000"
          },
          {
            "id": "B",
            "text": "Bên thanh toán chỉ số 2 thanh toán khoảng $238,000",
            "sourceText": "The party paying index 2 pays about $238,000"
          },
          {
            "id": "C",
            "text": "Bên thanh toán chỉ số 2 thanh toán khoảng $3,095 triệu",
            "sourceText": "The party paying index 2 pays about $3.095 million"
          },
          {
            "id": "D",
            "text": "Bên thanh toán chỉ số 1 thanh toán khoảng $25 triệu",
            "sourceText": "The party paying index 1 pays about $25 million"
          },
          {
            "id": "E",
            "text": "Bên thanh toán chỉ số 1 thanh toán khoảng $3,095 triệu",
            "sourceText": "The party paying index 1 pays about $3.095 million"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Bên thanh toán chỉ số 1 thanh toán khoảng $3,095 triệu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q16",
        "number": "16",
        "prompt": "Tìm lãi suất cố định trên hợp đồng hoán đổi lãi suất cố định vanilla thuần nhất với các khoản thanh toán mỗi 180 ngày một lần (giả sử một năm có 360 ngày) trong một năm. Giá của trái phiếu không chỉ trả lãi Eurodollar là 0,9756 (180 ngày) và 0,9434 (360 ngày).",
        "sourcePrompt": "Find the fixed rate on a plain vanilla interest rate swap with payments every 180 days (assume a 360-day year) for one year. The prices of Eurodollar zero coupon bonds are 0.9756 (180 days) and 0.9434 (360 days).",
        "options": [
          {
            "id": "A",
            "text": "5.9%",
            "sourceText": "5.9 percent"
          },
          {
            "id": "B",
            "text": "5%",
            "sourceText": "5 percent"
          },
          {
            "id": "C",
            "text": "6 %",
            "sourceText": "6 percent"
          },
          {
            "id": "D",
            "text": "5,5%",
            "sourceText": "5.5 percent"
          },
          {
            "id": "E",
            "text": "2,95%",
            "sourceText": "2.95 percent"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 5.9%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q17",
        "number": "17",
        "prompt": "Sử dụng thông tin trong bài toán 16 để tìm lãi suất cố định của hợp đồng hoán đổi chứng khoán trong đó chỉ số chứng khoán là 2.000.",
        "sourcePrompt": "Use the information in problem 16 to find the fixed rate on an equity swap in which the stock index is at 2,000.",
        "options": [
          {
            "id": "A",
            "text": "5.9 %",
            "sourceText": "5.9 percent"
          },
          {
            "id": "B",
            "text": "5 %",
            "sourceText": "5 percent"
          },
          {
            "id": "C",
            "text": "6 %",
            "sourceText": "6 percent"
          },
          {
            "id": "D",
            "text": "2,95 %",
            "sourceText": "2.95 percent"
          },
          {
            "id": "E",
            "text": "3,5 %",
            "sourceText": "3.5 percent"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 5.9 %. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q18",
        "number": "18",
        "prompt": "Tìm giá trị thị trường của một hợp đồng hoán đổi vanilla thuần nhất từ quan điểm của bên trả lãi suất cố định trong đó khoản thanh toán sắp tới sẽ diễn ra sau 30 ngày và có một khoản thanh toán nữa sau đó 180 ngày. Lãi suất cố định là 7% và khoản thanh toán thả nổi sắp tới là 6,5%. Vốn khái toán là $15 triệu. Giả sử 360 ngày trong một năm. Giá của trái phiếu không chỉ trả lãi Eurodollar là 0,9934 (30 ngày) và 0,9528 (210 ngày).",
        "sourcePrompt": "Find the market value of a plain vanilla swap from the perspective of the fixed rate payer in which the upcoming payment is in 30 days, and there is one more payment 180 days after that. The fixed rate is 7 percent and the upcoming floating payment is at 6.5 percent. The notional amount is $15 million. Assume 360 days in a year. The prices of Eurodollar zero coupon bonds are 0.9934 (30 days) and 0.9528 (210 days).",
        "options": [
          {
            "id": "A",
            "text": "bên thanh toán cố định trả $31,763.75",
            "sourceText": "the fixed payer pays $31,763.75"
          },
          {
            "id": "B",
            "text": "bên thanh toán cố định trả $71,527.50",
            "sourceText": "the fixed payer pays $71,527.50"
          },
          {
            "id": "C",
            "text": "bên thanh toán thả nổi trả $49,500",
            "sourceText": "the floating payer pays $49,500"
          },
          {
            "id": "D",
            "text": "bên thanh toán thả nổi trả $194,228",
            "sourceText": "the floating payer pays $194,228"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: bên thanh toán cố định trả $71,527.50. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q19",
        "number": "19",
        "prompt": "Phát biểu nào sau đây về hợp đồng hoán đổi kỳ hạn cố định là không đúng?",
        "sourcePrompt": "Which of the following statements about constant maturity swaps is not true?",
        "options": [
          {
            "id": "A",
            "text": "tỷ lệ CMT được liên kết với chứng khoán kho bạc Hoa Kỳ có kỳ hạn tương đương",
            "sourceText": "the CMT rate is linked to a U. S. treasury security of equivalent maturity"
          },
          {
            "id": "B",
            "text": "thời gian đáo hạn thông thường là từ 2 – 5 năm",
            "sourceText": "the typical maturity is 2 to 5 years"
          },
          {
            "id": "C",
            "text": "thời gian đáo hạn không đổi",
            "sourceText": "the maturity is constant"
          },
          {
            "id": "D",
            "text": "một tỷ lệ dựa trên bảo đảm có tỷ lệ dài hơn thời hạn thanh toán",
            "sourceText": "one rate is based on a security of a longer rate than the settlement period"
          },
          {
            "id": "E",
            "text": "hoán đổi là một loại hoán đổi lãi suất",
            "sourceText": "the swap is a type of interest rate swap"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: thời gian đáo hạn không đổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q20",
        "number": "20",
        "prompt": "Cách nào sau đây không phải là cách để kết thúc một hợp đồng hoán đổi:",
        "sourcePrompt": "Which of the following is not a way to terminate a swap:",
        "options": [
          {
            "id": "A",
            "text": "hai bên đối tác thanh toán tiền mặt theo giá trị thị trường",
            "sourceText": "the two counterparties cash settle the market value"
          },
          {
            "id": "B",
            "text": "tham gia một giao dịch hoán đổi ngược lại với một đối tác khác",
            "sourceText": "enter into an opposite swap with another counterparty"
          },
          {
            "id": "C",
            "text": "giữ hợp đồng hoán đổi đến ngày đáo hạn",
            "sourceText": "hold the swap to its maturity date"
          },
          {
            "id": "D",
            "text": "sử dụng hợp đồng kỳ hạn hoặc quyền chọn trên hợp đồng hoán đổi để tham gia hợp đồng hoán đổi bù trừ",
            "sourceText": "use a forward contract or option on the swap to enter into an offsetting swap"
          },
          {
            "id": "E",
            "text": "vay mượn vốn khái toán và thanh toán cho đối tác",
            "sourceText": "borrow the notional amount and pay off the counterparty"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: vay mượn vốn khái toán và thanh toán cho đối tác. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q21",
        "number": "0",
        "prompt": "9934 (30 ngày) và 0,9528 (210 ngày). Khoản thanh toán cố định sắp tới là 4% và được tính 180 ngày trong một năm có 360 ngày. Chỉ số vốn chủ sở hữu ở mức 1150 vào đầu kỳ và hiện ở mức 1152,75. Số tiền danh nghĩa là 60 triệu USD. Tìm giá trị gần đúng của hoán đổi vốn chủ sở hữu theo quan điểm của bên thực hiện thanh toán vốn chủ sở hữu và nhận khoản thanh toán cố định.",
        "sourcePrompt": "9934 (30 days) and 0.9528 (210 days). The upcoming fixed payment is at 4 percent and is based 180 days in a 360-day year. The equity index was at 1150 at the beginning of the period and is now at 1152.75. The notional amount is $60 million. Find the approximate value of the equity swap from the perspective of the party making the equity payment and receiving the fixed payment.",
        "options": [
          {
            "id": "A",
            "text": "$143,478",
            "sourceText": "$143,478"
          },
          {
            "id": "B",
            "text": "642.000 USD",
            "sourceText": "$642,000"
          },
          {
            "id": "C",
            "text": "-$143,478",
            "sourceText": "-$143,478"
          },
          {
            "id": "D",
            "text": "-$642,000",
            "sourceText": "-$642,000"
          },
          {
            "id": "E",
            "text": "-$496,560",
            "sourceText": "-$496,560"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: -$642,000. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q22",
        "number": "22",
        "prompt": "Giá trị hiện tại của một loạt các khoản thanh toán bằng đô la trong một hoán đổi tiền tệ trên 1 đô la vốn khái toán là 0,03 đô la. Giá trị hiện tại của một loạt các khoản thanh toán bằng đồng euro trong cùng một giao dịch hoán đổi tiền tệ trên 1 € là 0,0225 €. Tỷ giá hối đoái hiện tại là $1,05 mỗi euro. Nếu hợp đồng hoán đổi có vốn khái toán là $ 100 triệu và € 105 triệu, hãy tìm giá trị thị trường của hợp đồng hoán đổi của bên trả euro và nhận đô la.",
        "sourcePrompt": "The present value of the series of dollar payments in a currency swap per $1 notional amount is $0.03. The present value of the series of euro payments in the same currency swap per €1 is €0.0225. The current exchange rate is $1.05 per euro. If the swap has a notional amount of $100 million and €105 million, find the market value of the swap from the perspective of the party paying euros and receiving dollars.",
        "options": [
          {
            "id": "A",
            "text": "$519,375",
            "sourceText": "$519,375"
          },
          {
            "id": "B",
            "text": "–$2,480,625",
            "sourceText": "–$2,480,625"
          },
          {
            "id": "C",
            "text": "$3,000,000",
            "sourceText": "$3,000,000"
          },
          {
            "id": "D",
            "text": "–$3,000,000",
            "sourceText": "–$3,000,000"
          },
          {
            "id": "E",
            "text": "–$519,375",
            "sourceText": "–$519,375"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $519,375. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q23",
        "number": "23",
        "prompt": "Hoán đổi chứng khoán có thể được sử dụng cho tất cả các trường hợp sau, ngoại trừ:",
        "sourcePrompt": "Equity swaps can be used for all of the following except:",
        "options": [
          {
            "id": "A",
            "text": "để mua cổ phiếu một cách tổng hợp",
            "sourceText": "to synthetically buy stock"
          },
          {
            "id": "B",
            "text": "để bán cổ phiếu",
            "sourceText": "to synthetically sell stock"
          },
          {
            "id": "C",
            "text": "chuyển đổi cổ tức thành lãi vốn",
            "sourceText": "to convert dividends into capital gains"
          },
          {
            "id": "D",
            "text": "để sắp xếp lại một cách tổng hợp một danh mục chứng khoán",
            "sourceText": "to synthetically re-align an equity portfolio"
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: chuyển đổi cổ tức thành lãi vốn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q24",
        "number": "24",
        "prompt": "Phát biểu nào sau đây về hoán đổi khác là đúng?",
        "sourcePrompt": "Which of the following statements about diff swaps is true?",
        "options": [
          {
            "id": "A",
            "text": "chúng bao gồm các khoản thanh toán lãi bằng các loại tiền tệ riêng biệt",
            "sourceText": "they involve interest payments in separate currencies"
          },
          {
            "id": "B",
            "text": "chúng dựa trên sự khác biệt giữa lãi suất ở hai quốc gia",
            "sourceText": "they are based on the difference between interest rates in two countries"
          },
          {
            "id": "C",
            "text": "chúng dựa trên sự khác biệt giữa lãi suất của các kỳ hạn khác nhau",
            "sourceText": "they are based on the difference between interest rates of different maturities"
          },
          {
            "id": "D",
            "text": "vốn khái toán giảm trong suốt thời gian hợp đồng hoán đổi",
            "sourceText": "the notional amount reduces throughout the life of the swap"
          },
          {
            "id": "E",
            "text": "vốn khái toán tăng lên trong suốt thời gian hoán đổi",
            "sourceText": "the notional amount increases throughout the life of the swap"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chúng dựa trên sự khác biệt giữa lãi suất ở hai quốc gia. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q25",
        "number": "25",
        "prompt": "Hợp đồng hoán đổi lãi suất có thể được sử dụng cho tất cả các mục đích sau, ngoại trừ:",
        "sourcePrompt": "Interest rate swaps can be used for all of the following purposes except:",
        "options": [
          {
            "id": "A",
            "text": "vay với lãi suất cơ bản",
            "sourceText": "to borrow at the prime rate"
          },
          {
            "id": "B",
            "text": "để chuyển khoản vay có lãi suất cố định thành khoản vay có lãi suất thả nổi",
            "sourceText": "to convert a fixed-rate loan into a floating-rate loan"
          },
          {
            "id": "C",
            "text": "để chuyển khoản vay có lãi suất thả nổi thành khoản vay có lãi suất cố định",
            "sourceText": "to convert a floating-rate loan into a fixed-rate loan"
          },
          {
            "id": "D",
            "text": "đầu cơ lãi suất",
            "sourceText": "to speculate on interest rates"
          },
          {
            "id": "E",
            "text": "phòng ngừa rủi ro lãi suất",
            "sourceText": "to hedge interest rate risk"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: vay với lãi suất cơ bản. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q26",
        "number": "26",
        "prompt": "Giá trị của một hợp đồng hoán đổi trả lãi suất cố định, nhận lãi suất thả nổi được xác định như là giá trị của một",
        "sourcePrompt": "The value of a pay-fixed, receive floating interest rate swap is found as the value of a",
        "options": [
          {
            "id": "A",
            "text": "trái phiếu có lãi suất thả nổi nhân với giá trị của một trái phiếu có lãi suất cố định.",
            "sourceText": "floating-rate bond times the value of a fixed-rate bond."
          },
          {
            "id": "B",
            "text": "trái phiếu có lãi suất thả nổi cộng với giá trị của một trái phiếu có lãi suất cố định.",
            "sourceText": "floating-rate bond plus the value of a fixed-rate bond."
          },
          {
            "id": "C",
            "text": "trái phiếu có lãi suất thả nổi trừ đi giá trị của một trái phiếu có lãi suất thả nổ i khác.",
            "sourceText": "floating-rate bond minus the value of another floating-rate bond."
          },
          {
            "id": "D",
            "text": "trái phiếu có lãi suất cố định trừ đi giá trị của một trái phiếu có lãi suất cố định khác.",
            "sourceText": "fixed-rate bond minus the value of another fixed-rate bond."
          },
          {
            "id": "E",
            "text": "trái phiếu lãi suất thả nổi trừ đi giá trị của trái phiếu lãi suất cố định.",
            "sourceText": "floating-rate bond minus the value of a fixed-rate bond."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: trái phiếu lãi suất thả nổi trừ đi giá trị của trái phiếu lãi suất cố định.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q27",
        "number": "27",
        "prompt": "Một hợp đồng hoán đổi basis được định giá bằng cách thêm chênh lệ ch vào lãi suất cao hơn hoặc trừ đi chênh lệch từ lãi suất thấp hơn. Sự lây lan này được tìm thấy như",
        "sourcePrompt": "A basis swap is priced by adding a spread to the higher rate or subtracting a spread from the lower rate. This spread is found as",
        "options": [
          {
            "id": "A",
            "text": "sự khác biệt giữa lãi suất thả nổi trên một hợp đồng hoán đổi vani lla thuần nhất dựa trên một trong các tỷ lệ và lãi suất cố định trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên tỷ lệ kia.",
            "sourceText": "the difference between the floating rate on a plain vanilla swap based on one of the rates and the fixed rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "B",
            "text": "việc bổ sung lãi suất cố định trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên một trong các tỷ lệ và lãi suất cố định trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên tỷ lệ khác.",
            "sourceText": "the addition of the fixed rate on a plain vanilla swap based on one of the rates and the fixed rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "C",
            "text": "sự khác biệt giữa lãi suất cố định trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên một trong các tỷ lệ và lãi suất cố định trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên tỷ lệ khác.",
            "sourceText": "the difference between the fixed rate on a plain vanilla swap based on one of the rates and the fixed rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "D",
            "text": "chênh lệch giữa lãi suất thả nổi trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên một trong các tỷ giá và lãi suất thả nổi trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên tỷ lệ kia.",
            "sourceText": "the difference between the floating rate on a plain vanilla swap based on one of the rates and the floating rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên giải thích chính xác làm thế nào sự lây lan này được tìm thấy",
            "sourceText": "none of the above correctly explain how this spread is found"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: sự khác biệt giữa lãi suất cố định trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên một trong các tỷ lệ và lãi suất cố định trên một hợp đồng hoán đổi vanilla thuần nhất dựa trên tỷ lệ khác.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q28",
        "number": "28",
        "prompt": "Giá trị của một hợp đồng hoán đổi lãi suất nhận thả nổi, trả cố định được xem như là giá trị của một",
        "sourcePrompt": "The value of a pay-fixed, receive-floating interest rate swap is found as the value of a",
        "options": [
          {
            "id": "A",
            "text": "trái phiếu có lãi suất thả nổi trừ đi giá trị của trái phiếu có lãi suất cố định.",
            "sourceText": "floating-rate bond minus the value of a fixed-rate bond."
          },
          {
            "id": "B",
            "text": "trái phiếu có lãi suất cố định trừ đi giá trị của trái phiếu có lãi suất thả nổi.",
            "sourceText": "fixed-rate bond minus the value of a floating-rate bond."
          },
          {
            "id": "C",
            "text": "trái phiếu có lãi suất thả nổi trừ đi giá trị của một trái phiếu có lãi suất thả nổi khác.",
            "sourceText": "floating-rate bond minus the value of another floating-rate bond."
          },
          {
            "id": "D",
            "text": "trái phiếu có lãi suất cố định trừ đi giá trị của một trái phiếu có lãi suất cố định khác.",
            "sourceText": "fixed-rate bond minus the value of another fixed-rate bond."
          },
          {
            "id": "E",
            "text": "không có điều nào ở trên xác định chính xác cách tìm thấy giá trị này.",
            "sourceText": "none of the above correctly identify how this value is found."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: trái phiếu có lãi suất thả nổi trừ đi giá trị của trái phiếu có lãi suất cố định.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q29",
        "number": "29",
        "prompt": "Các khoản thanh toán hoán đổi thường bao gồm việc điều chỉnh phân số của năm theo một số cách. Sự điều chỉnh này được gọi là",
        "sourcePrompt": "Swap payments typically involve adjusting for the fraction of the year in some fashion. This adjustment is known as",
        "options": [
          {
            "id": "A",
            "text": "quy ước gộp",
            "sourceText": "the compounding convention"
          },
          {
            "id": "B",
            "text": "kỳ dồn tích",
            "sourceText": "the accrual period"
          },
          {
            "id": "C",
            "text": "quy ước phân số",
            "sourceText": "the fraction convention"
          },
          {
            "id": "D",
            "text": "quy ước thị trường tiền tệ",
            "sourceText": "the money market convention"
          },
          {
            "id": "E",
            "text": "thời hạn thanh toán",
            "sourceText": "the payment period"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: kỳ dồn tích. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q30",
        "number": "30",
        "prompt": "Sự kết hợp giữa hoán đổi trả euro cố định và nhận đô la cố định với hoán đổi trả đô la thả nổi và nhận euro cố định dẫn đến kết quả là",
        "sourcePrompt": "The combination of a pay euro fixed and receive dollar fixed swap with a pay dollar floating and receive euro fixed results in",
        "options": [
          {
            "id": "A",
            "text": "hoán đổi tiền tệ",
            "sourceText": "a currency swap"
          },
          {
            "id": "B",
            "text": "hoán đổi tiền tệ, nhận euro cố định và trả euro thả nổi",
            "sourceText": "a currency swap, receive euro fixed and pay euro floating"
          },
          {
            "id": "C",
            "text": "hoán đổi lãi suất, trả đô la cố định và nhận đô la thả nổi",
            "sourceText": "an interest rate swap, pay dollar fixed and receive dollar floating"
          },
          {
            "id": "D",
            "text": "hoán đổi lãi suất, nhận euro cố định và trả euro thả nổi",
            "sourceText": "an interest rate swap, receive euro fixed and pay euro floating"
          },
          {
            "id": "E",
            "text": "hoán đổi lãi suất, trả đô la thả nổi và nhận đô la cố định",
            "sourceText": "an interest rate swap, pay dollar floating and receive dollar fixed"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: hoán đổi lãi suất, trả đô la thả nổi và nhận đô la cố định. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 12,
    "title": "Forward và option lãi suất",
    "sourceTitle": "CHAPTER 12: INTEREST RATE FORWARDS AND OPTIONS",
    "summary": "Chương 12 tập trung vào forward và option lãi suất. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "FRA",
      "Eurodollar futures",
      "Caps",
      "Floors",
      "Collars",
      "Interest rate option"
    ],
    "theory": [
      {
        "heading": "FRA",
        "body": "Forward rate agreement khóa mức lãi suất cho một khoản vay/cho vay trong tương lai. Khi đáo hạn, hai bên thanh toán phần chênh lệch lãi suất bằng tiền mặt."
      },
      {
        "heading": "Caps, floors, collars",
        "body": "Cap bảo vệ người vay khi lãi suất tăng. Floor bảo vệ người cho vay khi lãi suất giảm. Collar kết hợp cap và floor để giới hạn vùng lãi suất."
      },
      {
        "heading": "Option lãi suất",
        "body": "Option lãi suất thường có payoff phụ thuộc vào mức lãi suất tham chiếu. Cần xác định ai hưởng lợi khi lãi suất tăng hoặc giảm."
      }
    ],
    "questions": [
      {
        "id": "c12-q1",
        "number": "1",
        "prompt": "FRA dạng 1 × 4 (1 x 4 FRA) là loại nào sau đây?",
        "sourcePrompt": "Which of the following is a 1 x 4 FRA?",
        "options": [
          {
            "id": "A",
            "text": "FRA đáo hạn sau 1 tháng và lãi suất Eurodollar cơ sở đáo hạn sau 3 tháng.",
            "sourceText": "The FRA expires in one month, and the underlying Eurodollar expires in three months."
          },
          {
            "id": "B",
            "text": "FRA đáo hạn sau 4 tháng và lãi suất Eurodollar cơ sở đáo hạn sau 1 tháng.",
            "sourceText": "The FRA expires in four months, and the underlying Eurodollar expires in one month."
          },
          {
            "id": "C",
            "text": "FRA đáo hạn sau 1 tháng và lãi suất Eurodollar cơ sở đáo hạn sau 4 tháng.",
            "sourceText": "The FRA expires in one month, and the underlying Eurodollar expires in four months."
          },
          {
            "id": "D",
            "text": "FRA đáo hạn sau 3 tháng và lãi suất Eurodollar cơ sở đáo hạn sau 4 tháng.",
            "sourceText": "The FRA expires in three months, and the underlying Eurodollar expires in four months."
          },
          {
            "id": "E",
            "text": "FRA đáo hạn sau 1 tháng và lãi suất Eurodollar cơ sở đáo hạn sau 5 tháng.",
            "sourceText": "The FRA expires in one month, and the underlying Eurodollar expires in five months."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: FRA đáo hạn sau 1 tháng và lãi suất Eurodollar cơ sở đáo hạn sau 4 tháng.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q2",
        "number": "2",
        "prompt": "Hãy xác định giá trị của một quyền chọn mua lãi suất tại thời điểm đáo hạn của khoản vay nếu quyền chọn mua có giá thực hiện 12%, mệnh giá 50 triệu USD, khoản vay đáo hạn sau 90 ngày kể từ khi quyền chọn được thực hiện, quyền chọn đáo hạn sau 60 ngày, phí quyền chọn là $200.000 và LIBOR cuối cùng là 13%.",
        "sourcePrompt": "Determine the value of an interest rate call option at the maturity of a loan if the call has a strike of 12 percent, a face value of $50 million, the loan matures 90 days after the call is exercised, the call expires in 60 days, the call premium is $200,000, and LIBOR ends up at 13 percent.",
        "options": [
          {
            "id": "A",
            "text": "$125.000",
            "sourceText": "$125,000"
          },
          {
            "id": "B",
            "text": "$83.333",
            "sourceText": "$83,333"
          },
          {
            "id": "C",
            "text": "$208.000",
            "sourceText": "$208,000"
          },
          {
            "id": "D",
            "text": "–$75.000",
            "sourceText": "–$75,000"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $125.000. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q3",
        "number": "3",
        "prompt": "Một ngân hàng cấp khoản vay chiết khấu thuần (pure discount loan) trị giá $5 triệu, kỳ hạn 180 ngày, theo lãi suất LIBOR 9%. Đồng thời, ngân hàng thực hiện một quyền chọn bán lãi suất với giá thực hiện 11%. Hãy tìm tỷ suất sinh lời quy năm của khoản vay. (Bỏ qua chi phí mua quyền chọn bán.)",
        "sourcePrompt": "A bank makes a $5 million 180-day pure discount loan at LIBOR of 9 percent. At the same time, however, it exercises an interest rate put that has a strike of 11 percent. Find the annualized rate of return on the loan. Ignore the cost of the put.",
        "options": [
          {
            "id": "A",
            "text": "9,34%",
            "sourceText": "9.34 percent"
          },
          {
            "id": "B",
            "text": "11,47%",
            "sourceText": "11.47 percent"
          },
          {
            "id": "C",
            "text": "9%",
            "sourceText": "9 percent"
          },
          {
            "id": "D",
            "text": "11%",
            "sourceText": "11 percent"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 11,47%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q4",
        "number": "4",
        "prompt": "Phát biểu nào mô tả đúng nhất về trần lãi suất (interest rate cap)?",
        "sourcePrompt": "Which of the following best describes an interest rate cap?",
        "options": [
          {
            "id": "A",
            "text": "một giao dịch phòng ngừa rủi ro kiểu mua – nắm giữ (cash-and-carry hedge)",
            "sourceText": "a cash-and-carry hedge"
          },
          {
            "id": "B",
            "text": "một chuỗi các hợp đồng kỳ hạn",
            "sourceText": "a series of forward contracts"
          },
          {
            "id": "C",
            "text": "một chuỗi các quyền chọn mua lãi suất",
            "sourceText": "a series of interest rate calls"
          },
          {
            "id": "D",
            "text": "một chiến lược chênh lệch quyền chọn mua (call option spread)",
            "sourceText": "a call option spread"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một chuỗi các quyền chọn mua lãi suất. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q5",
        "number": "5",
        "prompt": "Một ngân hàng mua sàn lãi suất (interest rate floor) kết hợp với một khoản cho vay đang nắm giữ, khoản vay này sẽ thực hiện 4 lần thanh toán bán niên (semiannual) bắt đầu từ 6 tháng kể từ bây giờ. Sàn lãi suất có giá thực hiện 9%. LIBOR vào đầu các kỳ thanh toán lần lượt là 10%, 11%, 8% và 8,6%. Vào những ngày nào người bán sàn lãi suất sẽ phải thanh toán cho ngân hàng?",
        "sourcePrompt": "A bank buys an interest rate floor in conjunction with a loan it holds that will make four semiannual payments starting six months from now. The floor has a strike of 9 percent. LIBOR at the beginning of the four payment periods is 10, 11, 8, and 8.6 percent. On which dates will the floor writer make a payment to the bank?",
        "options": [
          {
            "id": "A",
            "text": "ngay bây giờ và sau 24 tháng",
            "sourceText": "now and in 24 months"
          },
          {
            "id": "B",
            "text": "sau 18 và 24 tháng",
            "sourceText": "in 18 and 24 months"
          },
          {
            "id": "C",
            "text": "sau 12 và 18 tháng",
            "sourceText": "in 12 and 18 months"
          },
          {
            "id": "D",
            "text": "sau 6, 12, 18 và 24 tháng",
            "sourceText": "in 6, 12, 18 and 24 months"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: sau 18 và 24 tháng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q6",
        "number": "6",
        "prompt": "Ưu điểm của hợp đồng khoảng (collar) so với trần lãi suất (cap) là",
        "sourcePrompt": "The advantage of a collar over a cap is",
        "options": [
          {
            "id": "A",
            "text": "giảm chi phí phải bỏ ra",
            "sourceText": "it lowers the out-of-pocket cost"
          },
          {
            "id": "B",
            "text": "tạo cơ hội đạt được tỷ suất sinh lời cao hơn",
            "sourceText": "it offers the possibility of greater returns"
          },
          {
            "id": "C",
            "text": "loại bỏ hoàn toàn rủi ro",
            "sourceText": "it eliminates the risk"
          },
          {
            "id": "D",
            "text": "có chi phí giao dịch thấp hơn",
            "sourceText": "it has lower transaction costs"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giảm chi phí phải bỏ ra. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q7",
        "number": "7",
        "prompt": "FRA giống nhất với giao dịch nào sau đây?",
        "sourcePrompt": "An FRA is most like which of the following transactions",
        "options": [
          {
            "id": "A",
            "text": "trần lãi suất (interest rate cap)",
            "sourceText": "an interest rate cap"
          },
          {
            "id": "B",
            "text": "sàn lãi suất (interest rate floor)",
            "sourceText": "an interest rate floor"
          },
          {
            "id": "C",
            "text": "khoảng lãi suất (interest rate collar)",
            "sourceText": "an interest rate collar"
          },
          {
            "id": "D",
            "text": "hợp đồng kỳ hạn (forward contract)",
            "sourceText": "a forward contract"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: hợp đồng kỳ hạn (forward contract). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q8",
        "number": "8",
        "prompt": "Khoản thanh toán cho người nắm giữ vị thế mua FRA dựa trên LIBOR 90 ngày, lãi suất cố định 8,75%, mệnh giá danh nghĩa $20 triệu, nếu lãi suất cơ sở là 9% tại thời điểm đáo hạn là",
        "sourcePrompt": "75 percent, a notional amount of $20 million if the underlying is 9 percent at expiration is",
        "options": [
          {
            "id": "A",
            "text": "$12.500",
            "sourceText": "$12,500"
          },
          {
            "id": "B",
            "text": "–$12.500",
            "sourceText": "–$12,500"
          },
          {
            "id": "C",
            "text": "–$12.225",
            "sourceText": "–$12,225"
          },
          {
            "id": "D",
            "text": "$12.225",
            "sourceText": "$12,225"
          },
          {
            "id": "E",
            "text": "–$48.900",
            "sourceText": "–$48,900"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $12.225. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q9",
        "number": "9",
        "prompt": "Lãi suất cố định trên FRA đáo hạn sau 30 ngày dựa trên LIBOR 180 ngày, biết lãi suất 30 ngày là 5% và lãi suất 210 ngày là 6%, là",
        "sourcePrompt": "The fixed rate on an FRA expiring in 30 days on 180-day LIBOR with the 30-day rate being 5 percent and the 210 day rate being 6 percent is",
        "options": [
          {
            "id": "A",
            "text": "6%",
            "sourceText": "6 percent"
          },
          {
            "id": "B",
            "text": "6,14%",
            "sourceText": "6.14 percent"
          },
          {
            "id": "C",
            "text": "5%",
            "sourceText": "5 percent"
          },
          {
            "id": "D",
            "text": "5,5%",
            "sourceText": "5.5 percent"
          },
          {
            "id": "E",
            "text": "5,15%",
            "sourceText": "5.15 percent"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 6,14%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q10",
        "number": "10",
        "prompt": "Quyền chọn hoán đổi (swaption) giống với hợp đồng hoán đổi kỳ hạn (forward swap) ở điểm nào sau đây?",
        "sourcePrompt": "Swaptions are like forward swaps in which of the following ways",
        "options": [
          {
            "id": "A",
            "text": "Cả hai đều không có rủi ro tín dụng",
            "sourceText": "Both are free of credit risk"
          },
          {
            "id": "B",
            "text": "Cả hai đều bắt buộc thực hiện hợp đồng hoán đổi tại thời điểm đáo hạn",
            "sourceText": "Both require the execution of a swap at expiration"
          },
          {
            "id": "C",
            "text": "Cả hai có cùng mức giá",
            "sourceText": "They have the same price"
          },
          {
            "id": "D",
            "text": "Cả hai đều được giao dịch trên các sở giao dịch swaption",
            "sourceText": "Both are traded on swaption exchanges"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không phương án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q11",
        "number": "11",
        "prompt": "Tìm phí quyền chọn của một quyền chọn mua lãi suất được định giá đúng trên LIBOR 30 ngày nếu lãi suất kỳ hạn hiện tại là 7%, giá thực hiện là 7%, lãi suất phi rủi ro tính lãi liên tục là 6,2%, độ biến động là 12% và quyền chọn đáo hạn sau 1 năm. Mệnh giá danh nghĩa là $30 triệu.",
        "sourcePrompt": "Find the premium of a correctly priced interest rate call on 30-day LIBOR if the current forward rate is 7 percent, the strike is 7 percent, the continuously compounded risk-free rate is 6.2 percent, the volatility is 12 percent and the option expires in one year. The notional amount is $30 million.",
        "options": [
          {
            "id": "A",
            "text": "$0,0031",
            "sourceText": "$.0031"
          },
          {
            "id": "B",
            "text": "$93.000",
            "sourceText": "$93,000"
          },
          {
            "id": "C",
            "text": "$7.817",
            "sourceText": "$7,817"
          },
          {
            "id": "D",
            "text": "$0,0012",
            "sourceText": "$0.0012"
          },
          {
            "id": "E",
            "text": "$36.000",
            "sourceText": "$36,000"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $7.817. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q12",
        "number": "12",
        "prompt": "Hạn chế nào sau đây của việc dùng mô hình Black để định giá quyền chọn lãi suất?",
        "sourcePrompt": "Which of the following is a limitation of using the Black model to price interest rate options?",
        "options": [
          {
            "id": "A",
            "text": "lãi suất phi rủi ro không phải là hằng số",
            "sourceText": "the risk-free rate is not constant"
          },
          {
            "id": "B",
            "text": "độ biến động không phải là hằng số",
            "sourceText": "the volatility is not constant"
          },
          {
            "id": "C",
            "text": "lãi suất không phân phối loga chuẩn (lognormally distributed)",
            "sourceText": "interest rates are not lognormally distributed"
          },
          {
            "id": "D",
            "text": "tất cả các đáp án trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tất cả các đáp án trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q13",
        "number": "13",
        "prompt": "FRA khác với hợp đồng hoán đổi lãi suất (interest rate swap) ở điểm nào sau đây?",
        "sourcePrompt": "An FRA differs from an interest rate swap in which of the following ways?",
        "options": [
          {
            "id": "A",
            "text": "FRA có rủi ro tín dụng cao hơn",
            "sourceText": "An FRA has more credit risk"
          },
          {
            "id": "B",
            "text": "FRA chịu sự quản lý của liên bang (federally regulated)",
            "sourceText": "FRAs are federally regulated"
          },
          {
            "id": "C",
            "text": "Theo truyền thống, khoản thanh toán trong FRA bị trì hoãn (delayed)",
            "sourceText": "Traditionally the payment in an FRA is delayed"
          },
          {
            "id": "D",
            "text": "FRA chỉ do ngân hàng sử dụng còn swap chỉ do doanh nghiệp sử dụng",
            "sourceText": "FRAs are used only by banks and swaps are used only by corporations"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Theo truyền thống, khoản thanh toán trong FRA bị trì hoãn (delayed). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q14",
        "number": "14",
        "prompt": "Yếu tố nào sau đây KHÔNG cần thiết để xác định khoản thanh toán của swaption tại thời điểm đáo hạn?",
        "sourcePrompt": "Which of the following is not required to determine a swaption payoff at expiration?",
        "options": [
          {
            "id": "A",
            "text": "lãi suất thực hiện (exercise rate)",
            "sourceText": "the exercise rate"
          },
          {
            "id": "B",
            "text": "cấu trúc kỳ hạn của lãi suất zero-coupon tại thời điểm swaption đáo hạn",
            "sourceText": "the term structure of zero coupon rates at the swaption expiration"
          },
          {
            "id": "C",
            "text": "kỳ hạn của hợp đồng hoán đổi cơ sở",
            "sourceText": "the maturity of the underlying swap"
          },
          {
            "id": "D",
            "text": "lợi suất của trái phiếu có cùng kỳ hạn với hợp đồng hoán đổi",
            "sourceText": "the yield on a bond of equivalent maturity as the swap"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: lợi suất của trái phiếu có cùng kỳ hạn với hợp đồng hoán đổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q15",
        "number": "15",
        "prompt": "Tìm khoản thanh toán của quyền chọn mua lãi suất trên lãi suất hằng năm với lãi suất thực hiện 10% nếu lãi suất một kỳ tại thời điểm đáo hạn là 11%. (Không cần điều chỉnh ngày/360 và giả định mệnh giá danh nghĩa $1.)",
        "sourcePrompt": "Find the payoff of an interest rate call option on the annual rate with an exercise rate of 10 percent if the one-period rate at expiration is 11 percent. (No days/360 adjustment is necessary and assume a $1 notional amount.)",
        "options": [
          {
            "id": "A",
            "text": "0,12",
            "sourceText": "0.12"
          },
          {
            "id": "B",
            "text": "không (zero)",
            "sourceText": "zero"
          },
          {
            "id": "C",
            "text": "0,01",
            "sourceText": "0.01"
          },
          {
            "id": "D",
            "text": "0,0090",
            "sourceText": "0.0090"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 0,0090. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q16",
        "number": "16",
        "prompt": "Tìm giá trị thị trường gần đúng của vị thế mua trong FRA với lãi suất cố định 5% trong đó hợp đồng đáo hạn sau 20 ngày, lãi suất cơ sở là LIBOR 180 ngày, mệnh giá danh nghĩa $25 triệu, lãi suất 20 ngày là 7% và lãi suất 200 ngày là 8,5%.",
        "sourcePrompt": "Find the approximate market value of a long position in an FRA at a fixed rate of 5 percent in which the contract expires in 20 days, the underlying is 180-day LIBOR, the notional amount is $25 million, the 20-day rate is 7 percent, and the 200-day rate is 8.5 percent.",
        "options": [
          {
            "id": "A",
            "text": "$433.658",
            "sourceText": "$433,658"
          },
          {
            "id": "B",
            "text": "–$454.954",
            "sourceText": "–$454,954"
          },
          {
            "id": "C",
            "text": "$322.819",
            "sourceText": "$322,819"
          },
          {
            "id": "D",
            "text": "–$322.819",
            "sourceText": "–$322,819"
          },
          {
            "id": "E",
            "text": "$454.954",
            "sourceText": "$454,954"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $433.658. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q17",
        "number": "17",
        "prompt": "Tìm lãi suất hiệu dụng trên khoản vay chiết khấu thuần được phòng ngừa rủi ro bằng vị thế mua FRA, biết khoản vay $10 triệu đáo hạn sau 30 ngày, FRA dựa trên LIBOR 30 ngày, lãi suất cố định trên FRA là 4% và LIBOR tại thời điểm vay là 5%.",
        "sourcePrompt": "Find the rate on a pure discount loan hedged with a long FRA if the loan is for $10 million and matures in 30 days, the FRA is 30-day LIBOR, the fixed rate on the FRA is 4 percent, and LIBOR at the time the loan is taken out is 5 percent.",
        "options": [
          {
            "id": "A",
            "text": "4,87%",
            "sourceText": "4.87 percent"
          },
          {
            "id": "B",
            "text": "0,25%",
            "sourceText": "0.25 percent"
          },
          {
            "id": "C",
            "text": "5,18%",
            "sourceText": "5.18 percent"
          },
          {
            "id": "D",
            "text": "4,13%",
            "sourceText": "4.13 percent"
          },
          {
            "id": "E",
            "text": "2,04%",
            "sourceText": "2.04 percent"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 4,13%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q18",
        "number": "18",
        "prompt": "Vị thế mua quyền chọn mua lãi suất sẽ phù hợp với tình huống nào sau đây?",
        "sourcePrompt": "A long position in an interest rate call would be appropriate for which of the following situations:",
        "options": [
          {
            "id": "A",
            "text": "một nhà giao dịch trái phiếu kỳ vọng lãi suất giảm",
            "sourceText": "a bond trader expects falling interest rates"
          },
          {
            "id": "B",
            "text": "một người đi vay kỳ vọng lãi suất tăng",
            "sourceText": "a borrower expects rising interest rates"
          },
          {
            "id": "C",
            "text": "một người cho vay kỳ vọng lãi suất tăng",
            "sourceText": "a lender expects rising interest rates"
          },
          {
            "id": "D",
            "text": "một dealer phái sinh đang chịu rủi ro lãi suất giảm",
            "sourceText": "a derivatives dealer is exposed to the risk of falling interest rates"
          },
          {
            "id": "E",
            "text": "một bên giữ vị thế bán hợp đồng tương lai Eurodollar đang lo lắng về việc thua lỗ",
            "sourceText": "a party holding a short position in Eurodollar futures is concerned about losing money"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: một người đi vay kỳ vọng lãi suất tăng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q19",
        "number": "19",
        "prompt": "Quyền chọn hoán đổi trả lãi cố định (payer swaption) tương đương với công cụ nào sau đây?",
        "sourcePrompt": "A payer swaption is equivalent to which of the following instruments.",
        "options": [
          {
            "id": "A",
            "text": "quyền chọn mua trên trái phiếu",
            "sourceText": "a call option on a bond"
          },
          {
            "id": "B",
            "text": "vị thế mua quyền chọn trên hợp đồng tương lai trái phiếu Kho bạc",
            "sourceText": "a long Treasury bond futures option"
          },
          {
            "id": "C",
            "text": "vị thế mua hợp đồng tương lai Eurodollar",
            "sourceText": "a long Eurodollar futures"
          },
          {
            "id": "D",
            "text": "trần lãi suất (interest rate cap)",
            "sourceText": "an interest rate cap"
          },
          {
            "id": "E",
            "text": "quyền chọn bán trên trái phiếu",
            "sourceText": "a put option on a bond"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: quyền chọn bán trên trái phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q20",
        "number": "20",
        "prompt": "Chiến lược nào sau đây sao chép (replicate) vị thế mua FRA?",
        "sourcePrompt": "Which of the following strategies replicates a long position in an FRA?",
        "options": [
          {
            "id": "A",
            "text": "mua tiền gửi định kỳ Eurodollar dài hạn và bán tiền gửi định kỳ Eurodollar ngắn hạn",
            "sourceText": "long a long term Eurodollar time deposit and short a short-term Eurodollar time deposit"
          },
          {
            "id": "B",
            "text": "mua hợp đồng tương lai Eurodollar và bán quyền chọn trên Eurodollar",
            "sourceText": "long a Eurodollar futures and short a Eurodollar option"
          },
          {
            "id": "C",
            "text": "mua quyền chọn trên hợp đồng tương lai Eurodollar",
            "sourceText": "long a Eurodollar option on a futures"
          },
          {
            "id": "D",
            "text": "bán hợp đồng tương lai trái phiếu Kho bạc dài hạn và bán hợp đồng tương lai trái phiếu Kho bạc ngắn hạn",
            "sourceText": "short a long-term Treasury bond futures and short a short-term Treasury bond futures"
          },
          {
            "id": "E",
            "text": "mua quyền chọn hoán đổi nhận lãi cố định (receiver swaption)",
            "sourceText": "long a receiver swaption"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: mua tiền gửi định kỳ Eurodollar dài hạn và bán tiền gửi định kỳ Eurodollar ngắn hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q21",
        "number": "21",
        "prompt": "FRA mà lãi suất không được xác định theo lãi suất thị trường được gọi là",
        "sourcePrompt": "An FRA in which the rate is not set according to rates in the market is called",
        "options": [
          {
            "id": "A",
            "text": "FRA bán (short FRA)",
            "sourceText": "a short FRA"
          },
          {
            "id": "B",
            "text": "FRA mua (long FRA)",
            "sourceText": "a long FRA"
          },
          {
            "id": "C",
            "text": "FRA phi thị trường (off-market FRA)",
            "sourceText": "an off-market FRA"
          },
          {
            "id": "D",
            "text": "FRA được phòng ngừa rủi ro (hedged FRA)",
            "sourceText": "a hedged FRA"
          },
          {
            "id": "E",
            "text": "FRA chênh lệch (FRA spread)",
            "sourceText": "an FRA spread"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: FRA phi thị trường (off-market FRA). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q22",
        "number": "22",
        "prompt": "Nếu một người cho vay sử dụng hợp đồng khoảng (collar), các giao dịch sẽ là",
        "sourcePrompt": "If a lender uses a collar, the transactions would be",
        "options": [
          {
            "id": "A",
            "text": "mua sàn lãi suất tại một mức thực hiện và bán sàn lãi suất tại một mức thực hiện khác",
            "sourceText": "buy a floor at one exercise price, sell a floor at another exercise price"
          },
          {
            "id": "B",
            "text": "mua sàn lãi suất, bán trần lãi suất",
            "sourceText": "buy a floor, sell a cap"
          },
          {
            "id": "C",
            "text": "bán sàn lãi suất, mua trần lãi suất",
            "sourceText": "sell a floor, buy a cap"
          },
          {
            "id": "D",
            "text": "mua trần lãi suất tại một mức thực hiện và bán sàn lãi suất tại một mức thực hiện khác",
            "sourceText": "buy a cap at one exercise price, sell a floor at another exercise price"
          },
          {
            "id": "E",
            "text": "mua trần và bán sàn lãi suất tại cùng mức thực hiện",
            "sourceText": "buy a cap and sell a floor at the same exercise price"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: mua sàn lãi suất, bán trần lãi suất. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q23",
        "number": "23",
        "prompt": "Một payer swaption đang đáo hạn. Hợp đồng hoán đổi cơ sở có kỳ hạn 2 năm. Hệ số giá trị hiện tại lần lượt là 0,9259 (1 năm) và 0,8651 (2 năm). Lãi suất thực hiện là 7%. Giá trị của swaption tính trên mỗi $1 mệnh giá danh nghĩa là bao nhiêu?",
        "sourcePrompt": "A payer swaption is expiring. The underlying swap has a two year maturity. Th e present value factors are 0.9259 (one year) and 0.8651 (two years). The strike rate is 7 percent. What is the value of the swaption per $1 notional amount.",
        "options": [
          {
            "id": "A",
            "text": "0,0000, vì đang ở trạng thái lỗ (out-of-the-money)",
            "sourceText": "0.0000, since it is out-of-the-money"
          },
          {
            "id": "B",
            "text": "1,0000",
            "sourceText": "1.0000"
          },
          {
            "id": "C",
            "text": "0,0753",
            "sourceText": "0.0753"
          },
          {
            "id": "D",
            "text": "0,0095",
            "sourceText": "0.0095"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 0,0095. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q24",
        "number": "24",
        "prompt": "Tìm lãi suất cố định của hợp đồng hoán đổi kỳ hạn (forward swap) đáo hạn sau 90 ngày, biết hợp đồng hoán đổi cơ sở có kỳ hạn 180 ngày và thanh toán mỗi 90 ngày. Giá của các trái phiếu zero-coupon là 0,9877 (90 ngày), 0,9732 (180 ngày) và 0,9597 (270 ngày).",
        "sourcePrompt": "Find the fixed rate on a forward swap expiring in 90 days in which the underlying swap has a maturity of 180 days and makes payments every 90 days. The prices of zero coupon bonds are 0.9877 (90 days), 0.9732 (180 days), and 0.9597 (270 days).",
        "options": [
          {
            "id": "A",
            "text": "5,97%",
            "sourceText": "5.97 percent"
          },
          {
            "id": "B",
            "text": "5,6%",
            "sourceText": "5.6 percent"
          },
          {
            "id": "C",
            "text": "5,5%",
            "sourceText": "5.5 percent"
          },
          {
            "id": "D",
            "text": "5,78%",
            "sourceText": "5.78 percent"
          },
          {
            "id": "E",
            "text": "5%",
            "sourceText": "5 percent"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 5,78%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q25",
        "number": "25",
        "prompt": "Tất cả các nội dung sau đây đều là công dụng của swaption, NGOẠI TRỪ",
        "sourcePrompt": "All of the following are uses of swaptions except",
        "options": [
          {
            "id": "A",
            "text": "đầu cơ vào lãi suất",
            "sourceText": "to speculate on interest rates"
          },
          {
            "id": "B",
            "text": "tạo sự linh hoạt cho doanh nghiệp trong các khoản vay tương lai",
            "sourceText": "to give a firm flexibility in future borrowings"
          },
          {
            "id": "C",
            "text": "vay tiền",
            "sourceText": "to borrow money"
          },
          {
            "id": "D",
            "text": "biến trái phiếu không thể thu hồi (non-callable) thành trái phiếu có thể thu hồi (callable)",
            "sourceText": "to create callable from non-callable bonds"
          },
          {
            "id": "E",
            "text": "không phương án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: vay tiền. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q26",
        "number": "26",
        "prompt": "Giả sử doanh nghiệp của anh/chị đã phát hành trái phiếu có thể thu hồi (callable bond) cách đây 2 năm và còn 3 năm nữa mới đến ngày thu hồi đầu tiên. Nếu lãi suất đã giảm trong 2 năm qua và anh/chị tin rằng lãi suất sẽ không duy trì thấp như vậy và rằng việc kéo dài thời hạn (duration) của các khoản nợ là có lợi cho doanh nghiệp, chiến lược nào sau đây có thể đạt được mục tiêu kéo dài duration đồng thời chốt được mức lãi suất thấp này?",
        "sourcePrompt": "Suppose your firm issued a callable bond two years ago and it has three more years to go before the first call date. If interest rates have fallen over the past two years and you believe rates will not stay this low and that it would be in the firm’s best interest to lengthen the duration of the liabilities, which of the following is one potential strategy to accomplish the objective of lengthening the duration while also securing the lowering interest rate.",
        "options": [
          {
            "id": "A",
            "text": "mua payer swaption",
            "sourceText": "buy a payer swaption"
          },
          {
            "id": "B",
            "text": "bán payer swaption",
            "sourceText": "sell a payer swaption"
          },
          {
            "id": "C",
            "text": "mua receiver swaption",
            "sourceText": "buy a receiver swaption"
          },
          {
            "id": "D",
            "text": "bán receiver swaption",
            "sourceText": "sell a receiver swaption"
          },
          {
            "id": "E",
            "text": "mua sàn lãi suất (interest rate floor)",
            "sourceText": "buy an interest rate floor"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: bán receiver swaption. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q27",
        "number": "27",
        "prompt": "Giả sử doanh nghiệp của anh/chị mới đầu tư vào trái phiếu có thể thu hồi (callable bond) khi lãi suất cao và trái phiếu này còn 3 năm nữa mới đến ngày thu hồi đầu tiên. Nếu lãi suất được kỳ vọng sẽ giảm trong 3 năm tới, chiến lược nào sau đây sẽ tận dụng được nhận định này?",
        "sourcePrompt": "Suppose your firm invested in a callable bond recently when interest rates were high and the bond has three more years to go before the first call date. If interest rates are expected to fall over the next three years, which of the following is one potential strategy would take advantage of this view.",
        "options": [
          {
            "id": "A",
            "text": "mua payer swaption",
            "sourceText": "buy a payer swaption"
          },
          {
            "id": "B",
            "text": "bán payer swaption",
            "sourceText": "sell a payer swaption"
          },
          {
            "id": "C",
            "text": "mua receiver swaption",
            "sourceText": "buy a receiver swaption"
          },
          {
            "id": "D",
            "text": "bán receiver swaption",
            "sourceText": "sell a receiver swaption"
          },
          {
            "id": "E",
            "text": "mua sàn lãi suất",
            "sourceText": "buy an interest rate floor"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: mua receiver swaption. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q28",
        "number": "28",
        "prompt": "Phát biểu nào mô tả đúng nhất về hợp đồng khoảng chi phí bằng không (zero cost collar) trong bối cảnh các công cụ phái sinh lãi suất?",
        "sourcePrompt": "Which of the following best describes a zero cost collar within the context of interest rate derivatives?",
        "options": [
          {
            "id": "A",
            "text": "Zero cost collar là vị thế mua (bán) trần lãi suất và vị thế bán (mua) sàn lãi suất, trong đó chi phí của trần (sàn) đúng bằng doanh thu từ sàn (trần).",
            "sourceText": "A zero cost collar is a long (short) position in an interest rate cap and a short (long) position in an interest rate floor where the cost of the cap (floor) exactly offsets the revenue from the floor (cap)."
          },
          {
            "id": "B",
            "text": "Zero cost collar là vị thế mua (bán) trần lãi suất và vị thế bán (mua) sàn lãi suất, trong đó chi phí của trần (sàn) thấp hơn doanh thu từ sàn (trần).",
            "sourceText": "A zero cost collar is a long (short) position in an interest rate cap and a short (long) position in an interest rate floor where the cost of the cap (floor) is less than the revenue from the floor (cap)."
          },
          {
            "id": "C",
            "text": "Zero cost collar là vị thế mua (bán) trần lãi suất và vị thế bán (mua) sàn lãi suất, trong đó chi phí của trần (sàn) cao hơn doanh thu từ sàn (trần).",
            "sourceText": "A zero cost collar is a long (short) position in an interest rate cap and a short (long) position in an interest rate floor where the cost of the cap (floor) is greater than the revenue from the floor (cap)."
          },
          {
            "id": "D",
            "text": "Zero cost collar là một quyền chọn chỉ thanh toán nếu lãi suất nằm trong một khoảng định sẵn.",
            "sourceText": "A zero cost collar is an option that pays off only if interest rates remain within a designated range."
          },
          {
            "id": "E",
            "text": "Zero cost collar là một quyền chọn chỉ thanh toán nếu lãi suất nằm ngoài một khoảng định sẵn.",
            "sourceText": "A zero cost collar is an option that pays off only if interest rates fall outside of a designated range."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Zero cost collar là vị thế mua (bán) trần lãi suất và vị thế bán (mua) sàn lãi suất, trong đó chi phí của trần (sàn) đúng bằng doanh thu từ sàn (trần).. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q29",
        "number": "29",
        "prompt": "Giả sử anh/chị có một khoản vay lãi suất thả nổi gắn với LIBOR 90 ngày và đã phòng ngừa rủi ro lãi suất bằng trần lãi suất (interest rate cap). Lãi suất hiệu dụng quy năm thực tế phải trả trên khoản vay khi có cap được tính theo phương pháp tương đương với",
        "sourcePrompt": "Suppose you have a floating rate loan tied to 90-day LIBOR and have hedged the interest rate risk with an interest rate cap. The effective annual rate actually paid on the loan with the cap is found using a methodology equivalent to",
        "options": [
          {
            "id": "A",
            "text": "tính giá quyền chọn mua theo Black-Scholes-Merton",
            "sourceText": "computing the Black-Scholes-Merton option call price"
          },
          {
            "id": "B",
            "text": "tính giá trị hiện tại ròng (NPV)",
            "sourceText": "computing the net present value"
          },
          {
            "id": "C",
            "text": "tính tỷ suất hoàn vốn nội bộ (IRR)",
            "sourceText": "computing the internal rate of return"
          },
          {
            "id": "D",
            "text": "tính giá quyền chọn mua hàng hóa theo mô hình Black",
            "sourceText": "computing the Black commodity option call price"
          },
          {
            "id": "E",
            "text": "tính chi phí sử dụng vốn bình quân (WACC)",
            "sourceText": "computing the WACC"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: tính tỷ suất hoàn vốn nội bộ (IRR). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q30",
        "number": "30",
        "prompt": "Khi định giá quyền chọn mua lãi suất, một cách tiếp cận là dùng giá quyền chọn mua theo mô hình Black được điều chỉnh theo giá trị hiện tại",
        "sourcePrompt": "When valuing an interest rate call option, one approach is to use the Black call option price adjusted for the present value",
        "options": [
          {
            "id": "A",
            "text": "trên m ngày của quyền chọn cơ sở, sử dụng lãi suất kỳ hạn tính lãi liên tục.",
            "sourceText": "over the m days of the underlying option using the continuously compounded forward rate."
          },
          {
            "id": "B",
            "text": "trên m ngày của lãi suất cơ sở, sử dụng lãi suất giao ngay tính lãi liên tục.",
            "sourceText": "over the m days of the underlying rate using the continuously compounded spot rate."
          },
          {
            "id": "C",
            "text": "trên số ngày còn lại của quyền chọn, sử dụng lãi suất kỳ hạn tính lãi liên tục.",
            "sourceText": "over the days remaining of the option using the continuously compounded forward rate."
          },
          {
            "id": "D",
            "text": "trên số ngày còn lại của quyền chọn, sử dụng lãi suất giao ngay tính lãi liên tục.",
            "sourceText": "over the days remaining of the option using the continuously compounded spot rate."
          },
          {
            "id": "E",
            "text": "trên m ngày của lãi suất cơ sở, sử dụng lãi suất kỳ hạn tính lãi liên tục.",
            "sourceText": "over the m days of the underlying rate using the continuously compounded forward rate."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: trên m ngày của lãi suất cơ sở, sử dụng lãi suất kỳ hạn tính lãi liên tục.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 13,
    "title": "Phái sinh và chiến lược nâng cao",
    "sourceTitle": "CHAPTER 13: ADVANCED DERIVATIVES AND STRATEGIES",
    "summary": "Chương 13 tập trung vào phái sinh và chiến lược nâng cao. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Exotic options",
      "Credit derivatives",
      "Portfolio insurance",
      "Digital option",
      "Structured products"
    ],
    "theory": [
      {
        "heading": "Sản phẩm nâng cao",
        "body": "Chương này mở rộng sang exotic options, structured products và chiến lược bảo hiểm danh mục. Điểm chung là payoff không đơn giản như call/put cơ bản."
      },
      {
        "heading": "Portfolio insurance",
        "body": "Bảo hiểm danh mục nhằm giới hạn thua lỗ khi thị trường giảm, thường mô phỏng payoff của put trên danh mục."
      },
      {
        "heading": "Digital và path-dependent",
        "body": "Digital option trả khoản cố định nếu điều kiện xảy ra. Một số option phụ thuộc đường đi giá, không chỉ giá cuối kỳ."
      }
    ],
    "questions": [
      {
        "id": "c13-q1",
        "number": "1",
        "prompt": "Giá trị tối thiểu của danh mục đầu tư được bảo hiểm là bao nhiêu?",
        "sourcePrompt": "What is the minimum value of the insured portfolio?",
        "options": [
          {
            "id": "A",
            "text": "$16,672,344",
            "sourceText": "$16,672,344"
          },
          {
            "id": "B",
            "text": "12.500.000 USD",
            "sourceText": "$12,500,000"
          },
          {
            "id": "C",
            "text": "$12,091,709",
            "sourceText": "$12,091,709"
          },
          {
            "id": "D",
            "text": "$12,244,898",
            "sourceText": "$12,244,898"
          },
          {
            "id": "E",
            "text": "$13,375,000",
            "sourceText": "$13,375,000"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $12,244,898. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q2",
        "number": "2",
        "prompt": "Nên sử dụng bao nhiêu quyền chọn để bảo hiểm cho danh mục đầu tư này?",
        "sourcePrompt": "How many puts should be used to insure this portfolio?",
        "options": [
          {
            "id": "A",
            "text": "122.584",
            "sourceText": "122,584"
          },
          {
            "id": "B",
            "text": "31.397",
            "sourceText": "31,397"
          },
          {
            "id": "C",
            "text": "62.814",
            "sourceText": "62,814"
          },
          {
            "id": "D",
            "text": "961.538",
            "sourceText": "961,538"
          },
          {
            "id": "E",
            "text": "32.468",
            "sourceText": "32,468"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 31.397. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q3",
        "number": "3",
        "prompt": "Nếu S&P 500 kết thúc ở mức 401, hãy xác định khả năng bắt ngược.",
        "sourcePrompt": "If the S&P 500 ends up at 401, determine the upside capture.",
        "options": [
          {
            "id": "A",
            "text": "96,7 phần trăm",
            "sourceText": "96.7 percent"
          },
          {
            "id": "B",
            "text": "96 phần trăm",
            "sourceText": "96 percent"
          },
          {
            "id": "C",
            "text": "99,3 phần trăm",
            "sourceText": "99.3 percent"
          },
          {
            "id": "D",
            "text": "94 phần trăm",
            "sourceText": "94 percent"
          },
          {
            "id": "E",
            "text": "100 phần trăm",
            "sourceText": "100 percent"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 96,7 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q4",
        "number": "4",
        "prompt": "Nếu danh mục đầu tư được bảo hiểm bao gồm toàn bộ quyền chọn mua và tín phiếu kho bạc thì bao nhiêu sẽ được sử dụng?",
        "sourcePrompt": "If the insured portfolio consisted entirely of calls and T-bills, how many would be used?",
        "options": [
          {
            "id": "A",
            "text": "19.143 call và 124.176 hóa đơn",
            "sourceText": "19,143 calls and 124,176 T-bills"
          },
          {
            "id": "B",
            "text": "31.397 call và 122.449 hóa đơn",
            "sourceText": "31,397 calls and 122,449 T-bills"
          },
          {
            "id": "C",
            "text": "933.238 call và 2.547 hóa đơn",
            "sourceText": "933,238 calls and 2,547 T-bills"
          },
          {
            "id": "D",
            "text": "31.407 call và 119.997 hóa đơn",
            "sourceText": "31,407 calls and 119,997 T-bills"
          },
          {
            "id": "E",
            "text": "32.468 call và 32.468 hóa đơn",
            "sourceText": "32,468 calls and 32,468 T-bills"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 31.397 call và 122.449 hóa đơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q5",
        "number": "5",
        "prompt": "48 phần trăm. Mỗi hợp đồng tương lai có hệ số nhân là 250 và giá là 777,30.",
        "sourcePrompt": "48 percent. Each futures has a multiplier of 250 and a price of 777.30.",
        "options": [
          {
            "id": "A",
            "text": "60",
            "sourceText": "60"
          },
          {
            "id": "B",
            "text": "64",
            "sourceText": "64"
          },
          {
            "id": "C",
            "text": "30",
            "sourceText": "30"
          },
          {
            "id": "D",
            "text": "32",
            "sourceText": "32"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 32. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q6",
        "number": "6",
        "prompt": "Nếu danh mục đầu tư được bảo hiểm được phòng ngừa rủi ro linh hoạt bằng tín phiếu kho bạc thì sẽ sử dụng bao nhiêu tín phiếu kho bạc?",
        "sourcePrompt": "If the insured portfolio were dynamically hedged with T-bills, how many T-bills would be used?",
        "options": [
          {
            "id": "A",
            "text": "16.332",
            "sourceText": "16,332"
          },
          {
            "id": "B",
            "text": "63.002",
            "sourceText": "63,002"
          },
          {
            "id": "C",
            "text": "126.723",
            "sourceText": "126,723"
          },
          {
            "id": "D",
            "text": "61.672",
            "sourceText": "61,672"
          },
          {
            "id": "E",
            "text": "32.468",
            "sourceText": "32,468"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 63.002. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q7",
        "number": "7",
        "prompt": "Giả sử một công ty cung cấp chứng khoán liên kết với vốn chủ sở hữu. Mệnh giá là 1 triệu USD và khoản hoàn trả của nó dựa trên bất kỳ sự tăng giá nào trong chỉ số vốn chủ sở hữu hiện tại ở mức 855,50. Nó đã xác định rằng trong số 1 triệu đô la được huy động, nó có thể cấu trúc thành phần quyền chọn sao cho giá trị của nó là 135.000 đô la. Hiện tại, quyền chọn mua (call option) phù hợp với túi tiền có giá trị $125. Nó có thể mang lại bao nhiêu phần trăm lợi nhuận trong chỉ số?",
        "sourcePrompt": "Suppose a firm offers an equity-linked security. The face value is $1 million and its payoff is based on any appreciation in an equity index currently at 855.50. It has determined that of the $1 million raised, it can structure the option component so that its value is $135,000. Currently an at-the-money call option is worth $125. What percentage of the gain in the index can it offer?",
        "options": [
          {
            "id": "A",
            "text": "92 phần trăm",
            "sourceText": "92 percent"
          },
          {
            "id": "B",
            "text": "100 phần trăm",
            "sourceText": "100 percent"
          },
          {
            "id": "C",
            "text": "50 phần trăm",
            "sourceText": "50 percent"
          },
          {
            "id": "D",
            "text": "8,23 phần trăm",
            "sourceText": "8.23 percent"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 92 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q8",
        "number": "8",
        "prompt": "Các khoản hoàn trả phái sinh thời tiết có thể dựa trên từng biến số sau ngoại trừ",
        "sourcePrompt": "Weather derivative payoffs can be based on each of the following variables except",
        "options": [
          {
            "id": "A",
            "text": "nhiệt độ trên một mức nhất định",
            "sourceText": "temperature above a given level"
          },
          {
            "id": "B",
            "text": "inch tuyết rơi",
            "sourceText": "inches of snowfall"
          },
          {
            "id": "C",
            "text": "tổng giá trị yêu cầu bồi thường bảo hiểm",
            "sourceText": "total value of insurance claims"
          },
          {
            "id": "D",
            "text": "nhiệt độ dưới một mức nhất định",
            "sourceText": "temperature below a given level"
          },
          {
            "id": "E",
            "text": "ánh nắng mặt trời",
            "sourceText": "sunshine"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: ánh nắng mặt trời. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q9",
        "number": "9",
        "prompt": "Câu nào sau đây về dải chứng khoán bảo đảm bằng thế chấp là đúng?",
        "sourcePrompt": "Which of the following statements about mortgage-backed security strips is true?",
        "options": [
          {
            "id": "A",
            "text": "cả hai dải chỉ lãi và chỉ gốc đều có rủi ro thanh toán trước",
            "sourceText": "both interest-only and principal-only strips are subject to pre-payment risk"
          },
          {
            "id": "B",
            "text": "chỉ các dải chỉ có tiền gốc mới có rủi ro thanh toán trước",
            "sourceText": "only principal-only strips are subject to prepayment risk"
          },
          {
            "id": "C",
            "text": "chỉ có dải lãi suất mới có thể chịu rủi ro trả trước",
            "sourceText": "only interest-only strips are subject to prepayment risk"
          },
          {
            "id": "D",
            "text": "rủi ro trả trước của các dải chỉ lãi và gốc chỉ được bù đắp một cách chính xác",
            "sourceText": "the prepayment risk of interest-only and principal-only strips is precisely offsetting"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: cả hai dải chỉ lãi và chỉ gốc đều có rủi ro thanh toán trước. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q10",
        "number": "10",
        "prompt": "Quyền chọn chọn tương tự như các loại chiến lược quyền chọn khác",
        "sourcePrompt": "A chooser option is similar to what other type of option strategy",
        "options": [
          {
            "id": "A",
            "text": "sự ngang bằng giữa call",
            "sourceText": "put-call parity"
          },
          {
            "id": "B",
            "text": "một call được bảo hiểm",
            "sourceText": "a covered call"
          },
          {
            "id": "C",
            "text": "một nơi bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "D",
            "text": "sự kết hợp giữa bò và gấu",
            "sourceText": "a combination bull and bear spread"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q11",
        "number": "11",
        "prompt": "Số mức giá trung bình cuối cùng có thể có trong một quyền chọn Châu Á đối với mô hình nhị thức bốn kỳ là",
        "sourcePrompt": "The number of possible final average prices in an Asian option for a four period binomial model is",
        "options": [
          {
            "id": "A",
            "text": "8",
            "sourceText": "8"
          },
          {
            "id": "B",
            "text": "4",
            "sourceText": "4"
          },
          {
            "id": "C",
            "text": "16",
            "sourceText": "16"
          },
          {
            "id": "D",
            "text": "32",
            "sourceText": "32"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 16. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q12",
        "number": "12",
        "prompt": "Xem lại quyền chọn mua (call option) cung cấp quyền",
        "sourcePrompt": "A lookback call option provides the right",
        "options": [
          {
            "id": "A",
            "text": "để thay đổi cổ phiếu mà quyền chọn được viết trên đó",
            "sourceText": "to change the stock on which the option is written"
          },
          {
            "id": "B",
            "text": "mua cổ phiếu ở mức giá thấp nhất trong suốt thời hạn của quyền chọn",
            "sourceText": "to buy the stock at its lowest price over the option's life"
          },
          {
            "id": "C",
            "text": "để bảo đảm một cổ phiếu khỏi bị mất mát",
            "sourceText": "to insure a stock against loss"
          },
          {
            "id": "D",
            "text": "thay đổi suy nghĩ của bạn về giá thực hiện (giá thực hiện)",
            "sourceText": "to change your mind about the exercise price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: mua cổ phiếu ở mức giá thấp nhất trong suốt thời hạn của quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q13",
        "number": "13",
        "prompt": "Nếu giá cổ phiếu hiện tại là 36, giá thực hiện (giá thực hiện) là 35 và cổ phiếu kết thúc ở mức 44, giá trị của quyền chọn tài sản hoặc không có gì khi hết hạn là",
        "sourcePrompt": "If the stock price is currently 36, the exercise price is 35 and the stock ends up at 44, the value of an asset-or-nothing option at expiration is",
        "options": [
          {
            "id": "A",
            "text": "35",
            "sourceText": "35"
          },
          {
            "id": "B",
            "text": "8",
            "sourceText": "8"
          },
          {
            "id": "C",
            "text": "9",
            "sourceText": "9"
          },
          {
            "id": "D",
            "text": "44",
            "sourceText": "44"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 44. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q14",
        "number": "14",
        "prompt": "Vấn đề cơ bản trong việc định giá các sản phẩm phái sinh điện là",
        "sourcePrompt": "The primary problem in pricing electricity derivatives is that",
        "options": [
          {
            "id": "A",
            "text": "sự biến động không thể đo lường được",
            "sourceText": "the volatility cannot be measured"
          },
          {
            "id": "B",
            "text": "cơ sở tài sản (tài sản cơ bản) không thể được lưu trữ",
            "sourceText": "the underlying asset cannot be stored"
          },
          {
            "id": "C",
            "text": "điện là sản phẩm đồng nhất",
            "sourceText": "electricity is a homogeneous product"
          },
          {
            "id": "D",
            "text": "nhu cầu về điện khó dự đoán",
            "sourceText": "the demand for electricity is unpredictable"
          },
          {
            "id": "E",
            "text": "thị trường điện không được kiểm soát",
            "sourceText": "the electricity market is unregulated"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: cơ sở tài sản (tài sản cơ bản) không thể được lưu trữ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q15",
        "number": "15",
        "prompt": "Một hợp đồng vốn cổ phần có thời hạn (hợp đồng kỳ hạn) là",
        "sourcePrompt": "An equity forward contract is",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng kỳ hạn (hợp đồng kỳ hạn) trên LIBOR được bảo đảm bằng cổ phiếu làm tài sản thế chấp",
            "sourceText": "a forward contract on LIBOR secured by a stock as collateral"
          },
          {
            "id": "B",
            "text": "hợp đồng tương lai (hợp đồng tương lai) trên một chỉ số chứng khoán không được đánh giá theo thị trường",
            "sourceText": "a futures contract on a stock index that is not marked-to-market"
          },
          {
            "id": "C",
            "text": "quyền chọn mua (call option) đối với một cổ phiếu có rủi ro giảm giá lớn hơn quyền chọn mua thông thường",
            "sourceText": "a call option on a stock with greater downside risk than an ordinary call"
          },
          {
            "id": "D",
            "text": "một hợp đồng kỳ hạn (hợp đồng kỳ hạn) có mức hoàn trả được xác định bởi một cổ phiếu hoặc chỉ số",
            "sourceText": "a forward contract whose payoff is determined by a stock or index"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: một hợp đồng kỳ hạn (hợp đồng kỳ hạn) có mức hoàn trả được xác định bởi một cổ phiếu hoặc chỉ số. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q16",
        "number": "16",
        "prompt": "Một chứng khoán có khả năng thanh toán lợi nhuận từ sự kết hợp các khoản thế chấp được gọi là",
        "sourcePrompt": "A security that pays off the return from a combination of mortgages is called a",
        "options": [
          {
            "id": "A",
            "text": "yêu cầu bồi thường vốn chủ sở hữu nhà",
            "sourceText": "homeowners’ equity claim"
          },
          {
            "id": "B",
            "text": "danh mục đầu tư thế chấp",
            "sourceText": "mortgage portfolio"
          },
          {
            "id": "C",
            "text": "quyền chọn thế chấp",
            "sourceText": "mortgage option"
          },
          {
            "id": "D",
            "text": "chứng khoán đảm bảo bằng thế chấp",
            "sourceText": "mortgage-backed security"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: chứng khoán đảm bảo bằng thế chấp. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q17",
        "number": "17",
        "prompt": "Quyền chọn châu Á còn được gọi là",
        "sourcePrompt": "Asian options are also called",
        "options": [
          {
            "id": "A",
            "text": "quyền chọn giá trung bình",
            "sourceText": "average price options"
          },
          {
            "id": "B",
            "text": "Quyền chọn Thái Bình Dương",
            "sourceText": "Pacific options"
          },
          {
            "id": "C",
            "text": "quyền chọn trả góp",
            "sourceText": "installment options"
          },
          {
            "id": "D",
            "text": "lựa chọn không hối tiếc",
            "sourceText": "no-regrets options"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: quyền chọn giá trung bình. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q18",
        "number": "18",
        "prompt": "Câu nào sau đây đúng về quyền chọn tiền mặt hoặc không có gì",
        "sourcePrompt": "Which of the following statements is correct about cash-or-nothing options",
        "options": [
          {
            "id": "A",
            "text": "họ không gặp rủi ro tín dụng",
            "sourceText": "they are subject to no credit risk"
          },
          {
            "id": "B",
            "text": "chúng phải được định giá theo mô hình nhị thức",
            "sourceText": "they must be priced by the binomial model"
          },
          {
            "id": "C",
            "text": "chúng có lợi nhuận tăng thấp hơn và tổn thất giảm giá thấp hơn so với các quyền chọn thông thường",
            "sourceText": "they have lower upside gains and lower downside losses than ordinary options"
          },
          {
            "id": "D",
            "text": "chúng tương đương với các vị thế bán trong quyền chọn mua tài sản hoặc không có gì",
            "sourceText": "they are equivalent to short positions in asset-or-nothing options"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q19",
        "number": "19",
        "prompt": "Hợp đồng hoán đổi kỳ hạn cố định có đặc điểm nào sau đây",
        "sourcePrompt": "A constant maturity swap has which of the following characteristics",
        "options": [
          {
            "id": "A",
            "text": "thời gian đáo hạn hợp đồng hoán đổi được giữ không đổi ở một số năm cố định",
            "sourceText": "the swap maturity is held constant at a fixed number of years"
          },
          {
            "id": "B",
            "text": "khoản thanh toán thả nổi thường dựa trên lãi suất trên trái phiếu kho bạc",
            "sourceText": "the floating payment is usually based on the rate on a Treasury note"
          },
          {
            "id": "C",
            "text": "hoán đổi yêu cầu tất cả các khoản thanh toán được thực hiện khi đáo hạn",
            "sourceText": "the swap calls for all payments to be made at its maturity"
          },
          {
            "id": "D",
            "text": "khoản thanh toán thả nổi và thời gian đáo hạn đều không đổi",
            "sourceText": "the floating payment and the maturity are both constant"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: khoản thanh toán thả nổi thường dựa trên lãi suất trên trái phiếu kho bạc. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q20",
        "number": "20",
        "prompt": "Range floater là chứng khoán có đặc điểm nào sau đây",
        "sourcePrompt": "A range floater is a security with which of the following characteristics",
        "options": [
          {
            "id": "A",
            "text": "các khoản thanh toán nằm trong khoảng từ mức tối đa nhất định đến mức tối thiểu nhất định",
            "sourceText": "the payments range from a given maximum to a given minimum"
          },
          {
            "id": "B",
            "text": "thời gian đáo hạn được giới hạn trong một phạm vi cố định",
            "sourceText": "the maturity is limited to a fixed range"
          },
          {
            "id": "C",
            "text": "các khoản thanh toán của nó dựa trên việc tỷ giá có nằm trong phạm vi hay không",
            "sourceText": "its payments are based on whether the rate stays within a range"
          },
          {
            "id": "D",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: các khoản thanh toán của nó dựa trên việc tỷ giá có nằm trong phạm vi hay không. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q21",
        "number": "21",
        "prompt": "Một chứng khoán được chia thành các chứng khoán gọi là các đợt được gọi là",
        "sourcePrompt": "A security that is sub-divided into securities called tranches is called a",
        "options": [
          {
            "id": "A",
            "text": "dải chỉ có hiệu trưởng",
            "sourceText": "principal-only strip"
          },
          {
            "id": "B",
            "text": "quyền chọn xem lại châu Á",
            "sourceText": "asian lookback option"
          },
          {
            "id": "C",
            "text": "dải thế chấp phạm vi",
            "sourceText": "range mortgage strip"
          },
          {
            "id": "D",
            "text": "nghĩa vụ thế chấp tài sản thế chấp",
            "sourceText": "collateralized mortgage obligation"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nghĩa vụ thế chấp tài sản thế chấp. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q22",
        "number": "22",
        "prompt": "Quyền chọn nào sau đây là quyền chọn độc lập với đường dẫn",
        "sourcePrompt": "Which of the following is a path-independent option",
        "options": [
          {
            "id": "A",
            "text": "một cuộc đình công cố định Asian quyền chọn mua (call option)",
            "sourceText": "a fixed strike Asian call option"
          },
          {
            "id": "B",
            "text": "quyền chọn mua (call option) tiêu chuẩn Châu Âu",
            "sourceText": "a standard European call option"
          },
          {
            "id": "C",
            "text": "quyền chọn mua (call option) lên và ra",
            "sourceText": "an up-and-out call option"
          },
          {
            "id": "D",
            "text": "một quyền chọn bán (put option) của người Mỹ f. không có đáp án nào ở trên",
            "sourceText": "an American put option f. none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quyền chọn mua (call option) tiêu chuẩn Châu Âu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q23",
        "number": "23",
        "prompt": "Trong đạo hàm thời tiết, số ngày nhân với nhiệt độ trung bình trên 65 độ F được gọi là",
        "sourcePrompt": "In a weather derivative, the number of days times the average temperature above 65 degrees Fahrenheit is called",
        "options": [
          {
            "id": "A",
            "text": "đếm ngày nhiệt độ",
            "sourceText": "temperature day count"
          },
          {
            "id": "B",
            "text": "thời gian trong ngày",
            "sourceText": "day-temps"
          },
          {
            "id": "C",
            "text": "ngày độ làm mát",
            "sourceText": "cooling degree days"
          },
          {
            "id": "D",
            "text": "ngày tạm thời",
            "sourceText": "temp-days"
          },
          {
            "id": "E",
            "text": "ngày độ nóng",
            "sourceText": "heating degree days"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: ngày độ làm mát. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q24",
        "number": "24",
        "prompt": "Quyền chọn thanh toán ngẫu nhiên được sao chép bằng sự kết hợp nào sau đây?",
        "sourcePrompt": "A contingent-pay option is replicated by which of the following combinations?",
        "options": [
          {
            "id": "A",
            "text": "mua một call thông thường và mua một call thông thường",
            "sourceText": "long an ordinary call and long an ordinary put"
          },
          {
            "id": "B",
            "text": "gọi dài một call thông thường và rút ngắn một call bằng tiền mặt hoặc không có gì",
            "sourceText": "long an ordinary call and short a cash-or-nothing call"
          },
          {
            "id": "C",
            "text": "gọi một call thông thường và rút ngắn một call có tài sản hoặc không có gì",
            "sourceText": "long an ordinary call and short an asset-or-nothing call"
          },
          {
            "id": "D",
            "text": "mua một quyền chọn mua thông thường và mua một hợp đồng kì hạn cổ phiếu",
            "sourceText": "long an ordinary call and long an equity forward"
          },
          {
            "id": "E",
            "text": "mua một quyền chọn mua thông thường và mua một trái phiếu không rủi ro",
            "sourceText": "long an ordinary call and long a risk-free bond"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: gọi dài một call thông thường và rút ngắn một call bằng tiền mặt hoặc không có gì. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q25",
        "number": "25",
        "prompt": "Loại ghi chú nào sau đây không phải là loại ghi chú có cấu trúc?",
        "sourcePrompt": "Which of the following is not a type of structured note?",
        "options": [
          {
            "id": "A",
            "text": "phao nổi",
            "sourceText": "range floater"
          },
          {
            "id": "B",
            "text": "phao nghịch đảo",
            "sourceText": "inverse floater"
          },
          {
            "id": "C",
            "text": "khác biệt nổi",
            "sourceText": "diff floater"
          },
          {
            "id": "D",
            "text": "phao ngược",
            "sourceText": "reverse floater"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: khác biệt nổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q26",
        "number": "26",
        "prompt": "Khi theo đuổi bảo hiểm danh mục đầu tư cho một vị thế cổ phiếu, giá trị tối thiểu của danh mục đầu tư bằng",
        "sourcePrompt": "When pursuing portfolio insurance of a stock position, the minimum value of the portfolio is equal to",
        "options": [
          {
            "id": "A",
            "text": "không",
            "sourceText": "zero"
          },
          {
            "id": "B",
            "text": "giá thực hiện (giá thực hiện) nhân với số lượng cổ phiếu và quyền chọn bán nắm giữ",
            "sourceText": "strike price times the number of shares of stocks and puts held"
          },
          {
            "id": "C",
            "text": "giá thực hiện (giá thực hiện) chia cho số lượng cổ phiếu và quyền chọn bán nắm giữ",
            "sourceText": "strike price divided by the number of shares of stocks and puts held"
          },
          {
            "id": "D",
            "text": "giá cổ phiếu nhân với số lượng cổ phiếu nắm giữ",
            "sourceText": "stock price times the number of shares of stocks held"
          },
          {
            "id": "E",
            "text": "giá thực hiện (giá thực hiện) nhân với giá trị ban đầu của danh mục đầu tư chia cho giá cổ phiếu trừ đi giá bán",
            "sourceText": "strike price times the initial value of the portfolio divided by the stock price minus the put price"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá thực hiện (giá thực hiện) nhân với số lượng cổ phiếu và quyền chọn bán nắm giữ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q27",
        "number": "27",
        "prompt": "Chụp ngược được định nghĩa là",
        "sourcePrompt": "Upside capture is defined as the",
        "options": [
          {
            "id": "A",
            "text": "giá trị đồng đô la của giá trị danh mục đầu tư không được bảo hiểm trừ đi giá trị danh mục đầu tư được bảo hiểm",
            "sourceText": "dollar value of the uninsured portfolio value minus the insured portfolio value"
          },
          {
            "id": "B",
            "text": "phần trăm giá trị danh mục đầu tư được bảo hiểm được thể hiện bằng giá trị danh mục đầu tư không được bảo hiểm",
            "sourceText": "percentage of the insured portfolio value that is represented by the uninsured portfolio value"
          },
          {
            "id": "C",
            "text": "giá trị đồng đô la của giá trị danh mục đầu tư được bảo hiểm trừ đi giá trị danh mục đầu tư không được bảo hiểm",
            "sourceText": "dollar value of the insured portfolio value minus the uninsured portfolio value"
          },
          {
            "id": "D",
            "text": "phần trăm giá trị danh mục đầu tư không được bảo hiểm được thể hiện bằng giá trị danh mục đầu tư được bảo hiểm",
            "sourceText": "percentage of the uninsured portfolio value that is represented by the insured portfolio value"
          },
          {
            "id": "E",
            "text": "put quyền chọn (cao cấp) theo tỷ lệ phần trăm của giá trị danh mục đầu tư ban đầu",
            "sourceText": "put premium as a percentage of the original portfolio value"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: phần trăm giá trị danh mục đầu tư không được bảo hiểm được thể hiện bằng giá trị danh mục đầu tư được bảo hiểm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q28",
        "number": "28",
        "prompt": "Xác định phát biểu sai liên quan đến việc vi phạm hợp đồng kỳ hạn.",
        "sourcePrompt": "Identify the false statement related to break forward contracts.",
        "options": [
          {
            "id": "A",
            "text": "Nó là sự kết hợp giữa các vị thế giao ngay và phái sinh nhằm tái tạo quyền chọn mua (call option) thông thường.",
            "sourceText": "It is a combination of spot and derivative positions that replicates an ordinary call option."
          },
          {
            "id": "B",
            "text": "Các vị thế ban đầu được cấu trúc sao cho vị thế tổng thể không tốn phí trả trước.",
            "sourceText": "The initial positions are structured so that the overall position costs nothing up front."
          },
          {
            "id": "C",
            "text": "Phạt nhà đầu tư nếu quyền chọn kết thúc không còn tiền.",
            "sourceText": "Penalizes the investor if the option ends up out-of-the-money."
          },
          {
            "id": "D",
            "text": "Sự phá vỡ biểu thị khả năng người mua vô hiệu hợp đồng.",
            "sourceText": "Break denotes the ability of the purchaser to void the contract."
          },
          {
            "id": "E",
            "text": "Tất cả các câu trả lời trên đều đúng liên quan đến việc phá vỡ hợp đồng kỳ hạn (hợp đồng kỳ hạn).",
            "sourceText": "All of the above statements are true related to break forward contracts."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Sự phá vỡ biểu thị khả năng người mua vô hiệu hợp đồng.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q29",
        "number": "29",
        "prompt": "Quyền chọn kỹ thuật số có thể được sử dụng để tạo một vị thế tổng hợp trong một công cụ cơ bản bằng cách",
        "sourcePrompt": "Digital options can be used to synthetically create a position in an underlying instrument by",
        "options": [
          {
            "id": "A",
            "text": "mua quyền chọn bán kỹ thuật số bằng tiền mặt hoặc không có gì và bán quyền chọn bán kỹ thuật số có tài sản hoặc không có gì",
            "sourceText": "purchasing a cash-or-nothing digital put and selling an asset-or-nothing digital call"
          },
          {
            "id": "B",
            "text": "mua cả quyền chọn mua kỹ thuật số bằng tiền mặt hoặc không có gì và quyền chọn bán kỹ thuật số bằng tiền mặt hoặc không có gì",
            "sourceText": "purchasing both a cash-or-nothing digital call and a cash-or-nothing digital put"
          },
          {
            "id": "C",
            "text": "mua cả quyền chọn mua kỹ thuật số có tài sản hoặc không có gì và quyền chọn bán kỹ thuật số có tài sản hoặc không có gì",
            "sourceText": "purchasing both an asset-or-nothing digital call and an asset-or-nothing digital put"
          },
          {
            "id": "D",
            "text": "mua một call kỹ thuật số bằng tiền mặt hoặc không có gì và bán một quyền chọn bán kỹ thuật số bằng tiền mặt hoặc không có gì",
            "sourceText": "purchasing a cash-or-nothing digital call and selling a cash-or-nothing digital put"
          },
          {
            "id": "E",
            "text": "mua một call kỹ thuật số có tài sản hoặc không có gì và bán một quyền chọn bán kỹ thuật số có tài sản hoặc không có gì",
            "sourceText": "purchasing an asset-or-nothing digital call and selling an asset-or-nothing digital put"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: mua cả quyền chọn mua kỹ thuật số có tài sản hoặc không có gì và quyền chọn bán kỹ thuật số có tài sản hoặc không có gì. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c13-q30",
        "number": "30",
        "prompt": "Quyền chọn kỹ thuật số có thể được sử dụng để tạo một vị thế tổng hợp trong trái phiếu không lãi suất bằng cách",
        "sourcePrompt": "Digital options can be used to synthetically create a position in a zero coupon bond by",
        "options": [
          {
            "id": "A",
            "text": "mua quyền chọn bán kỹ thuật số bằng tiền mặt hoặc không có gì và bán quyền chọn bán kỹ thuật số có tài sản hoặc không có gì",
            "sourceText": "purchasing a cash-or-nothing digital put and selling an asset-or-nothing digital call"
          },
          {
            "id": "B",
            "text": "mua cả quyền chọn mua kỹ thuật số bằng tiền mặt hoặc không có gì và quyền chọn bán kỹ thuật số bằng tiền mặt hoặc không có gì",
            "sourceText": "purchasing both a cash-or-nothing digital call and a cash-or-nothing digital put"
          },
          {
            "id": "C",
            "text": "mua cả quyền chọn mua kỹ thuật số có tài sản hoặc không có gì và quyền chọn bán kỹ thuật số có tài sản hoặc không có gì",
            "sourceText": "purchasing both an asset-or-nothing digital call and an asset-or-nothing digital put"
          },
          {
            "id": "D",
            "text": "mua một call kỹ thuật số bằng tiền mặt hoặc không có gì và bán một quyền chọn bán kỹ thuật số bằng tiền mặt hoặc không có gì",
            "sourceText": "purchasing a cash-or-nothing digital call and selling a cash-or-nothing digital put"
          },
          {
            "id": "E",
            "text": "mua một call kỹ thuật số có tài sản hoặc không có gì và bán một quyền chọn bán kỹ thuật số có tài sản hoặc không có gì",
            "sourceText": "purchasing an asset-or-nothing digital call and selling an asset-or-nothing digital put"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: mua cả quyền chọn mua kỹ thuật số bằng tiền mặt hoặc không có gì và quyền chọn bán kỹ thuật số bằng tiền mặt hoặc không có gì. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 14,
    "title": "Kỹ thuật quản trị rủi ro tài chính",
    "sourceTitle": "CHAPTER 14: FINANCIAL RISK MANAGEMENT TECHNIQUES AND",
    "summary": "Chương 14 tập trung vào kỹ thuật quản trị rủi ro tài chính. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "VaR",
      "Stress testing",
      "Scenario analysis",
      "Duration",
      "Convexity",
      "Risk measurement"
    ],
    "theory": [
      {
        "heading": "Đo lường rủi ro",
        "body": "Quản trị rủi ro tài chính dùng VaR, stress testing và scenario analysis để hiểu mức lỗ có thể xảy ra trong điều kiện bình thường hoặc cực đoan."
      },
      {
        "heading": "VaR",
        "body": "VaR trả lời câu hỏi: với mức tin cậy nhất định, khoản lỗ tối đa trong một khoảng thời gian là bao nhiêu. Ví dụ VaR 5 triệu ở 95% nghĩa là có 5% khả năng lỗ vượt 5 triệu."
      },
      {
        "heading": "Duration và convexity",
        "body": "Duration đo độ nhạy giá trái phiếu với lãi suất. Convexity điều chỉnh quan hệ cong giữa giá trái phiếu và lãi suất."
      }
    ],
    "questions": [
      {
        "id": "c14-q1",
        "number": "1",
        "prompt": "Quản trị rủi ro bao gồm tất cả những điều sau đây NGOẠI TRỪ:",
        "sourcePrompt": "Risk management encompasses all of the following except",
        "options": [
          {
            "id": "A",
            "text": "Xác định mức độ rủi ro thực tế của công ty",
            "sourceText": "determining a firm’s actual level of risk"
          },
          {
            "id": "B",
            "text": "Xác định mức độ rủi ro mong muốn của công ty",
            "sourceText": "determining a firm’s desired level of risk"
          },
          {
            "id": "C",
            "text": "Thiết lập các chính sách và thủ tục",
            "sourceText": "setting policies and procedures"
          },
          {
            "id": "D",
            "text": "Theo dõi vị thế sau sự kiện",
            "sourceText": "monitoring your position after-the-fact"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không có câu nào đúng.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q2",
        "number": "2",
        "prompt": "Rủi ro thị trường là điều nào sau đây:",
        "sourcePrompt": "Market risk is which of the following",
        "options": [
          {
            "id": "A",
            "text": "Rủi ro liên quan đến việc ghi chép sai sót các giao dịch thị trường",
            "sourceText": "the risk associated with failing to properly record market transactions"
          },
          {
            "id": "B",
            "text": "Rủi ro mà người giao dịch chứng khoán sẽ bị mất thị phần vào tay đối thủ cạnh tranh",
            "sourceText": "the risk that a dealer will lose market share to a competing dealer"
          },
          {
            "id": "C",
            "text": "Rủi ro liên quan đến những biến động trong các yếu tố như lãi suất và tỷ giá hối đoái",
            "sourceText": "the risk associated with movements in such factors as interest rates and exchange rates"
          },
          {
            "id": "D",
            "text": "Rủi ro của việc chính phủ tuyên bố giao dịch bất hợp pháp",
            "sourceText": "the risk of the government declaring a transaction illegal"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Rủi ro liên quan đến những biến động trong các yếu tố như lãi suất và tỷ giá hối đoái. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q3",
        "number": "3",
        "prompt": "Lý do thực hiện phòng hộ gamma là gì?",
        "sourcePrompt": "What is the reason for undertaking a gamma hedge?",
        "options": [
          {
            "id": "A",
            "text": "quy định của chính phủ",
            "sourceText": "government regulation"
          },
          {
            "id": "B",
            "text": "khả năng vỡ nợ của đối tác",
            "sourceText": "the possibility of counterparty default"
          },
          {
            "id": "C",
            "text": "những thay đổi về độ biến động",
            "sourceText": "changes in volatility"
          },
          {
            "id": "D",
            "text": "những chuyển động lớn ở phần cơ bản",
            "sourceText": "large movements in the underlying"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: những chuyển động lớn ở phần cơ bản. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q4",
        "number": "4",
        "prompt": "Trong những câu sau đây đâu là cách diễn tả VAR của 5 triệu đô trong 1 năm với xác suất 5%?",
        "sourcePrompt": "Which of the following is the interpretation of a VAR of $5 million for one year at 5 percent probability.",
        "options": [
          {
            "id": "A",
            "text": "Với xác suất 5%, công ty dự kiến lỗ ít nhất 5 triệu đô trong 1 năm",
            "sourceText": "the probability is 5 percent that the firm will lose at least $5 million in one year"
          },
          {
            "id": "B",
            "text": "Với xác suất ít nhất là 5%, công ty dự kiến lỗ 5 triệu đô trong 1 năm",
            "sourceText": "the probability is at least 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "C",
            "text": "Với xác suất 5%, công ty dự kiến lỗ 5 triệu đô trong 1 năm",
            "sourceText": "the probability is 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "D",
            "text": "Với xác suất ít hơn 5%, công ty dự kiến lỗ 5 triệu đô trong 1 năm",
            "sourceText": "the probability is less than 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Với xác suất 5%, công ty dự kiến lỗ ít nhất 5 triệu đô trong 1 năm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q5",
        "number": "5",
        "prompt": "Câu nào sau đây không phải là phương pháp xác định VAR?",
        "sourcePrompt": "Which of the following are not methods of determining the VAR?",
        "options": [
          {
            "id": "A",
            "text": "Phương pháp mô phỏng",
            "sourceText": "simulation method"
          },
          {
            "id": "B",
            "text": "Phương pháp lịch sử",
            "sourceText": "historical method"
          },
          {
            "id": "C",
            "text": "Phương pháp ước tính",
            "sourceText": "estimation method"
          },
          {
            "id": "D",
            "text": "Phương pháp phân tích",
            "sourceText": "analytical method"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Phương pháp ước tính. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q6",
        "number": "6",
        "prompt": "Biện pháp nào sau đây KHÔNG dùng để giảm rủi ro tín dụng?",
        "sourcePrompt": "Which of the following methods is not used to reduce credit risk?",
        "options": [
          {
            "id": "A",
            "text": "delta-gamma-vega hedging",
            "sourceText": "delta-gamma-vega hedging"
          },
          {
            "id": "B",
            "text": "Tài sản thế chấp",
            "sourceText": "collateral"
          },
          {
            "id": "C",
            "text": "Điều chỉnh theo thị trường",
            "sourceText": "marking to market"
          },
          {
            "id": "D",
            "text": "Giới hạn lượng công việc bạn làm với một bên",
            "sourceText": "limiting the amount of business you do with a party"
          },
          {
            "id": "E",
            "text": "Không câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: delta-gamma-vega hedging. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q7",
        "number": "7",
        "prompt": "Rủi ro nào sau đây mà người giao dịch chứng khoán phái sinh phải đối mặt?",
        "sourcePrompt": "Which of the following are types of risks faced by a derivatives dealer?",
        "options": [
          {
            "id": "A",
            "text": "rủi ro thuế",
            "sourceText": "tax risk"
          },
          {
            "id": "B",
            "text": "Rủi ro kinh doanh (hoạt động)",
            "sourceText": "operational risk"
          },
          {
            "id": "C",
            "text": "Rủi ro kế toán",
            "sourceText": "accounting risk"
          },
          {
            "id": "D",
            "text": "Rủi ro pháp lý",
            "sourceText": "legal risk"
          },
          {
            "id": "E",
            "text": "Không câu nào đúng part.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không câu nào đúng part.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q8",
        "number": "8",
        "prompt": "Bù trừ, ròng (Netting) cho phép các doanh nghiệp…",
        "sourcePrompt": "Netting permits a firm to?",
        "options": [
          {
            "id": "A",
            "text": "Khấu trừ thất thoát từ giá tăng khỏi thất thoát từ giá giảm",
            "sourceText": "subtract losses from price increases from losses from price decreases"
          },
          {
            "id": "B",
            "text": "Chỉ một hợp đồng thanh toán ròng với một bên đã được xác định",
            "sourceText": "net its transactions with a given counterparty against each other"
          },
          {
            "id": "C",
            "text": "ròng tất cả các khoản lãi của nó so với tất cả các khoản lỗ của nó",
            "sourceText": "net all of its gains against all of its losses"
          },
          {
            "id": "D",
            "text": "Tất cả đều đúng",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "Không có câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Chỉ một hợp đồng thanh toán ròng với một bên đã được xác định. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q9",
        "number": "9",
        "prompt": "Rủi ro hệ thống là",
        "sourcePrompt": "Systemic risk is",
        "options": [
          {
            "id": "A",
            "text": "rủi ro về sự thất bại của cả một hệ thống tài chính",
            "sourceText": "the risk of a failure of the entire financial system"
          },
          {
            "id": "B",
            "text": "rủi ro liên quan đến biến động thị trường rộng lớn",
            "sourceText": "the risk associated with broad market movements"
          },
          {
            "id": "C",
            "text": "rủi ro về sự thất bại của hệ thống quản trị rủi ro tài chính của một công ty",
            "sourceText": "the risk of a failure of a firm’s financial risk management system"
          },
          {
            "id": "D",
            "text": "rủi ro biến động giá lớn trong toàn bộ hệ thống tài chính",
            "sourceText": "the risk of large price movements throughout the financial system"
          },
          {
            "id": "E",
            "text": "Không câu nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: rủi ro về sự thất bại của cả một hệ thống tài chính. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q10",
        "number": "10",
        "prompt": "Điều nào sau đây là động lực chính cho sự phát triển trong thực hành quản trị rủi ro?",
        "sourcePrompt": "Which of the following is the primary impetus for the growth in the practice of risk management?",
        "options": [
          {
            "id": "A",
            "text": "Máy tính xử lý nhanh hơn",
            "sourceText": "faster computers"
          },
          {
            "id": "B",
            "text": "Mô hình định giá chính xác hơn",
            "sourceText": "better pricing models"
          },
          {
            "id": "C",
            "text": "Nâng cao kiến thức về quản trị rủi ro.",
            "sourceText": "improved knowledge of risk management"
          },
          {
            "id": "D",
            "text": "Thắt chặt quy định pháp lý",
            "sourceText": "tighter government regulation"
          },
          {
            "id": "E",
            "text": "Lo ngại về sự biến động",
            "sourceText": "concern over volatility"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Lo ngại về sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q11",
        "number": "11",
        "prompt": "Những câu sau đây đều là lợi ích của việc thực hành quản lý rủi ro của các công ty, ngoại trừ:",
        "sourcePrompt": "Each of the following is a benefit of practicing risk management by companies except",
        "options": [
          {
            "id": "A",
            "text": "Các công ty có thể quản lý rủi ro tốt hơn các cổ đông.",
            "sourceText": "companies can manage risk better than their shareholders"
          },
          {
            "id": "B",
            "text": "Quản lý rủi ro có thể tránh được các loại chi phí phá sản",
            "sourceText": "risk management can avoid bankruptcy costs"
          },
          {
            "id": "C",
            "text": "Quản lý rủi ro có thể giảm thuế",
            "sourceText": "risk management can lower taxes"
          },
          {
            "id": "D",
            "text": "Quản lý rủi ro có thể làm tăng cơ hội việc làm",
            "sourceText": "risk management can increase employment opportunities"
          },
          {
            "id": "E",
            "text": "Quản lý rủi ro có thể giúp ngăn chặn các công ty bỏ qua cơ hội đầu tư có giá trị.",
            "sourceText": "risk management can help prevent companies from passing up valuable investment opportunities"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Quản lý rủi ro có thể làm tăng cơ hội việc làm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q12",
        "number": "12",
        "prompt": "Tìm số lượng Hợp đồng tương lai Eurodollar, mỗi hợp đồng có delta là –$25 sẽ phòng ngừa delta cho một danh mục đầu tư gồm một vị thế mua trong hợp đồng hoán đổi có delta là $5,000 và vị thế bán trong một quyền chọn bán có delta là –$2,300.",
        "sourcePrompt": "Find the number of Eurodollar futures each having a delta of –$25 that would delta-hedge a portfolio of a long position in swaps with a delta of $5,000 and a short position in a put option with a delta of –$2,300.",
        "options": [
          {
            "id": "A",
            "text": "292 hợp đồng dài hạn",
            "sourceText": "long 292 contracts"
          },
          {
            "id": "B",
            "text": "108 hợp đồng ngắn hạn",
            "sourceText": "short 108 contracts"
          },
          {
            "id": "C",
            "text": "292 hợp đồng ngắn hạn",
            "sourceText": "short 292 contracts"
          },
          {
            "id": "D",
            "text": "200 hợp đồng dài hạn",
            "sourceText": "long 200 contracts"
          },
          {
            "id": "E",
            "text": "108 hợp đồng dài hạn",
            "sourceText": "long 108 contracts"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 108 hợp đồng ngắn hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q13",
        "number": "13",
        "prompt": "Hợp đồng trao đổi toàn bộ thu nhập được mô tả tốt nhất là:",
        "sourcePrompt": "A total return swap is best described as",
        "options": [
          {
            "id": "A",
            "text": "Một hoán đổi trong đó các khoản thanh toán chỉ bao gồm lợi tức vốn",
            "sourceText": "A swap in which the payments include only capital gains"
          },
          {
            "id": "B",
            "text": "Một hoán đổi mà trong đó tổng lợi tức của một chỉ số chứng khoán được hoán đổi cho tổng lợi nhuận của một trái phiếu",
            "sourceText": "a swap in which the total return on a stock index is swapped for the total return on a bond"
          },
          {
            "id": "C",
            "text": "Một hoán đổi mà trong đó tiền lãi của một trái phiếu được hoán đổi cho một số khoản thanh toán khác.",
            "sourceText": "a swap in which the return on one bond is swapped for some other payment"
          },
          {
            "id": "D",
            "text": "Một hoán đổi được thiết kế để thay thế cho một hoán đổi cơ bản.",
            "sourceText": "a swap designed to substitute for a basis swap"
          },
          {
            "id": "E",
            "text": "Không đáp án nào đúng.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Một hoán đổi mà trong đó tiền lãi của một trái phiếu được hoán đổi cho một số khoản thanh toán khác.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q14",
        "number": "14",
        "prompt": "Phát biểu nào dưới đây được mô tả đúng nhất về Hợp đồng hoán đổi rủi ro tín dụng?",
        "sourcePrompt": "Which of the following best describes a credit default swap?",
        "options": [
          {
            "id": "A",
            "text": "Nó được bảo vệ để chống lại sự vỡ nợ.",
            "sourceText": "it is protected against default"
          },
          {
            "id": "B",
            "text": "Nó có tỷ lệ cao hơn để bù đắp cho một bên có khả năng vỡ nợ",
            "sourceText": "it has a higher rate to compensate for the possibility of one party defaulting"
          },
          {
            "id": "C",
            "text": "Nó mang xếp hạng tín dụng cao hơn hầu hết các giao dịch hoán đổi khác.",
            "sourceText": "it carries a higher credit rating than most other swaps"
          },
          {
            "id": "D",
            "text": "Nó dừng nếu có một bên khác ngoài hợp đồng hoán đổi rủi ro. part.",
            "sourceText": "it off if another party external to the swap defaults"
          },
          {
            "id": "E",
            "text": "Không đáp án nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Nó dừng nếu có một bên khác ngoài hợp đồng hoán đổi rủi ro. part.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q15",
        "number": "15",
        "prompt": "Phát biểu nào sau đây không đúng về quyền chọn chênh lệch tín dụng?",
        "sourcePrompt": "Which of the following statements is not true about a credit spread option?",
        "options": [
          {
            "id": "A",
            "text": "Đó là quyền chọn đối với chênh lệch trái phiếu so với trái phiếu tham chiếu.",
            "sourceText": "it is an option on the spread of a bond over a reference bond"
          },
          {
            "id": "B",
            "text": "Giá trị của nó sẽ thay đổi theo nhận thức của nhà đầu tư về chất lượng tín dụng của một bên.",
            "sourceText": "its value would change with changes in investors’ perceptions of a party’s credit quality"
          },
          {
            "id": "C",
            "text": "Yêu cầu thanh toán phí bảo hiểm trước.",
            "sourceText": "it requires payment of a premium up front"
          },
          {
            "id": "D",
            "text": "Đòi hỏi trái phiếu cơ bản phải tương đối thanh khoản.",
            "sourceText": "it requires that the underlying bond be relatively liquid"
          },
          {
            "id": "E",
            "text": "Không đáp án nào đúng.",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Không đáp án nào đúng.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q16",
        "number": "16",
        "prompt": "Hình thức phòng ngừa rủi ro nào sau đây yêu cầu sử dụng quyền chọn?",
        "sourcePrompt": "Which of the following forms of hedging requires the use of options?",
        "options": [
          {
            "id": "A",
            "text": "Phòng ngừa delta",
            "sourceText": "delta hedging"
          },
          {
            "id": "B",
            "text": "Phòng ngừa vega",
            "sourceText": "vega hedging"
          },
          {
            "id": "C",
            "text": "Phòng ngừa gamma",
            "sourceText": "gamma hedging"
          },
          {
            "id": "D",
            "text": "Phòng ngừa rủi ro tín dụng",
            "sourceText": "credit risk hedging"
          },
          {
            "id": "E",
            "text": "Không đáp án nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Phòng ngừa vega. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q17",
        "number": "17",
        "prompt": "Nếu một công ty tham gia quản lý rủi ro để thu được lợi nhuận kinh doanh chênh lệch giá, thì điều gì dễ bị bỏ qua?",
        "sourcePrompt": "If a firm engages in risk management to capture arbitrage profits, what is it easy to overlook?",
        "options": [
          {
            "id": "A",
            "text": "rủi ro tín dụng bổ sung mà nó giả định",
            "sourceText": "the additional credit risk it assumes"
          },
          {
            "id": "B",
            "text": "chi phí lớn hơn lợi ích",
            "sourceText": "the cost is greater than the benefit"
          },
          {
            "id": "C",
            "text": "rủi ro thị trường cao",
            "sourceText": "the market risk is high"
          },
          {
            "id": "D",
            "text": "tất cả ý trên đều đúng",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có ý nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: rủi ro tín dụng bổ sung mà nó giả định. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q18",
        "number": "18",
        "prompt": "Điều nào sau đây mô tả tốt nhất phương pháp bình thường delta?",
        "sourcePrompt": "Which of the following best describes the delta normal method?",
        "options": [
          {
            "id": "A",
            "text": "phương pháp quản lý phòng ngừa delta để đảm bảo gamma thấp",
            "sourceText": "a method of managing a delta hedge to assure a low gamma"
          },
          {
            "id": "B",
            "text": "phương pháp lịch sử khi phân phối chuẩn",
            "sourceText": "the historical method when the distribution is normal"
          },
          {
            "id": "C",
            "text": "phương pháp Monte Carlo khi giá thay đổi được phân phối chuẩn",
            "sourceText": "the Monte Carlo method when price changes are normally distributed"
          },
          {
            "id": "D",
            "text": "phương pháp phân tích áp dụng cho các quyền chọn",
            "sourceText": "the analytical method applied to options"
          },
          {
            "id": "E",
            "text": "phương pháp đo lường những thay đổi trong quyền chọn delta",
            "sourceText": "a method of measuring changes in an option’s delta"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: phương pháp phân tích áp dụng cho các quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q19",
        "number": "19",
        "prompt": "Rủi ro có thể xảy ra lỗi trong đầu vào của mô hình định giá được gọi là",
        "sourcePrompt": "The risk that errors can occur in inputs to a pricing model is called",
        "options": [
          {
            "id": "A",
            "text": "rủi ro đầu vào",
            "sourceText": "input risk"
          },
          {
            "id": "B",
            "text": "rủi ro mô hình",
            "sourceText": "model risk"
          },
          {
            "id": "C",
            "text": "rủi ro giá",
            "sourceText": "pricing risk"
          },
          {
            "id": "D",
            "text": "rủi ro định giá",
            "sourceText": "valuation risk"
          },
          {
            "id": "E",
            "text": "không có ý nào đúng",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: rủi ro mô hình. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q20",
        "number": "20",
        "prompt": "Kỹ thuật nào sau đây là công cụ quản lý rủi ro phù hợp hơn cho một công ty mà giá trị tài sản không dễ đo lường?",
        "sourcePrompt": "Which of the following techniques is a more appropriate risk management tool for a company in which asset value is not easily measurable?",
        "options": [
          {
            "id": "A",
            "text": "sức chịu đựng rủi ro",
            "sourceText": "stress risk"
          },
          {
            "id": "B",
            "text": "giá trị tín dụng có rủi ro",
            "sourceText": "credit value at risk"
          },
          {
            "id": "C",
            "text": "rủi ro thị trường",
            "sourceText": "market risk"
          },
          {
            "id": "D",
            "text": "rủi ro delta",
            "sourceText": "delta at risk"
          },
          {
            "id": "E",
            "text": "cash flow at risk",
            "sourceText": "cash flow at risk"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: cash flow at risk. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q21",
        "number": "21",
        "prompt": "Trong thuật ngữ quyền chọn, trách nhiệm hữu hạn của cổ đông công ty là",
        "sourcePrompt": "In option terms, the limited liability of corporate stockholders is",
        "options": [
          {
            "id": "A",
            "text": "Một hợp đồng kỳ hạn",
            "sourceText": "a forward contract"
          },
          {
            "id": "B",
            "text": "Một quyền chọn mua",
            "sourceText": "a call option"
          },
          {
            "id": "C",
            "text": "Một quyền chọn bán part.",
            "sourceText": "a put option"
          },
          {
            "id": "D",
            "text": "Một quyền chọn mua bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "E",
            "text": "Một quyền mua ủy thác",
            "sourceText": "a fiduciary call"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Một quyền chọn bán part.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q22",
        "number": "22",
        "prompt": "Rủi ro mà một bên sẽ không thanh toán trong khi bên còn lại đã gửi khoản thanh toán được gọi là",
        "sourcePrompt": "The risk that a party will not pay while the counterparty is sending payment is called",
        "options": [
          {
            "id": "A",
            "text": "Rủi ro chuyển tiền",
            "sourceText": "wire transfer risk"
          },
          {
            "id": "B",
            "text": "Rủi ro khoản trả",
            "sourceText": "payment risk"
          },
          {
            "id": "C",
            "text": "Rủi ro thanh toán",
            "sourceText": "settlement risk"
          },
          {
            "id": "D",
            "text": "Rủi ro xuyên biên giới",
            "sourceText": "cross-border risk"
          },
          {
            "id": "E",
            "text": "Không ý nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Rủi ro thanh toán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q23",
        "number": "23",
        "prompt": "Một trái phiếu chịu ảnh hưởng của phá sản thì tương đương với",
        "sourcePrompt": "A bond subject to default is equivalent to",
        "options": [
          {
            "id": "A",
            "text": "Quyền chọn hoán đổi bên thanh toán",
            "sourceText": "a payer swaption"
          },
          {
            "id": "B",
            "text": "Quyền chọn mua và trái phiếu không vỡ nợ",
            "sourceText": "a call and a default-free bond"
          },
          {
            "id": "C",
            "text": "Quyền chọn mua và quyền chọn bán",
            "sourceText": "a put and a call"
          },
          {
            "id": "D",
            "text": "Trái phiếu không vỡ nợ và bán quyền chọn bán",
            "sourceText": "a default-free bond and a short put"
          },
          {
            "id": "E",
            "text": "Không ý nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Trái phiếu không vỡ nợ và bán quyền chọn bán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q24",
        "number": "24",
        "prompt": "Công cụ nào sau đây có thể được sử dụng để thực hiện phòng ngừa delta, gamma và vega?",
        "sourcePrompt": "Which of the following instruments could be used to execute a delta, gamma and vega hedge?",
        "options": [
          {
            "id": "A",
            "text": "Một hoán đổi",
            "sourceText": "a swap"
          },
          {
            "id": "B",
            "text": "Một quyền chọn",
            "sourceText": "an option"
          },
          {
            "id": "C",
            "text": "Một hợp đồng tương lai",
            "sourceText": "a futures"
          },
          {
            "id": "D",
            "text": "FRA",
            "sourceText": "an FRA"
          },
          {
            "id": "E",
            "text": "Không ý nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Một quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q25",
        "number": "25",
        "prompt": "Giá trị nào dưới đây xấp xỉ bằng giá trị chịu rủi ro (VaR) tại 5% của một danh mục $10 triệu tài sản A, với tỷ suất sinh lợi kỳ vọng là 15% và mức biến động là 35%, và $15 triệu tài sản B, với tỷ suất sinh lợi kỳ vọng là 21% và mức biến động là 30%. Hệ số tương quan của hai tài sản là 0.2",
        "sourcePrompt": "Which of the following is approximately the Value at Risk at 5 percent of a portfolio of $10 million of asset A, whose expected return is 15 percent and volatility is 35 percent, and $15 million of asset B, whose expected return is 21 percent and volatility is 30 percent, where the correlation between the two assets is 0.2.",
        "options": [
          {
            "id": "A",
            "text": "$5.6 triệu",
            "sourceText": "$5.6 million"
          },
          {
            "id": "B",
            "text": "$10 Triệu",
            "sourceText": "$10 million"
          },
          {
            "id": "C",
            "text": "$15 Triệu",
            "sourceText": "$15 million"
          },
          {
            "id": "D",
            "text": "$1.25 Triệu",
            "sourceText": "$1.25 million"
          },
          {
            "id": "E",
            "text": "Không ý nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $5.6 triệu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q26",
        "number": "26",
        "prompt": "Vị thế phòng ngừa delta là vị thế phòng ngừa trong đó:",
        "sourcePrompt": "A delta-hedged position is one in which the",
        "options": [
          {
            "id": "A",
            "text": "kết hợp các vị thế công cụ phái sinh và vị thế giao ngay có delta bằng 1.",
            "sourceText": "combined spot and derivatives positions have a delta of one."
          },
          {
            "id": "B",
            "text": "vị thế giao ngay có delta bằng 0.",
            "sourceText": "spot position has a delta of zero."
          },
          {
            "id": "C",
            "text": "vị thế công cụ phái sinh có delta bằng 0.",
            "sourceText": "derivatives position has a delta of zero."
          },
          {
            "id": "D",
            "text": "kết hợp các vị thế công cụ phái sinh và vị thế giao ngay có delta bằng 0.",
            "sourceText": "combined spot and derivatives positions have a delta of zero."
          },
          {
            "id": "E",
            "text": "kết hợp các vị thế công cụ phái sinh và vị thế giao ngay có gamma bằng 0.",
            "sourceText": "combined spot and derivatives positions have a gamma of zero."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: kết hợp các vị thế công cụ phái sinh và vị thế giao ngay có delta bằng 0.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q27",
        "number": "27",
        "prompt": "Phòng ngừa delta và delta là:",
        "sourcePrompt": "A delta and gamma hedge is",
        "options": [
          {
            "id": "A",
            "text": "kết hợp các vị thế phái sinh và vị thế giao ngay sao cho tổng vị thế có delta bằng 0 và gamma bằng 0.",
            "sourceText": "one in which the combined spot and derivatives positions have a delta of zero and a gamma of zero."
          },
          {
            "id": "B",
            "text": "một phòng ngừa không được đảo bảo rằng không có bất kỳ rủi ro nào.",
            "sourceText": "one that is not guaranteed to be free of all risks"
          },
          {
            "id": "C",
            "text": "phòng ngừa chỉ có hiệu quả khi có những thay đổi nhỏ trong tài sản cơ sở.",
            "sourceText": "effective only for small changes in the underlying instrument."
          },
          {
            "id": "D",
            "text": "tất cả mệnh đề trên đều đúng.",
            "sourceText": "all of the above statements are true"
          },
          {
            "id": "E",
            "text": "tất cả mệnh đề trên đều sai.",
            "sourceText": "none of the above statements are true"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tất cả mệnh đề trên đều đúng.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q28",
        "number": "28",
        "prompt": "Vị thế nào dưới đây có vega âm?",
        "sourcePrompt": "Which of the following positions has a negative vega?",
        "options": [
          {
            "id": "A",
            "text": "1 hợp đồng hoán đổi lãi suất: nhận lãi suất cố định và thanh toán bằng lãi suất thả nổi LIBOR. part.",
            "sourceText": "Receive fixed and pay floating LIBOR-based interest rate swap contract"
          },
          {
            "id": "B",
            "text": "Bán khống hợp đồng tương lai mua bán gia súc.",
            "sourceText": "Short cattle futures contract"
          },
          {
            "id": "C",
            "text": "1 hợp đồng kỳ hạn lãi suất: nhận lãi suất thả nổi và thanh toán bằng lãi suất cố định LIBOR.",
            "sourceText": "Receive floating, pay fixed LIBOR-based forward rate agreement"
          },
          {
            "id": "D",
            "text": "Mua quyền chọn bán cổ phiếu của Apple, Inc.",
            "sourceText": "Long Apple, Inc. put option"
          },
          {
            "id": "E",
            "text": "Bán quyền chọn mua chỉ số S&P 500.",
            "sourceText": "Short S&P 500 index call option"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Bán quyền chọn mua chỉ số S&P 500.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q29",
        "number": "29",
        "prompt": "Phòng ngừa delta, gamma và vega là những khái niệm khá phức tạp. Xác định mệnh đề sai:",
        "sourcePrompt": "Delta, gamma, and vega hedging is rather complex. Identify the false statement.",
        "options": [
          {
            "id": "A",
            "text": "Các loại phòng ngừa này yêu cầu sử dụng 4 loại công cụ phòng ngừa rủi ro.",
            "sourceText": "Requires the use of four hedging instruments"
          },
          {
            "id": "B",
            "text": "Phải có ít nhất một công cụ là một quyền chọn.",
            "sourceText": "At least one of the instruments has to be an option"
          },
          {
            "id": "C",
            "text": "Các loại phòng ngừa này liên quan đến việc thiết kế một danh mục đầu tư mà trong đó delta, gamma và vega nhận giá trị bằng 0.",
            "sourceText": "Involves designing a portfolio where delta, gamma, and vega are set equal to zero"
          },
          {
            "id": "D",
            "text": "Các loại phòng ngừa này thường liên quan đến cách giải cho 3 phương trình tương đương.",
            "sourceText": "Typically involves the solution to three simultaneous equations"
          },
          {
            "id": "E",
            "text": "Tất cả mệnh đề trên đều đúng.",
            "sourceText": "All of the above statements are true"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Các loại phòng ngừa này yêu cầu sử dụng 4 loại công cụ phòng ngừa rủi ro.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q30",
        "number": "30",
        "prompt": "Mệnh đề nào không phải là cách tính VAR?",
        "sourcePrompt": "Which of the following is not a method for computing Value at Risk?",
        "options": [
          {
            "id": "A",
            "text": "Phương pháp phân tích",
            "sourceText": "Analytical method"
          },
          {
            "id": "B",
            "text": "Phương pháp hiệp phương sai - phương sai",
            "sourceText": "Variance-covariance method"
          },
          {
            "id": "C",
            "text": "Phương pháp toàn diện",
            "sourceText": "Comprehensive method"
          },
          {
            "id": "D",
            "text": "Phương pháp lịch sử",
            "sourceText": "Historical method"
          },
          {
            "id": "E",
            "text": "Phương pháp chuẩn delta",
            "sourceText": "Delta normal method"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Phương pháp toàn diện. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q31",
        "number": "31",
        "prompt": "Giá trị hiện tại của các khoản thanh toán được thực hiện để chuyển đổi một trái phiếu bị vỡ nợ thành một trái phiếu không bị vỡ nợ được gọi là:",
        "sourcePrompt": "The present value of the payments made to convert a bond subject to default to a default-free bond is called the",
        "options": [
          {
            "id": "A",
            "text": "Chi phí bảo hiểm",
            "sourceText": "Insurance cost"
          },
          {
            "id": "B",
            "text": "Phần bù hoán đổi rủi ro tín dụng",
            "sourceText": "Credit default swap premium"
          },
          {
            "id": "C",
            "text": "Yếu tố rủi ro hàng năm",
            "sourceText": "Annuity risk factor"
          },
          {
            "id": "D",
            "text": "Giá trị hiện tại của độ biến động rủi ro",
            "sourceText": "Present value of the default volatility"
          },
          {
            "id": "E",
            "text": "Không có câu trả lời nào đúng part.",
            "sourceText": "None of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Phần bù hoán đổi rủi ro tín dụng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  },
  {
    "id": 15,
    "title": "Quản trị rủi ro trong tổ chức",
    "sourceTitle": "CHAPTER 15:  MANAGING RISK IN AN ORGANIZATION",
    "summary": "Chương 15 tập trung vào quản trị rủi ro trong tổ chức. Hãy đọc lý thuyết trước, ghi nhớ thuật ngữ chính, rồi làm chế độ học trước khi thi thử.",
    "keyTerms": [
      "Enterprise risk management",
      "Front office",
      "Middle office",
      "Back office",
      "Hedge accounting",
      "FAS 133",
      "Risk governance"
    ],
    "theory": [
      {
        "heading": "Quản trị rủi ro trong tổ chức",
        "body": "Doanh nghiệp cần chính sách rủi ro rõ ràng, phân quyền và giám sát độc lập. Hội đồng quản trị và quản lý cấp cao chịu trách nhiệm cuối cùng."
      },
      {
        "heading": "Front office, middle office, back office",
        "body": "Front office giao dịch và tạo doanh thu. Middle office đo lường/giám sát rủi ro. Back office xác nhận, thanh toán và ghi nhận giao dịch."
      },
      {
        "heading": "Hedge accounting",
        "body": "Hedge accounting giúp ghi nhận kế toán phản ánh mối quan hệ giữa công cụ hedge và khoản mục được hedge. Các chuẩn như FAS 133 đặt điều kiện để hedge được xem là hiệu quả."
      }
    ],
    "questions": [
      {
        "id": "c15-q1",
        "number": "1A",
        "prompt": "Hoạt động phái sinh đối với người dùng cuối chủ yếu được thực hiện bởi",
        "sourcePrompt": "Derivatives activities in end users are primarily conducted by",
        "options": [
          {
            "id": "A",
            "text": "nhóm nguồn nhân lực",
            "sourceText": "the human resources group"
          },
          {
            "id": "B",
            "text": "nhân viên bán hàng",
            "sourceText": "the sales staff"
          },
          {
            "id": "C",
            "text": "giám đốc tài chính",
            "sourceText": "the chief financial officer"
          },
          {
            "id": "D",
            "text": "ban giám đốc",
            "sourceText": "the board of directors"
          },
          {
            "id": "E",
            "text": "nhóm kho bạc",
            "sourceText": "the treasury group"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: nhóm kho bạc. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q2",
        "number": "2A",
        "prompt": "Điều nào sau đây mô tả đúng nhất về một công ty thực hiện quản lý rủi ro toàn doanh nghiệp?",
        "sourcePrompt": "Which of the following best describes a company that practices enterprise risk management?",
        "options": [
          {
            "id": "A",
            "text": "rủi ro lãi suất và rủi ro tiền tệ sẽ được quản lý thống nhất",
            "sourceText": "interest rate risk and currency risk would be managed in unison"
          },
          {
            "id": "B",
            "text": "một bộ phận duy nhất để quản lý rủi ro",
            "sourceText": "a single department to manage risk"
          },
          {
            "id": "C",
            "text": "nó sẽ quản lý các rủi ro liên quan đến bảo hiểm cùng với rủi ro tài chính",
            "sourceText": "it would manage insurance-related risks along with financial risk"
          },
          {
            "id": "D",
            "text": "rủi ro tín dụng sẽ được quản lý giống như rủi ro thị trường",
            "sourceText": "credit risk would be managed the same way as market risk"
          },
          {
            "id": "E",
            "text": "Rủi ro hoạt động sẽ được quản lý",
            "sourceText": "operational risk would be managed"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: nó sẽ quản lý các rủi ro liên quan đến bảo hiểm cùng với rủi ro tài chính. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q3",
        "number": "3A",
        "prompt": "Bộ phận giao dịch/front office đề cập đến",
        "sourcePrompt": "The front office refers to",
        "options": [
          {
            "id": "A",
            "text": "văn phòng tuân thủ",
            "sourceText": "the compliance office"
          },
          {
            "id": "B",
            "text": "nhà giao dịch tham gia giao dịch phái sinh",
            "sourceText": "the traders who engage in derivatives transactions"
          },
          {
            "id": "C",
            "text": "cố vấn pháp lý",
            "sourceText": "legal counsel"
          },
          {
            "id": "D",
            "text": "chức năng quản lý rủi ro",
            "sourceText": "the risk management function"
          },
          {
            "id": "E",
            "text": "quản lý cấp cao",
            "sourceText": "senior management"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: nhà giao dịch tham gia giao dịch phái sinh. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q4",
        "number": "4A",
        "prompt": "FAS 133 định nghĩa phòng ngừa rủi ro hiệu quả là",
        "sourcePrompt": "FAS 133 defines effective hedging as",
        "options": [
          {
            "id": "A",
            "text": "phòng hộ không có rủi ro cơ bản",
            "sourceText": "a hedge with no basis risk"
          },
          {
            "id": "B",
            "text": "một hàng rào được định giá chính xác",
            "sourceText": "a correctly priced hedge"
          },
          {
            "id": "C",
            "text": "một hàng rào hoàn hảo",
            "sourceText": "a perfect hedge"
          },
          {
            "id": "D",
            "text": "một hàng rào giúp giảm 80 đến 125 phần trăm rủi ro",
            "sourceText": "a hedge that reduces 80 to 125 percent of the risk"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q5",
        "number": "5A",
        "prompt": "Hoạt động kế toán phòng rủi ro ro (kế toán phòng hộ) nào sau đây bị cấm?",
        "sourcePrompt": "In which of the following activities is hedge accounting prohibited?",
        "options": [
          {
            "id": "A",
            "text": "phòng ngừa rủi ro cho một danh mục đầu tư tổng thể thay vì một giao dịch riêng lẻ",
            "sourceText": "hedging an overall portfolio as opposed to an individual transaction"
          },
          {
            "id": "B",
            "text": "sử dụng các call ngắn để bảo vệ tài sản dài hạn",
            "sourceText": "using short calls to protect a long asset"
          },
          {
            "id": "C",
            "text": "sử dụng quyền chọn mua để bảo vệ tài sản",
            "sourceText": "using long puts to protect an asset"
          },
          {
            "id": "D",
            "text": "phòng ngừa rủi ro vị thế mua với hợp đồng tương lai ngắn",
            "sourceText": "hedging a long position with a short futures"
          },
          {
            "id": "E",
            "text": "phòng ngừa rủi ro hoán đổi bằng hoán đổi",
            "sourceText": "hedging a swap with a swaption"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: phòng ngừa rủi ro cho một danh mục đầu tư tổng thể thay vì một giao dịch riêng lẻ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q6",
        "number": "6A",
        "prompt": "Tổ chức nào sau đây đề xuất các phương pháp hay nhất cho ngành quản lý đầu tư?",
        "sourcePrompt": "Which of the following organizations recommends best practices for the investment management industry?",
        "options": [
          {
            "id": "A",
            "text": "PRMIA",
            "sourceText": "PRMIA"
          },
          {
            "id": "B",
            "text": "Nhóm công tác về tiêu chuẩn rủi ro",
            "sourceText": "Risk Standards Working Group"
          },
          {
            "id": "C",
            "text": "GARP",
            "sourceText": "GARP"
          },
          {
            "id": "D",
            "text": "G-30",
            "sourceText": "G-30"
          },
          {
            "id": "E",
            "text": "Ban chuẩn mực kế toán tài chính",
            "sourceText": "Financial Accounting Standards Board"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Nhóm công tác về tiêu chuẩn rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q7",
        "number": "7A",
        "prompt": "Quản lý cấp cao không thực hiện hoạt động nào sau đây?",
        "sourcePrompt": "Which of the following activities does senior management not do?",
        "options": [
          {
            "id": "A",
            "text": "đảm bảo rằng nhân sự có đủ trình độ",
            "sourceText": "ensure that personnel are qualified"
          },
          {
            "id": "B",
            "text": "đảm bảo rằng các biện pháp kiểm soát được thực hiện",
            "sourceText": "ensure that controls are in place"
          },
          {
            "id": "C",
            "text": "thực hiện các giao dịch phòng ngừa rủi ro",
            "sourceText": "execute hedge transactions"
          },
          {
            "id": "D",
            "text": "thiết lập chính sách",
            "sourceText": "establish policies"
          },
          {
            "id": "E",
            "text": "xác định vai trò và trách nhiệm",
            "sourceText": "define roles and responsibilities"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: thực hiện các giao dịch phòng ngừa rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q8",
        "number": "8A",
        "prompt": "Sự khác biệt chính giữa FAS 133 và IAS 39 là",
        "sourcePrompt": "The primary distinction between FAS 133 and IAS 39 is",
        "options": [
          {
            "id": "A",
            "text": "IAS 39 không cho phép kế toán phòng rủi ro ro (kế toán phòng hộ)",
            "sourceText": "IAS 39 does not permit hedge accounting"
          },
          {
            "id": "B",
            "text": "IAS 39 được thông qua sớm hơn FAS 133",
            "sourceText": "IAS 39 was adopted earlier than FAS 133"
          },
          {
            "id": "C",
            "text": "IAS 39 chỉ áp dụng cho các tập đoàn giao dịch công khai",
            "sourceText": "IAS 39 applies only to publicly traded corporations"
          },
          {
            "id": "D",
            "text": "IAS 39 áp dụng cho tất cả các tài sản tài chính và nợ phải trả, không chỉ các công cụ phái sinh",
            "sourceText": "IAS 39 applies to all financial assets and liabilities, not just derivatives"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: IAS 39 áp dụng cho tất cả các tài sản tài chính và nợ phải trả, không chỉ các công cụ phái sinh. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q9",
        "number": "9A",
        "prompt": "Metalgesellschaft mất khoảng 1,3 tỷ USD để làm gì?",
        "sourcePrompt": "Metalgesellschaft lost about $1.3 billion doing what?",
        "options": [
          {
            "id": "A",
            "text": "phòng ngừa rủi ro cho các cam kết ngắn hạn bằng các lựa chọn dài hạn",
            "sourceText": "hedging short-term commitments with long-term options"
          },
          {
            "id": "B",
            "text": "sử dụng hợp đồng tương lai dầu thô để phòng ngừa rủi ro cho hợp đồng tương lai dầu thô",
            "sourceText": "using crude oil futures options to hedge crude oil futures"
          },
          {
            "id": "C",
            "text": "giao dịch hợp đồng tương lai chênh lệch giá dầu thô",
            "sourceText": "trading futures spreads on crude oil"
          },
          {
            "id": "D",
            "text": "phòng ngừa rủi ro cho các cam kết giá dầu cố định bằng các hợp đồng hoán đổi",
            "sourceText": "hedging fixed rate oil price commitments with swaptions"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q10",
        "number": "10A",
        "prompt": "“Quản lý rủi ro độc lập” có nghĩa là gì sau đây?",
        "sourcePrompt": "“Independent risk management” means which of the following?",
        "options": [
          {
            "id": "A",
            "text": "rằng quản lý rủi ro của một công ty độc lập với các quyết định chính sách tổng thể của công ty",
            "sourceText": "that risk management of a firm is independent of its overall corporate policy decisions"
          },
          {
            "id": "B",
            "text": "rằng chức năng quản lý rủi ro được cung cấp bởi một công ty tư vấn bên ngoài",
            "sourceText": "that the risk management function is provided by an outside consulting firm"
          },
          {
            "id": "C",
            "text": "rằng người quản lý rủi ro không thể bị ảnh hưởng bởi các nhà giao dịch",
            "sourceText": "that the risk manager cannot be influenced by the traders"
          },
          {
            "id": "D",
            "text": "rằng người quản lý rủi ro độc lập với các nhà quản lý cấp cao của công ty",
            "sourceText": "that the risk manager is independent of the firm’s senior managers"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: rằng người quản lý rủi ro không thể bị ảnh hưởng bởi các nhà giao dịch. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q11",
        "number": "11A",
        "prompt": "Người dùng cuối là tất cả các loại tổ chức sau, ngoại trừ?",
        "sourcePrompt": "End users are all of the following types of organizations except?",
        "options": [
          {
            "id": "A",
            "text": "quỹ đầu tư",
            "sourceText": "investment funds"
          },
          {
            "id": "B",
            "text": "tập đoàn phi tài chính",
            "sourceText": "non-financial corporations"
          },
          {
            "id": "C",
            "text": "chính phủ",
            "sourceText": "governments"
          },
          {
            "id": "D",
            "text": "tổ chức tài chính",
            "sourceText": "financial institutions"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q12",
        "number": "12",
        "prompt": "Hoạt động chính của bộ phận giao dịch/bộ phận lễ tân của một công ty là gì?",
        "sourcePrompt": "What is the primary activity of a firm’s front office?",
        "options": [
          {
            "id": "A",
            "text": "quản lý rủi ro",
            "sourceText": "risk management"
          },
          {
            "id": "B",
            "text": "giao dịch",
            "sourceText": "trading"
          },
          {
            "id": "C",
            "text": "định giá sản phẩm phái sinh",
            "sourceText": "pricing derivative products"
          },
          {
            "id": "D",
            "text": "kiểm toán",
            "sourceText": "auditing"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giao dịch. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q13",
        "number": "13",
        "prompt": "Quận Cam mất 1,6 tỷ USD để làm gì?",
        "sourcePrompt": "Orange County lost $1.6 billion doing what?",
        "options": [
          {
            "id": "A",
            "text": "put cược rằng lãi suất sẽ vẫn ổn định",
            "sourceText": "betting that interest rates would remain stable"
          },
          {
            "id": "B",
            "text": "mua hợp đồng tương lai trái phiếu kho bạc",
            "sourceText": "buying Treasury bond futures"
          },
          {
            "id": "C",
            "text": "bán hợp đồng tương lai Eurodollar",
            "sourceText": "selling Eurodollar futures"
          },
          {
            "id": "D",
            "text": "mua trái phiếu ngắn hạn và trung hạn ký quỹ",
            "sourceText": "buying short- and intermediate-term bonds on margin"
          },
          {
            "id": "E",
            "text": "giao dịch quyền chọn thị trường tiền tệ",
            "sourceText": "trading money market options"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: mua trái phiếu ngắn hạn và trung hạn ký quỹ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q14",
        "number": "14",
        "prompt": "Người quản lý rủi ro nên báo cáo cho",
        "sourcePrompt": "Risk managers should report to",
        "options": [
          {
            "id": "A",
            "text": "thương nhân trưởng",
            "sourceText": "the chief trader"
          },
          {
            "id": "B",
            "text": "cố vấn pháp lý",
            "sourceText": "legal counsel"
          },
          {
            "id": "C",
            "text": "người điều hành phụ trách bộ phận giao dịch/tiền sảnh",
            "sourceText": "the executive in charge of the front office"
          },
          {
            "id": "D",
            "text": "người điều hành phụ trách văn phòng hỗ trợ",
            "sourceText": "the executive in charge of the back office"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q15",
        "number": "15",
        "prompt": "Trước FAS 133, công cụ phái sinh được báo cáo ở đâu trên báo cáo tài chính?",
        "sourcePrompt": "Prior to FAS 133, where on the financial statements were derivatives reported?",
        "options": [
          {
            "id": "A",
            "text": "như các khoản nợ tiềm tàng",
            "sourceText": "as contingent liabilities"
          },
          {
            "id": "B",
            "text": "như thiện chí",
            "sourceText": "as goodwill"
          },
          {
            "id": "C",
            "text": "tài sản vô hình không tồn tại vì chúng là các khoản mục ngoại bảng",
            "sourceText": "as intangible assets d nowhere because they were off-balance sheet items"
          },
          {
            "id": "E",
            "text": "trong Thu nhập toàn diện khác",
            "sourceText": "in Other Comprehensive Income"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: . Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q16",
        "number": "16",
        "prompt": "Phương pháp nào sau đây không được chấp nhận để tiết lộ theo quy định của SEC?",
        "sourcePrompt": "Which of the following methods is not acceptable for disclosure under the SEC’s rules?",
        "options": [
          {
            "id": "A",
            "text": "thư của CEO gửi cổ đông",
            "sourceText": "the CEO’s letter to the shareholders"
          },
          {
            "id": "B",
            "text": "thông tin dạng bảng",
            "sourceText": "tabular information"
          },
          {
            "id": "C",
            "text": "phân tích độ nhạy d VAR",
            "sourceText": "sensitivity analysis d VAR"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: thư của CEO gửi cổ đông. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q17",
        "number": "17",
        "prompt": "Thẩm quyền cuối cùng về quản lý rủi ro thuộc về",
        "sourcePrompt": "Ultimate authority for risk management lies with",
        "options": [
          {
            "id": "A",
            "text": "cố vấn pháp lý",
            "sourceText": "legal counsel"
          },
          {
            "id": "B",
            "text": "người giao dịch đứng đầu",
            "sourceText": "the head trader"
          },
          {
            "id": "C",
            "text": "quản lý cấp cao",
            "sourceText": "senior management"
          },
          {
            "id": "D",
            "text": "kiểm toán viên nội bộ",
            "sourceText": "the internal auditors"
          },
          {
            "id": "E",
            "text": "kiểm toán viên bên ngoài",
            "sourceText": "the external auditors"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: quản lý cấp cao. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q18",
        "number": "18",
        "prompt": "Người kinh doanh chứng khoán phái sinh chủ yếu thực hiện giao dịch chứng khoán phái sinh vì lý do nào sau đây?",
        "sourcePrompt": "Derivatives dealers primarily conduct derivatives transactions for which of the following reasons?",
        "options": [
          {
            "id": "A",
            "text": "để nâng cao lợi nhuận từ các giao dịch đầu tư khác của họ",
            "sourceText": "to enhance the returns on their other investment transactions"
          },
          {
            "id": "B",
            "text": "để kiếm lợi từ khả năng thực hiện giao dịch của họ vào đúng thời điểm",
            "sourceText": "to profit off of their ability to execute trades at the right time"
          },
          {
            "id": "C",
            "text": "để thu lợi từ dịch vụ tạo lập thị trường của họ",
            "sourceText": "to profit off of their market making services"
          },
          {
            "id": "D",
            "text": "để cung cấp các dịch vụ nhằm nâng cao sức hấp dẫn tổng thể của dòng sản phẩm của họ",
            "sourceText": "to provide services to enhance the overall attractiveness of their product line"
          },
          {
            "id": "A",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: để thu lợi từ dịch vụ tạo lập thị trường của họ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q19",
        "number": "19",
        "prompt": "Phương pháp nào sau đây không được phép đáp ứng yêu cầu của SEC về công bố hoạt động phái sinh?",
        "sourcePrompt": "Which of the following methods is not permitted to satisfy the SEC’s requirements for disclosure of derivatives activity?",
        "options": [
          {
            "id": "A",
            "text": "lời giải thích trong thư của chủ tịch",
            "sourceText": "an explanation in the chairman’s letter"
          },
          {
            "id": "B",
            "text": "một con số Giá trị rủi ro",
            "sourceText": "a Value-at-Risk figure"
          },
          {
            "id": "C",
            "text": "phân tích độ nhạy",
            "sourceText": "a sensitivity analysis"
          },
          {
            "id": "D",
            "text": "bảng giá trị thị trường và các điều khoản liên quan",
            "sourceText": "a table of market values and related terms"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lời giải thích trong thư của chủ tịch. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q20",
        "number": "20",
        "prompt": "kế toán phòng rủi ro ro (kế toán phòng hộ) là trường hợp nào sau đây?",
        "sourcePrompt": "Hedge accounting is which of the following?",
        "options": [
          {
            "id": "A",
            "text": "mô tả tất cả các phòng ngừa trong phần chú thích của báo cáo kế toán",
            "sourceText": "describing all hedges in footnotes to accounting statements"
          },
          {
            "id": "B",
            "text": "trì hoãn tất cả việc ghi nhận lãi và lỗ phòng ngừa rủi ro cho đến khi việc phòng ngừa kết thúc",
            "sourceText": "deferring all recording of hedge profits and losses until the hedge is over"
          },
          {
            "id": "C",
            "text": "liên kết lãi hoặc lỗ phái sinh với công cụ được phòng ngừa rủi ro",
            "sourceText": "associating the derivative profit or loss with the instrument being hedged"
          },
          {
            "id": "D",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: liên kết lãi hoặc lỗ phái sinh với công cụ được phòng ngừa rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q21",
        "number": "21",
        "prompt": "Câu nào sau đây không đúng về phòng ngừa rủi ro giá trị hợp lý?",
        "sourcePrompt": "Which of the following statements is not true about fair value hedges?",
        "options": [
          {
            "id": "A",
            "text": "nó đòi hỏi một phương pháp xác định giá trị hợp lý của chứng khoán phái sinh",
            "sourceText": "it requires a method of determining the fair value of the derivative"
          },
          {
            "id": "B",
            "text": "nó trì hoãn việc ghi nhận tất cả lợi nhuận và thua lỗ cho đến khi việc phòng hộ bị chấm dứt",
            "sourceText": "it defers recognition of all profits and losses until the hedge is terminated"
          },
          {
            "id": "C",
            "text": "nó sẽ khiến thu nhập dao động nếu phòng ngừa rủi ro không hiệu quả",
            "sourceText": "it will cause earnings to fluctuate if hedges are not effective"
          },
          {
            "id": "D",
            "text": "nó đòi hỏi tài liệu thích hợp",
            "sourceText": "it requires proper documentation"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q22",
        "number": "22",
        "prompt": "Câu nào sau đây không đúng về phòng ngừa rủi ro giá trị hợp lý?",
        "sourcePrompt": "Which of the following statements is not true about fair value hedges?",
        "options": [
          {
            "id": "A",
            "text": "nó đòi hỏi phải xác định được phần hiệu quả và phần không hiệu quả",
            "sourceText": "it requires identification of the effective and ineffective parts"
          },
          {
            "id": "B",
            "text": "lãi và lỗ phái sinh được tạm thời ghi nhận vào tài khoản vốn chủ sở hữu",
            "sourceText": "derivatives profits and losses are temporarily carried in an equity account"
          },
          {
            "id": "C",
            "text": "nó đòi hỏi tài liệu thích hợp",
            "sourceText": "it requires proper documentation"
          },
          {
            "id": "D",
            "text": "chỉ các công ty đại lý mới đủ điều kiện để sử dụng nó",
            "sourceText": "only dealer firms are eligible to use it"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: chỉ các công ty đại lý mới đủ điều kiện để sử dụng nó. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q23",
        "number": "23",
        "prompt": "Barings mất 1,2 tỷ USD vì lý do gì?",
        "sourcePrompt": "Barings lost $1.2 billion because of what?",
        "options": [
          {
            "id": "A",
            "text": "sự thất bại trong kiểm soát rủi ro tại một trong các văn phòng nước ngoài của nó",
            "sourceText": "a failure of risk controls in one of its foreign offices"
          },
          {
            "id": "B",
            "text": "rủi ro mô hình trong mô hình VAR của họ",
            "sourceText": "model risk in their VAR models"
          },
          {
            "id": "C",
            "text": "giao dịch lừa đảo",
            "sourceText": "fraudulent transactions"
          },
          {
            "id": "D",
            "text": "cơ quan quản lý đóng cửa nó vì quản lý rủi ro kém",
            "sourceText": "regulators shut it down because of poor risk management"
          },
          {
            "id": "E",
            "text": "suy đoán về lãi suất của Đức",
            "sourceText": "speculating on German interest rates"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: sự thất bại trong kiểm soát rủi ro tại một trong các văn phòng nước ngoài của nó. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q24",
        "number": "24",
        "prompt": "Điều nào sau đây sẽ không được bao gồm trong số những người dùng cuối phái sinh điển hình ở Hoa Kỳ?",
        "sourcePrompt": "Which of the following would not be included among typical derivatives end users in the U. S.?",
        "options": [
          {
            "id": "A",
            "text": "quỹ hưu trí",
            "sourceText": "pension funds"
          },
          {
            "id": "B",
            "text": "tập đoàn",
            "sourceText": "corporations"
          },
          {
            "id": "C",
            "text": "chính quyền tiểu bang và địa phương",
            "sourceText": "state and local governments"
          },
          {
            "id": "D",
            "text": "chính phủ liên bang",
            "sourceText": "the federal government"
          },
          {
            "id": "E",
            "text": "quỹ phòng hộ",
            "sourceText": "hedge funds"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: chính phủ liên bang. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q25",
        "number": "25",
        "prompt": "Procter and Gamble mất 157 triệu USD để làm gì?",
        "sourcePrompt": "Procter and Gamble lost $157 million doing what?",
        "options": [
          {
            "id": "A",
            "text": "suy đoán về một cuộc suy thoái toàn cầu",
            "sourceText": "speculating on a worldwide recession"
          },
          {
            "id": "B",
            "text": "không phòng ngừa được chi phí đi vay khi phát hành trái phiếu",
            "sourceText": "failure to hedge their borrowing cost on a bond issue"
          },
          {
            "id": "C",
            "text": "suy đoán về lãi suất nước ngoài và tỷ giá hối đoái",
            "sourceText": "speculating on foreign interest and exchange rates"
          },
          {
            "id": "D",
            "text": "suy đoán về việc giảm thâm hụt ngân sách liên bang",
            "sourceText": "speculating on a decrease in the federal budget deficit"
          },
          {
            "id": "E",
            "text": "quản lý sai lầm quỹ phòng hộ trong quỹ hưu trí của họ",
            "sourceText": "mismanagement of a hedge fund in their pension fund"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: suy đoán về lãi suất nước ngoài và tỷ giá hối đoái. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q26",
        "number": "26",
        "prompt": "Tất cả những điều sau đây tạo nên ngành quản lý rủi ro phái sinh tài chính, ngoại trừ",
        "sourcePrompt": "All of the following make up the financial derivatives risk management industry, except",
        "options": [
          {
            "id": "A",
            "text": "người dùng cuối",
            "sourceText": "end users"
          },
          {
            "id": "B",
            "text": "đại lý",
            "sourceText": "dealers"
          },
          {
            "id": "C",
            "text": "nhà tư vấn",
            "sourceText": "consultants"
          },
          {
            "id": "D",
            "text": "các công ty phần mềm chuyên dụng",
            "sourceText": "specialized software companies"
          },
          {
            "id": "E",
            "text": "chuyên gia GRAP",
            "sourceText": "GRAP professionals"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: chuyên gia GRAP. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q27",
        "number": "27",
        "prompt": "quản trị rủi ro toàn doanh nghiệp bao gồm tất cả những điều sau, ngoại trừ",
        "sourcePrompt": "Enterprise risk management includes all of the following except",
        "options": [
          {
            "id": "A",
            "text": "một quá trình trong đó một công ty tìm cách kiểm soát tất cả các rủi ro của mình một cách tập trung và tích hợp",
            "sourceText": "a process in which a firm seeks to controls all of its risks in a centralized, integrated manner"
          },
          {
            "id": "B",
            "text": "tìm cách quản lý rủi ro tài chính truyền thống, chẳng hạn như rủi ro lãi suất và ngoại tệ",
            "sourceText": "seeks to manage traditional financial risks, such as interest rate and foreign currency risks"
          },
          {
            "id": "C",
            "text": "tìm cách quản lý rủi ro về rủi ro lỗi thời của sản phẩm",
            "sourceText": "seeks to manage risk of product obsolescence risk"
          },
          {
            "id": "D",
            "text": "cũng tìm cách quản lý rủi ro tài chính phi truyền thống, chẳng hạn như rủi ro có thể bảo hiểm",
            "sourceText": "seeks also to manage nontraditional financial risks, such as insurable risks"
          },
          {
            "id": "E",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: tìm cách quản lý rủi ro về rủi ro lỗi thời của sản phẩm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q28",
        "number": "28",
        "prompt": "kế toán phòng rủi ro (kế toán phòng hộ), dựa trên FAS 133, giải quyết tất cả những vấn đề sau ngoại trừ",
        "sourcePrompt": "Hedge accounting, based on FAS 133, addresses all of the following except",
        "options": [
          {
            "id": "A",
            "text": "hàng rào giá trị hợp lý",
            "sourceText": "fair value hedges"
          },
          {
            "id": "B",
            "text": "hàng rào giá trị không công bằng",
            "sourceText": "unfair value hedges"
          },
          {
            "id": "C",
            "text": "phòng ngừa dòng tiền",
            "sourceText": "cash flow hedges"
          },
          {
            "id": "D",
            "text": "phòng ngừa đầu tư nước ngoài",
            "sourceText": "foreign investment hedges"
          },
          {
            "id": "E",
            "text": "suy đoán",
            "sourceText": "speculation"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hàng rào giá trị không công bằng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q29",
        "number": "29",
        "prompt": "Trách nhiệm của người quản lý cấp cao bao gồm tất cả những điều sau đây, ngoại trừ",
        "sourcePrompt": "Responsibilities of senior management include all of the following except",
        "options": [
          {
            "id": "A",
            "text": "thiết lập các chính sách bằng văn bản",
            "sourceText": "establish written policies"
          },
          {
            "id": "B",
            "text": "xác định vai trò và trách nhiệm",
            "sourceText": "define roles and responsibilities"
          },
          {
            "id": "C",
            "text": "xác định các chiến lược có thể chấp nhận được",
            "sourceText": "identify acceptable strategies"
          },
          {
            "id": "D",
            "text": "đảm bảo có hệ thống kiểm soát",
            "sourceText": "ensure that control systems are in place"
          },
          {
            "id": "E",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Tất cả các câu trả lời trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q30",
        "number": "30",
        "prompt": "kế toán phòng rủi ro (kế toán phòng hộ) là một phương pháp kế toán mà",
        "sourcePrompt": "Hedge accounting is a method of accounting for which the",
        "options": [
          {
            "id": "A",
            "text": "lãi và lỗ từ việc phòng ngừa rủi ro được hoãn lại cho đến khi việc phòng ngừa được hoàn thành.",
            "sourceText": "gains and losses from a hedge are deferred until the hedge is completed."
          },
          {
            "id": "B",
            "text": "các khoản ghi nợ và tín dụng được quản lý để giữ cho tài khoản tiền mặt ổn định",
            "sourceText": "debits and credits are managed to keep the cash account stable"
          },
          {
            "id": "C",
            "text": "doanh thu và chi phí phái sinh được ghi nhận sao cho cân đối chính xác",
            "sourceText": "derivatives revenues and expenses are recorded so as to exactly balance"
          },
          {
            "id": "D",
            "text": "lãi và lỗ trên các công cụ phái sinh được hiển thị trước khi hàng rào bị chấm dứt",
            "sourceText": "gains and losses on derivatives are shown before the hedge is terminated"
          },
          {
            "id": "E",
            "text": "không có câu trả lời nào ở MIDTERM",
            "sourceText": "none of the above MIDTERM"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lãi và lỗ từ việc phòng ngừa rủi ro được hoãn lại cho đến khi việc phòng ngừa được hoàn thành.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q31",
        "number": "1B",
        "prompt": "Trong tình huống nào sau đây bạn sẽ sử dụng phòng hộ ngắn?",
        "sourcePrompt": "In which of the following situations would you use a short hedge?",
        "options": [
          {
            "id": "A",
            "text": "Kế hoạch mua lại cổ phiếu để trang trải một vị thế bán khống",
            "sourceText": "The planned repurchase of stock to cover a short position"
          },
          {
            "id": "B",
            "text": "Kế hoạch mua cổ phiếu",
            "sourceText": "The planned purchase of a stock"
          },
          {
            "id": "C",
            "text": "Kế hoạch mua giấy thương mại",
            "sourceText": "The planned purchase of commercial paper"
          },
          {
            "id": "D",
            "text": "Kế hoạch phát hành trái phiếu",
            "sourceText": "The planned issuance of bonds"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Kế hoạch phát hành trái phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q32",
        "number": "2B",
        "prompt": "Mối quan hệ giữa độ biến động và thời gian hết hạn được gọi là theta.",
        "sourcePrompt": "The relationship between the volatility and the time to expiration is called the theta",
        "options": [
          {
            "id": "A",
            "text": "cấu trúc kỳ hạn của sự biến động",
            "sourceText": "term structure of volatility"
          },
          {
            "id": "B",
            "text": "độ lệch biến động",
            "sourceText": "volatility skew"
          },
          {
            "id": "C",
            "text": "nụ cười biến động",
            "sourceText": "volatility smile"
          },
          {
            "id": "D",
            "text": "không có cái nào đúng",
            "sourceText": "none are correct"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: cấu trúc kỳ hạn của sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q33",
        "number": "3B",
        "prompt": "Điều nào sau đây là cách giải thích về VAR trị giá 5 triệu đô la trong một năm với xác suất 5%?",
        "sourcePrompt": "Which of the following is the interpretation of a VAR of $5 million for one year at 5% probability?",
        "options": [
          {
            "id": "A",
            "text": "Xác suất là 5% công ty sẽ lỗ ít nhất 5 triệu USD trong một năm",
            "sourceText": "The probability is 5 percent that the firm will lose at least $5 million in one year"
          },
          {
            "id": "B",
            "text": "Xác suất ít nhất là 5% công ty sẽ lỗ 5 triệu USD trong một năm",
            "sourceText": "The probability is at least 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "C",
            "text": "Xác suất là 5% công ty sẽ lỗ 5 triệu USD trong một năm",
            "sourceText": "The probability is 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "D",
            "text": "Xác suất nhỏ hơn 5% là công ty sẽ lỗ 5 triệu USD trong một năm",
            "sourceText": "The probability is less than 5 percent that the firm will lose $5 million in one year"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Xác suất là 5% công ty sẽ lỗ ít nhất 5 triệu USD trong một năm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q34",
        "number": "4B",
        "prompt": "Chiến lược nào sau đây có thể dẫn đến nghĩa vụ mua cổ phiếu?",
        "sourcePrompt": "Which of the following strategies can lead to an obligation to buy stock?",
        "options": [
          {
            "id": "A",
            "text": "Mua call",
            "sourceText": "Buying a call"
          },
          {
            "id": "B",
            "text": "Mua một thiết bị bảo vệ",
            "sourceText": "Buying a protective put"
          },
          {
            "id": "C",
            "text": "Viết một put",
            "sourceText": "Writing a put"
          },
          {
            "id": "D",
            "text": "Viết call được bảo hiểm",
            "sourceText": "Writing a covered call"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Viết một put. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q35",
        "number": "5B",
        "prompt": "“Trách nhiệm hữu hạn” của cổ đông tương tự như:",
        "sourcePrompt": "The “limited liability” of stockholders is similar to:",
        "options": [
          {
            "id": "A",
            "text": "một cổ phiếu",
            "sourceText": "a stock"
          },
          {
            "id": "B",
            "text": "một trái phiếu",
            "sourceText": "a bond"
          },
          {
            "id": "C",
            "text": "một put",
            "sourceText": "a put"
          },
          {
            "id": "D",
            "text": "một call",
            "sourceText": "a call"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một put. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q36",
        "number": "6B",
        "prompt": "Vào tháng 10, MaxCorp quyết định mua 100 nghìn cổ phiếu của Công ty Z và việc mua bán diễn ra vào tháng 11. Cổ phiếu của Công ty Z có beta là 1,60 và hiện có giá trị 32,50 USD. MaxCorp muốn phòng ngừa rủi ro cho giao dịch này bằng cách sử dụng hợp đồng tương lai S&P 500 tháng 12, có giá hiện tại là 2938,50 và hệ số nhân là 250 USD. Giả sử S&P 500 hợp đồng tương lai (hợp đồng tương lai) có beta bằng 1. Số lượng hợp đồng tương lai S&P 500 cần có là:",
        "sourcePrompt": "In October, MaxCorp decided to buy 100 thousand shares of Z Company, with the purchase taking place in November. Z Company's stock has a beta of 1.60 and currently worth $32.50. MaxCorp would like to hedge this transaction using December S&P 500 futures, whose current price is 2938.50 and a multiplier of $250. Assume the S&P 500 futures contract has a beta of 1. The number of S&P 500 futures required is:",
        "options": [
          {
            "id": "A",
            "text": "7",
            "sourceText": "7"
          },
          {
            "id": "B",
            "text": "9.",
            "sourceText": "9."
          },
          {
            "id": "C",
            "text": "10",
            "sourceText": "10"
          },
          {
            "id": "D",
            "text": "5",
            "sourceText": "5"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 7. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q37",
        "number": "7B",
        "prompt": "Cặp hoán đổi tiền tệ nào sau đây có thể được kết hợp để tạo ra một hoán đổi lãi suất thông thường để trả USD cố định và nhận USD thả nổi?",
        "sourcePrompt": "Which of the following pairs of currency swaps can be combined to create a plain vanilla interest rate swap to pay USD fixed and receive USD floating?",
        "options": [
          {
            "id": "A",
            "text": "Thanh toán EUR thả nổi/Nhận USD thả nổi + Trả USD cố định/Nhận EUR thả nổi",
            "sourceText": "Pay EUR floating/Receive USD floating + Pay USD fixed/Receive EUR floating"
          },
          {
            "id": "B",
            "text": "Trả EUR cố định/Nhận USD cố định + Trả USD thả nổi/Nhận EUR cố định",
            "sourceText": "Pay EUR fixed/Receive USD fixed + Pay USD floating/Receive EUR fixed"
          },
          {
            "id": "C",
            "text": "Thanh toán EUR thả nổi/Nhận USD cố định + Thanh toán USD cố định/Nhận EUR cố định",
            "sourceText": "Pay EUR floating/Receive USD fixed + Pay USD fixed/Receive EUR fixed"
          },
          {
            "id": "D",
            "text": "Thanh toán EUR cố định/Nhận USD thả nổi + Trả USD thả nổi/Nhận EUR thả nổi",
            "sourceText": "Pay EUR fixed/Receive USD floating + Pay USD floating/Receive EUR floating"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Thanh toán EUR thả nổi/Nhận USD thả nổi + Trả USD cố định/Nhận EUR thả nổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q38",
        "number": "8B",
        "prompt": "______ cơ bản là yếu tố chính ảnh hưởng đến hiệu suất của chênh lệch lịch.",
        "sourcePrompt": "The underlying's ______ is the major factor in the calendar spread's performance.",
        "options": [
          {
            "id": "A",
            "text": "tỷ suất lợi nhuận kỳ vọng",
            "sourceText": "expected rate of return"
          },
          {
            "id": "B",
            "text": "phiên bản beta",
            "sourceText": "beta"
          },
          {
            "id": "C",
            "text": "mối tương quan với chỉ số chuẩn",
            "sourceText": "correlation with the benchmark index"
          },
          {
            "id": "D",
            "text": "sự biến động",
            "sourceText": "volatility"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q39",
        "number": "9B",
        "prompt": "Giả sử bạn mua một tài sản ở mức 70 USD và bán một hợp đồng tương lai (hợp đồng tương lai) ở mức 72 USD. Lợi nhuận của bạn là bao nhiêu nếu trước khi hết hạn, bạn bán tài sản ở mức 75 USD và giá tương lai là 78 ​​USD?",
        "sourcePrompt": "Suppose you buy an asset at $70 and sell a futures contract at $72. What is your profit if, prior to expiration, you sell the asset at $75 and the futures price is $78?",
        "options": [
          {
            "id": "A",
            "text": "$2",
            "sourceText": "$2"
          },
          {
            "id": "B",
            "text": "-$1",
            "sourceText": "-$1"
          },
          {
            "id": "C",
            "text": "-$6",
            "sourceText": "-$6"
          },
          {
            "id": "D",
            "text": "$5",
            "sourceText": "$5"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: -$1. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q40",
        "number": "10B",
        "prompt": "Để xây dựng một quyền chọn mua được bảo hiểm, chúng tôi _____ cho mỗi cổ phiếu sở hữu.",
        "sourcePrompt": "In order to construct a covered call, we _____ for every share owned.",
        "options": [
          {
            "id": "A",
            "text": "viết một call",
            "sourceText": "write a call"
          },
          {
            "id": "B",
            "text": "viết một put",
            "sourceText": "write a put"
          },
          {
            "id": "C",
            "text": "mua một quyền chọn bán",
            "sourceText": "buy a put"
          },
          {
            "id": "D",
            "text": "mua một call",
            "sourceText": "buy a call"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: viết một call. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c15-q41",
        "number": "11B",
        "prompt": "Điểm hòa vốn cho một quyền chọn bán bảo vệ là bao nhiêu? Chọn một:",
        "sourcePrompt": "What is the breakeven for a protective put? Select one:",
        "options": [
          {
            "id": "A",
            "text": "S0 + P",
            "sourceText": "S0 + P"
          },
          {
            "id": "B",
            "text": "S0 – C",
            "sourceText": "S0 – C"
          },
          {
            "id": "C",
            "text": "S0 – X",
            "sourceText": "S0 – X"
          },
          {
            "id": "D",
            "text": "S0 + X",
            "sourceText": "S0 + X"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: S0 + P. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      }
    ]
  }
];

export const totalQuestionCount = chapters.reduce((total, chapter) => total + chapter.questions.length, 0);
