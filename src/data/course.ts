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
            "text": "trên một nghìn tỷ đô la nhưng ít hơn một trăm nghìn tỷ",
            "sourceText": "over a trillion dollars but less than a hundred trillion"
          },
          {
            "id": "D",
            "text": "hơn triệu tỷ đô la",
            "sourceText": "over quadrillion dollars"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: trên một nghìn tỷ đô la nhưng ít hơn một trăm nghìn tỷ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q2",
        "number": "2",
        "prompt": "thị trường tiền mặt/giao ngay còn được gọi là thị trường tiền mặt",
        "sourcePrompt": "Cash markets are also known as",
        "options": [
          {
            "id": "A",
            "text": "thị trường đầu cơ",
            "sourceText": "speculative markets"
          },
          {
            "id": "B",
            "text": "thị trường giao ngay (spot markets)",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: thị trường giao ngay (spot markets). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q3",
        "number": "3",
        "prompt": "Quyền chọn mua (quyền chọn mua) mang lại cho người nắm giữ",
        "sourcePrompt": "A call option gives the holder",
        "options": [
          {
            "id": "A",
            "text": "quyền mua cái gì đó",
            "sourceText": "the right to buy something"
          },
          {
            "id": "B",
            "text": "quyền bán cái gì đó",
            "sourceText": "the right to sell something"
          },
          {
            "id": "C",
            "text": "nghĩa vụ phải mua cái gì đó",
            "sourceText": "the obligation to buy something"
          },
          {
            "id": "D",
            "text": "nghĩa vụ phải bán một cái gì đó",
            "sourceText": "the obligation to sell something"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: quyền mua cái gì đó. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
            "text": "a và b",
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
            "text": "hiệu quả thị trường",
            "sourceText": "market efficiency"
          },
          {
            "id": "C",
            "text": "quy luật một giá",
            "sourceText": "the law of one price"
          },
          {
            "id": "D",
            "text": "kinh doanh chênh lệch giá",
            "sourceText": "arbitrage"
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
        "id": "c1-q6",
        "number": "6",
        "prompt": "Giao dịch trong đó nhà đầu tư nắm giữ vị thế trên thị trường giao ngay (thị trường giao ngay) và bán hợp đồng tương lai (hợp đồng tương lai) hoặc viết lệnh mua là",
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
            "text": "một hàng rào",
            "sourceText": "a hedge"
          },
          {
            "id": "D",
            "text": "giao dịch không rủi ro",
            "sourceText": "a risk-free transaction"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một hàng rào. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q7",
        "number": "7",
        "prompt": "Điều nào sau đây là ưu điểm của công cụ phái sinh?",
        "sourcePrompt": "Which of the following are advantages of derivatives?",
        "options": [
          {
            "id": "A",
            "text": "chi phí giao dịch thấp hơn chứng khoán và hàng hóa",
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
            "text": "làm cho giá giao ngay gần với giá trị thực của chúng hơn",
            "sourceText": "make spot prices stay closer to their true values"
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
        "id": "c1-q8",
        "number": "8",
        "prompt": "Hợp đồng kỳ hạn có đặc điểm nào sau đây?",
        "sourcePrompt": "A forward contract has which of the following characteristics?",
        "options": [
          {
            "id": "A",
            "text": "có người mua và người bán",
            "sourceText": "has a buyer and a seller"
          },
          {
            "id": "B",
            "text": "giao dịch trên sàn giao dịch có tổ chức",
            "sourceText": "trades on an organized exchange"
          },
          {
            "id": "C",
            "text": "có một khoản thanh toán hàng ngày",
            "sourceText": "has a daily settlement"
          },
          {
            "id": "D",
            "text": "trao quyền nhưng không có nghĩa vụ mua",
            "sourceText": "gives the right but not the obligation to buy"
          },
          {
            "id": "E",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: có người mua và người bán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q9",
        "number": "9",
        "prompt": "Quyền chọn về tương lai còn được gọi là",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quyền chọn hàng hóa. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q10",
        "number": "10",
        "prompt": "Một thị trường trong đó giá bằng giá trị kinh tế thực sự",
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
            "text": "hiệu quả",
            "sourceText": "is efficient"
          },
          {
            "id": "E",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: hiệu quả. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q11",
        "number": "11",
        "prompt": "Giao dịch nào sau đây trên các sàn giao dịch có tổ chức?",
        "sourcePrompt": "Which of the following trades on organized exchanges?",
        "options": [
          {
            "id": "A",
            "text": "mũ lưỡi trai",
            "sourceText": "caps"
          },
          {
            "id": "B",
            "text": "chuyển tiếp",
            "sourceText": "forwards"
          },
          {
            "id": "C",
            "text": "quyền chọn",
            "sourceText": "options"
          },
          {
            "id": "D",
            "text": "hoán đổi",
            "sourceText": "swaps"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q12",
        "number": "12",
        "prompt": "Thị trường nào sau đây được cho là cung cấp khả năng khám phá giá?",
        "sourcePrompt": "Which of the following markets is/are said to provide price discovery?",
        "options": [
          {
            "id": "A",
            "text": "tương lai",
            "sourceText": "futures"
          },
          {
            "id": "B",
            "text": "chuyển tiếp",
            "sourceText": "forwards"
          },
          {
            "id": "C",
            "text": "quyền chọn",
            "sourceText": "options"
          },
          {
            "id": "D",
            "text": "a và b",
            "sourceText": "a and b"
          },
          {
            "id": "E",
            "text": "b và c",
            "sourceText": "b and c"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: a và b. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q13",
        "number": "13",
        "prompt": "Các nhà đầu tư không xem xét rủi ro trong quyết định của mình được cho là",
        "sourcePrompt": "Investors who do not consider risk in their decisions are said to be",
        "options": [
          {
            "id": "A",
            "text": "suy đoán",
            "sourceText": "speculating"
          },
          {
            "id": "B",
            "text": "bán khống",
            "sourceText": "short selling"
          },
          {
            "id": "C",
            "text": "ro ro trung lập (không có rủi ro)",
            "sourceText": "risk neutral"
          },
          {
            "id": "D",
            "text": "thương nhân",
            "sourceText": "traders"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: ro ro trung lập (không có rủi ro). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q14",
        "number": "14",
        "prompt": "Phát biểu nào sau đây không đúng về quy luật một giá",
        "sourcePrompt": "Which of the following statements is not true about the law of one price",
        "options": [
          {
            "id": "A",
            "text": "các nhà đầu tư thích nhiều của cải hơn ít",
            "sourceText": "investors prefer more wealth to less"
          },
          {
            "id": "B",
            "text": "các khoản đầu tư mang lại lợi nhuận như nhau ở tất cả các bang phải trả lãi suất phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "investments that offer the same return in all states must pay the risk-free rate"
          },
          {
            "id": "C",
            "text": "nếu hai cơ hội đầu tư mang lại kết quả tương đương thì chúng phải có cùng mức giá",
            "sourceText": "if two investment opportunities offer equivalent outcomes, they must have the same price"
          },
          {
            "id": "D",
            "text": "nhà đầu tư đang trung lập rủi ro ro (risk neutral)",
            "sourceText": "investors are risk neutral"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nhà đầu tư đang trung lập rủi ro ro (risk neutral). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q15",
        "number": "15",
        "prompt": "Hợp đồng nào sau đây bắt buộc người mua phải mua hoặc bán một thứ gì đó sau này?",
        "sourcePrompt": "Which of the following contracts obligates a buyer to buy or sell something at a later date?",
        "options": [
          {
            "id": "A",
            "text": "gọi",
            "sourceText": "call"
          },
          {
            "id": "B",
            "text": "tương lai",
            "sourceText": "futures"
          },
          {
            "id": "C",
            "text": "mũ lưỡi trai",
            "sourceText": "cap"
          },
          {
            "id": "D",
            "text": "put",
            "sourceText": "put"
          },
          {
            "id": "E",
            "text": "trao đổi",
            "sourceText": "swaption"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q16",
        "number": "16",
        "prompt": "Quá trình tạo ra các sản phẩm tài chính mới đôi khi được gọi là",
        "sourcePrompt": "The process of creating new financial products is sometimes referred to as",
        "options": [
          {
            "id": "A",
            "text": "ranh giới tài chính",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: kỹ thuật tài chính. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q17",
        "number": "17",
        "prompt": "Quá trình bán tài sản đi vay với ý định mua lại vào thời điểm sau đó với giá thấp hơn được gọi là",
        "sourcePrompt": "The process of selling borrowed assets with the intention of buying them back at a later date and lower price is referred to as",
        "options": [
          {
            "id": "A",
            "text": "khao khát một tài sản",
            "sourceText": "longing an asset"
          },
          {
            "id": "B",
            "text": "lật đổ tài sản",
            "sourceText": "asset flipping"
          },
          {
            "id": "C",
            "text": "rút ngắn",
            "sourceText": "shorting"
          },
          {
            "id": "D",
            "text": "chênh lệch giá giảm dự đoán",
            "sourceText": "anticipated price fall arbitrage"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: rút ngắn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q18",
        "number": "18",
        "prompt": "Trong một trong các loại hợp đồng sau đây giữa người bán và người mua, người bán đồng ý bán một tài sản cụ thể cho người mua hôm nay và sau đó mua lại tài sản đó vào một thời điểm nhất định trong tương lai với mức giá đã thỏa thuận trong tương lai.",
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
            "text": "trao đổi",
            "sourceText": "swap"
          },
          {
            "id": "D",
            "text": "gọi",
            "sourceText": "call"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: thỏa thuận mua lại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q19",
        "number": "19",
        "prompt": "Lợi nhuận kỳ vọng trừ đi lãi suất phi rủi ro (lãi suất phi rủi ro) được gọi là",
        "sourcePrompt": "The expected return minus the risk-free rate is called",
        "options": [
          {
            "id": "A",
            "text": "lựa chọn quyền rủi ro (cao cấp)",
            "sourceText": "the risk premium"
          },
          {
            "id": "B",
            "text": "phần trăm lợi nhuận",
            "sourceText": "the percentage return"
          },
          {
            "id": "C",
            "text": "phiên bản beta của nội dung",
            "sourceText": "the asset’s beta"
          },
          {
            "id": "D",
            "text": "lựa chọn quyền trả lại (cao cấp)",
            "sourceText": "the return premium"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lựa chọn quyền rủi ro (cao cấp). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c1-q20",
        "number": "20",
        "prompt": "Khi quy luật một giá bị vi phạm ở chỗ cùng một mặt hàng được bán với hai mức giá khác nhau thì cơ hội cho loại giao dịch nào sẽ được tạo ra?",
        "sourcePrompt": "When the law of one price is violated in that the same good is selling for two different prices, an opportunity for what type of transaction is created?",
        "options": [
          {
            "id": "A",
            "text": "giao dịch trở lại trạng thái cân bằng",
            "sourceText": "return-to-equilibrium transaction"
          },
          {
            "id": "B",
            "text": "giao dịch chấp nhận rủi ro",
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
            "text": "không có đáp án nào ở trên",
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
        "prompt": "Xác định tuyên bố đúng về các sàn giao dịch phái sinh lớn nhất.",
        "sourcePrompt": "Identify the true statement regarding the largest derivatives exchanges.",
        "options": [
          {
            "id": "A",
            "text": "CME Group là một trong năm sàn giao dịch phái sinh lớn nhất, dựa trên khối lượng",
            "sourceText": "CME Group is one of the top five largest derivatives exchange, based on volume"
          },
          {
            "id": "B",
            "text": "Sàn giao dịch liên lục địa là một trong năm sàn giao dịch phái sinh lớn nhất hàng đầu, dựa trên khối lượng",
            "sourceText": "Intercontinental Exchange is one of the top five largest derivatives exchange, based on volume"
          },
          {
            "id": "C",
            "text": "Khối lượng giao dịch vượt quá một tỷ trên mỗi sàn trong số năm sàn giao dịch phái sinh hàng đầu",
            "sourceText": "The volume of trading exceeded one billion on each of the top five derivatives exchanges"
          },
          {
            "id": "D",
            "text": "Trong số 20 sàn giao dịch phái sinh hàng đầu, có sự góp mặt của một số châu lục khác nhau.",
            "sourceText": "Among the top 20 derivatives exchanges, several different continents are represented"
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
        "id": "c2-q2",
        "number": "2",
        "prompt": "Quyền chọn mua (quyền chọn mua) có giá 2 USD với giá cổ phiếu là 30 USD và giá thực hiện (giá thực hiện) là 35 USD cho phép người nắm giữ mua cổ phiếu ở mức",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $35. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q3",
        "number": "3",
        "prompt": "Một quyền chọn bán (put option) trong đó giá cổ phiếu là 60 USD và giá thực hiện (giá thực hiện) là 65 USD được cho là",
        "sourcePrompt": "A put option in which the stock price is $60 and the exercise price is $65 is said to be",
        "options": [
          {
            "id": "A",
            "text": "có tiền",
            "sourceText": "in-the-money"
          },
          {
            "id": "B",
            "text": "hết tiền",
            "sourceText": "out-of-the-money"
          },
          {
            "id": "C",
            "text": "bằng tiền",
            "sourceText": "at-the-money"
          },
          {
            "id": "D",
            "text": "có thể thực hiện được",
            "sourceText": "exercisable"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: có tiền. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q4",
        "number": "4",
        "prompt": "Thị trường quyền chọn có tổ chức khác với thị trường quyền chọn phi tập trung vì tất cả các lý do sau, ngoại trừ:",
        "sourcePrompt": "Organized options markets are different from over-the-counter options markets for all of the following reasons except",
        "options": [
          {
            "id": "A",
            "text": "điều khoản tập thể dục",
            "sourceText": "exercise terms"
          },
          {
            "id": "B",
            "text": "sàn giao dịch vật chất",
            "sourceText": "physical trading floor"
          },
          {
            "id": "C",
            "text": "quy định",
            "sourceText": "regulation"
          },
          {
            "id": "D",
            "text": "hợp đồng tiêu chuẩn hóa",
            "sourceText": "standardized contracts"
          },
          {
            "id": "E",
            "text": "rủi ro tín dụng",
            "sourceText": "credit risk"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: điều khoản tập thể dục. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q5",
        "number": "5",
        "prompt": "Số quyền chọn có được khi mua một hợp đồng trên sàn giao dịch là",
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
            "text": "8.000",
            "sourceText": "8,000"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 100. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q6",
        "number": "6",
        "prompt": "Ưu điểm của thị trường quyền chọn phi tập trung bao gồm tất cả những điều sau, ngoại trừ:",
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
            "text": "tự do khỏi sự điều tiết của chính phủ",
            "sourceText": "freedom from government regulation"
          },
          {
            "id": "D",
            "text": "giá thấp hơn",
            "sourceText": "lower prices"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
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
            "text": "bid-ask chênh lệch",
            "sourceText": "the bid-ask spread"
          },
          {
            "id": "B",
            "text": "hoa hồng",
            "sourceText": "the commission"
          },
          {
            "id": "C",
            "text": "phí thanh toán bù trừ",
            "sourceText": "clearing fees"
          },
          {
            "id": "D",
            "text": "chi phí để có được báo giá",
            "sourceText": "the cost of obtaining a quote"
          },
          {
            "id": "E",
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: chi phí để có được báo giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q8",
        "number": "8",
        "prompt": "Nếu nhà tạo lập thị trường (nhà tạo lập thị trường) mua với giá 4 và bán với giá 4,50 thì chênh lệch bid-ask là",
        "sourcePrompt": "If the market maker will buy at 4 and sell at 4.50, the bid-ask spread is",
        "options": [
          {
            "id": "A",
            "text": "8 giờ 50",
            "sourceText": "8.50"
          },
          {
            "id": "B",
            "text": "4,25",
            "sourceText": "4.25"
          },
          {
            "id": "C",
            "text": "0,50",
            "sourceText": "0.50"
          },
          {
            "id": "D",
            "text": "4 giờ 00",
            "sourceText": "4.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 0,50. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q9",
        "number": "9",
        "prompt": "Loại lệnh quyền chọn nào sau đây là hợp pháp trên sàn giao dịch?",
        "sourcePrompt": "Which of the following is a legitimate type of option order on the exchange?",
        "options": [
          {
            "id": "A",
            "text": "đơn put hàng",
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
            "text": "Tất cả các câu trả lời trên",
            "sourceText": "all of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lệnh giới hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q10",
        "number": "10",
        "prompt": "Giá thực hiện (giá thực hiện) có thể được put ở bất kỳ mức mong muốn nào đối với mỗi loại quyền chọn sau ngoại trừ",
        "sourcePrompt": "The exercise price can be set at any desired level on each of the following types of options except",
        "options": [
          {
            "id": "A",
            "text": "Quyền chọn FLEX",
            "sourceText": "FLEX options"
          },
          {
            "id": "B",
            "text": "quyền chọn vốn sở hữu",
            "sourceText": "equity options"
          },
          {
            "id": "C",
            "text": "các lựa chọn không cần kê toa",
            "sourceText": "over-the-counter options"
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quyền chọn vốn sở hữu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Nhiệm vụ nào sau đây không phải là nhiệm vụ của nhà tạo lập thị trường?",
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
            "text": "cung cấp sự minh bạch về giá",
            "sourceText": "provide price transparency"
          },
          {
            "id": "D",
            "text": "làm việc như một chuyên gia duy nhất",
            "sourceText": "work as a sole specialist"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: làm việc như một chuyên gia duy nhất. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q13",
        "number": "13",
        "prompt": "Giá quyền chọn còn được gọi là giá",
        "sourcePrompt": "The option price is also referred to as the",
        "options": [
          {
            "id": "A",
            "text": "đình công",
            "sourceText": "strike"
          },
          {
            "id": "B",
            "text": "lây lan",
            "sourceText": "spread"
          },
          {
            "id": "C",
            "text": "quyền chọn quyền (cao cấp)",
            "sourceText": "premium"
          },
          {
            "id": "D",
            "text": "lệ phí",
            "sourceText": "fee"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: quyền chọn quyền (cao cấp). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q14",
        "number": "14",
        "prompt": "Điều khoản hợp đồng nào sau đây không được quy định bởi sàn giao dịch tương lai?",
        "sourcePrompt": "Which of the following contract terms is not set by the futures exchange?",
        "options": [
          {
            "id": "A",
            "text": "ngày giao hàng có thể diễn ra",
            "sourceText": "the dates on which delivery can occur"
          },
          {
            "id": "B",
            "text": "những tháng hết hạn",
            "sourceText": "the expiration months"
          },
          {
            "id": "C",
            "text": "giá cả",
            "sourceText": "the price"
          },
          {
            "id": "D",
            "text": "hàng hóa có thể giao được",
            "sourceText": "the deliverable commodities"
          },
          {
            "id": "E",
            "text": "quy mô hợp đồng",
            "sourceText": "the size of the contract"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá cả. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q15",
        "number": "15",
        "prompt": "Nếu một nhà đầu tư thực hiện một công cụ phái sinh thanh toán bằng tiền mặt,",
        "sourcePrompt": "If an investor exercises a cash settled derivative,",
        "options": [
          {
            "id": "A",
            "text": "giao dịch chỉ đòi hỏi một mục ghi sổ kế toán",
            "sourceText": "the transaction entails only a bookkeeping entry"
          },
          {
            "id": "B",
            "text": "phải mua công cụ cơ bản từ người bán quyền chọn",
            "sourceText": "must purchase the underlying instrument from the writer"
          },
          {
            "id": "C",
            "text": "mua ngay quyền chọn bán (put option) để bù đắp quyền chọn mua (call option)",
            "sourceText": "immediately buy a put option to offset the call option"
          },
          {
            "id": "D",
            "text": "viết ngay quyền chọn mua (call option) khác để bù đắp",
            "sourceText": "immediately write another call option to offset"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giao dịch chỉ đòi hỏi một mục ghi sổ kế toán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q16",
        "number": "16",
        "prompt": "Tổ chức nào sau đây có cơ quan quản lý cuối cùng trong ngành tương lai?",
        "sourcePrompt": "Which of the following organizations has the ultimate regulatory authority in the futures industry?",
        "options": [
          {
            "id": "A",
            "text": "Hiệp hội Tương lai Quốc gia",
            "sourceText": "National Futures Association"
          },
          {
            "id": "B",
            "text": "Ủy ban giao dịch hàng hóa tương lai",
            "sourceText": "Commodity Futures Trading Commission"
          },
          {
            "id": "C",
            "text": "Cơ quan trao đổi hàng hóa",
            "sourceText": "Commodity Exchange Authority"
          },
          {
            "id": "D",
            "text": "Ủy ban Chứng khoán và Giao dịch",
            "sourceText": "Securities and Exchange Commission"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Ủy ban giao dịch hàng hóa tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q17",
        "number": "17",
        "prompt": "Sàn giao dịch phái sinh có khối lượng giao dịch lớn nhất là sàn giao dịch phái sinh",
        "sourcePrompt": "The derivatives exchange with the largest trading volume is the",
        "options": [
          {
            "id": "A",
            "text": "Sở giao dịch Moscow",
            "sourceText": "Moscow Exchange"
          },
          {
            "id": "B",
            "text": "Nasdaq OMX",
            "sourceText": "Nasdaq OMX"
          },
          {
            "id": "C",
            "text": "Tập đoàn CME",
            "sourceText": "CME Group"
          },
          {
            "id": "D",
            "text": "Sở giao dịch chứng khoán Thái Bình Dương",
            "sourceText": "Pacific Stock Exchange"
          },
          {
            "id": "E",
            "text": "Sở giao dịch chứng khoán quốc gia Ấn Độ",
            "sourceText": "National Stock Exchange of India"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Tập đoàn CME. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q18",
        "number": "18",
        "prompt": "Một người bán quyền chọn được chọn để thực hiện một lựa chọn được cho là",
        "sourcePrompt": "A writer selected to exercise an option is said to be",
        "options": [
          {
            "id": "A",
            "text": "cận biên",
            "sourceText": "marginal"
          },
          {
            "id": "B",
            "text": "được giao",
            "sourceText": "assigned"
          },
          {
            "id": "C",
            "text": "bị hạn chế",
            "sourceText": "restricted"
          },
          {
            "id": "D",
            "text": "được chỉ định",
            "sourceText": "designated"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: được giao. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q19",
        "number": "19",
        "prompt": "Tất cả những điều sau đây đều là hình thức lựa chọn ngoại trừ",
        "sourcePrompt": "All of the following are forms of options except",
        "options": [
          {
            "id": "A",
            "text": "trái phiếu chuyển đổi",
            "sourceText": "convertible bonds"
          },
          {
            "id": "B",
            "text": "trái phiếu có thể gọi được",
            "sourceText": "callable bonds"
          },
          {
            "id": "C",
            "text": "trái phiếu có thể bán được",
            "sourceText": "puttable bonds"
          },
          {
            "id": "D",
            "text": "quỹ tương hỗ",
            "sourceText": "mutual funds"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: quỹ tương hỗ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q20",
        "number": "20",
        "prompt": "Nếu ký quỹ ban đầu (ký quỹ ban đầu) là $5.000, ký quỹ duy trì (ký quỹ duy trì) là $3.500 và số dư của bạn là $4.000, bạn phải put cọc bao nhiêu?",
        "sourcePrompt": "If the initial margin is $5,000, the maintenance margin is $3,500 and your balance is $4,000, how much must you deposit?",
        "options": [
          {
            "id": "A",
            "text": "không có gì",
            "sourceText": "nothing"
          },
          {
            "id": "B",
            "text": "6.000 USD",
            "sourceText": "$6,000"
          },
          {
            "id": "C",
            "text": "1.500 USD",
            "sourceText": "$1,500"
          },
          {
            "id": "D",
            "text": "9.000 USD",
            "sourceText": "$9,000"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: không có gì. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Chicago. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q22",
        "number": "22A",
        "prompt": "Nếu ký quỹ ban đầu (ký quỹ ban đầu) là $5.000, ký quỹ duy trì (ký quỹ duy trì) là $3.500 và số dư của bạn là $3.100, bạn phải put cọc bao nhiêu?",
        "sourcePrompt": "If the initial margin is $5,000, the maintenance margin is $3,500 and your balance is $3,100, how much must you deposit?",
        "options": [
          {
            "id": "A",
            "text": "1.500 USD",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $1,900. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q23",
        "number": "22B",
        "prompt": "Một lệnh quy định mức giá tối đa phải trả nếu việc mua là một",
        "sourcePrompt": "An order that specifies a maximum price to pay if buying is a",
        "options": [
          {
            "id": "A",
            "text": "dừng lệnh",
            "sourceText": "stop order"
          },
          {
            "id": "B",
            "text": "trật tự thị trường",
            "sourceText": "market order"
          },
          {
            "id": "C",
            "text": "lệnh giới hạn",
            "sourceText": "limit order"
          },
          {
            "id": "D",
            "text": "tất cả hoặc không có thứ tự nào",
            "sourceText": "all or none order"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: lệnh giới hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q24",
        "number": "23",
        "prompt": "Người bán quyền chọn mua (người bán quyền chọn call) phải trả số tiền bao nhiêu nếu call chỉ số thanh toán bằng tiền mặt được thực hiện?",
        "sourcePrompt": "What amount must a call writer pay if a cash–settled index call is exercised?",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch giữa mức chỉ số và giá thực hiện (giá thực hiện)",
            "sourceText": "difference between the index level and the exercise price"
          },
          {
            "id": "B",
            "text": "giá thực hiện (giá thực hiện)",
            "sourceText": "exercise price"
          },
          {
            "id": "C",
            "text": "chênh lệch giữa giá thực hiện (giá thực hiện) và mức chỉ số",
            "sourceText": "difference between the exercise price and the index level"
          },
          {
            "id": "D",
            "text": "mức chỉ số",
            "sourceText": "index level"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: chênh lệch giữa giá thực hiện (giá thực hiện) và mức chỉ số. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q25",
        "number": "24",
        "prompt": "Người giao dịch quyền chọn phải chịu những loại chi phí nào sau đây?",
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
            "text": "a và b",
            "sourceText": "a and b"
          },
          {
            "id": "E",
            "text": "a, b và c",
            "sourceText": "a, b and c"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: a, b và c. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q26",
        "number": "25",
        "prompt": "Tổng số hợp đồng quyền chọn mua đang tồn đọng tại bất kỳ thời điểm nào được gọi là",
        "sourcePrompt": "The total number of long option contracts outstanding at any given time is called the",
        "options": [
          {
            "id": "A",
            "text": "vốn hóa thị trường",
            "sourceText": "market cap"
          },
          {
            "id": "B",
            "text": "tổng số quyền chọn chưa thanh toán (SOO)",
            "sourceText": "sum options outstanding (SOO)"
          },
          {
            "id": "C",
            "text": "quyền chọn có giá trị vượt trội (OWO)",
            "sourceText": "option wealth outstanding (OWO)"
          },
          {
            "id": "D",
            "text": "hợp đồng mở số (open interest)",
            "sourceText": "open interest"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: hợp đồng mở số (open interest). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q27",
        "number": "26A",
        "prompt": "Số lượng vị thế mua hoặc bán tương lai đang lưu hành được gọi là",
        "sourcePrompt": "The number of long or short futures positions outstanding is called the",
        "options": [
          {
            "id": "A",
            "text": "vị trí có thể báo cáo",
            "sourceText": "reportable position"
          },
          {
            "id": "B",
            "text": "hợp đồng mở số (open interest)",
            "sourceText": "open interest"
          },
          {
            "id": "C",
            "text": "khối lượng tối thiểu",
            "sourceText": "minimum volume"
          },
          {
            "id": "D",
            "text": "vị trí lan truyền",
            "sourceText": "spread position"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hợp đồng mở số (open interest). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Trung gian nào đảm bảo hiệu quả hoạt động của người bán quyền chọn?",
        "sourcePrompt": "What intermediary guarantees an option writer’s performance?",
        "options": [
          {
            "id": "A",
            "text": "công ty xếp hạng tín nhiệm",
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
            "text": "trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ)",
            "sourceText": "clearinghouse"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q30",
        "number": "28",
        "prompt": "Giả sử bạn có quyền chọn mua (call option). Giá cổ phiếu gần đây đang tăng lên khiến quyền chọn mua (call option) của bạn trở nên có giá trị hơn. Bạn có thể tận dụng tính chất lỏng của thị trường quyền chọn thông qua quá trình nào?",
        "sourcePrompt": "Suppose you hold a call option. The stock price has recently been increasing-making your call option more valuable. Through what process might you take advantage of the liquid nature of the options market?",
        "options": [
          {
            "id": "A",
            "text": "lệnh bù trừ",
            "sourceText": "offsetting order"
          },
          {
            "id": "B",
            "text": "hòa giải hợp đồng",
            "sourceText": "contract reconciliation"
          },
          {
            "id": "C",
            "text": "đánh dấu theo thị trường (mark-to-market) order",
            "sourceText": "mark to market order"
          },
          {
            "id": "D",
            "text": "giải quyết",
            "sourceText": "settling up"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lệnh bù trừ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Chicago. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q32",
        "number": "30",
        "prompt": "ký hiệu biến đổi (biên độ biến đổi) là ký tự nào sau đây?",
        "sourcePrompt": "Variation margin is which of the following?",
        "options": [
          {
            "id": "A",
            "text": "ký quỹ ký quỹ do đánh dấu theo thị trường (mark-to-market)",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: ký quỹ ký quỹ do đánh dấu theo thị trường (mark-to-market). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q33",
        "number": "31",
        "prompt": "Nhiệm vụ nào sau đây không được thực hiện bởi trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ)?",
        "sourcePrompt": "Which of the following duties is not performed by the clearinghouse?",
        "options": [
          {
            "id": "A",
            "text": "nắm giữ tiền gửi ký quỹ",
            "sourceText": "holding margin deposits"
          },
          {
            "id": "B",
            "text": "đảm bảo hiệu suất của người mua và người bán quyền chọn",
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
            "text": "không có đáp án nào ở trên",
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
        "prompt": "Một hợp đồng tương lai (hợp đồng tương lai) có giá trị 5000 bảng Anh với mức thay đổi giá tối thiểu là 0,01 USD được bán với giá 31,60 USD mỗi bảng Anh. Nếu ký quỹ ban đầu (ký quỹ ban đầu) là $2,525 và ký quỹ duy trì (ký quỹ duy trì) là $1,000, thì ở mức giá nào sẽ có một call ký quỹ (gọi ký quỹ)?",
        "sourcePrompt": "A futures contract covers 5000 pounds with a minimum price change of $0.01 is sold for $31.60 per pound. If the initial margin is $2,525 and the maintenance margin is $1,000, at what price would there be a margin call?",
        "options": [
          {
            "id": "A",
            "text": "31,91",
            "sourceText": "31.91"
          },
          {
            "id": "B",
            "text": "32.11",
            "sourceText": "32.11"
          },
          {
            "id": "C",
            "text": "31,29",
            "sourceText": "31.29"
          },
          {
            "id": "D",
            "text": "31.09",
            "sourceText": "31.09"
          },
          {
            "id": "E",
            "text": "31:80",
            "sourceText": "31.80"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 31,91. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q36",
        "number": "34",
        "prompt": "Một trong những lợi ích của thị trường kỳ hạn là",
        "sourcePrompt": "One of the advantages of forward markets is",
        "options": [
          {
            "id": "A",
            "text": "hiệu suất được đảm bảo bởi G-30",
            "sourceText": "performance is guaranteed by the G-30"
          },
          {
            "id": "B",
            "text": "giao dịch được thực hiện vào buổi tối trên máy tính",
            "sourceText": "trading is conducted in the evening over computers"
          },
          {
            "id": "C",
            "text": "các hợp đồng là riêng tư và được tùy chỉnh",
            "sourceText": "the contracts are private and customized"
          },
          {
            "id": "D",
            "text": "giao dịch ít tốn kém hơn và bị chi phối bởi nhiều quy tắc hơn",
            "sourceText": "trading is less costly and governed by more rules"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: các hợp đồng là riêng tư và được tùy chỉnh. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q37",
        "number": "35",
        "prompt": "Những cá nhân tham gia vào loại chiến lược giao dịch này có đặc điểm là nỗ lực kiếm lợi nhuận từ việc đoán hướng thị trường.",
        "sourcePrompt": "Individuals engaging in this type of trading strategy are characterized by their attempt to profit from guessing the direction of the market",
        "options": [
          {
            "id": "A",
            "text": "người làm hàng rào",
            "sourceText": "hedgers"
          },
          {
            "id": "B",
            "text": "máy rải",
            "sourceText": "spreaders"
          },
          {
            "id": "C",
            "text": "những kẻ đầu cơ",
            "sourceText": "speculators"
          },
          {
            "id": "D",
            "text": "những người trọng tài",
            "sourceText": "arbitraguers"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: những kẻ đầu cơ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q38",
        "number": "36",
        "prompt": "Mặc dù thực tế là hợp đồng kỳ hạn (hợp đồng kỳ hạn) tiềm ẩn nhiều rủi ro tín dụng hơn hợp đồng tương lai (hợp đồng tương lai), nhưng hợp đồng kỳ hạn (hợp đồng kỳ hạn) mang lại lợi thế cơ bản nào so với hợp đồng tương lai (hợp đồng tương lai)?",
        "sourcePrompt": "Despite the fact that forward contracts carry more credit risk than futures contracts, forward contracts offer what primary advantage over futures contracts?",
        "options": [
          {
            "id": "A",
            "text": "thị trường kỳ hạn phi tập trung là một thị trường được quản lý chặt chẽ",
            "sourceText": "the over-the-counter forward market is a highly regulated market"
          },
          {
            "id": "B",
            "text": "hợp đồng kỳ hạn (hợp đồng kỳ hạn) ngăn cản người bán quyền chọn chấp nhận rủi ro tín dụng của người mua",
            "sourceText": "forward contracts prevent the writer from assuming the credit risk of the buyer"
          },
          {
            "id": "C",
            "text": "các điều khoản và điều kiện được điều chỉnh phù hợp với nhu cầu cụ thể của hai bên liên quan",
            "sourceText": "terms and conditions are tailored to the specific needs of the two parties involved"
          },
          {
            "id": "D",
            "text": "thông tin giao dịch giữa hai bên liên quan đến hợp đồng kỳ hạn (hợp đồng kỳ hạn) được công bố rộng rãi",
            "sourceText": "transaction information between the two parties involved in the forward contract is readily available to the public"
          },
          {
            "id": "E",
            "text": "các điều kiện của hợp đồng kỳ hạn (hợp đồng kỳ hạn), chẳng hạn như ngày và địa điểm giao hàng, không thể thay đổi",
            "sourceText": "conditions of the forward contract, such as delivery date and location, cannot be altered"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: các điều khoản và điều kiện được điều chỉnh phù hợp với nhu cầu cụ thể của hai bên liên quan. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c2-q39",
        "number": "37",
        "prompt": "Điều nào sau đây sắp xếp đúng quy trình quyết toán hàng ngày?",
        "sourcePrompt": "Which of the following correctly orders the process of daily settlement?",
        "options": [
          {
            "id": "A",
            "text": "quan chức trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ) ấn định giá quyết toán; mỗi tài khoản được đánh dấu theo thị trường (mark-to-market); tài khoản của những người nắm giữ vị thế mua/bán được ghi có/ghi nợ phù hợp; chênh lệch giữa giá thanh toán ngày hôm nay và giá thanh toán ngày hôm trước được xác định",
            "sourceText": "clearinghouse officials establish a settlement price; each account is marked to market; accounts of those holding long/short positions are credited/debited appropriately; differences between today’s settlement price and the previous days settlement price are determined"
          },
          {
            "id": "B",
            "text": "quan chức trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ) ấn định giá quyết toán; mỗi tài khoản được đánh dấu theo thị trường (mark-to-market); xác định chênh lệch giữa giá thanh toán ngày hôm nay và giá thanh toán ngày hôm trước; tài khoản của những người nắm giữ vị thế mua/bán được ghi có/ghi nợ phù hợp",
            "sourceText": "clearinghouse officials establish a settlement price; each account is marked to market; differences between today’s settlement price and the previous day’s settlement price are determined; accounts of those holding long/short positions are credited/debited appropriately"
          },
          {
            "id": "C",
            "text": "xác định chênh lệch giữa giá thanh toán ngày hôm nay và giá thanh toán ngày hôm trước; tài khoản được đánh dấu theo thị trường (mark-to-market); quan chức trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ) ấn định giá quyết toán; tài khoản của những người nắm giữ vị thế mua/bán được ghi có/ghi nợ phù hợp",
            "sourceText": "differences between today’s settlement price and the previous day’s settlement price are determined; accounts are marked to market; clearinghouse officials establish a settlement price; accounts of those holding long/short positions are credited/debited appropriately"
          },
          {
            "id": "D",
            "text": "quan chức trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ) ấn định giá quyết toán; xác định chênh lệch giữa giá thanh toán ngày hôm nay và giá thanh toán ngày hôm trước; tài khoản của những người nắm giữ vị thế mua/bán được ghi có/ghi nợ phù hợp; mỗi tài khoản được đánh dấu theo thị trường (mark-to-market)",
            "sourceText": "clearinghouse officials establish a settlement price; differences between today’s settlement price and the previous days settlement price are determined; accounts of those holding long/short positions are credited/debited appropriately; each account is marked to market"
          },
          {
            "id": "E",
            "text": "xác định chênh lệch giữa giá thanh toán ngày hôm nay và giá thanh toán ngày hôm trước; tài khoản được đánh dấu theo thị trường (mark-to-market); quan chức trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ) ấn định giá quyết toán; tài khoản của những người nắm giữ vị thế mua/bán được ghi có/ghi nợ phù hợp",
            "sourceText": "differences between today’s settlement price and the previous day’s settlement price are determined; accounts are marked to market; clearinghouse officials establish a settlement price; accounts of those holding long/short positions are credited/debited appropriately"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quan chức trung tâm thanh toán bù trừ (cơ quan thanh toán bù trừ) ấn định giá quyết toán; mỗi tài khoản được đánh dấu theo thị trường (mark-to-market); xác định chênh lệch giữa giá thanh toán ngày hôm nay và giá thanh toán ngày hôm trước; tài khoản của những người nắm giữ vị thế mua/bán được ghi có/ghi nợ phù hợp. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Hãy xem xét một danh mục đầu tư bao gồm quyền chọn mua với giá thực hiện (giá thực hiện) là X, trạng thái bán khống cổ phiếu không trả cổ tức với giá ban đầu là S0 và mua trái phiếu không rủi ro có mệnh giá X và đáo hạn khi quyền chọn mua hết hạn. Một danh mục đầu tư như vậy có giá trị gì?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q2",
        "number": "2",
        "prompt": "Giá trị thấp nhất có thể có của quyền chọn bán kiểu Châu Âu là bao nhiêu?",
        "sourcePrompt": "What is the lowest possible value of a European put?",
        "options": [
          {
            "id": "A",
            "text": "Tối đa(0, X – S0)",
            "sourceText": "Max(0, X – S0)"
          },
          {
            "id": "B",
            "text": "X(1 + r)-T",
            "sourceText": "X(1 + r)-T"
          },
          {
            "id": "C",
            "text": "Tối đa[0, S0 – X(1 + r)-T]",
            "sourceText": "Max[0, S0 – X(1 + r)-T]"
          },
          {
            "id": "D",
            "text": "Max[0, X(1 + r)-T – S0)]",
            "sourceText": "Max[0, X(1 + r)-T – S0)]"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
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
            "text": "sự ngang bằng",
            "sourceText": "parity"
          },
          {
            "id": "B",
            "text": "giá trị chẵn lẻ",
            "sourceText": "parity value"
          },
          {
            "id": "C",
            "text": "giá trị thực hiện",
            "sourceText": "exercise value"
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
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Tất cả các câu trả lời trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q4",
        "number": "4",
        "prompt": "Vào ngày 2 tháng 3, một tín phiếu kho bạc đáo hạn vào ngày 20 tháng 4 có chiết khấu mua vào là 5,86 và chiết khấu bán ra là 5,80. Ước tính tốt nhất về rủi ro phi rủi ro (tỷ lệ không có rủi ro) được đưa ra trong văn bản là bao nhiêu?",
        "sourcePrompt": "On March 2, a Treasury bill expiring on April 20 had a bid discount of 5.86, and an ask discount of 5.80. What is the best estimate of the risk-free rate as given in the text?",
        "options": [
          {
            "id": "A",
            "text": "5,86 %",
            "sourceText": "5.86 %"
          },
          {
            "id": "B",
            "text": "5,83 %",
            "sourceText": "5.83 %"
          },
          {
            "id": "C",
            "text": "6,11 %",
            "sourceText": "6.11 %"
          },
          {
            "id": "D",
            "text": "6,14 %",
            "sourceText": "6.14 %"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 6,11 %. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q5",
        "number": "5",
        "prompt": "Giả sử bạn sử dụng ngang bằng quyền chọn bán để tính giá quyền chọn mua kiểu Châu Âu từ giá quyền chọn kiểu Châu Âu, giá cổ phiếu và lãi suất phi rủi ro (lãi suất phi rủi ro). Bạn nhận thấy giá thị trường của quyền chọn mua thấp hơn giá được đưa ra theo ngang giá quyền chọn bán. Bỏ qua chi phí giao dịch, bạn nên thực hiện giao dịch gì?",
        "sourcePrompt": "Suppose you use put-call parity to compute a European call price from the European put price, the stock price, and the risk-free rate. You find the market price of the call to be less than the price given by put-call parity. Ignoring transaction costs, what trades should you do?",
        "options": [
          {
            "id": "A",
            "text": "mua quyền chọn mua và trái phiếu không rủi ro và bán quyền chọn bán và cổ phiếu",
            "sourceText": "buy the call and the risk-free bonds and sell the put and the stock"
          },
          {
            "id": "B",
            "text": "mua cổ phiếu và trái phiếu không rủi ro và bán quyền chọn bán và quyền chọn mua",
            "sourceText": "buy the stock and the risk-free bonds and sell the put and the call"
          },
          {
            "id": "C",
            "text": "mua quyền chọn bán và cổ phiếu, bán trái phiếu không rủi ro và quyền chọn mua",
            "sourceText": "buy the put and the stock and sell the risk-free bonds and the call"
          },
          {
            "id": "D",
            "text": "mua quyền chọn bán và quyền chọn bán, bán trái phiếu và cổ phiếu không rủi ro",
            "sourceText": "buy the put and the call and sell the risk-free bonds and the stock"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: mua quyền chọn mua và trái phiếu không rủi ro và bán quyền chọn bán và cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q6",
        "number": "6",
        "prompt": "Nếu không có cổ tức trên cổ phiếu, phát biểu nào sau đây là đúng?",
        "sourcePrompt": "If there are no dividends on a stock, which of the following statements is correct?",
        "options": [
          {
            "id": "A",
            "text": "Quyền chọn mua kiểu Mỹ sẽ được bán với giá cao hơn quyền chọn mua kiểu Châu Âu",
            "sourceText": "An American call will sell for more than a European call"
          },
          {
            "id": "B",
            "text": "Quyền chọn mua kiểu Châu Âu sẽ được bán với giá cao hơn quyền chọn mua kiểu Mỹ",
            "sourceText": "A European call will sell for more than an American call"
          },
          {
            "id": "C",
            "text": "Quyền chọn kiểu Mỹ sẽ được thực hiện ngay lập tức",
            "sourceText": "An American call will be immediately exercised"
          },
          {
            "id": "D",
            "text": "Một quyền chọn mua kiểu Mỹ và một quyền chọn bán kiểu Mỹ sẽ được bán với cùng mức giá",
            "sourceText": "An American call and an American put will sell for the same price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên Các báo giá sau đây được quan sát đối với các quyền chọn trên một cổ phiếu nhất định vào ngày 1 tháng 11 của một năm nhất định. Đây là các call của Mỹ trừ khi được chỉ định. Sử dụng thông tin để trả lời các câu hỏi từ 7 đến 20. Giá cổ phiếu là 113,25. Lãi suất phi rủi ro (lãi suất phi rủi ro) là 7,30% (tháng 11), 7,50% (tháng 12) và 7,62% (tháng 1). Thời gian hết hạn là 0,0384 (Tháng 11), 0,1342 (Tháng 12) và 0,211 (Tháng 1). Giả sử không có cổ tức trừ khi được chỉ định.",
            "sourceText": "none of the above The following quotes were observed for options on a given stock on November 1 of a given year. These are American calls except where indicated. Use the information to answer questions 7 through 20. The stock price was 113.25. The risk-free rates were 7.30 percent (November), 7.50 percent (December) and 7.62 percent (January). The times to expiration were 0.0384 (November), 0.1342 (December), and 0.211 (January). Assume no dividends unless indicated."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên Các báo giá sau đây được quan sát đối với các quyền chọn trên một cổ phiếu nhất định vào ngày 1 tháng 11 của một năm nhất định. Đây là các call của Mỹ trừ khi được chỉ định. Sử dụng thông tin để trả lời các câu hỏi từ 7 đến 20. Giá cổ phiếu là 113,25. Lãi suất phi rủi ro (lãi suất phi rủi ro) là 7,30% (tháng 11), 7,50% (tháng 12) và 7,62% (tháng 1). Thời gian hết hạn là 0,0384 (Tháng 11), 0,1342 (Tháng 12) và 0,211 (Tháng 1). Giả sử không có cổ tức trừ khi được chỉ định.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q7",
        "number": "7",
        "prompt": "Giá trị nội tại của quyền chọn bán ngày 115 tháng 12 là bao nhiêu?",
        "sourcePrompt": "What is the intrinsic value of the December 115 put?",
        "options": [
          {
            "id": "A",
            "text": "1,75",
            "sourceText": "1.75"
          },
          {
            "id": "B",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "3,90",
            "sourceText": "3.90"
          },
          {
            "id": "D",
            "text": "3,00",
            "sourceText": "3.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1,75. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q8",
        "number": "8",
        "prompt": "Giá trị nội tại của quyền chọn bán ngày 105 tháng 11 là bao nhiêu?",
        "sourcePrompt": "What is the intrinsic value of the November 105 put?",
        "options": [
          {
            "id": "A",
            "text": "0,30",
            "sourceText": "0.30"
          },
          {
            "id": "B",
            "text": "8,25",
            "sourceText": "8.25"
          },
          {
            "id": "C",
            "text": "8 giờ 50",
            "sourceText": "8.50"
          },
          {
            "id": "D",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 0,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q9",
        "number": "9",
        "prompt": "Giá trị nội tại của call 110 tháng 1 là gì?",
        "sourcePrompt": "What is the intrinsic value of the January 110 call?",
        "options": [
          {
            "id": "A",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "B",
            "text": "8h30",
            "sourceText": "8.30"
          },
          {
            "id": "C",
            "text": "3,75",
            "sourceText": "3.75"
          },
          {
            "id": "D",
            "text": "5 giờ 00",
            "sourceText": "5.00"
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
        "id": "c3-q10",
        "number": "10",
        "prompt": "Giá trị nội tại của call ngày 115 tháng 11 là gì?",
        "sourcePrompt": "What is the intrinsic value of the November 115 call?",
        "options": [
          {
            "id": "A",
            "text": "1,50",
            "sourceText": "1.50"
          },
          {
            "id": "B",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "2,80",
            "sourceText": "2.80"
          },
          {
            "id": "D",
            "text": "1,75",
            "sourceText": "1.75"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 0,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q11",
        "number": "11",
        "prompt": "Giá trị thời gian của quyền chọn bán ngày 105 tháng 12 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the December 105 put?",
        "options": [
          {
            "id": "A",
            "text": "1h30",
            "sourceText": "1.30"
          },
          {
            "id": "B",
            "text": "8h30",
            "sourceText": "8.30"
          },
          {
            "id": "C",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "D",
            "text": "7 giờ 00",
            "sourceText": "7.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1h30. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q12",
        "number": "12",
        "prompt": "Giá trị thời gian của quyền chọn bán ngày 115 tháng 11 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the November 115 put?",
        "options": [
          {
            "id": "A",
            "text": "1,75",
            "sourceText": "1.75"
          },
          {
            "id": "B",
            "text": "2,80",
            "sourceText": "2.80"
          },
          {
            "id": "C",
            "text": "1.10",
            "sourceText": "1.10"
          },
          {
            "id": "D",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên(1.05)",
            "sourceText": "none of the above(1.05)"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên(1.05). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q13",
        "number": "13",
        "prompt": "Giá trị thời gian của call 110 tháng 11 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the November 110 call?",
        "options": [
          {
            "id": "A",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "B",
            "text": "4 giờ 40",
            "sourceText": "4.40"
          },
          {
            "id": "C",
            "text": "1,15",
            "sourceText": "1.15"
          },
          {
            "id": "D",
            "text": "3,25",
            "sourceText": "3.25"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 1,15. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q14",
        "number": "14",
        "prompt": "Giá trị thời gian của call 115 tháng 1 là bao nhiêu?",
        "sourcePrompt": "What is the time value of the January 115 call?",
        "options": [
          {
            "id": "A",
            "text": "5h30",
            "sourceText": "5.30"
          },
          {
            "id": "B",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "3,50",
            "sourceText": "3.50"
          },
          {
            "id": "D",
            "text": "1,70",
            "sourceText": "1.70"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 5h30. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q15",
        "number": "15",
        "prompt": "Giới hạn dưới của châu Âu về call ngày 105 tháng 12 là gì?",
        "sourcePrompt": "What is the European lower bound of the December 105 call?",
        "options": [
          {
            "id": "A",
            "text": "9,86",
            "sourceText": "9.86"
          },
          {
            "id": "B",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "8,25",
            "sourceText": "8.25"
          },
          {
            "id": "D",
            "text": "9,26",
            "sourceText": "9.26"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 9,26. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q16",
        "number": "16",
        "prompt": "Giới hạn dưới của call ngày 115 tháng 11 ở Châu Âu là gì?",
        "sourcePrompt": "What is the European lower bound of the November 115 call?",
        "options": [
          {
            "id": "A",
            "text": "1,44",
            "sourceText": "1.44"
          },
          {
            "id": "B",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "C",
            "text": "1,75",
            "sourceText": "1.75"
          },
          {
            "id": "D",
            "text": "2.06",
            "sourceText": "2.06"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 0,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q17",
        "number": "17",
        "prompt": "Từ ngang giá quyền chọn bán của Mỹ, giá trị tối thiểu và tối đa mà tổng giá cổ phiếu và giá quyền chọn bán ngày 110 tháng 12 có thể là bao nhiêu?",
        "sourcePrompt": "From American put-call parity, what are the minimum and maximum values that the sum of the stock price and December 110 put price can be?",
        "options": [
          {
            "id": "A",
            "text": "101,81 và 102,87",
            "sourceText": "101.81 and 102.87"
          },
          {
            "id": "B",
            "text": "2,50 và 113,25",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 116.038 và 117.10. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q18",
        "number": "18",
        "prompt": "Sự khác biệt lớn nhất giữa call 105 tháng 1 và 110 tháng 1 là điều nào sau đây?",
        "sourcePrompt": "The maximum difference between the January 105 and 110 calls is which of the following?",
        "options": [
          {
            "id": "A",
            "text": "11 giờ 50",
            "sourceText": "11.50"
          },
          {
            "id": "B",
            "text": "4,92",
            "sourceText": "4.92"
          },
          {
            "id": "C",
            "text": "5 giờ 00",
            "sourceText": "5.00"
          },
          {
            "id": "D",
            "text": "4.0",
            "sourceText": "4.0"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 5 giờ 00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q19",
        "number": "19",
        "prompt": "Giả sử bạn biết rằng quyền chọn ngày 115 tháng 1 được định giá đúng nhưng nghi ngờ rằng cổ phiếu đã bị định giá sai. Sử dụng tính chẵn lẻ của quyền chọn mua, bạn dự đoán giá cổ phiếu sẽ là bao nhiêu? Đối với vấn đề này, hãy xử lý các lựa chọn như thể chúng là của Châu Âu.",
        "sourcePrompt": "Suppose you knew that the January 115 options were correctly priced but suspected that the stock was mispriced. Using put-call parity, what would you expect the stock price to be? For this problem, treat the options as if they were European.",
        "options": [
          {
            "id": "A",
            "text": "113,73",
            "sourceText": "113.73"
          },
          {
            "id": "B",
            "text": "123,23",
            "sourceText": "123.23"
          },
          {
            "id": "C",
            "text": "121,23",
            "sourceText": "121.23"
          },
          {
            "id": "D",
            "text": "112,77",
            "sourceText": "112.77"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 113,73. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q20",
        "number": "20",
        "prompt": "Giả sử cổ phiếu sắp không được hưởng cổ tức trong một ngày. Cổ tức sẽ là $4,00. Bạn sẽ cân nhắc call nào sau đây để tập thể dục?",
        "sourcePrompt": "Suppose the stock is about to go ex-dividend in one day. The dividend will be $4.00. Which of the following calls will you consider for exercise?",
        "options": [
          {
            "id": "A",
            "text": "ngày 115 tháng 11",
            "sourceText": "November 115"
          },
          {
            "id": "B",
            "text": "ngày 110 tháng 11",
            "sourceText": "November 110"
          },
          {
            "id": "C",
            "text": "ngày 115 tháng 12",
            "sourceText": "December 115"
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: ngày 110 tháng 11. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q21",
        "number": "21",
        "prompt": "Giá trị thời gian của một quyền chọn còn được gọi là",
        "sourcePrompt": "The time value of an option is also referred to as the",
        "options": [
          {
            "id": "A",
            "text": "giá trị tổng hợp",
            "sourceText": "synthetic value"
          },
          {
            "id": "B",
            "text": "giá trị đình công",
            "sourceText": "strike value"
          },
          {
            "id": "C",
            "text": "giá trị suy đoán",
            "sourceText": "speculative value"
          },
          {
            "id": "D",
            "text": "giá trị chẵn lẻ",
            "sourceText": "parity value"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá trị suy đoán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q22",
        "number": "22",
        "prompt": "Giá trị nào sau đây là giá trị thấp nhất có thể có của quyền chọn mua của người Mỹ đối với một cổ phiếu không có cổ tức?",
        "sourcePrompt": "Which of the following is the lowest possible value of an American call on a stock with no dividends?",
        "options": [
          {
            "id": "A",
            "text": "Tối đa[0, S0 – X(1 + r)-T]",
            "sourceText": "Max[0, S0 – X(1 + r)-T]"
          },
          {
            "id": "B",
            "text": "S0",
            "sourceText": "S0"
          },
          {
            "id": "C",
            "text": "Tối đa(0, S0 – X)",
            "sourceText": "Max(0, S0 – X)"
          },
          {
            "id": "D",
            "text": "Tối đa[0, S0 (1 + r)-T – X]",
            "sourceText": "Max[0, S0 (1 + r)-T – X]"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Tối đa[0, S0 – X(1 + r)-T]. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q23",
        "number": "23",
        "prompt": "Giá trị nào sau đây là giá trị thấp nhất có thể có của một người Mỹ mua một cổ phiếu không có cổ tức?",
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
            "text": "Tối đa(0, X – S0)",
            "sourceText": "Max(0, X – S0)"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Tối đa(0, X – S0). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q24",
        "number": "24",
        "prompt": "Sự khác biệt giữa mệnh giá của tín phiếu Kho bạc và giá của nó được gọi là",
        "sourcePrompt": "The difference between a Treasury bill's face value and its price is called the",
        "options": [
          {
            "id": "A",
            "text": "giá trị thời gian",
            "sourceText": "time value"
          },
          {
            "id": "B",
            "text": "giảm giá",
            "sourceText": "discount"
          },
          {
            "id": "C",
            "text": "lãi suất trái phiếu",
            "sourceText": "coupon rate"
          },
          {
            "id": "D",
            "text": "giá thầu",
            "sourceText": "bid"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giảm giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q25",
        "number": "25",
        "prompt": "Câu nào sau đây về call của Mỹ là không đúng?",
        "sourcePrompt": "Which of the following statements about an American call is not true?",
        "options": [
          {
            "id": "A",
            "text": "Giá trị thời gian của nó giảm khi đến gần hết hạn",
            "sourceText": "Its time value decreases as expiration approaches"
          },
          {
            "id": "B",
            "text": "Giá trị lớn nhất của nó là giá cổ phiếu",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Nó trả cổ tức. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q26",
        "number": "26",
        "prompt": "Với một quyền chọn kiểu Mỹ có thời hạn dài hơn và một quyền chọn kiểu Mỹ có thời hạn ngắn hơn với cùng điều kiện, quyền chọn quyền chọn có thời hạn dài hơn phải luôn có giá trị.",
        "sourcePrompt": "Given a longer-lived American call and a shorter-lived American call with the same terms, the longer-lived call must always be worth",
        "options": [
          {
            "id": "A",
            "text": "nhiều nhất là giá trị của call ngắn hạn",
            "sourceText": "at most the value of the shorter-lived call"
          },
          {
            "id": "B",
            "text": "ít nhất là bằng call ngắn hạn",
            "sourceText": "at least as much as the shorter-lived call"
          },
          {
            "id": "C",
            "text": "hoàn toàn giống với call ngắn hạn",
            "sourceText": "exactly the same as the shorter-lived call"
          },
          {
            "id": "D",
            "text": "call có thời gian tồn tại ngắn hơn được giảm giá theo thời lượng của call có thời gian tồn tại dài hơn",
            "sourceText": "the shorter-lived call discounted to the length of the longer-lived call"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: hoàn toàn giống với call ngắn hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q27",
        "number": "27",
        "prompt": "Bất đẳng thức nào sau đây thể hiện đúng mối quan hệ giữa chênh lệch giá của hai quyền chọn mua kiểu Châu Âu chỉ khác nhau ở giá thực hiện (giá thực hiện)",
        "sourcePrompt": "Which of the following inequalities correctly states the relationship between the difference in the prices of two European calls that differ only by exercise price",
        "options": [
          {
            "id": "A",
            "text": "(X2€ – X1)(1 + r)-T ≥ Ce(S0,T,X1) – Ce(S0,T,X2)",
            "sourceText": "(X2¬ – X1)(1 + r)-T ≥ Ce(S0,T,X1) – Ce(S0,T,X2)"
          },
          {
            "id": "B",
            "text": "(X2€ – X1) ≥ Ce(S0,T,X2) – Ce(S0,T,X1)",
            "sourceText": "(X2¬ – X1) ≥ Ce(S0,T,X2) – Ce(S0,T,X1)"
          },
          {
            "id": "C",
            "text": "(X2 – X1)(1 + r)-T ≥ Ce(S0,T,X1) + Ce(S0,T,X2)",
            "sourceText": "(X2 – X1)(1 + r)-T ≥ Ce(S0,T,X1) + Ce(S0,T,X2)"
          },
          {
            "id": "D",
            "text": "(X2€ – X1) ≥ Ce(S0,T,X1) – Ce(S0,T,X2)",
            "sourceText": "(X2¬ – X1) ≥ Ce(S0,T,X1) – Ce(S0,T,X2)"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: (X2€ – X1)(1 + r)-T ≥ Ce(S0,T,X1) – Ce(S0,T,X2). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q28",
        "number": "28",
        "prompt": "Giả sử bạn quan sát một quyền chọn kiểu Châu Âu trên một loại tiền tệ có tỷ giá hối đoái là S0 và lãi suất ngoại hối phi rủi ro (lãi suất phi rủi ro) là . Bất đẳng thức nào sau đây thể hiện đúng giới hạn dưới của call?",
        "sourcePrompt": "Suppose that you observe a European option on a currency with an exchange rate of S0 and a foreign risk-free rate of . Which of the following inequalities correctly expresses the lower bound of the call?",
        "options": [
          {
            "id": "A",
            "text": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T + X(1 + r)-T]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T + X(1 + r)-T]"
          },
          {
            "id": "B",
            "text": "Ce(S0,T,X) ≥ Max[0,S0 – X(1 + )-T]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0 – X(1 + )-T]"
          },
          {
            "id": "C",
            "text": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T – X]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T – X]"
          },
          {
            "id": "D",
            "text": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T – X(1 + r)-T]",
            "sourceText": "Ce(S0,T,X) ≥ Max[0,S0(1 + )-T – X(1 + r)-T]"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Ce(S0,T,X) ≥ Max[0,S0(1 + )-T – X(1 + r)-T]. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q29",
        "number": "29",
        "prompt": "Một tình huống trong đó việc thực hiện sớm quyền chọn bán kiểu Mỹ có thể được biện minh là",
        "sourcePrompt": "A situation in which early exercise of an American put can be justified is",
        "options": [
          {
            "id": "A",
            "text": "phá sản",
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
            "text": "cả a và b",
            "sourceText": "both a and b"
          },
          {
            "id": "E",
            "text": "cả a và b và c",
            "sourceText": "both a and b and c"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: phá sản. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c3-q30",
        "number": "30",
        "prompt": "Ảnh hưởng của sự biến động đến giá quyền chọn mua/bán là",
        "sourcePrompt": "The effect of volatility on a call/put’s price is",
        "options": [
          {
            "id": "A",
            "text": "giảm giá do giảm tổn thất có thể xảy ra",
            "sourceText": "decreased price due to decreased possible losses"
          },
          {
            "id": "B",
            "text": "biến động danh nghĩa sẽ không ảnh hưởng đáng kể đến giá mua/bán",
            "sourceText": "nominal volatility will not noticeably effect a call/put’s price"
          },
          {
            "id": "C",
            "text": "giá tăng do lợi nhuận có thể tăng lên",
            "sourceText": "increased price due to increased possible gains"
          },
          {
            "id": "D",
            "text": "giá giảm do tổn thất có thể tăng lên",
            "sourceText": "decreased price due to increased possible losses"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá tăng do lợi nhuận có thể tăng lên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Một danh mục đầu tư kết hợp cổ phiếu cơ sở và vị thế bán của một quyền chọn được gọi là",
        "sourcePrompt": "A portfolio that combines the underlying stock and a short position in an option is called",
        "options": [
          {
            "id": "A",
            "text": "danh mục đầu tư chênh lệch rủi ro",
            "sourceText": "a risk arbitrage portfolio"
          },
          {
            "id": "B",
            "text": "một danh mục đầu tư phòng hộ",
            "sourceText": "a hedge portfolio"
          },
          {
            "id": "C",
            "text": "danh mục đầu tư tỷ lệ",
            "sourceText": "a ratio portfolio"
          },
          {
            "id": "D",
            "text": "danh mục đầu tư hai trạng thái",
            "sourceText": "a two-state portfolio"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: một danh mục đầu tư phòng hộ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q2",
        "number": "2",
        "prompt": "Trong mô hình nhị thức, nếu giá quyền chọn mua trên thị trường cao hơn giá quyền chọn mua mà mô hình đưa ra, bạn nên",
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
            "text": "mua call và mua cổ phiếu",
            "sourceText": "buy the call and buy the stock"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: mua cổ phiếu và bán quyền chọn mua. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q3",
        "number": "3",
        "prompt": "Trong thế giới nhị thức hai kỳ, một quyền chọn mua bị định giá sai sẽ dẫn đến lợi nhuận chênh lệch giá nếu",
        "sourcePrompt": "In a two-period binomial world, a mispriced call will lead to an arbitrage profit if",
        "options": [
          {
            "id": "A",
            "text": "tỷ lệ phòng ngừa rủi ro thích hợp được duy trì trong hai giai đoạn",
            "sourceText": "the proper hedge ratio is maintained over the two periods"
          },
          {
            "id": "B",
            "text": "danh mục đầu tư phòng hộ bị chấm dứt sau một khoảng thời gian",
            "sourceText": "the hedge portfolio is terminated after one period"
          },
          {
            "id": "C",
            "text": "quyền chọn chuyển từ giá quá cao sang giá thấp hoặc ngược lại",
            "sourceText": "the option goes from over- to underpriced or vice versa"
          },
          {
            "id": "D",
            "text": "quyền chọn vẫn bị định giá sai trong cả hai thời kỳ",
            "sourceText": "the option remains mispriced over both periods"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: tỷ lệ phòng ngừa rủi ro thích hợp được duy trì trong hai giai đoạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q4",
        "number": "4",
        "prompt": "Giá trị của u và d là giá trị nào sau đây?",
        "sourcePrompt": "The values of u and d are which of the following?",
        "options": [
          {
            "id": "A",
            "text": "lợi nhuận của cổ phiếu nếu nó tăng và giảm tương ứng",
            "sourceText": "the return on the stock if it goes up and down, respectively"
          },
          {
            "id": "B",
            "text": "nghịch đảo của tỷ lệ xác suất tăng và giảm tương ứng và lãi suất phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "the inverse of the ratio of the up and down probabilities, respectively, and the risk-free rate"
          },
          {
            "id": "C",
            "text": "xác suất bình thường của chuyển động lên và xuống tương ứng",
            "sourceText": "the normal probabilities of up and down movements, respectively"
          },
          {
            "id": "D",
            "text": "một cộng với lợi nhuận của cổ phiếu nếu nó tăng và giảm tương ứng",
            "sourceText": "one plus the return on the stock if it goes up and down, respectively"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: một cộng với lợi nhuận của cổ phiếu nếu nó tăng và giảm tương ứng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q5",
        "number": "5",
        "prompt": "Nếu cổ phiếu trả cổ tức bằng đô la cụ thể và giá cổ phiếu, bao gồm cả cổ tức, tuân theo hệ số nhị thức lên xuống, điều nào sau đây sẽ xảy ra?",
        "sourcePrompt": "If the stock pays a specific dollar dividend and the stock price, to include the dividend, follows the binomial up and down factors, which of the following will happen?",
        "options": [
          {
            "id": "A",
            "text": "cây nhị thức sẽ kết hợp lại",
            "sourceText": "the binomial tree will recombine"
          },
          {
            "id": "B",
            "text": "cây nhị thức sẽ không kết hợp lại",
            "sourceText": "the binomial tree will not recombine"
          },
          {
            "id": "C",
            "text": "quyền chọn sẽ bị định giá sai",
            "sourceText": "the option will be mispriced"
          },
          {
            "id": "D",
            "text": "lợi nhuận chênh lệch giá sẽ không thể có được",
            "sourceText": "an arbitrage profit will not be possible"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: cây nhị thức sẽ không kết hợp lại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q6",
        "number": "6",
        "prompt": "Khi quyền chọn bán được định giá theo mô hình nhị thức, điều nào sau đây là đúng?",
        "sourcePrompt": "When puts are priced with the binomial model, which of the following is true?",
        "options": [
          {
            "id": "A",
            "text": "người put phải là người Mỹ",
            "sourceText": "the puts must be American"
          },
          {
            "id": "B",
            "text": "quyền chọn bán không thể được phòng ngừa hợp lý",
            "sourceText": "the puts cannot be properly hedged"
          },
          {
            "id": "C",
            "text": "quyền chọn bán sẽ vi phạm tính chẵn lẻ của call",
            "sourceText": "the puts will violate put-call parity"
          },
          {
            "id": "D",
            "text": "tỷ lệ hàng rào là một trên toàn cây",
            "sourceText": "the hedge ratio is one throughout the tree"
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
        "id": "c4-q7",
        "number": "7",
        "prompt": "Nếu mô hình nhị thức được mở rộng thành nhiều thời kỳ cho thời hạn sử dụng quyền chọn cố định thì phải thực hiện điều chỉnh nào sau đây?",
        "sourcePrompt": "If the binomial model is extended to multiple periods for a fixed option life, which of the following adjustments must be made?",
        "options": [
          {
            "id": "A",
            "text": "các yếu tố lên xuống phải được tăng lên",
            "sourceText": "the up and down factors must be increased"
          },
          {
            "id": "B",
            "text": "lãi suất phi rủi ro (lãi suất phi rủi ro) phải được tăng lên",
            "sourceText": "the risk-free rate must be increased"
          },
          {
            "id": "C",
            "text": "các yếu tố tăng giảm và tỷ lệ rủi ro phi rủi ro (tỷ lệ phi rủi ro) phải giảm",
            "sourceText": "the up and down factors and the risk-free rate must be decreased"
          },
          {
            "id": "D",
            "text": "giá cổ phiếu ban đầu phải được giảm tương ứng",
            "sourceText": "the initial stock price must be proportionately reduced"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: các yếu tố tăng giảm và tỷ lệ rủi ro phi rủi ro (tỷ lệ phi rủi ro) phải giảm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q8",
        "number": "8",
        "prompt": "Lựa chọn nào sau đây không phải là lựa chọn phụ thuộc vào đường đi khi cổ phiếu trả cổ tức không đổi?",
        "sourcePrompt": "Which of the following are not path-dependent options when the stock pays a constant dividend yield?",
        "options": [
          {
            "id": "A",
            "text": "Quyền chọn mua kiểu Châu Âu và quyền chọn bán kiểu Châu Âu",
            "sourceText": "European calls and European puts"
          },
          {
            "id": "B",
            "text": "Quyền chọn mua kiểu Châu Âu và quyền chọn bán kiểu Mỹ",
            "sourceText": "European calls and American puts"
          },
          {
            "id": "C",
            "text": "Quyền chọn bán kiểu Mỹ và quyền chọn bán kiểu Châu Âu",
            "sourceText": "American puts and European puts"
          },
          {
            "id": "D",
            "text": "Quyền chọn bán của Mỹ và quyền chọn mua của Châu Âu",
            "sourceText": "American puts and European calls"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Quyền chọn mua kiểu Châu Âu và quyền chọn bán kiểu Châu Âu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q9",
        "number": "9",
        "prompt": "Trong cây không kết hợp lại, số đường đi xuất hiện sau ba giai đoạn là",
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
        "prompt": "Khi số lượng khoảng thời gian trong mô hình nhị thức lớn, giá trị quyền chọn mua (call option) của Châu Âu sẽ làm gì?",
        "sourcePrompt": "When the number of time periods in a binomial model is large, a European call option value does what?",
        "options": [
          {
            "id": "A",
            "text": "dao động xung quanh giá trị nội tại của nó",
            "sourceText": "fluctuates around its intrinsic value"
          },
          {
            "id": "B",
            "text": "hội tụ đến một giá trị cụ thể",
            "sourceText": "converges to a specific value"
          },
          {
            "id": "C",
            "text": "tăng không giới hạn",
            "sourceText": "increases without limit"
          },
          {
            "id": "D",
            "text": "hội tụ đến giới hạn dưới của châu Âu",
            "sourceText": "converges to the European lower bound"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hội tụ đến một giá trị cụ thể. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q11",
        "number": "11",
        "prompt": "Khi số khoảng thời gian trong mô hình nhị thức lớn, điều gì xảy ra với xác suất nhị thức của một xu hướng tăng?",
        "sourcePrompt": "When the number of time periods in a binomial model is large, what happens to the binomial probability of an up move?",
        "options": [
          {
            "id": "A",
            "text": "nó tiến tới 1.0",
            "sourceText": "it approaches 1.0"
          },
          {
            "id": "B",
            "text": "nó tiến tới số không",
            "sourceText": "it approaches zero"
          },
          {
            "id": "C",
            "text": "nó dao động không theo khuôn mẫu",
            "sourceText": "it fluctuates without pattern"
          },
          {
            "id": "D",
            "text": "nó hội tụ về 0,5",
            "sourceText": "it converges to 0.5"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên Xét một thế giới nhị thức trong đó giá cổ phiếu hiện tại là 80 có thể tăng 10% hoặc giảm 8%. Lãi suất phi rủi ro (lãi suất phi rủi ro) là 4%. Giả sử một thế giới một thời kỳ. Trả lời các câu hỏi từ 12 đến 15 về một call với giá thực hiện (giá thực hiện) là 80.",
            "sourceText": "none of the above Consider a binomial world in which the current stock price of 80 can either go up by 10 percent or down by 8 percent. The risk-free rate is 4 percent. Assume a one-period world. Answer questions 12 through 15 about a call with an exercise price of 80."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó hội tụ về 0,5. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q12",
        "number": "12",
        "prompt": "Giá quyền chọn mua sẽ là bao nhiêu nếu cổ phiếu tăng giá?",
        "sourcePrompt": "What would be the call's price if the stock goes up?",
        "options": [
          {
            "id": "A",
            "text": "3,60",
            "sourceText": "3.60"
          },
          {
            "id": "B",
            "text": "8 giờ 00",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 8 giờ 00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q13",
        "number": "13",
        "prompt": "Giá quyền chọn mua sẽ là bao nhiêu nếu cổ phiếu giảm giá?",
        "sourcePrompt": "What would be the call's price if the stock goes down?",
        "options": [
          {
            "id": "A",
            "text": "8 giờ 00",
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
            "text": "9 giờ 00",
            "sourceText": "9.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 0,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q14",
        "number": "14",
        "prompt": "Tỷ lệ phòng hộ là gì?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q15",
        "number": "15",
        "prompt": "Giá trị lý thuyết của call là gì?",
        "sourcePrompt": "What is the theoretical value of the call?",
        "options": [
          {
            "id": "A",
            "text": "8 giờ 00",
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
            "text": "không có đáp án nào ở trên Bây giờ hãy mở rộng mô hình nhị thức một chu kỳ sang thế giới hai chu kỳ. Trả lời các câu hỏi từ 16 đến 18.",
            "sourceText": "none of the above Now extend the one-period binomial model to a two-period world. Answer questions 16 through 18."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 5,15. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q16",
        "number": "16",
        "prompt": "Giá trị của quyền chọn mua là bao nhiêu nếu cổ phiếu tăng rồi giảm?",
        "sourcePrompt": "What is the value of the call if the stock goes up, then down?",
        "options": [
          {
            "id": "A",
            "text": "0,96",
            "sourceText": "0.96"
          },
          {
            "id": "B",
            "text": "16:80",
            "sourceText": "16.80"
          },
          {
            "id": "C",
            "text": "8 giờ 00",
            "sourceText": "8.00"
          },
          {
            "id": "D",
            "text": "0,00",
            "sourceText": "0.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,96. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q17",
        "number": "17",
        "prompt": "Tỷ lệ phòng ngừa rủi ro là bao nhiêu nếu cổ phiếu giảm giá trong một thời kỳ?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 0,0725. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q18",
        "number": "18",
        "prompt": "Giá trị hiện tại của call là bao nhiêu?",
        "sourcePrompt": "What is the current value of the call?",
        "options": [
          {
            "id": "A",
            "text": "8 giờ 00",
            "sourceText": "8.00"
          },
          {
            "id": "B",
            "text": "7h30",
            "sourceText": "7.30"
          },
          {
            "id": "C",
            "text": "13/11",
            "sourceText": "11.13"
          },
          {
            "id": "D",
            "text": "0,619",
            "sourceText": "0.619"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 7h30. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q19",
        "number": "19",
        "prompt": "Trong mô hình nhị thức, nếu một quyền chọn không có khả năng hết hạn do mất tiền thì tỷ lệ phòng hộ sẽ là",
        "sourcePrompt": "In the binomial model, if an option has no chance of expiring out-of-the-money, the hedge ratio will be",
        "options": [
          {
            "id": "A",
            "text": "0,5",
            "sourceText": "0.5"
          },
          {
            "id": "B",
            "text": "vô hạn",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 1. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q20",
        "number": "20",
        "prompt": "Giả sử S = 70, X = 65, r = 0,05, p = 0,6, Cu = 7,17, Cd = 1,22 và chỉ còn một khoảng thời gian trong vòng đời của một quyền chọn mua kiểu Mỹ. Quyền chọn sẽ có giá trị gì?",
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
            "text": "5 giờ 00",
            "sourceText": "5.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 5 giờ 00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q21",
        "number": "21",
        "prompt": "Trong mô hình nhị thức một kỳ với Su = 49,5, Sd = 40,5, p = 0,8, r = 0,06, S = 45 và X = 50, một quyền chọn bán kiểu Châu Âu có giá trị là bao nhiêu?",
        "sourcePrompt": "In a one-period binomial model with Su = 49.5, Sd = 40.5, p = 0.8, r = 0.06, S = 45 and X = 50, what is a European put worth?",
        "options": [
          {
            "id": "A",
            "text": "2.17",
            "sourceText": "2.17"
          },
          {
            "id": "B",
            "text": "0,50",
            "sourceText": "0.50"
          },
          {
            "id": "C",
            "text": "9 giờ 50",
            "sourceText": "9.50"
          },
          {
            "id": "D",
            "text": "5 giờ 00",
            "sourceText": "5.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 2.17. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q22",
        "number": "22",
        "prompt": "Phát biểu nào sau đây về mô hình nhị thức là sai?",
        "sourcePrompt": "Which of the following statements about the binomial model is incorrect?",
        "options": [
          {
            "id": "A",
            "text": "nó hội tụ về mô hình Black-Scholes-Merton",
            "sourceText": "it converges to the Black-Scholes-Merton model"
          },
          {
            "id": "B",
            "text": "nó có thể phù hợp với việc tập thể dục sớm",
            "sourceText": "it can accommodate early exercise"
          },
          {
            "id": "C",
            "text": "nó chỉ cho phép hai giá cổ phiếu khi hết hạn",
            "sourceText": "it allows only two stock prices at expiration"
          },
          {
            "id": "D",
            "text": "nó có thể được mở rộng đến một số lượng lớn các khoảng thời gian",
            "sourceText": "it can be extended to a large number of time periods"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: nó chỉ cho phép hai giá cổ phiếu khi hết hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q23",
        "number": "23",
        "prompt": "Một cổ phiếu có giá 50 có thể tăng hoặc giảm 10% trong hai giai đoạn. Lãi suất phi rủi ro (lãi suất phi rủi ro) là 4%. Giá nào sau đây là giá chính xác của một quyền chọn bán kiểu Mỹ với giá thực hiện (giá thực hiện) là 55?",
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
            "text": "4 giờ 00",
            "sourceText": "4.00"
          },
          {
            "id": "D",
            "text": "5 giờ 00",
            "sourceText": "5.00"
          },
          {
            "id": "E",
            "text": "1,65",
            "sourceText": "1.65"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 5 giờ 00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q24",
        "number": "24",
        "prompt": "Xác định giá trị của u cho bài toán nhị thức ba kỳ khi thời hạn của quyền chọn là nửa năm và độ biến động là 0,48. Sử dụng mô hình cho bạn không yêu cầu lãi suất phi rủi ro (lãi suất phi rủi ro).",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1,22. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q25",
        "number": "25",
        "prompt": "Câu nào sau đây về mô hình định giá quyền chọn nhị thức không phải lúc nào cũng đúng?",
        "sourcePrompt": "Which of the following statements about the binomial option pricing model is not always true?",
        "options": [
          {
            "id": "A",
            "text": "nó có thể nắm bắt được tác dụng của việc tập thể dục sớm",
            "sourceText": "it can capture the effect of early exercise"
          },
          {
            "id": "B",
            "text": "nó có thể đáp ứng một số lượng lớn giá cổ phiếu có thể có khi hết hạn",
            "sourceText": "it can accommodate a large number of possible stock prices at expiration"
          },
          {
            "id": "C",
            "text": "nó phản ánh tác động của giá cổ phiếu, giá thực hiện (giá thực hiện), lãi suất phi rủi ro (lãi suất phi rủi ro), biến động và thời gian đáo hạn",
            "sourceText": "it reflects the effects of the stock price, exercise price, risk-free rate, volatility and time to expiration"
          },
          {
            "id": "D",
            "text": "nó đưa ra mức giá mà quyền chọn sẽ được giao dịch trên thị trường.",
            "sourceText": "it gives the price at which the option will trade in the market."
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó đưa ra mức giá mà quyền chọn sẽ được giao dịch trên thị trường.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q26",
        "number": "26",
        "prompt": "Tất cả những điều sau đây là các biến được sử dụng để xác định giá của quyền chọn mua (call option) ngoại trừ",
        "sourcePrompt": "All of the following are variables used to determine a call option’s price except",
        "options": [
          {
            "id": "A",
            "text": "lãi suất phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "the risk-free rate"
          },
          {
            "id": "B",
            "text": "xác suất biến động giá cổ phiếu",
            "sourceText": "the probability of stock price movement"
          },
          {
            "id": "C",
            "text": "giá thực hiện (giá thực hiện)",
            "sourceText": "the exercise price"
          },
          {
            "id": "D",
            "text": "giá cổ phiếu có thể có trong tương lai khi hết hạn",
            "sourceText": "the possible future stock prices at expiration"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: xác suất biến động giá cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q27",
        "number": "27",
        "prompt": "Định giá quyền chọn bán bằng mô hình nhị thức cũng giống như quy trình định giá quyền chọn mua, ngoại trừ việc",
        "sourcePrompt": "Pricing a put with the binomial model is the same procedure as pricing with a call, except that the",
        "options": [
          {
            "id": "A",
            "text": "cổ phiếu cơ sở không được trả cổ tức",
            "sourceText": "underlying stock must not pay dividends"
          },
          {
            "id": "B",
            "text": "mô hình nhị thức không thể tính đến khoản hoàn trả hết hạn",
            "sourceText": "binomial model cannot account for expiration payoffs"
          },
          {
            "id": "C",
            "text": "giá trị của tài sản cơ sở phải được chiết khấu về khoảng thời gian hiện tại",
            "sourceText": "value of the underlying must be discounted back to the current time period"
          },
          {
            "id": "D",
            "text": "khoản hoàn trả hết hạn phản ánh thực tế rằng quyền chọn là quyền bán cổ phiếu cơ sở",
            "sourceText": "expiration payoffs reflect the fact that the option is the right to sell the underlying stock"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: khoản hoàn trả hết hạn phản ánh thực tế rằng quyền chọn là quyền bán cổ phiếu cơ sở. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q28",
        "number": "28",
        "prompt": "Tất cả những điều sau đây là những ứng dụng thực tế của mô hình nhị thức ngoại trừ",
        "sourcePrompt": "All of the following are practical applications of the binomial model except",
        "options": [
          {
            "id": "A",
            "text": "sự lựa chọn liên quan đến các lựa chọn thực tế",
            "sourceText": "choices regarding real options"
          },
          {
            "id": "B",
            "text": "các lựa chọn liên quan đến kế hoạch khuyến khích điều hành",
            "sourceText": "options regarding executive incentive plans"
          },
          {
            "id": "C",
            "text": "mô hình trong đó giá cổ phiếu có thể tăng, giảm hoặc không đổi trong giai đoạn tiếp theo",
            "sourceText": "models in which the stock price can go up, down, or remain constant in the next period"
          },
          {
            "id": "D",
            "text": "quyền chọn nhúng trong chứng khoán nợ",
            "sourceText": "embedded options within debt securities"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: mô hình trong đó giá cổ phiếu có thể tăng, giảm hoặc không đổi trong giai đoạn tiếp theo. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q29",
        "number": "29",
        "prompt": "Xác định giá trị của d cho mô hình nhị thức bốn kỳ khi thời hạn của quyền chọn là 1/4 năm và độ biến động là 0,64. Sử dụng mô hình cho u và d không yêu cầu lãi suất phi rủi ro (lãi suất phi rủi ro).",
        "sourcePrompt": "Determine the value of d for a four period binomial model when the option’s life is one-fourth of a year and the volatility is 0.64. Use the model for u and d that does not require the risk-free rate.",
        "options": [
          {
            "id": "A",
            "text": "0,85",
            "sourceText": "0.85"
          },
          {
            "id": "B",
            "text": "1.17",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,85. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c4-q30",
        "number": "30",
        "prompt": "Mô hình định giá quyền chọn nhị thức sẽ hội tụ về giá trị nào khi số kỳ tăng lên?",
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
            "text": "sự biến động nội tại của quyền chọn",
            "sourceText": "the intrinsic volatility of the option"
          },
          {
            "id": "D",
            "text": "giá trị thực của tài sản cơ sở",
            "sourceText": "the true value of the underlying"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
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
        "prompt": "Mô hình Black-Scholes-Merton dự đoán giá trị nào cho call? (Do sự khác biệt trong cách làm tròn, các phép tính của bạn có thể hơi khác nhau. Chỉ nên chọn “không có đáp án nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 10 xu.)",
        "sourcePrompt": "What value does the Black-Scholes-Merton model predict for the call? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 cents.)",
        "options": [
          {
            "id": "A",
            "text": "5,35",
            "sourceText": "5.35"
          },
          {
            "id": "B",
            "text": "1.10",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 4,73. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q2",
        "number": "2",
        "prompt": "Giả sử bạn cảm thấy call được định giá quá cao. Bạn nên sử dụng chiến lược nào để khai thác việc định giá sai rõ ràng? (Do sự khác biệt trong cách làm tròn, các phép tính của bạn có thể hơi khác nhau. Chỉ nên chọn “không có đáp án nào ở trên” nếu câu trả lời của bạn khác nhau hơn 10 lượt chia sẻ.)",
        "sourcePrompt": "Suppose you feel that the call is overpriced. What strategy should you use to exploit the apparent mis-valuation? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 shares.)",
        "options": [
          {
            "id": "A",
            "text": "mua 791 cổ phiếu, bán 1.000 quyền chọn mua",
            "sourceText": "buy 791 shares, sell 1,000 calls"
          },
          {
            "id": "B",
            "text": "mua 705 cổ phiếu, bán 1.000 quyền chọn mua",
            "sourceText": "buy 705 shares, sell 1,000 calls"
          },
          {
            "id": "C",
            "text": "bán khống 791 cổ phiếu, mua 1.000 quyền chọn mua",
            "sourceText": "sell short 791 shares, buy 1,000 calls"
          },
          {
            "id": "D",
            "text": "bán khống 705 cổ phiếu, mua 1.000 quyền chọn mua",
            "sourceText": "sell short 705 shares, buy 1,000 calls"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: mua 791 cổ phiếu, bán 1.000 quyền chọn mua. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q3",
        "number": "3",
        "prompt": "Giá của một quyền chọn bán cổ phiếu là: (Do sự khác biệt trong cách làm tròn các phép tính của bạn có thể hơi khác nhau. Chỉ nên chọn “không có đáp án nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 10 xu.)",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,85. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q4",
        "number": "4",
        "prompt": "Để xây dựng một phòng ngừa rủi ro, số lượng quyền chọn bán trên 100 cổ phiếu được mua là: (Do sự khác biệt trong cách làm tròn, các tính toán của bạn có thể hơi khác nhau. Chỉ nên chọn “không có đáp án nào ở trên” nếu câu trả lời của bạn khác hơn 0,01.)",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q5",
        "number": "5",
        "prompt": "Kết quả vega của call là: (Do sự khác biệt trong cách làm tròn các phép tính của bạn có thể hơi khác nhau. Chỉ nên chọn “không có đáp án nào ở trên” nếu câu trả lời của bạn khác hơn 0,05.)",
        "sourcePrompt": "The call's vega is: (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 0.05.)",
        "options": [
          {
            "id": "A",
            "text": "–3.02",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 4,67. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q6",
        "number": "6",
        "prompt": "Nếu giá mua thực tế là 3,79 thì độ lệch chuẩn ngụ ý là",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: ít hơn 0,25. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q7",
        "number": "7",
        "prompt": "Nếu bây giờ chúng ta giả định rằng cổ phiếu trả cổ tức với tỷ lệ cố định đã biết là 3,5% thì giá cổ phiếu chúng ta nên sử dụng trong mô hình là bao nhiêu? (Do sự khác biệt trong cách làm tròn, các phép tính của bạn có thể hơi khác nhau. Chỉ nên chọn “không có đáp án nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 10 xu.)",
        "sourcePrompt": "If we now assume that the stock pays a dividend at a known constant rate of 3.5 percent, what stock price should we use in the model? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 cents.)",
        "options": [
          {
            "id": "A",
            "text": "22:60",
            "sourceText": "22.60"
          },
          {
            "id": "B",
            "text": "19h65",
            "sourceText": "19.65"
          },
          {
            "id": "C",
            "text": "23:00",
            "sourceText": "23.00"
          },
          {
            "id": "D",
            "text": "21,99",
            "sourceText": "21.99"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 22:60. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q8",
        "number": "8",
        "prompt": "Nếu bây giờ chúng ta giả định rằng cổ phiếu trả cổ tức một lần là 2,25 trong ba tháng thì chúng ta nên sử dụng giá cổ phiếu nào trong mô hình? (Do sự khác biệt trong cách làm tròn, các phép tính của bạn có thể hơi khác nhau. Chỉ nên chọn “không có đáp án nào ở trên” nếu câu trả lời của bạn chênh lệch hơn 10 xu.)",
        "sourcePrompt": "If we now assume that the stock pays a single dividend of 2.25 in three months, what stock price should we use in the model? (Due to differences in rounding your calculations may be slightly different. “none of the above” should be selected only if your answer is different by more than 10 cents.)",
        "options": [
          {
            "id": "A",
            "text": "17h75",
            "sourceText": "17.75"
          },
          {
            "id": "B",
            "text": "20,75",
            "sourceText": "20.75"
          },
          {
            "id": "C",
            "text": "20:00",
            "sourceText": "20.00"
          },
          {
            "id": "D",
            "text": "20:80",
            "sourceText": "20.80"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 20:80. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q9",
        "number": "9",
        "prompt": "Nếu lợi tức đơn giản trên tín phiếu Kho bạc là 8,5% thì lãi suất phi rủi ro (lãi suất phi rủi ro) trong mô hình Black-Scholes-Merton là",
        "sourcePrompt": "If the simple return on a Treasury bill is 8.5 percent, the risk-free rate in the Black-Scholes-Merton model is",
        "options": [
          {
            "id": "A",
            "text": "8,77 phần trăm",
            "sourceText": "8.77 percent"
          },
          {
            "id": "B",
            "text": "8,93 phần trăm",
            "sourceText": "8.93 percent"
          },
          {
            "id": "C",
            "text": "8,55 phần trăm",
            "sourceText": "8.55 percent"
          },
          {
            "id": "D",
            "text": "8,20 phần trăm",
            "sourceText": "8.20 percent"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 8,20 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q10",
        "number": "10",
        "prompt": "Biến nào sau đây trong mô hình định giá quyền chọn Black-Scholes-Merton là khó đạt được nhất?",
        "sourcePrompt": "Which of the following variables in the Black-Scholes-Merton option pricing model is the most difficult to obtain?",
        "options": [
          {
            "id": "A",
            "text": "sự biến động",
            "sourceText": "the volatility"
          },
          {
            "id": "B",
            "text": "lãi suất phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "the risk-free rate"
          },
          {
            "id": "C",
            "text": "giá cổ phiếu",
            "sourceText": "the stock price"
          },
          {
            "id": "D",
            "text": "thời gian hết hạn",
            "sourceText": "the time to expiration"
          },
          {
            "id": "E",
            "text": "giá thực hiện (giá thực hiện)",
            "sourceText": "the exercise price"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q11",
        "number": "11",
        "prompt": "Giá nhị thức về mặt lý thuyết sẽ bằng giá Black-Scholes-Merton trong điều kiện nào sau đây?",
        "sourcePrompt": "The binomial price will theoretically equal the Black-Scholes-Merton price under which of the following conditions?",
        "options": [
          {
            "id": "A",
            "text": "khi số khoảng thời gian lớn",
            "sourceText": "when the number of time periods is large"
          },
          {
            "id": "B",
            "text": "khi quyền chọn phù hợp với túi tiền",
            "sourceText": "when the option is at-the-money"
          },
          {
            "id": "C",
            "text": "khi quyền chọn có lãi",
            "sourceText": "when the option is in-the-money"
          },
          {
            "id": "D",
            "text": "khi quyền chọn đã hết tiền",
            "sourceText": "when the option is out-of-the-money"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: khi số khoảng thời gian lớn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q12",
        "number": "12",
        "prompt": "Nếu giá cổ phiếu là 44, giá thực hiện (giá thực hiện) là 40, giá bán là 1,54 và giá Black-Scholes-Merton sử dụng 0,28 làm độ biến động là 1,11, thì độ biến động ngụ ý sẽ là",
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
            "text": "thấp hơn lãi suất phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "lower than the risk-free rate"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
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
            "text": "giảm độ biến động làm giảm giá call",
            "sourceText": "decreasing the volatility lowers the call price"
          },
          {
            "id": "B",
            "text": "giá cổ phiếu dự kiến đóng một vai trò trong mô hình",
            "sourceText": "the expected stock price plays a role in the model"
          },
          {
            "id": "C",
            "text": "lãi suất phi rủi ro (lãi suất phi rủi ro) liên tục được cộng dồn",
            "sourceText": "the risk-free rate is continuously compounded"
          },
          {
            "id": "D",
            "text": "mô hình phù hợp với tính chẵn lẻ của call",
            "sourceText": "the model is consistent with put-call parity"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá cổ phiếu dự kiến đóng một vai trò trong mô hình. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
            "text": "đó là giới hạn của mô hình nhị thức",
            "sourceText": "it is the limit of the binomial model"
          },
          {
            "id": "C",
            "text": "nó là một mô hình thời gian liên tục",
            "sourceText": "it is a continuous time model"
          },
          {
            "id": "D",
            "text": "nó đưa ra giá của một quyền chọn kiểu châu Âu",
            "sourceText": "it gives the price of a European option"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
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
            "text": "sinh lợi cổ phiếu tuân theo phân phối chuẩn",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: sinh lợi cổ phiếu tuân theo phân phối chuẩn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q16",
        "number": "16",
        "prompt": "Phát biểu nào sau đây về đồng bằng là không đúng?",
        "sourcePrompt": "Which of the following statements about the delta is not true?",
        "options": [
          {
            "id": "A",
            "text": "nó dao động từ 0 đến 1",
            "sourceText": "it ranges from zero to one"
          },
          {
            "id": "B",
            "text": "nó hội tụ về 0 hoặc 1 khi hết hạn",
            "sourceText": "it converges to zero or one at expiration"
          },
          {
            "id": "C",
            "text": "nó được cho bởi N(d1) trong mô hình Black-Scholes-Merton",
            "sourceText": "it is given by N(d1) in the Black-Scholes-Merton model"
          },
          {
            "id": "D",
            "text": "nó thay đổi chậm khi gần hết hạn nếu quyền chọn ở mức giá hợp lý",
            "sourceText": "it changes slowly near expiration if the option is at-the-money"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó thay đổi chậm khi gần hết hạn nếu quyền chọn ở mức giá hợp lý. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q17",
        "number": "17",
        "prompt": "“Hy Lạp” nào sau đây không phải là thước đo độ nhạy của quyền chọn đối với sự thay đổi của một trong các giá trị đầu vào của nó?",
        "sourcePrompt": "Which of the following “Greeks” is not a measure of the option’s sensitivity to a change in one of its input values?",
        "options": [
          {
            "id": "A",
            "text": "đồng bằng",
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
        "prompt": "Câu nào sau đây đúng về mối quan hệ giữa giá quyền chọn và lãi suất phi rủi ro (lãi suất phi rủi ro)?",
        "sourcePrompt": "Which of the following statements is true about the relationship between the option price and the risk-free rate?",
        "options": [
          {
            "id": "A",
            "text": "giá quyền chọn mua gần như tuyến tính đối với lãi suất phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "a call price is nearly linear with respect to the risk-free rate"
          },
          {
            "id": "B",
            "text": "giá quyền chọn mua rất nhạy cảm với lãi suất phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "a call price is highly sensitive to the risk-free rate"
          },
          {
            "id": "C",
            "text": "lãi suất phi rủi ro (lãi suất phi rủi ro) ảnh hưởng đến quyền chọn mua nhưng không ảnh hưởng đến quyền chọn bán",
            "sourceText": "the risk-free rate affects a call but not a put"
          },
          {
            "id": "D",
            "text": "lãi suất phi rủi ro (lãi suất phi rủi ro) không ảnh hưởng đến giá quyền chọn mua",
            "sourceText": "the risk-free rate does not affect a call price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giá quyền chọn mua gần như tuyến tính đối với lãi suất phi rủi ro (lãi suất phi rủi ro). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q19",
        "number": "19",
        "prompt": "Mối quan hệ giữa độ biến động và thời gian đáo hạn được gọi là",
        "sourcePrompt": "The relationship between the volatility and the time to expiration is called the",
        "options": [
          {
            "id": "A",
            "text": "nụ cười biến động",
            "sourceText": "volatility smile"
          },
          {
            "id": "B",
            "text": "độ lệch biến động",
            "sourceText": "volatility skew"
          },
          {
            "id": "C",
            "text": "cấu trúc kỳ hạn của sự biến động",
            "sourceText": "term structure of volatility"
          },
          {
            "id": "D",
            "text": "theta",
            "sourceText": "theta"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: cấu trúc kỳ hạn của sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q20",
        "number": "20",
        "prompt": "Lý do thực hiện hàng rào gamma là gì?",
        "sourcePrompt": "What is the reason for executing a gamma hedge?",
        "options": [
          {
            "id": "A",
            "text": "sự biến động có thể thay đổi",
            "sourceText": "the volatility can change"
          },
          {
            "id": "B",
            "text": "giá cổ phiếu có thể tạo ra một bước chuyển lớn",
            "sourceText": "the stock price can make a large move"
          },
          {
            "id": "C",
            "text": "sự biến động giá cổ phiếu quá nhỏ để phòng hộ delta có thể phát huy tác dụng",
            "sourceText": "the stock price moves are too small for a delta hedge to work"
          },
          {
            "id": "D",
            "text": "không có lãi suất thực sự phi rủi ro (lãi suất phi rủi ro)",
            "sourceText": "there is no true risk-free rate"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá cổ phiếu có thể tạo ra một bước chuyển lớn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Mối quan hệ giữa giá quyền chọn và giá thực hiện (giá thực hiện) được gọi là",
        "sourcePrompt": "The relationship between the option price and the exercise price is called",
        "options": [
          {
            "id": "A",
            "text": "gama",
            "sourceText": "the gamma"
          },
          {
            "id": "B",
            "text": "người ăn chay",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q23",
        "number": "23",
        "prompt": "Điều gì xảy ra khi độ biến động bằng 0 trong mô hình Black-Scholes-Merton?",
        "sourcePrompt": "What happens when the volatility is zero in the Black-Scholes-Merton model?",
        "options": [
          {
            "id": "A",
            "text": "giá quyền chọn hội tụ về 0 hoặc giới hạn dưới",
            "sourceText": "the option price converges to either zero or the lower bound"
          },
          {
            "id": "B",
            "text": "giá quyền chọn hội tụ về giá trị nội tại",
            "sourceText": "the option price converges to the intrinsic value"
          },
          {
            "id": "C",
            "text": "quyền chọn tự động hết hạn khi hết tiền",
            "sourceText": "the option automatically expires out of the money"
          },
          {
            "id": "D",
            "text": "gamma và delta hội tụ",
            "sourceText": "the gamma and delta converge"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giá quyền chọn hội tụ về 0 hoặc giới hạn dưới. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q24",
        "number": "24",
        "prompt": "Điều nào sau đây không đúng về gamma của call?",
        "sourcePrompt": "Which of the following is not correct about a call’s gamma?",
        "options": [
          {
            "id": "A",
            "text": "nó giống như gamma của một lệnh bán",
            "sourceText": "it is the same as a put’s gamma"
          },
          {
            "id": "B",
            "text": "nó lớn khi call có giá trị",
            "sourceText": "it is large when the call is at-the-money"
          },
          {
            "id": "C",
            "text": "nó có thể được xem như thước đo rủi ro của vùng đồng bằng",
            "sourceText": "it can be viewed as a measure of the risk of the delta"
          },
          {
            "id": "D",
            "text": "đó là một nguồn rủi ro chỉ có thể được phòng ngừa bằng cách sử dụng một lựa chọn khác",
            "sourceText": "it is a source of risk that can be hedged only by using another option"
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
        "id": "c5-q25",
        "number": "25",
        "prompt": "Phát biểu nào sau đây không đúng về biến động lịch sử?",
        "sourcePrompt": "Which of the following statements is incorrect about the historical volatility?",
        "options": [
          {
            "id": "A",
            "text": "nếu được sử dụng trong mô hình Black-Scholes-Merton, nó sẽ cho giá thị trường hiện tại",
            "sourceText": "if used in the Black-Scholes-Merton model, it gives the current market price"
          },
          {
            "id": "B",
            "text": "nó dựa trên sự biến động của lợi nhuận log trên cổ phiếu",
            "sourceText": "it is based on the volatility of the log return on the stock"
          },
          {
            "id": "C",
            "text": "nó yêu cầu một mẫu lợi nhuận gần đây",
            "sourceText": "it requires a sample of recent returns"
          },
          {
            "id": "D",
            "text": "nó nên được chuyển đổi thành biến động hàng năm",
            "sourceText": "it should be converted to an annualized volatility"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: nếu được sử dụng trong mô hình Black-Scholes-Merton, nó sẽ cho giá thị trường hiện tại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q26",
        "number": "26",
        "prompt": "Một danh mục đầu tư phòng hộ được thiết lập và duy trì bằng cách liên tục điều chỉnh tỷ lệ tương đối giữa cổ phiếu và quyền chọn, một quá trình được gọi là",
        "sourcePrompt": "A hedge portfolio is established and maintained by constantly adjusting the relative proportions of stock and options, a process referred to as",
        "options": [
          {
            "id": "A",
            "text": "tích cực quản lý",
            "sourceText": "actively managing"
          },
          {
            "id": "B",
            "text": "hòa giải liên tục",
            "sourceText": "continuous reconciliation"
          },
          {
            "id": "C",
            "text": "đánh dấu thị trường",
            "sourceText": "marking to market"
          },
          {
            "id": "D",
            "text": "giao dịch năng động",
            "sourceText": "dynamic trading"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giao dịch năng động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q27",
        "number": "27",
        "prompt": "Biến ngẫu nhiên chuẩn thông thường được sử dụng để tính toán xác suất thông thường tích lũy trong mô hình định giá quyền chọn Black-Scholes-Merton là",
        "sourcePrompt": "The standard normal random variable used in the calculation of cumulative normal probabilities within the Black-Scholes-Merton option pricing model is",
        "options": [
          {
            "id": "A",
            "text": "sự phân bố logic chuẩn",
            "sourceText": "the lognormal distribution"
          },
          {
            "id": "B",
            "text": "thống kê d1 và d2",
            "sourceText": "the d1 and d2 statistic"
          },
          {
            "id": "C",
            "text": "thống kê z",
            "sourceText": "the z statistic"
          },
          {
            "id": "D",
            "text": "phân phối f",
            "sourceText": "the f distribution"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: thống kê z. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q28",
        "number": "28",
        "prompt": "Mô hình biến động trong giá thực hiện (giá thực hiện) thường được gọi là",
        "sourcePrompt": "The pattern of volatility across exercise prices is often called",
        "options": [
          {
            "id": "A",
            "text": "đồ thị biến động giá",
            "sourceText": "the price-fluctuation graph"
          },
          {
            "id": "B",
            "text": "nụ cười biến động",
            "sourceText": "the volatility smile"
          },
          {
            "id": "C",
            "text": "cấu trúc thuật ngữ của sự biến động ngụ ý",
            "sourceText": "the term structure of implied volatility"
          },
          {
            "id": "D",
            "text": "sự nghiêng",
            "sourceText": "the skew"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: nụ cười biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c5-q29",
        "number": "30",
        "prompt": "Độ biến động ngụ ý có được bằng cách tìm độ lệch chuẩn mà khi sử dụng trong mô hình Black-Scholes-Merton sẽ tạo ra",
        "sourcePrompt": "The implied volatility is obtained by finding the standard deviation that, when used in the Black-Scholes-Merton model, makes the",
        "options": [
          {
            "id": "A",
            "text": "giá mô hình hết hạn ở mức 0",
            "sourceText": "model price expire at zero"
          },
          {
            "id": "B",
            "text": "giá mẫu bằng giá thị trường của quyền chọn",
            "sourceText": "model price equal the market price of the option"
          },
          {
            "id": "C",
            "text": "giá mô hình sao cho vượt quá giá trị quyền chọn thị trường hiện đang được giao dịch",
            "sourceText": "model price such that it exceeds currently traded market option values"
          },
          {
            "id": "D",
            "text": "giá mô hình bằng giá trị nội tại của cổ phiếu cơ sở",
            "sourceText": "model price equal the intrinsic value of the underlying stock"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá mẫu bằng giá thị trường của quyền chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Lợi nhuận của bạn là bao nhiêu nếu bạn mua quyền chọn mua, giữ quyền chọn mua cho đến khi hết hạn và giá cổ phiếu khi hết hạn là 37 USD?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $411. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q2",
        "number": "2",
        "prompt": "Giá cổ phiếu hòa vốn khi hết hạn của giao dịch được mô tả ở bài toán 1 là bao nhiêu?",
        "sourcePrompt": "What is the breakeven stock price at expiration on the transaction described in problem 1?",
        "options": [
          {
            "id": "A",
            "text": "$32,89",
            "sourceText": "$32.89"
          },
          {
            "id": "B",
            "text": "$30,00",
            "sourceText": "$30.00"
          },
          {
            "id": "C",
            "text": "$27,11",
            "sourceText": "$27.11"
          },
          {
            "id": "D",
            "text": "$32,15",
            "sourceText": "$32.15"
          },
          {
            "id": "E",
            "text": "không có điểm hòa vốn",
            "sourceText": "there is no breakeven"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $32,89. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q3",
        "number": "3",
        "prompt": "Lợi nhuận tối đa của giao dịch được mô tả ở bài toán 1 là bao nhiêu?",
        "sourcePrompt": "What is the maximum profit on the transaction described in problem 1?",
        "options": [
          {
            "id": "A",
            "text": "$2,711",
            "sourceText": "$2,711"
          },
          {
            "id": "B",
            "text": "vô cực",
            "sourceText": "infinity"
          },
          {
            "id": "C",
            "text": "không",
            "sourceText": "zero"
          },
          {
            "id": "D",
            "text": "$3,289",
            "sourceText": "$3,289"
          },
          {
            "id": "E",
            "text": "3.000 USD",
            "sourceText": "$3,000"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: vô cực. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q4",
        "number": "4",
        "prompt": "Lợi nhuận tối đa mà người bán quyền chọn call có thể kiếm được là bao nhiêu?",
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
            "text": "3.000 USD",
            "sourceText": "$3,000"
          },
          {
            "id": "D",
            "text": "$3,289",
            "sourceText": "$3,289"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $289. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q5",
        "number": "5",
        "prompt": "Giả sử người mua quyền chọn mua trong vấn đề 1 đã bán quyền chọn mua hai tháng trước khi hết hạn khi giá cổ phiếu là 33 USD. Người mua sẽ kiếm được bao nhiêu lợi nhuận?",
        "sourcePrompt": "Suppose the buyer of the call in problem 1 sold the call two months before expiration when the stock price was $33. How much profit would the buyer make?",
        "options": [
          {
            "id": "A",
            "text": "$32,89",
            "sourceText": "$32.89"
          },
          {
            "id": "B",
            "text": "$30,11",
            "sourceText": "$30.11"
          },
          {
            "id": "C",
            "text": "$78,00",
            "sourceText": "$78.00"
          },
          {
            "id": "D",
            "text": "$11,00",
            "sourceText": "$11.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $78,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q6",
        "number": "6",
        "prompt": "Giả sử nhà đầu tư xây dựng một quyền chọn mua có bảo đảm. Khi hết hạn, giá cổ phiếu là 27 USD. Lợi nhuận của nhà đầu tư là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q7",
        "number": "7",
        "prompt": "Giá cổ phiếu hòa vốn khi hết hạn đối với giao dịch được mô tả ở bài toán 6 là bao nhiêu?",
        "sourcePrompt": "What is the breakeven stock price at expiration for the transaction described in problem 6?",
        "options": [
          {
            "id": "A",
            "text": "$27,11",
            "sourceText": "$27.11"
          },
          {
            "id": "B",
            "text": "$30,00",
            "sourceText": "$30.00"
          },
          {
            "id": "C",
            "text": "$32,89 d $29,89",
            "sourceText": "$32.89 d $29.89"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $27,11. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q8",
        "number": "8",
        "prompt": "Nếu giao dịch được mô tả trong vấn đề 6 bị đóng khi quyền chọn còn 3 tháng nữa và giá cổ phiếu ở mức 36 USD, lợi nhuận của nhà đầu tư là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $229. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q9",
        "number": "9",
        "prompt": "Lợi nhuận tối đa từ giao dịch được mô tả trong Câu hỏi 6 là bao nhiêu nếu vị thế được giữ đến hết hạn?",
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
            "text": "vô cực",
            "sourceText": "infinity"
          },
          {
            "id": "D",
            "text": "$2,711",
            "sourceText": "$2,711"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $289. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q10",
        "number": "10",
        "prompt": "Lợi nhuận tối thiểu từ giao dịch được mô tả trong Câu hỏi 6 là bao nhiêu nếu vị thế được giữ đến hết hạn?",
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
            "text": "âm vô cực",
            "sourceText": "negative infinity"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: –$2,711. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q11",
        "number": "11",
        "prompt": "Hãy xem xét hai quyền chọn bán (put option) chỉ khác nhau ở giá thực hiện (giá thực hiện). Người có giá thực hiện (giá thực hiện) cao hơn có",
        "sourcePrompt": "Consider two put options differing only by exercise price. The one with the higher exercise price has",
        "options": [
          {
            "id": "A",
            "text": "mức hòa vốn thấp hơn và tiềm năng lợi nhuận thấp hơn",
            "sourceText": "the lower breakeven and lower profit potential"
          },
          {
            "id": "B",
            "text": "mức hòa vốn thấp hơn và tiềm năng lợi nhuận lớn hơn",
            "sourceText": "the lower breakeven and greater profit potential"
          },
          {
            "id": "C",
            "text": "mức hòa vốn cao hơn và tiềm năng lợi nhuận lớn hơn",
            "sourceText": "the higher breakeven and greater profit potential"
          },
          {
            "id": "D",
            "text": "mức hòa vốn cao hơn và tiềm năng lợi nhuận thấp hơn",
            "sourceText": "the higher breakeven and lower profit potential"
          },
          {
            "id": "E",
            "text": "quyền lựa chọn (cao cấp) lớn hơn và tiềm năng lợi nhuận thấp hơn",
            "sourceText": "the greater premium and lower profit potential"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: mức hòa vốn cao hơn và tiềm năng lợi nhuận lớn hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q12",
        "number": "12",
        "prompt": "Câu nào sau đây đúng về việc đóng một vị thế mua trước khi hết hạn so với việc giữ nó cho đến khi hết hạn?",
        "sourcePrompt": "Which of the following statements is true about closing a long call position prior to expiration relative to holding it to expiration?",
        "options": [
          {
            "id": "A",
            "text": "lợi nhuận lớn hơn ở mọi mức giá cổ phiếu",
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
            "text": "không có đáp án nào ở trên là đúng",
            "sourceText": "none of the above are true"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lợi nhuận lớn hơn ở mọi mức giá cổ phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q13",
        "number": "13",
        "prompt": "Giao dịch nào sau đây không mang lại lợi nhuận trong một thị trường tăng giá mạnh.",
        "sourcePrompt": "Which of the following transactions does not profit in a strong bull market.",
        "options": [
          {
            "id": "A",
            "text": "một cách ngắn gọn",
            "sourceText": "a short put"
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
            "text": "một call tổng hợp",
            "sourceText": "a synthetic call"
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
        "id": "c6-q14",
        "number": "14",
        "prompt": "Điều nào sau đây tương đương với một call tổng hợp?",
        "sourcePrompt": "Which of the following is equivalent to a synthetic call?",
        "options": [
          {
            "id": "A",
            "text": "một cổ phiếu mua và một vị thế bán khống",
            "sourceText": "a long stock and a short put position"
          },
          {
            "id": "B",
            "text": "vị thế mua và vị thế cổ phiếu dài",
            "sourceText": "a long put and a long stock position"
          },
          {
            "id": "C",
            "text": "vị thế mua và bán trái phiếu không rủi ro",
            "sourceText": "a long put and a short risk-free bond position"
          },
          {
            "id": "D",
            "text": "một cổ phiếu dài và một vị thế trái phiếu không rủi ro ngắn",
            "sourceText": "a long stock and a short risk-free bond position"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: vị thế mua và vị thế cổ phiếu dài. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q15",
        "number": "15",
        "prompt": "Việc thực hiện sớm sẽ tạo ra rủi ro cho tất cả ngoại trừ một trong các giao dịch sau.",
        "sourcePrompt": "Early exercise imposes a risk to all but one of the following transactions.",
        "options": [
          {
            "id": "A",
            "text": "một call ngắn",
            "sourceText": "a short call"
          },
          {
            "id": "B",
            "text": "một cách ngắn gọn",
            "sourceText": "a short put"
          },
          {
            "id": "C",
            "text": "một nơi bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "D",
            "text": "một call chưa được khám phá",
            "sourceText": "an uncovered call"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một nơi bảo vệ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q16",
        "number": "16",
        "prompt": "Mỗi điều sau đây là một chiến lược tăng giá, ngoại trừ",
        "sourcePrompt": "Each of the following is a bullish strategy except",
        "options": [
          {
            "id": "A",
            "text": "một call dài",
            "sourceText": "a long call"
          },
          {
            "id": "B",
            "text": "một cách ngắn gọn",
            "sourceText": "a short put"
          },
          {
            "id": "C",
            "text": "một cổ phiếu ngắn",
            "sourceText": "a short stock"
          },
          {
            "id": "D",
            "text": "một nơi bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một cổ phiếu ngắn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q17",
        "number": "17",
        "prompt": "Chiến lược nào sau đây có khả năng thua lỗ lớn nhất?",
        "sourcePrompt": "Which of the following strategies has the greatest potential loss?",
        "options": [
          {
            "id": "A",
            "text": "một call chưa được khám phá",
            "sourceText": "an uncovered call"
          },
          {
            "id": "B",
            "text": "một khoảng thời gian dài",
            "sourceText": "a long put"
          },
          {
            "id": "C",
            "text": "một call được bảo hiểm",
            "sourceText": "a covered call"
          },
          {
            "id": "D",
            "text": "một vị trí dài trong cổ phiếu",
            "sourceText": "a long position in the stock"
          },
          {
            "id": "E",
            "text": "không thể nói được",
            "sourceText": "it is impossible to tell"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: một call chưa được khám phá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q18",
        "number": "18",
        "prompt": "Chiến lược nào sau đây về cơ bản có biểu đồ lợi nhuận giống như quyền chọn mua có bảo đảm?",
        "sourcePrompt": "Which of the following strategies has essentially the same profit diagram as a covered call?",
        "options": [
          {
            "id": "A",
            "text": "một khoảng thời gian dài",
            "sourceText": "a long put"
          },
          {
            "id": "B",
            "text": "một cách ngắn gọn",
            "sourceText": "a short put"
          },
          {
            "id": "C",
            "text": "một nơi bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "D",
            "text": "một call dài",
            "sourceText": "a long call"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: một cách ngắn gọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q19",
        "number": "19",
        "prompt": "Câu nào sau đây đúng về việc mua quyền chọn bán bảo vệ ở mức giá thực hiện (giá thực hiện) cao hơn so với giá thực hiện (giá thực hiện) thấp hơn?",
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
            "text": "bảo hiểm ít tốn kém hơn",
            "sourceText": "the insurance is less costly"
          },
          {
            "id": "D",
            "text": "bảo hiểm đắt hơn",
            "sourceText": "the insurance is more costly"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: bảo hiểm đắt hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q20",
        "number": "20",
        "prompt": "Nhược điểm của chiến lược chuyển sang call được bảo hiểm để tránh hiệu quả là gì?",
        "sourcePrompt": "What is the disadvantage of a strategy of rolling over a covered call to avoid exercise?",
        "options": [
          {
            "id": "A",
            "text": "quyền gọi quyền chọn (cao cấp) về cơ bản đã bị vứt bỏ",
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
            "text": "call sẽ đắt hơn khi được chuyển đổi",
            "sourceText": "the call is more expensive when rolled over"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chi phí giao dịch có xu hướng cao. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q21",
        "number": "21",
        "prompt": "Điều nào sau đây là mức hòa vốn cho một quyền chọn bán bảo vệ?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: P + S0. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q22",
        "number": "22",
        "prompt": "Câu nào sau đây về chiến lược soạn thảo call được bảo hiểm là đúng?",
        "sourcePrompt": "Which of the following statements about a covered call writing strategy is true?",
        "options": [
          {
            "id": "A",
            "text": "tổn thất được giới hạn",
            "sourceText": "the losses are limited"
          },
          {
            "id": "B",
            "text": "lợi nhuận và rủi ro lớn hơn việc chỉ nắm giữ cổ phiếu",
            "sourceText": "return and risk are greater than that of simply holding the stock"
          },
          {
            "id": "C",
            "text": "nó là một hình thức bảo hiểm rẻ hơn so với quyền chọn bán bảo vệ",
            "sourceText": "it is a cheaper form of insurance than a protective put"
          },
          {
            "id": "D",
            "text": "nó thường tạo ra một số lượng lớn lợi nhuận nhỏ",
            "sourceText": "it generally makes a large number of small profits"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó thường tạo ra một số lượng lớn lợi nhuận nhỏ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q23",
        "number": "23",
        "prompt": "Sự khác biệt trong lợi nhuận từ một quyền chọn bán thực tế và một quyền chọn bán tổng hợp là",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q24",
        "number": "24",
        "prompt": "Một người bán quyền chọn mua (người bán quyền chọn call) được bảo hiểm muốn ít rủi ro hơn nên",
        "sourcePrompt": "A covered call writer who prefers even less risk should",
        "options": [
          {
            "id": "A",
            "text": "thoát khỏi call",
            "sourceText": "get rid of the call"
          },
          {
            "id": "B",
            "text": "chuyển sang call có giá thực hiện (giá thực hiện) thấp hơn",
            "sourceText": "switch to a call with a lower exercise price"
          },
          {
            "id": "C",
            "text": "thoát khỏi cổ phiếu",
            "sourceText": "get rid of the stock"
          },
          {
            "id": "D",
            "text": "chuyển sang call có giá thực hiện (giá thực hiện) cao hơn",
            "sourceText": "switch to a call with a higher exercise price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chuyển sang call có giá thực hiện (giá thực hiện) thấp hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q25",
        "number": "25",
        "prompt": "Nhà đầu tư nào sau đây có nghĩa vụ phải mua cổ phiếu?",
        "sourcePrompt": "Which of the following investors may be obligated to buy stock?",
        "options": [
          {
            "id": "A",
            "text": "cover người bán quyền chọn mua (call writer)",
            "sourceText": "covered call writer"
          },
          {
            "id": "B",
            "text": "gọi người mua",
            "sourceText": "call buyer"
          },
          {
            "id": "C",
            "text": "người bán quyền chọn bán (put writer)",
            "sourceText": "put writer"
          },
          {
            "id": "D",
            "text": "người mua bảo vệ",
            "sourceText": "protective put buyer"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: người bán quyền chọn bán (put writer). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q26",
        "number": "26",
        "prompt": "Xác định phát biểu đúng liên quan đến việc lựa chọn giá thực hiện (giá thực hiện) để mua quyền chọn mua.",
        "sourcePrompt": "Identify the correct statement related to the choice of exercise price for buying a call.",
        "options": [
          {
            "id": "A",
            "text": "giá thực hiện (giá thực hiện) càng cao thì quyền gọi phí quyền chọn (cao cấp) càng cao",
            "sourceText": "the higher the exercise price the higher the call premium"
          },
          {
            "id": "B",
            "text": "giá thực hiện (giá thực hiện) càng thấp thì khả năng quyền chọn mua (call option) sẽ hết hạn càng cao",
            "sourceText": "the lower the exercise price the more likely the call option will expire out-of-the-money"
          },
          {
            "id": "C",
            "text": "Giá thực hiện (giá thực hiện) cao hơn dẫn đến mức lãi nhỏ hơn ở phía tăng nhưng mức lỗ nhỏ hơn ở phía giảm",
            "sourceText": "A higher strike price results in smaller gainson the upside but smaller losses on the downside"
          },
          {
            "id": "D",
            "text": "giá thực hiện (giá thực hiện) càng cao thì cổ tức đóng góp vào lợi nhuận chung càng cao",
            "sourceText": "the higher the exercise price the more dividends contribute to the overall profit"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên là những nhận định đúng liên quan đến việc lựa chọn giá thực hiện để mua một call",
            "sourceText": "none of the above are correct statements related to the choice of exercise price for buying a call"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Giá thực hiện (giá thực hiện) cao hơn dẫn đến mức lãi nhỏ hơn ở phía tăng nhưng mức lỗ nhỏ hơn ở phía giảm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q27",
        "number": "27",
        "prompt": "Hãy xem xét tuyên bố sau đây liên quan đến việc viết quyền chọn mua (call option) trần trụi. Đối với một mức giá cổ phiếu nhất định, vị trí ____________ được giữ thì giá trị thời gian của nó càng mất đi và lợi nhuận ___________. Tìm từ thích hợp cho hai chỗ trống này.",
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
        "prompt": "Hãy xem xét tuyên bố sau đây liên quan đến việc mua quyền chọn bán (put option). Đối với một mức giá cổ phiếu nhất định, vị trí ____________ được giữ thì giá trị thời gian của nó càng mất đi và lợi nhuận ___________; tuy nhiên, một ngoại lệ có thể xảy ra khi giá cổ phiếu là ___________. Tìm từ thích hợp cho hai chỗ trống này.",
        "sourcePrompt": "Consider the following statement related to buying a put option. For a given stock price, the ____________ the position is held, the more time value it loses and the ___________ the profit; however, an exception can occur when the stock price is ___________. Identify the correct words for these two blanks.",
        "options": [
          {
            "id": "A",
            "text": "dài hơn, thấp hơn, thấp hơn",
            "sourceText": "longer, lower, low"
          },
          {
            "id": "B",
            "text": "dài hơn, cao hơn, cao hơn",
            "sourceText": "longer, higher, high"
          },
          {
            "id": "C",
            "text": "ngắn hơn, thấp hơn, thấp hơn",
            "sourceText": "shorter, lower, low"
          },
          {
            "id": "D",
            "text": "ngắn hơn, cao hơn, cao hơn",
            "sourceText": "shorter, higher, high"
          },
          {
            "id": "E",
            "text": "dài hơn, phẳng hơn, thấp hơn",
            "sourceText": "longer, flatter, low"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: dài hơn, thấp hơn, thấp hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q29",
        "number": "29",
        "prompt": "Vị trí call dài tổng hợp có thể được tạo bằng tập hợp giao dịch nào sau đây.",
        "sourcePrompt": "A synthetic long call position can be created with which of the following sets of transactions.",
        "options": [
          {
            "id": "A",
            "text": "vay giá trị hiện tại của giá thực hiện (giá thực hiện), bán cổ phiếu, bán quyền chọn bán",
            "sourceText": "borrow the present value of the strike price, sell stock, sell put"
          },
          {
            "id": "B",
            "text": "cho vay giá trị hiện tại của giá thực hiện (giá thực hiện), bán cổ phiếu, mua bán",
            "sourceText": "lend the present value of the strike price, sell stock, buy put"
          },
          {
            "id": "C",
            "text": "bán, mua cổ phiếu, cho vay giá trị hiện tại của giá thực hiện (giá thực hiện)",
            "sourceText": "sell put, buy stock, lend the present value of the strike price"
          },
          {
            "id": "D",
            "text": "mua cổ phiếu, mua bán, vay giá trị hiện tại của giá thực hiện (giá thực hiện)",
            "sourceText": "buy stock, buy put, borrow the present value ofthe strike price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên tạo vị trí call dài tổng hợp",
            "sourceText": "none of the above creates a synthetic long call position"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: mua cổ phiếu, mua bán, vay giá trị hiện tại của giá thực hiện (giá thực hiện). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c6-q30",
        "number": "30",
        "prompt": "Một vị thế bán khống tổng hợp có thể được tạo bằng tập hợp giao dịch nào sau đây.",
        "sourcePrompt": "A synthetic short put position can be created with which of the following sets of transactions.",
        "options": [
          {
            "id": "A",
            "text": "vay giá trị hiện tại của giá thực hiện (giá thực hiện), bán cổ phiếu, bán quyền chọn mua",
            "sourceText": "borrow the present value of the strike price, sell stock, sell call"
          },
          {
            "id": "B",
            "text": "cho vay giá trị hiện tại của giá thực hiện (giá thực hiện), bán cổ phiếu, mua quyền chọn mua",
            "sourceText": "lend the present value of the strike price, sell stock, buy call"
          },
          {
            "id": "C",
            "text": "bán quyền chọn mua cổ phiếu, cho vay giá trị hiện tại của giá thực hiện (giá thực hiện)",
            "sourceText": "sell call, buy stock, lend the present value ofthe strike price"
          },
          {
            "id": "D",
            "text": "mua cổ phiếu, mua quyền chọn mua, vay giá trị hiện tại của giá thực hiện (giá thực hiện)",
            "sourceText": "buy stock, buy call, borrow the present value of the strike price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên tạo vị trí call dài tổng hợp",
            "sourceText": "none of the above creates a synthetic long call position"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: bán quyền chọn mua cổ phiếu, cho vay giá trị hiện tại của giá thực hiện (giá thực hiện). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Chi phí chênh lệch sẽ là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $302. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q2",
        "number": "2",
        "prompt": "Lợi nhuận tối đa trên chênh lệch giá là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $198. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q3",
        "number": "3",
        "prompt": "Mức lỗ tối đa trên chênh lệch giá là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q4",
        "number": "4",
        "prompt": "Lợi nhuận là bao nhiêu nếu giá cổ phiếu khi hết hạn là 47 USD?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: -$102. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q5",
        "number": "5",
        "prompt": "Điểm hòa vốn là gì?",
        "sourcePrompt": "What is the breakeven point?",
        "options": [
          {
            "id": "A",
            "text": "$48,02",
            "sourceText": "$48.02"
          },
          {
            "id": "B",
            "text": "$41,98",
            "sourceText": "$41.98"
          },
          {
            "id": "C",
            "text": "$55,66",
            "sourceText": "$55.66"
          },
          {
            "id": "D",
            "text": "$50,00",
            "sourceText": "$50.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $48,02. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q6",
        "number": "6",
        "prompt": "Giả sử bạn đóng chênh lệch giá 60 ngày sau đó. Lợi nhuận sẽ là bao nhiêu nếu giá cổ phiếu vẫn ở mức 50 USD?",
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
            "text": "không có đáp án nào ở trên Đối với câu hỏi 7 và 8, giả sử một nhà đầu tư kỳ vọng giá cổ phiếu sẽ duy trì ở mức khoảng 50 USD và quyết định thực hiện chiến lược lây lan bướm bằng cách sử dụng quyền chọn mua tháng Sáu.",
            "sourceText": "none of the above For questions 7 and 8, suppose an investor expects the stock price to remain at about $50 and decides to execute a butterfly spread using the June calls."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $41. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q7",
        "number": "7",
        "prompt": "Chi phí của việc lây lan bướm sẽ là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $79. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q8",
        "number": "8",
        "prompt": "Lợi nhuận sẽ là bao nhiêu nếu giá cổ phiếu khi hết hạn là 52,50 USD?",
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
            "text": "$1,037",
            "sourceText": "$1.037"
          },
          {
            "id": "D",
            "text": "$421",
            "sourceText": "$421"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $171. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q9",
        "number": "9",
        "prompt": "Giả sử bạn muốn xây dựng chênh lệch tỷ lệ bằng cách sử dụng quyền chọn mua ngày 50 tháng 3 và tháng 6. Bạn muốn mua hợp đồng quyền chọn mua 100 tháng 6. Bạn sẽ bán bao nhiêu call vào ngày 50 tháng 3?",
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
            "text": "không có đáp án nào ở trên Trả lời câu hỏi 10 và 11 về chênh lệch lịch dựa trên giả định rằng giá cổ phiếu được kỳ vọng sẽ giữ ở mức khá ổn định. Sử dụng chênh lệch call ngày 50 tháng 6/tháng 3. Giả sử mỗi hợp đồng một.",
            "sourceText": "none of the above Answer questions 10 and 11 about a calendar spread based on the assumption that stock prices are expected to remain fairly constant. Use the June/March 50 call spread. Assume one contract of each."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 105. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q10",
        "number": "10",
        "prompt": "Chi phí chênh lệch sẽ là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $176. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q11",
        "number": "11",
        "prompt": "Lợi nhuận sẽ là bao nhiêu nếu chênh lệch giá được giữ trong 90 ngày và giá cổ phiếu là 45 USD?",
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
            "text": "không có đáp án nào ở trên Trả lời các câu hỏi từ 12 đến 17 về đoạn dây dài được xây dựng theo phương án 50 tháng 6.",
            "sourceText": "none of the above Answer questions 12 through 17 about a long straddle constructed using the June 50 options."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: -$20. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q12",
        "number": "12",
        "prompt": "Giá treo sẽ là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $971. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q13",
        "number": "13",
        "prompt": "Hai giá cổ phiếu hòa vốn khi hết hạn là bao nhiêu?",
        "sourcePrompt": "What are the two breakeven stock prices at expiration?",
        "options": [
          {
            "id": "A",
            "text": "55,58 USD và 45,87 USD",
            "sourceText": "$55.58 and $45.87"
          },
          {
            "id": "B",
            "text": "54,13 USD và 45,87 USD",
            "sourceText": "$54.13 and $45.87"
          },
          {
            "id": "C",
            "text": "55,58 USD và 44,42 USD",
            "sourceText": "$55.58 and $44.42"
          },
          {
            "id": "D",
            "text": "59,71 USD và 40,29 USD",
            "sourceText": "$59.71 and $40.29"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 59,71 USD và 40,29 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q14",
        "number": "14",
        "prompt": "Lợi nhuận là bao nhiêu nếu giá cổ phiếu khi hết hạn là 64,75 USD?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: không có đáp án nào ở trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q15",
        "number": "15",
        "prompt": "Lợi nhuận là bao nhiêu nếu vị thế được giữ trong 90 ngày và giá cổ phiếu là 55 USD?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: -$109. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q16",
        "number": "16",
        "prompt": "Giả sử nhà đầu tư thêm quyền chọn mua vào vị trí dài, một giao dịch được gọi là dây đeo. Điều này sẽ ảnh hưởng gì đến giá cổ phiếu hòa vốn?",
        "sourcePrompt": "Suppose the investor adds a call to the long straddle, a transaction known as a strap. What will this do to the breakeven stock prices?",
        "options": [
          {
            "id": "A",
            "text": "hạ thấp cả điểm hòa vốn tăng và giảm",
            "sourceText": "lower both the upside and downside breakevens"
          },
          {
            "id": "B",
            "text": "tăng cả điểm hòa vốn tăng và giảm",
            "sourceText": "raise both the upside and downside breakevens"
          },
          {
            "id": "C",
            "text": "tăng mức tăng và giảm điểm hòa vốn",
            "sourceText": "raise the upside and lower the downside breakevens"
          },
          {
            "id": "D",
            "text": "giảm mức tăng và tăng điểm hòa vốn",
            "sourceText": "lower the upside and raise the downside breakevens"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: hạ thấp cả điểm hòa vốn tăng và giảm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q17",
        "number": "17",
        "prompt": "Giả sử một quyền put được thêm vào một dây buộc. Giao dịch tổng thể này được gọi là một dải. Xác định lợi nhuận khi hết hạn trên một dải nếu giá cổ phiếu khi hết hạn là 36 USD.",
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
            "text": "không có đáp án nào ở trên Trả lời câu hỏi từ 18 đến 20 về trải bài dài sử dụng phương án 50 và 55 tháng 6.",
            "sourceText": "none of the above Answer questions 18 through 20 about a long box spread using the June 50 and 55 options."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $1,416. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q18",
        "number": "18",
        "prompt": "Chi phí của hộp trải rộng là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $484. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q19",
        "number": "19",
        "prompt": "Lợi nhuận là bao nhiêu nếu giá cổ phiếu khi hết hạn là 52,50 USD?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $16. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q20",
        "number": "20",
        "prompt": "Giá trị hiện tại ròng của chênh lệch hộp là bao nhiêu?",
        "sourcePrompt": "What is the net present value of the box spread?",
        "options": [
          {
            "id": "A",
            "text": "9,84 USD",
            "sourceText": "$9.84"
          },
          {
            "id": "B",
            "text": "$5,00",
            "sourceText": "$5.00"
          },
          {
            "id": "C",
            "text": "$16,00",
            "sourceText": "$16.00"
          },
          {
            "id": "D",
            "text": "$1,84",
            "sourceText": "$1.84"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $1,84. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q21",
        "number": "21",
        "prompt": "Chiến lược nào sau đây không mang lại lợi nhuận trong một thị trường đang tăng trưởng?",
        "sourcePrompt": "Which of the following strategies does not profit in a rising market?",
        "options": [
          {
            "id": "A",
            "text": "put bò lây lan",
            "sourceText": "put bull spread"
          },
          {
            "id": "B",
            "text": "dây đeo dài",
            "sourceText": "long straddle"
          },
          {
            "id": "C",
            "text": "cổ áo",
            "sourceText": "collar"
          },
          {
            "id": "D",
            "text": "call bull lây lan",
            "sourceText": "call bull spread"
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
        "id": "c7-q22",
        "number": "22",
        "prompt": "Giao dịch nào sau đây có thể có mức lỗ không giới hạn?",
        "sourcePrompt": "Which of the following transactions can have an unlimited loss?",
        "options": [
          {
            "id": "A",
            "text": "dây đeo dài",
            "sourceText": "long straddle"
          },
          {
            "id": "B",
            "text": "lịch lây lan",
            "sourceText": "calendar spread"
          },
          {
            "id": "C",
            "text": "bướm lan",
            "sourceText": "butterfly spread"
          },
          {
            "id": "D",
            "text": "hộp đảo ngược",
            "sourceText": "reverse box spread"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lịch lây lan. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q23",
        "number": "23",
        "prompt": "Chiến lược nào sau đây là chiến lược tốt nhất cho sự sụt giảm dự kiến trên thị trường?",
        "sourcePrompt": "Which of the following is the best strategy for an expected fall in the market?",
        "options": [
          {
            "id": "A",
            "text": "dải dài (2 lần put và 1 call)",
            "sourceText": "long strip (2 puts and 1 call)"
          },
          {
            "id": "B",
            "text": "put bò lây lan",
            "sourceText": "put bull spread"
          },
          {
            "id": "C",
            "text": "lịch lây lan",
            "sourceText": "calendar spread"
          },
          {
            "id": "D",
            "text": "bướm lan",
            "sourceText": "butterfly spread"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: dải dài (2 lần put và 1 call). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q24",
        "number": "24",
        "prompt": "Tập thể dục sớm là bất lợi trong giao dịch nào sau đây?",
        "sourcePrompt": "Early exercise is a disadvantage in which of the following transactions?",
        "options": [
          {
            "id": "A",
            "text": "trải hộp ngắn",
            "sourceText": "short box spread"
          },
          {
            "id": "B",
            "text": "put gấu lây lan",
            "sourceText": "put bear spread"
          },
          {
            "id": "C",
            "text": "dải dài (2 lần put và 1 call)",
            "sourceText": "long strip (2 puts and 1 call)"
          },
          {
            "id": "D",
            "text": "dây đeo dài (2 call và 1 call)",
            "sourceText": "long strap (2 calls and 1 put)"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: trải hộp ngắn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q25",
        "number": "25",
        "prompt": "Điều nào sau đây có biểu đồ lợi nhuận tương tự?",
        "sourcePrompt": "Which of the following have similar profit graphs?",
        "options": [
          {
            "id": "A",
            "text": "call bull spread và long box spread",
            "sourceText": "call bull spread and long box spread"
          },
          {
            "id": "B",
            "text": "put chênh lệch gấu và chênh lệch hộp ngắn",
            "sourceText": "put bear spread and short box spread"
          },
          {
            "id": "C",
            "text": "lây lan bướm và tỷ lệ lây lan",
            "sourceText": "butterfly spread and ratio spread"
          },
          {
            "id": "D",
            "text": "lịch lây lan và call gấu lây lan",
            "sourceText": "calendar spread and call bear spread"
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
        "id": "c7-q26",
        "number": "26",
        "prompt": "Việc mua một quyền chọn và bán một quyền chọn khác được gọi là",
        "sourcePrompt": "The purchase of one option and the sale of another is known as",
        "options": [
          {
            "id": "A",
            "text": "cái hộp",
            "sourceText": "box"
          },
          {
            "id": "B",
            "text": "chiến lược gấu",
            "sourceText": "bear strategy"
          },
          {
            "id": "C",
            "text": "chiến lược tăng giá",
            "sourceText": "bull strategy"
          },
          {
            "id": "D",
            "text": "cổ áo",
            "sourceText": "collar"
          },
          {
            "id": "E",
            "text": "lây lan",
            "sourceText": "spread"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: lây lan. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q27",
        "number": "27",
        "prompt": "Chiến lược quyền chọn trong đó người nắm giữ vị thế mua cổ phiếu mua một quyền chọn bán có giá thực hiện (giá thực hiện) thấp hơn giá cổ phiếu hiện tại và bán quyền chọn mua có giá thực hiện (giá thực hiện) cao hơn giá cổ phiếu hiện tại được gọi là",
        "sourcePrompt": "The option strategy where the holder of a long position in a stock buys a put with an exercise price lower than the current stock price and sells a call with an exercise price higher than the current stock price is known as",
        "options": [
          {
            "id": "A",
            "text": "cái hộp",
            "sourceText": "box"
          },
          {
            "id": "B",
            "text": "chiến lược gấu",
            "sourceText": "bear strategy"
          },
          {
            "id": "C",
            "text": "chiến lược tăng giá",
            "sourceText": "bull strategy"
          },
          {
            "id": "D",
            "text": "cổ áo",
            "sourceText": "collar"
          },
          {
            "id": "E",
            "text": "lây lan",
            "sourceText": "spread"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: cổ áo. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q28",
        "number": "28",
        "prompt": "Lợi nhuận từ chiến lược bán khống khi cả hai quyền chọn đều thua lỗ là",
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
        "prompt": "“Giống như chênh lệch giá hình con bướm, chênh lệch giá theo lịch là một trong đó ___________ của công cụ cơ bản là yếu tố chính ảnh hưởng đến hiệu suất của nó.” Từ thích hợp nhất để điền vào chỗ trống là từ nào sau đây?",
        "sourcePrompt": "“Like the butterfly spread, the calendar spread is one in which the underlying instrument’s ___________ is the major factor in its performance.” The best word for the blank is which of the following?",
        "options": [
          {
            "id": "A",
            "text": "sự biến động",
            "sourceText": "volatility"
          },
          {
            "id": "B",
            "text": "tỷ suất lợi nhuận kỳ vọng",
            "sourceText": "expected rate of return"
          },
          {
            "id": "C",
            "text": "phiên bản beta",
            "sourceText": "beta"
          },
          {
            "id": "D",
            "text": "mối tương quan với chỉ số chuẩn",
            "sourceText": "correlation with the benchmark index"
          },
          {
            "id": "E",
            "text": "sự lệch lạc",
            "sourceText": "skewness"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c7-q30",
        "number": "30",
        "prompt": "Câu nào sau đây mô tả đúng nhất bản chất của sự phân rã giá trị thời gian quyền chọn?",
        "sourcePrompt": "Which of the following statements best describes the nature of option time value decay?",
        "options": [
          {
            "id": "A",
            "text": "giá trị thời gian giảm nhanh hơn khi giá cổ phiếu tiến đến mức giá",
            "sourceText": "time value decays more rapidly as the stock price approaches being at-the-money"
          },
          {
            "id": "B",
            "text": "giá trị thời gian giảm nhanh hơn khi thời hạn đến gần",
            "sourceText": "time value decays more rapidly as expiration approaches"
          },
          {
            "id": "C",
            "text": "giá trị thời gian giảm nhanh hơn đối với quyền chọn bán (put option) so với quyền chọn mua (call option)",
            "sourceText": "time value decays more rapidly for put option than call options"
          },
          {
            "id": "D",
            "text": "sự phân rã giá trị thời gian không xảy ra đối với các chiến lược quyền chọn cổ áo",
            "sourceText": "time value decay does not occur for collar option strategies"
          },
          {
            "id": "E",
            "text": "Sự suy giảm giá trị theo thời gian gây bất lợi cho nhà giao dịch bán khống quyền chọn mua (call option)s",
            "sourceText": "time value decay is detrimental for a trader who is short call options"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá trị thời gian giảm nhanh hơn khi thời hạn đến gần. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Giới hạn dưới của quyền chọn mua (call option) của Châu Âu đối với hợp đồng tương lai (hợp đồng tương lai) trong đó f0 là giá tương lai và X là giá thực hiện (giá thực hiện) là bao nhiêu? Giả sử f0 lớn hơn X.",
        "sourcePrompt": "What is the lower bound of a European call option on a futures contract where f0 is the futures price and X is the exercise price? Assume f0 is greater than X.",
        "options": [
          {
            "id": "A",
            "text": "sự khác biệt giữa f0 và X",
            "sourceText": "the difference between f0 and X"
          },
          {
            "id": "B",
            "text": "không",
            "sourceText": "zero"
          },
          {
            "id": "C",
            "text": "giá trị hiện tại của chênh lệch giữa f0 và X",
            "sourceText": "the present value of the difference between f0and X"
          },
          {
            "id": "D",
            "text": "tỷ lệ của f0 và X",
            "sourceText": "the ratio of f0 to X"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá trị hiện tại của chênh lệch giữa f0 và X. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q2",
        "number": "2",
        "prompt": "Điều nào sau đây mô tả đúng nhất contango bình thường?",
        "sourcePrompt": "Which of the following best describes normal contango?",
        "options": [
          {
            "id": "A",
            "text": "giá giao ngay thấp hơn giá giao sau",
            "sourceText": "the spot price is less than the futures price"
          },
          {
            "id": "B",
            "text": "giá tương lai thấp hơn giá giao ngay",
            "sourceText": "the futures price is less than the spot price"
          },
          {
            "id": "C",
            "text": "giá giao ngay kỳ vọng thấp hơn giá giao sau",
            "sourceText": "the expected spot price is less than the futuresprice"
          },
          {
            "id": "D",
            "text": "chi phí vận chuyển là âm",
            "sourceText": "the cost of carry is negative"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá giao ngay kỳ vọng thấp hơn giá giao sau. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q3",
        "number": "3",
        "prompt": "Điều nào sau đây có thể giải thích một contango?",
        "sourcePrompt": "Which of the following can explain a contango?",
        "options": [
          {
            "id": "A",
            "text": "lãi suất vượt quá tỷ suất cổ tức",
            "sourceText": "the interest rate exceeds the dividend yield"
          },
          {
            "id": "B",
            "text": "chi phí vận chuyển là âm",
            "sourceText": "the cost of carry is negative"
          },
          {
            "id": "C",
            "text": "giá kỳ hạn vượt quá giá kỳ hạn",
            "sourceText": "futures prices exceed forward prices"
          },
          {
            "id": "D",
            "text": "thị trường đang ở mức thấp hơn mức đầy đủ",
            "sourceText": "the market is at less than full carry"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: lãi suất vượt quá tỷ suất cổ tức. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q4",
        "number": "4",
        "prompt": "Xác định mức giá thích hợp của một quyền chọn mua hợp đồng tương lai ở Châu Âu nếu quyền chọn mua trị giá 6,55 USD, lãi suất phi rủi ro (lãi suất phi rủi ro) gộp liên tục là 5,6%, giá hợp đồng tương lai là 80 USD, giá thực hiện (giá thực hiện) là 75 USD và thời hạn đáo hạn là 3 tháng.",
        "sourcePrompt": "Determine the appropriate price of a European put on a futures if the call is worth $6.55, the continuously compounded risk-free rate is 5.6 percent, the futures price is $80, the exercise price is $75, and the expiration is in three months.",
        "options": [
          {
            "id": "A",
            "text": "$12,56",
            "sourceText": "$12.56"
          },
          {
            "id": "B",
            "text": "0,54 USD",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $1,62. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q5",
        "number": "5",
        "prompt": "Giả sử bạn mua hợp đồng kỳ hạn một năm (hợp đồng kỳ hạn) với giá 65 USD. Khi hết hạn, giá giao ngay là 73 USD. Lãi suất phi rủi ro (lãi suất phi rủi ro) là 10%. Giá trị của hợp đồng khi hết hạn là bao nhiêu?",
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
            "text": "0,00 USD",
            "sourceText": "$0.00"
          },
          {
            "id": "D",
            "text": "7,27 USD",
            "sourceText": "$7.27"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $8,00. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q6",
        "number": "6",
        "prompt": "Giả sử bạn bán hợp đồng kỳ hạn ba tháng (hợp đồng kỳ hạn) với giá 35 USD. Một tháng sau, các hợp đồng kỳ hạn (hợp đồng kỳ hạn) mới với các điều khoản tương tự được giao dịch với giá 30 USD. Lãi suất gộp liên tục phi rủi ro (lãi suất phi rủi ro) là 10%. Giá trị hợp đồng kỳ hạn (hợp đồng kỳ hạn) của bạn là bao nhiêu?",
        "sourcePrompt": "Suppose you sell a three-month forward contract at $35. One month later, new forward contracts with similar terms are trading for $30. The continuously compounded risk-free rate is 10 percent. What is the value of your forward contract?",
        "options": [
          {
            "id": "A",
            "text": "4,96 USD",
            "sourceText": "$4.96"
          },
          {
            "id": "B",
            "text": "$5,00",
            "sourceText": "$5.00"
          },
          {
            "id": "C",
            "text": "4,92 USD",
            "sourceText": "$4.92"
          },
          {
            "id": "D",
            "text": "4,55 USD",
            "sourceText": "$4.55"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 4,92 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q7",
        "number": "7",
        "prompt": "Giả sử bạn mua một hợp đồng tương lai (hợp đồng tương lai) với giá 150 USD. Nếu giá tương lai thay đổi thành 147 USD, giá trị của nó ngay trước khi được niêm yết trên thị trường là bao nhiêu?",
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
            "text": "không thể nói được",
            "sourceText": "it is impossible to tell"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: –$3. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q8",
        "number": "8",
        "prompt": "Tìm giá quyền chọn mua kiểu Châu Âu trên hợp đồng tương lai (hợp đồng tương lai) nếu giá tương lai là $106, giá thực hiện (giá thực hiện) là $100, lãi suất kép liên tục rủi ro (lãi suất phi rủi ro) là 7,2%, độ biến động là 0,41 và quyền chọn mua sẽ hết hạn sau sáu tháng.",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $14,57. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q9",
        "number": "9",
        "prompt": "Quyền chọn mua (quyền chọn mua) có lãi sâu trong hợp đồng tương lai được thực hiện sớm vì",
        "sourcePrompt": "A deep in-the-money call option on futures is exercised early because",
        "options": [
          {
            "id": "A",
            "text": "giá trị nội tại được tối đa hóa",
            "sourceText": "the intrinsic value is maximized"
          },
          {
            "id": "B",
            "text": "nó hoạt động giống như một hợp đồng tương lai nhưng ràng buộc tiền",
            "sourceText": "it behaves like a futures but ties up funds"
          },
          {
            "id": "C",
            "text": "giá tương lai khó có thể tăng thêm nữa",
            "sourceText": "the futures price is not likely to rise any further"
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: nó hoạt động giống như một hợp đồng tương lai nhưng ràng buộc tiền. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q10",
        "number": "10",
        "prompt": "Tìm giá trị của quyền chọn bán (put option) ở Châu Âu đối với hợp đồng tương lai nếu giá tương lai là 72, giá thực hiện (giá thực hiện) là 70, lãi suất phi rủi ro kép liên tục (lãi suất phi rủi ro) là 8,5%, độ biến động là 0,38 và thời gian đáo hạn là ba tháng.",
        "sourcePrompt": "Find the value of a European put option on futures if the futures price is 72, the exercise price is 70, the continuously compounded risk-free rate is 8.5 percent, the volatility is 0.38 and the time to expiration is three months.",
        "options": [
          {
            "id": "A",
            "text": "6h30",
            "sourceText": "6.30"
          },
          {
            "id": "B",
            "text": "12:90",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: 4,34. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q11",
        "number": "11",
        "prompt": "Giá kỳ hạn khác với giá giao ngay bởi yếu tố nào sau đây?",
        "sourcePrompt": "Futures prices differ from spot prices by which one of the following factors?",
        "options": [
          {
            "id": "A",
            "text": "rủi ro hệ thống",
            "sourceText": "the systematic risk"
          },
          {
            "id": "B",
            "text": "chi phí vận chuyển",
            "sourceText": "the cost of carry"
          },
          {
            "id": "C",
            "text": "sự lây lan",
            "sourceText": "the spread"
          },
          {
            "id": "D",
            "text": "lựa chọn quyền rủi ro (cao cấp)",
            "sourceText": "the risk premium"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chi phí vận chuyển. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q12",
        "number": "12",
        "prompt": "Tìm tỷ giá kỳ hạn của ngoại tệ Y nếu tỷ giá giao ngay là $4,50, lãi suất trong nước là 6%, lãi suất nước ngoài là 7%, và hợp đồng kỳ hạn (hợp đồng kỳ hạn) có thời hạn chín tháng. (Lãi suất được cộng dồn liên tục.)",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $4,468. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q13",
        "number": "13",
        "prompt": "Thị trường contango phù hợp với",
        "sourcePrompt": "A contango market is consistent with",
        "options": [
          {
            "id": "A",
            "text": "cơ sở tiêu cực",
            "sourceText": "a negative basis"
          },
          {
            "id": "B",
            "text": "giá kỳ hạn vượt quá giá giao ngay",
            "sourceText": "futures prices exceeding spot prices"
          },
          {
            "id": "C",
            "text": "chi phí vận chuyển dương",
            "sourceText": "a positive cost of carry"
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
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Tất cả các câu trả lời trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q14",
        "number": "14",
        "prompt": "Giới hạn dưới của quyền chọn mua ngoại tệ châu Âu là bao nhiêu nếu tỷ giá giao ngay là 2,25 USD, lãi suất trong nước là 5,5%, lãi suất nước ngoài là 6,2%, quyền chọn hết hạn sau ba tháng và giá thực hiện (giá thực hiện) là 2,20 USD? (Lãi suất được cộng dồn liên tục.)",
        "sourcePrompt": "What is the lower bound of a European foreign currency call if the spot rate is $2.25, the domestic interest rate is 5.5 percent, the foreign interest rate is 6.2 percent, the option expires in three months, and the exercise price is $2.20? (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "0,0457 USD",
            "sourceText": "$0.0457"
          },
          {
            "id": "B",
            "text": "0,05 USD",
            "sourceText": "$0.05"
          },
          {
            "id": "C",
            "text": "0,0793 USD",
            "sourceText": "$0.0793"
          },
          {
            "id": "D",
            "text": "0,0529 USD",
            "sourceText": "$0.0529"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,0457 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q15",
        "number": "15",
        "prompt": "Giả sử có rủi ro về quyền chọn (cao cấp) là $0,50. Giá giao ngay là 20 USD và giá tương lai là 22 USD. Giá giao ngay dự kiến ​​khi hết hạn là bao nhiêu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $22,50. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q16",
        "number": "16",
        "prompt": "Tìm giá trị của một quyền chọn mua ngoại tệ châu Âu nếu tỷ giá giao ngay là 5,25 USD, giá thực hiện (giá thực hiện) là 5,40 USD, lãi suất trong nước là 6,1%, lãi suất nước ngoài là 5,5%, quyền chọn mua sẽ hết hạn sau một tháng và độ biến động là 0,32. (Lãi suất được cộng dồn liên tục.)",
        "sourcePrompt": "Find the value of a European foreign currency call if the spot rate is $5.25, the exercise price is $5.40, the domestic interest rate is 6.1 percent, the foreign interest rate is 5.5 percent, the call expires in one month, and the volatility is 0.32. (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "0,167 USD",
            "sourceText": "$0.167"
          },
          {
            "id": "B",
            "text": "0,15 USD",
            "sourceText": "$0.15"
          },
          {
            "id": "C",
            "text": "$0,140",
            "sourceText": "$0.140"
          },
          {
            "id": "D",
            "text": "0,131 USD",
            "sourceText": "$0.131"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 0,131 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q17",
        "number": "17",
        "prompt": "Giá giao ngay sẽ là bao nhiêu nếu giá tương lai của chỉ số chứng khoán là 75 USD, lãi suất phi rủi ro (lãi suất phi rủi ro) là 10%, lãi suất cổ tức gộp liên tục là 3% và hợp đồng tương lai (hợp đồng tương lai) hết hạn sau ba tháng?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $73,70. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q18",
        "number": "18",
        "prompt": "Tìm giới hạn dưới của quyền chọn bán ngoại tệ châu Âu nếu tỷ giá giao ngay là 3,50 USD, lãi suất trong nước là 8%, lãi suất nước ngoài là 7%, quyền chọn hết hạn sau sáu tháng và giá thực hiện (giá thực hiện) là 3,75 USD. (Lãi suất được cộng dồn liên tục.)",
        "sourcePrompt": "Find the lower bound of a European foreign currency put if the spot rate is $3.50, the domestic interest rate is 8 percent, the foreign interest rate is 7 percent, the option expires in six months, and the exercise price is $3.75. (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "không",
            "sourceText": "zero"
          },
          {
            "id": "B",
            "text": "0,250 USD",
            "sourceText": "$0.250"
          },
          {
            "id": "C",
            "text": "0,366 USD",
            "sourceText": "$0.366"
          },
          {
            "id": "D",
            "text": "$0,108",
            "sourceText": "$0.108"
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
        "id": "c8-q19",
        "number": "19",
        "prompt": "Giả sử bây giờ là tháng Bảy. Giá hợp đồng tương lai tháng 9 là 60 USD và giá hợp đồng tương lai tháng 12 là 68 USD. Mức chênh lệch 8 USD thể hiện điều gì?",
        "sourcePrompt": "Suppose it is currently July. The September futures price is $60 and the December futures price is $68. What does the spread of $8 represent?",
        "options": [
          {
            "id": "A",
            "text": "chi phí vận chuyển từ tháng 7 đến tháng 9",
            "sourceText": "the cost of carry from July to September"
          },
          {
            "id": "B",
            "text": "rủi ro dự kiến quyền chọn (cao cấp) từ tháng 7 đến tháng 9",
            "sourceText": "the expected risk premium from July to September"
          },
          {
            "id": "C",
            "text": "chi phí vận chuyển từ tháng 9 đến tháng 12",
            "sourceText": "the cost of carry from September to December"
          },
          {
            "id": "D",
            "text": "rủi ro dự kiến quyền chọn (cao cấp) từ tháng 9 đến tháng 12",
            "sourceText": "the expected risk premium from September to December"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: chi phí vận chuyển từ tháng 9 đến tháng 12. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q20",
        "number": "20",
        "prompt": "Tại sao giá trị ban đầu của hợp đồng tương lai bằng 0?",
        "sourcePrompt": "Why is the initial value of a futures contract zero?",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng tương lai ngay lập tức được đánh dấu theo thị trường",
            "sourceText": "the futures is immediately marked-to-market"
          },
          {
            "id": "B",
            "text": "bạn không phải trả bất cứ điều gì cho nó",
            "sourceText": "you do not pay anything for it"
          },
          {
            "id": "C",
            "text": "cơ sở sẽ hội tụ về 0",
            "sourceText": "the basis will converge to zero"
          },
          {
            "id": "D",
            "text": "lợi nhuận kỳ vọng bằng không",
            "sourceText": "the expected profit is zero"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: bạn không phải trả bất cứ điều gì cho nó. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q21",
        "number": "21",
        "prompt": "Giá giao ngay cộng với chi phí vận chuyển bằng",
        "sourcePrompt": "The spot price plus the cost of carry equals",
        "options": [
          {
            "id": "A",
            "text": "lợi nhuận tiện lợi",
            "sourceText": "the convenience yield"
          },
          {
            "id": "B",
            "text": "giá giao ngay kỳ vọng trong tương lai",
            "sourceText": "the expected future spot price"
          },
          {
            "id": "C",
            "text": "lựa chọn quyền rủi ro (cao cấp)",
            "sourceText": "the risk premium"
          },
          {
            "id": "D",
            "text": "giá tương lai",
            "sourceText": "the futures price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giá tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q22",
        "number": "22",
        "prompt": "Xác định giá trị của một loại ngoại tệ châu Âu nếu quyền chọn mua ở mức 0,05 USD, tỷ giá giao ngay là 0,5702 USD, giá thực hiện (giá thực hiện) là 0,59 USD, lãi suất trong nước là 5,75%, lãi suất nước ngoài là 4,95% và quyền chọn hết hạn sau 45 ngày. (Lãi suất được cộng dồn liên tục.)",
        "sourcePrompt": "Determine the value of a European foreign currency put if the call is at $0.05, the spot rate is $0.5702, the exercise price is $0.59, the domestic interest rate is 5.75 percent, the foreign interest rate is 4.95 percent and the options expire in 45 days. (The interest rates are continuously compounded.)",
        "options": [
          {
            "id": "A",
            "text": "0,069 USD",
            "sourceText": "$0.069"
          },
          {
            "id": "B",
            "text": "0,031 USD",
            "sourceText": "$0.031"
          },
          {
            "id": "C",
            "text": "0,050 USD",
            "sourceText": "$0.050"
          },
          {
            "id": "D",
            "text": "0,517 USD",
            "sourceText": "$0.517"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 0,069 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q23",
        "number": "23",
        "prompt": "Ngang bằng lãi suất về cơ bản giống như",
        "sourcePrompt": "Interest rate parity is essentially the same as",
        "options": [
          {
            "id": "A",
            "text": "mối quan hệ tỷ giá chéo",
            "sourceText": "the cross-rate relationship"
          },
          {
            "id": "B",
            "text": "chi phí của mối quan hệ thực hiện",
            "sourceText": "the cost of carry relationship"
          },
          {
            "id": "C",
            "text": "mô hình Garman-Kohlhagen",
            "sourceText": "the Garman-Kohlhagen model"
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chi phí của mối quan hệ thực hiện. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q24",
        "number": "24",
        "prompt": "Một giao dịch khai thác sự khác biệt về giá trị lý thuyết và giá trị thực tế của một loại ngoại tệ kỳ hạn hoặc hợp đồng tương lai (hợp đồng tương lai) được gọi là",
        "sourcePrompt": "A transaction that exploits differences in the theoretical and actual values of a foreign currency forward or futures contract is called",
        "options": [
          {
            "id": "A",
            "text": "kinh doanh chênh lệch lãi suất được bảo hiểm",
            "sourceText": "covered interest arbitrage"
          },
          {
            "id": "B",
            "text": "kinh doanh chênh lệch tam giác",
            "sourceText": "triangular arbitrage"
          },
          {
            "id": "C",
            "text": "một sự chuyển đổi",
            "sourceText": "a conversion"
          },
          {
            "id": "D",
            "text": "ngang bằng lãi suất",
            "sourceText": "interest-rate parity"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: kinh doanh chênh lệch lãi suất được bảo hiểm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q25",
        "number": "25",
        "prompt": "Chi phí vận chuyển bao gồm tất cả các chi phí sau, ngoại trừ",
        "sourcePrompt": "The cost of carry consists of all the following except",
        "options": [
          {
            "id": "A",
            "text": "lãi suất phi rủi ro",
            "sourceText": "the risk–free rate"
          },
          {
            "id": "B",
            "text": "chi phí lưu trữ",
            "sourceText": "the cost of storage"
          },
          {
            "id": "C",
            "text": "bảo hiểm tài sản",
            "sourceText": "insurance on the asset"
          },
          {
            "id": "D",
            "text": "lựa chọn quyền rủi ro (cao cấp)",
            "sourceText": "the risk premium"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: lựa chọn quyền rủi ro (cao cấp). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q26",
        "number": "26",
        "prompt": "Giá trị của vị thế mua trong một hợp đồng kỳ hạn (hợp đồng kỳ hạn) khi hết hạn là",
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
            "text": "giá kỳ hạn ban đầu được chiết khấu đến ngày đáo hạn",
            "sourceText": "the original forward price discounted to expiration"
          },
          {
            "id": "D",
            "text": "giá giao ngay trừ đi giá kỳ hạn ban đầu được chiết khấu đến ngày đáo hạn",
            "sourceText": "the spot price minus the original forward price discounted to expiration"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá giao ngay trừ đi giá kỳ hạn ban đầu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q27",
        "number": "27",
        "prompt": "Giá trị của hợp đồng tương lai (hợp đồng tương lai) ngay sau khi được đánh dấu theo thị trường (mark-to-market) là",
        "sourcePrompt": "The value of a futures contract immediately after being marked to market is",
        "options": [
          {
            "id": "A",
            "text": "về số lượng bằng với số tiền quyết toán hàng ngày",
            "sourceText": "numerically equal to the daily settlement amount"
          },
          {
            "id": "B",
            "text": "giá giao ngay cộng với giá kỳ hạn ban đầu",
            "sourceText": "the spot price plus the original forward price"
          },
          {
            "id": "C",
            "text": "bằng với số tiền mà giá đã thay đổi kể từ khi hợp đồng được mở",
            "sourceText": "equal to the amount by which the price changed since the contract was opened"
          },
          {
            "id": "D",
            "text": "đơn giản là bằng không",
            "sourceText": "simply zero"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: đơn giản là bằng không. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q28",
        "number": "28",
        "prompt": "Trong điều kiện không chắc chắn và ngại rủi ro, giá giao ngay hôm nay bằng",
        "sourcePrompt": "Under uncertainty and risk aversion, today’s spot price equals",
        "options": [
          {
            "id": "A",
            "text": "giá giao ngay dự kiến trong tương lai, trừ chi phí lưu trữ, trừ lãi suất bị mất, trừ rủi ro quyền chọn (phí quyền chọn)",
            "sourceText": "the expected future spot price, minus the storage costs, minus the interest forgone, minus the risk premium"
          },
          {
            "id": "B",
            "text": "giá giao ngay dự kiến trong tương lai, trừ chi phí lưu trữ, trừ lãi suất bị mất, cộng với rủi ro quyền lựa chọn (phí quyền chọn)",
            "sourceText": "the expected future spot price, minus the storage costs, minus the interest forgone, plus the risk premium"
          },
          {
            "id": "C",
            "text": "giá giao ngay dự kiến trong tương lai, trừ chi phí lưu trữ, trừ rủi ro quyền chọn (phí quyền chọn)",
            "sourceText": "the expected future spot price, minus the storage costs, minus the risk premium"
          },
          {
            "id": "D",
            "text": "giá giao ngay trong tương lai trừ đi chi phí lưu kho",
            "sourceText": "the future spot price minus the cost of storage"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: giá giao ngay dự kiến trong tương lai, trừ chi phí lưu trữ, trừ lãi suất bị mất, trừ rủi ro quyền chọn (phí quyền chọn). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q29",
        "number": "29",
        "prompt": "Lợi nhuận bổ sung kiếm được bằng cách nắm giữ một mặt hàng đang thiếu hụt hoặc thu được lợi ích phi tiền tệ từ một tài sản được gọi là",
        "sourcePrompt": "The additional return earned by holding a commodity that is in short supply or a nonpecuniary gain from an asset is referred to as",
        "options": [
          {
            "id": "A",
            "text": "chi phí vận chuyển âm",
            "sourceText": "the negative cost of carry"
          },
          {
            "id": "B",
            "text": "lợi nhuận tiện lợi",
            "sourceText": "the convenience yield"
          },
          {
            "id": "C",
            "text": "lợi nhuận tự do của dòng tiền",
            "sourceText": "cash-flow free gains"
          },
          {
            "id": "D",
            "text": "lợi nhuận trên cơ sở",
            "sourceText": "gains on the underlying"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lợi nhuận tiện lợi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c8-q30",
        "number": "30",
        "prompt": "Sự ngang bằng giữa quyền chọn bán và hợp đồng tương lai là mối quan hệ giữa giá quyền chọn bán, quyền chọn mua và hợp đồng tương lai của một tài sản. Giả sử lãi suất phi rủi ro (lãi suất phi rủi ro) không đổi và quyền chọn kiểu Châu Âu, điều nào sau đây thể hiện chính xác mối quan hệ ngang giá giữa quyền chọn bán và hợp đồng tương lai?",
        "sourcePrompt": "Put-call-futures parity is the relationship between the prices of puts, calls, and futures on an asset. Assuming a constant risk-free rate and European options, which of the following correctly expresses the relationship of put-call-futures parity?",
        "options": [
          {
            "id": "A",
            "text": "Pe(S0,T) = Ce(S0,T) + (X – f0(T))(1 + r)-T",
            "sourceText": "Pe(S0,T) = Ce(S0,T) + (X – f0(T))(1 + r)-T"
          },
          {
            "id": "B",
            "text": "Pe(S0,T,X) = Ce(S0,T) – (X – f0(T))(1 + r)-T",
            "sourceText": "Pe(S0,T,X) = Ce(S0,T) – (X – f0(T))(1 + r)-T"
          },
          {
            "id": "C",
            "text": "Pe(S0,T,X) = Ce(S0,T,X) + (X – f0(T))(1 + r)-T",
            "sourceText": "Pe(S0,T,X) = Ce(S0,T,X) + (X – f0(T))(1 + r)-T"
          },
          {
            "id": "D",
            "text": "Pe(S0,T,X) = Ce(S0,T,X)(X – f0(T))(1 + r)-T",
            "sourceText": "Pe(S0,T,X) = Ce(S0,T,X)(X – f0(T))(1 + r)-T"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Pe(S0,T) = Ce(S0,T) + (X – f0(T))(1 + r)-T. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Giao dịch được thiết kế để lợi dụng việc định giá sai trong mối quan hệ giữa giá tương lai và giá giao ngay được gọi là",
        "sourcePrompt": "The transaction designed to exploit mispricing in the relationship between futures and spot prices is called",
        "options": [
          {
            "id": "A",
            "text": "một thỏa thuận mua lại",
            "sourceText": "a repurchase agreement"
          },
          {
            "id": "B",
            "text": "một hàng rào",
            "sourceText": "a hedge"
          },
          {
            "id": "C",
            "text": "suy đoán",
            "sourceText": "speculation"
          },
          {
            "id": "D",
            "text": "thực hiện chênh lệch giá",
            "sourceText": "carry arbitrage"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: thực hiện chênh lệch giá. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Trên cơ sở tính thanh khoản, hợp đồng tương lai (hợp đồng tương lai) tốt nhất để phòng ngừa rủi ro lãi suất ngắn hạn là",
        "sourcePrompt": "On the basis of liquidity, the best futures contract for hedging short-term interest rates is",
        "options": [
          {
            "id": "A",
            "text": "tín phiếu kho bạc",
            "sourceText": "Treasury bills"
          },
          {
            "id": "B",
            "text": "lãi suất cơ bản",
            "sourceText": "the prime rate"
          },
          {
            "id": "C",
            "text": "giấy thương mại",
            "sourceText": "commercial paper"
          },
          {
            "id": "D",
            "text": "Đô la châu Âu",
            "sourceText": "Eurodollars"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Đô la châu Âu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q4",
        "number": "4",
        "prompt": "Lựa chọn nào sau đây không liên quan đến trái phiếu kho bạc hợp đồng tương lai (hợp đồng tương lai)?",
        "sourcePrompt": "Which one of the following options is not associated with the Treasury bond futures contract?",
        "options": [
          {
            "id": "A",
            "text": "cuối tháng",
            "sourceText": "end-of-the-month"
          },
          {
            "id": "B",
            "text": "quyền chọn chênh lệch",
            "sourceText": "spread option"
          },
          {
            "id": "C",
            "text": "quyền chọn thẻ hoang dã",
            "sourceText": "wild card option"
          },
          {
            "id": "D",
            "text": "quyền chọn chất lượng",
            "sourceText": "quality option"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: quyền chọn chênh lệch. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q5",
        "number": "5",
        "prompt": "Giao dịch trong đó chênh lệch giá hợp đồng tương lai trái phiếu kho bạc được kết hợp với giao dịch hợp đồng tương lai quỹ Fed được gọi là giao dịch",
        "sourcePrompt": "The transaction in which a Treasury bond futures spread is combined with a Fed funds futures transaction is called a",
        "options": [
          {
            "id": "A",
            "text": "Chênh lệch trái phiếu",
            "sourceText": "Bond-bill spread"
          },
          {
            "id": "B",
            "text": "MOB lây lan",
            "sourceText": "MOB spread"
          },
          {
            "id": "C",
            "text": "quay vòng đơn hàng được chỉ định",
            "sourceText": "designated order turnaround"
          },
          {
            "id": "D",
            "text": "buôn bán rùa",
            "sourceText": "turtle trade"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: buôn bán rùa. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q6",
        "number": "6",
        "prompt": "Cơ hội khóa giá hóa đơn và mua trái phiếu kho bạc có thể giao sau này được gọi là",
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
            "text": "thẻ hoang dã",
            "sourceText": "the wild card"
          },
          {
            "id": "D",
            "text": "giao dịch chênh lệch giá",
            "sourceText": "delivery arbitrage"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: thẻ hoang dã. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q7",
        "number": "1B",
        "prompt": "1575, giá giao ngay phải giảm bao nhiêu vào lúc 5 giờ chiều. để biện minh cho việc giao hàng?",
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
            "text": "20:50",
            "sourceText": "20.50"
          },
          {
            "id": "D",
            "text": "17,71",
            "sourceText": "17.71"
          },
          {
            "id": "E",
            "text": "42,94",
            "sourceText": "42.94"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1.285. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q8",
        "number": "8",
        "prompt": "Chi phí của một lựa chọn giao hàng được thanh toán như thế nào?",
        "sourcePrompt": "How is the cost of a delivery option paid?",
        "options": [
          {
            "id": "A",
            "text": "người mua trả tiền cho người bán bằng cách thanh toán bằng tiền mặt",
            "sourceText": "the long pays the short with a cash settlement"
          },
          {
            "id": "B",
            "text": "người bán trả tiền cho người mua bằng cách thanh toán bằng tiền mặt",
            "sourceText": "the short pays the long with a cash settlement"
          },
          {
            "id": "C",
            "text": "giá tương lai đóng cửa cao hơn",
            "sourceText": "a higher closing futures price"
          },
          {
            "id": "D",
            "text": "giá tương lai đóng cửa thấp hơn",
            "sourceText": "a lower closing futures price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: giá tương lai đóng cửa thấp hơn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q9",
        "number": "112A",
        "prompt": "25, lãi tích lũy là 1,35, giá tương lai là 114,75, CF là 1,0125, lãi tích lũy khi giao hàng là 0,95 và thời gian nắm giữ là ba tháng.",
        "sourcePrompt": "25, the accrued interest is 1.35, the futures price is 114.75, the CF is 1.0125, the accrued interest at delivery is 0.95, and the holding period is three months.",
        "options": [
          {
            "id": "A",
            "text": "1,85 phần trăm",
            "sourceText": "1.85 percent"
          },
          {
            "id": "B",
            "text": "0,77 phần trăm",
            "sourceText": "0.77 percent"
          },
          {
            "id": "C",
            "text": "14,77 phần trăm",
            "sourceText": "14.77 percent"
          },
          {
            "id": "D",
            "text": "13,04 phần trăm",
            "sourceText": "13.04 percent"
          },
          {
            "id": "E",
            "text": "2,23 phần trăm",
            "sourceText": "2.23 percent"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 13,04 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q10",
        "number": "10",
        "prompt": "Nếu một công ty dự định vay tiền trong tương lai, lãi suất mà công ty đang cố gắng khóa là",
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
            "text": "sự khác biệt giữa tỷ giá giao ngay và tỷ giá kỳ hạn",
            "sourceText": "the difference between the spot rate and the forward rate"
          },
          {
            "id": "D",
            "text": "tỷ giá kỳ hạn tại thời điểm chấm dứt phòng ngừa rủi ro",
            "sourceText": "the forward rate at the termination of the hedge"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên f.",
            "sourceText": "none of the above f."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: tỷ giá kỳ hạn hiện tại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q11",
        "number": "11",
        "prompt": "Xác định lãi suất repo ngầm định hàng năm trên chênh lệch trái phiếu kho bạc trong đó kỳ hạn tháng 3 được mua ở mức 98,7 và kỳ hạn tháng 6 được bán ở mức 99,5. CF tháng 3 là 1,225 và CF tháng 6 là 1,24. Tiền lãi dồn tích tính đến ngày 1 tháng 3 là 0,75 và tiền lãi dồn tích tính đến ngày 1 tháng 6 là 1,22.",
        "sourcePrompt": "Determine the annualized implied repo rate on a Treasury bond spread in which the March is bought at 98.7 and the June is sold at 99.5. The March CF is 1.225 and the June CF is 1.24. The accrued interest as of March 1 is 0.75 and the accrued interest as of June 1 is 1.22.",
        "options": [
          {
            "id": "A",
            "text": "5,21 phần trăm",
            "sourceText": "5.21 percent"
          },
          {
            "id": "B",
            "text": "10,03 phần trăm",
            "sourceText": "10.03 percent"
          },
          {
            "id": "C",
            "text": "1,28 phần trăm",
            "sourceText": "1.28 percent"
          },
          {
            "id": "D",
            "text": "2,42 phần trăm",
            "sourceText": "2.42 percent"
          },
          {
            "id": "E",
            "text": "0,81 phần trăm",
            "sourceText": "0.81 percent"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 10,03 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q12",
        "number": "12",
        "prompt": "Xác định mức giá mà hợp đồng tương lai chỉ số chứng khoán bị định giá sai nếu chỉ số chứng khoán ở mức 200, hợp đồng tương lai ở mức 202,5, lãi suất phi rủi ro (lãi suất phi rủi ro) là 6,45%, tỷ suất cổ tức là 2,75% và hợp đồng sẽ hết hạn sau ba tháng.",
        "sourcePrompt": "Determine the amount by which a stock index futures is mispriced if the stock index is at 200, the futures is at 202.5, the risk-free rate is 6.45 percent, the dividend yield is 2.75 percent, and the contract expires in three months.",
        "options": [
          {
            "id": "A",
            "text": "được định giá thấp hơn 0,64",
            "sourceText": "underpriced by 0.64"
          },
          {
            "id": "B",
            "text": "giá quá cao 2,5",
            "sourceText": "overpriced by 2.5"
          },
          {
            "id": "C",
            "text": "định giá quá cao 9,76",
            "sourceText": "overpriced by 9.76"
          },
          {
            "id": "D",
            "text": "định giá quá cao 0,64",
            "sourceText": "overpriced by 0.64"
          },
          {
            "id": "E",
            "text": "bị định giá thấp 2,5",
            "sourceText": "underpriced by 2.5"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: định giá quá cao 0,64. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q13",
        "number": "13",
        "prompt": "Điều nào sau đây không phải là rủi ro khi giao dịch theo chương trình?",
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
            "text": "cổ tức không chắc chắn",
            "sourceText": "the dividends are not certain"
          },
          {
            "id": "D",
            "text": "các cổ phiếu không thể được mua cùng một lúc",
            "sourceText": "the stocks cannot be purchased simultaneously"
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
        "id": "c9-q14",
        "number": "14",
        "prompt": "Lý do nào có thể được đưa ra cho việc không muốn phòng ngừa rủi ro cho việc phát hành một khoản nợ trong tương lai nếu lãi suất cao bất thường?",
        "sourcePrompt": "What reason might be given for not wanting to hedge the future issuance of a liability if interest rates are unusually high?",
        "options": [
          {
            "id": "A",
            "text": "chi phí ký quỹ sẽ đắt",
            "sourceText": "the margin cost will be expensive"
          },
          {
            "id": "B",
            "text": "bạn đang khóa ở mức cao",
            "sourceText": "you are locking in a high rate"
          },
          {
            "id": "C",
            "text": "chi phí giao dịch cao hơn",
            "sourceText": "transaction costs are higher"
          },
          {
            "id": "D",
            "text": "giá tương lai thấp hơn",
            "sourceText": "futures prices are lower"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: bạn đang khóa ở mức cao. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q15",
        "number": "15",
        "prompt": "Nếu chỉ số chứng khoán ở mức 148, giá tương lai 3 tháng là 151, tỷ suất cổ tức là 5% và lãi suất là 8%, hãy xác định lợi nhuận từ việc kinh doanh chênh lệch chỉ số nếu cổ phiếu kết thúc ở mức 144 khi hết hạn. (Bỏ qua chi phí giao dịch.)",
        "sourcePrompt": "If the stock index is at 148, the three-month futures price is 151, the dividend yield is 5 percent and the interest rate is 8 percent, determine the profit from an index arbitrage if the stock ends up at 144 at expiration. (Ignore transaction costs.)",
        "options": [
          {
            "id": "A",
            "text": "1,89",
            "sourceText": "1.89"
          },
          {
            "id": "B",
            "text": "4 giờ 00",
            "sourceText": "4.00"
          },
          {
            "id": "C",
            "text": "7 giờ 00",
            "sourceText": "7.00"
          },
          {
            "id": "D",
            "text": "5.11",
            "sourceText": "5.11"
          },
          {
            "id": "E",
            "text": "–7 giờ 00",
            "sourceText": "–7.00"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 1,89. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q16",
        "number": "16",
        "prompt": "Giao dịch trong đó tiền được vay bằng cách bán chứng khoán và hứa mua lại sau vài tuần được gọi là giao dịch",
        "sourcePrompt": "The transaction in which money is borrowed by selling a security and promising to buy it back in several weeks is called a",
        "options": [
          {
            "id": "A",
            "text": "repo kỳ hạn",
            "sourceText": "term repo"
          },
          {
            "id": "B",
            "text": "repo qua đêm",
            "sourceText": "overnight repo"
          },
          {
            "id": "C",
            "text": "kinh doanh chênh lệch giá",
            "sourceText": "term arbitrage"
          },
          {
            "id": "D",
            "text": "MOB lây lan",
            "sourceText": "MOB spread"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: repo kỳ hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q17",
        "number": "17",
        "prompt": "Quyền chọn cuối tháng là",
        "sourcePrompt": "The end-of-the-month option is",
        "options": [
          {
            "id": "A",
            "text": "quyền thực hiện quyền chọn vào ngày cuối cùng của tháng",
            "sourceText": "the right to exercise an option on the last day of the month"
          },
          {
            "id": "B",
            "text": "một lựa chọn hết hạn vào ngày cuối cùng của tháng",
            "sourceText": "an option expiring on the last day of the month"
          },
          {
            "id": "C",
            "text": "quyền giao hàng trong bảy ngày làm việc cuối cùng của tháng",
            "sourceText": "the right to deliver during the last seven businessdays of the month"
          },
          {
            "id": "D",
            "text": "một quyền chọn chỉ giao dịch vào cuối tháng",
            "sourceText": "an option that trades only at the end of the month"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: quyền giao hàng trong bảy ngày làm việc cuối cùng của tháng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q18",
        "number": "18",
        "prompt": "Nếu bạn mua cả một đĩa CD Eurodollar kỳ hạn 30 ngày với lãi suất 6,7% và một hợp đồng tương lai 90 ngày trên một đĩa CD Eurodollar kỳ hạn 90 ngày với mức giá ngụ ý lợi suất là 7,2%, tổng lợi nhuận hàng năm của bạn là bao nhiêu? (Cả hai sản lượng đều dựa trên năm 360 ngày.)",
        "sourcePrompt": "If you buy both a 30-day Eurodollar CD paying 6.7 percent and a 90-day futures on a 90-day Eurodollar CD with a price implying a yield of 7.2 percent, what is your total annualized return? (Both yields are based on 360-day years.)",
        "options": [
          {
            "id": "A",
            "text": "7,25 phần trăm",
            "sourceText": "7.25 percent"
          },
          {
            "id": "B",
            "text": "7,07 phần trăm",
            "sourceText": "7.07 percent"
          },
          {
            "id": "C",
            "text": "10,15 phần trăm",
            "sourceText": "10.15 percent"
          },
          {
            "id": "D",
            "text": "7,75 phần trăm",
            "sourceText": "7.75 percent"
          },
          {
            "id": "E",
            "text": "6,95 phần trăm",
            "sourceText": "6.95 percent"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 7,07 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q19",
        "number": "112B",
        "prompt": "25. Số tiền trên hóa đơn là bao nhiêu?",
        "sourcePrompt": "25. What is the invoice amount?",
        "options": [
          {
            "id": "A",
            "text": "137,56",
            "sourceText": "137.56"
          },
          {
            "id": "B",
            "text": "143,64",
            "sourceText": "143.64"
          },
          {
            "id": "C",
            "text": "161,33",
            "sourceText": "161.33"
          },
          {
            "id": "D",
            "text": "134,14",
            "sourceText": "134.14"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 137,56. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q20",
        "number": "20",
        "prompt": "Xác định hệ số chuyển đổi để giao trái phiếu 7 1/4 ngày 15 tháng 5 năm 2026 vào ngày trái phiếu kho bạc hợp đồng tương lai tháng 3 năm 2010.",
        "sourcePrompt": "Determine the conversion factor for delivery of the 7 1/4’s off May 15, 2026 on the March 2010 T–bond futures contract.",
        "options": [
          {
            "id": "A",
            "text": "1.225",
            "sourceText": "1.225"
          },
          {
            "id": "B",
            "text": "0,932",
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
        "prompt": "Điều nào sau đây không cần thiết khi tính lãi suất repo ngầm định cho hợp đồng tương lai chỉ số chứng khoán?",
        "sourcePrompt": "Which of the following is not needed when calculating the implied repo rate for stock index futures?",
        "options": [
          {
            "id": "A",
            "text": "giá tương lai",
            "sourceText": "futures price"
          },
          {
            "id": "B",
            "text": "hệ số chuyển đổi",
            "sourceText": "conversion factor"
          },
          {
            "id": "C",
            "text": "thời điểm hết hạn",
            "sourceText": "time–to–expiration"
          },
          {
            "id": "D",
            "text": "giá giao ngay",
            "sourceText": "spot price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên Sử dụng thông tin sau để trả lời các câu hỏi từ 22 đến 24. Vào ngày 1 tháng 10, lãi suất LIBOR kỳ hạn một tháng là 4,50% và lãi suất LIBOR hai tháng là 5,00%. Hợp đồng tương lai quỹ Fed tháng 11 được niêm yết ở mức 94,50. Giá trị hợp đồng là 5.000.000 USD.",
            "sourceText": "none of the above Use the following information to answer questions 22 through 24. On October 1, the one-month LIBOR rate is 4.50 percent and the two month LIBOR rate is 5.00 percent. The November Fed funds futures is quoted at 94.50. The contract size is $5,000,000."
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hệ số chuyển đổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q22",
        "number": "22",
        "prompt": "Giá trị đồng đô la của việc tăng một điểm cơ bản trong giá hợp đồng tương lai của quỹ Fed là",
        "sourcePrompt": "The dollar value of a one basis point rise in the Fed funds futures price is",
        "options": [
          {
            "id": "A",
            "text": "–$25,00",
            "sourceText": "–$25.00"
          },
          {
            "id": "B",
            "text": "$41,67",
            "sourceText": "$41.67"
          },
          {
            "id": "C",
            "text": "5.000 USD",
            "sourceText": "$5,000"
          },
          {
            "id": "D",
            "text": "$25,00",
            "sourceText": "$25.00"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $41,67. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q23",
        "number": "23",
        "prompt": "Tất cả những điều sau đây là những hạn chế đối với hoạt động kinh doanh chênh lệch giá tương lai của quỹ Fed, ngoại trừ",
        "sourcePrompt": "All of the following are limitations to Fed funds futures arbitrage, except",
        "options": [
          {
            "id": "A",
            "text": "Lãi suất quỹ Fed được xác định bởi chính sách của Ngân hàng Dự trữ Liên bang",
            "sourceText": "Fed funds rates are determined by Federal ReserveBank policy"
          },
          {
            "id": "B",
            "text": "rủi ro cơ bản giữa quỹ Fed và LIBOR",
            "sourceText": "basis risk between Fed funds and LIBOR"
          },
          {
            "id": "C",
            "text": "lãi suất repo có thể thay đổi tùy theo thời hạn giao dịch",
            "sourceText": "repo rate is variable for the trading horizon"
          },
          {
            "id": "D",
            "text": "quyết toán dựa trên mức trung bình trong tháng giao hàng",
            "sourceText": "settlement is based on average in delivery month"
          },
          {
            "id": "E",
            "text": "chi phí giao dịch",
            "sourceText": "transaction costs"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Lãi suất quỹ Fed được xác định bởi chính sách của Ngân hàng Dự trữ Liên bang. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q24",
        "number": "24",
        "prompt": "Tính lãi hoặc lỗ bằng đô la từ việc vay giá trị hiện tại là 5.000.000 USD với lãi suất LIBOR một tháng và cho vay số tiền tương tự với lãi suất LIBOR hai tháng đồng thời bán một quỹ Fed hợp đồng tương lai tháng 11. Giả sử lãi suất vào ngày 1 tháng 11 là 7%, không có rủi ro cơ bản và vị thế được giải phóng vào ngày 1 tháng 11. Hãy chọn câu trả lời gần nhất.",
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
        "prompt": "Điều nào sau đây là một hình thức giao dịch theo chương trình?",
        "sourcePrompt": "Which of the following is a form of program trading?",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch giá chỉ số",
            "sourceText": "index arbitrage"
          },
          {
            "id": "B",
            "text": "chênh lệch thẻ hoang dã",
            "sourceText": "wild card arbitrage"
          },
          {
            "id": "C",
            "text": "kinh doanh chênh lệch tam giác",
            "sourceText": "triangular arbitrage"
          },
          {
            "id": "D",
            "text": "chênh lệch giá thời gian",
            "sourceText": "timing arbitrage"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: chênh lệch giá chỉ số. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q26",
        "number": "26",
        "prompt": "Giả sử bạn quan sát chỉ số S&P 500 giao ngay ở mức 1.210 và hợp đồng tương lai chỉ số S&P 500 ba tháng ở mức 1.205. Dựa trên chênh lệch giá, bạn kết luận",
        "sourcePrompt": "Suppose you observe the spot S&P 500 index at 1,210 and the three month S&P 500 index futures at 1,205. Based on carry arbitrage, you conclude",
        "options": [
          {
            "id": "A",
            "text": "thị trường tương lai này không hiệu quả vì giá tương lai thấp hơn giá giao ngay",
            "sourceText": "this futures market is inefficient because the futures price is below the spot price"
          },
          {
            "id": "B",
            "text": "thị trường tương lai này đang chỉ ra rằng giá giao ngay dự kiến sẽ giảm",
            "sourceText": "this futures market is indicating that the spot price is expected to fall"
          },
          {
            "id": "C",
            "text": "giá giao ngay quá cao so với giá tương lai được quan sát",
            "sourceText": "the spot price is too high relative to the observed futures price"
          },
          {
            "id": "D",
            "text": "tỷ suất cổ tức cao hơn lãi suất phi rủi ro",
            "sourceText": "the dividend yield is higher than the risk-freeinterest rate"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: tỷ suất cổ tức cao hơn lãi suất phi rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q27",
        "number": "27",
        "prompt": "Giả sử bạn quan sát đồng euro giao ngay ở mức $1,38/€ và hợp đồng tương lai đồng euro ba tháng ở mức $1,379/€. Dựa trên chênh lệch giá, bạn kết luận",
        "sourcePrompt": "Suppose you observe the spot euro at $1.38/€ and the three month euro futures at $1.379/€. Based on carry arbitrage, you conclude",
        "options": [
          {
            "id": "A",
            "text": "thị trường tương lai này không hiệu quả vì giá tương lai thấp hơn giá giao ngay",
            "sourceText": "this futures market is inefficient because the futures price is below the spot price"
          },
          {
            "id": "B",
            "text": "thị trường tương lai này đang chỉ ra rằng giá giao ngay dự kiến sẽ giảm",
            "sourceText": "this futures market is indicating that the spot price is expected to fall"
          },
          {
            "id": "C",
            "text": "giá giao ngay quá cao so với giá tương lai được quan sát",
            "sourceText": "the spot price is too high relative to the observed futures price"
          },
          {
            "id": "D",
            "text": "lãi suất phi rủi ro (lãi suất phi rủi ro) ở Châu Âu cao hơn lãi suất phi rủi ro (lãi suất phi rủi ro) ở Hoa Kỳ.",
            "sourceText": "the risk-free rate in Europe is higher than therisk-free rate in the U. S."
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: lãi suất phi rủi ro (lãi suất phi rủi ro) ở Châu Âu cao hơn lãi suất phi rủi ro (lãi suất phi rủi ro) ở Hoa Kỳ.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q28",
        "number": "0",
        "prompt": "25% (lãi suất liên tục) và lãi suất phi rủi ro châu Âu là 0,75% (lãi suất liên tục). Xác định giá trị lý thuyết của một hợp đồng ngoại hối 6 tháng hợp đồng tương lai (chọn câu trả lời gần nhất).",
        "sourcePrompt": "25% (continuously compounded), and the European risk-free interest rate of 0.75% (continuously compounded). Identify the theoretical value of a six month foreign exchange futures contract (select the closest answer).",
        "options": [
          {
            "id": "A",
            "text": "$1,3815/€",
            "sourceText": "$1.3815/€"
          },
          {
            "id": "B",
            "text": "$1,3765/€",
            "sourceText": "$1.3765/€"
          },
          {
            "id": "C",
            "text": "$1,3785/€",
            "sourceText": "$1.3785/€"
          },
          {
            "id": "D",
            "text": "$1,3825/€",
            "sourceText": "$1.3825/€"
          },
          {
            "id": "E",
            "text": "$1,3755/€",
            "sourceText": "$1.3755/€"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: $1,3765/€. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q29",
        "number": "3B",
        "prompt": "25% (lãi kép liên tục) và giá hợp đồng tương lai 6 tháng là $1,50/€. Xác định đúng lãi suất phi rủi ro ngụ ý ở Châu Âu (chọn câu trả lời gần nhất).",
        "sourcePrompt": "25% (continuously compounded), and the six month futures price of $1.50/€. Identify the correct implied European risk-free interest rate (select the closest answer).",
        "options": [
          {
            "id": "A",
            "text": "–3,25%",
            "sourceText": "–3.25%"
          },
          {
            "id": "B",
            "text": "–1,0%",
            "sourceText": "–1.0%"
          },
          {
            "id": "C",
            "text": "0,0%",
            "sourceText": "0.0%"
          },
          {
            "id": "D",
            "text": "1,0%",
            "sourceText": "1.0%"
          },
          {
            "id": "E",
            "text": "3,25%",
            "sourceText": "3.25%"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: 3,25%. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c9-q30",
        "number": "30",
        "prompt": "Kinh doanh chênh lệch lãi suất được bảo hiểm từ góc độ đồng đô la Mỹ khi giá hợp đồng tương lai đồng euro (tính bằng $/€) quá cao liên quan đến",
        "sourcePrompt": "Covered interest arbitrage from a U. S. dollar perspective when the euro futures price (expressed in $/€) is too high involves",
        "options": [
          {
            "id": "A",
            "text": "mua ngoại hối hợp đồng tương lai",
            "sourceText": "buying foreign exchange futures contracts"
          },
          {
            "id": "B",
            "text": "bán lãi suất hợp đồng tương lai",
            "sourceText": "selling interest rate futures contracts"
          },
          {
            "id": "C",
            "text": "cho vay đầu tư bằng đồng euro không rủi ro",
            "sourceText": "lending funds in risk-free euro investment"
          },
          {
            "id": "D",
            "text": "bán euro",
            "sourceText": "selling euros"
          },
          {
            "id": "E",
            "text": "mua ETF chỉ số chứng khoán euro",
            "sourceText": "buying euro stock index ETFs"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: cho vay đầu tư bằng đồng euro không rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Hàng rào ngắn là hàng rào trong đó",
        "sourcePrompt": "A short hedge is one in which",
        "options": [
          {
            "id": "A",
            "text": "yêu cầu ký quỹ được miễn",
            "sourceText": "the margin requirement is waived"
          },
          {
            "id": "B",
            "text": "hedger là hợp đồng tương lai bán khống",
            "sourceText": "the hedger is short futures"
          },
          {
            "id": "C",
            "text": "hedger bán khống trên thị trường giao ngay (thị trường giao ngay)",
            "sourceText": "the hedger is short in the spot market"
          },
          {
            "id": "D",
            "text": "giá kỳ hạn thấp hơn giá giao ngay",
            "sourceText": "the futures price is lower than the spot price"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: hedger là hợp đồng tương lai bán khống. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q2",
        "number": "2",
        "prompt": "Phòng ngừa rủi ro dự đoán là phòng ngừa trong đó",
        "sourcePrompt": "An anticipatory hedge is one in which",
        "options": [
          {
            "id": "A",
            "text": "cơ sở dự kiến sẽ giảm",
            "sourceText": "the basis is expected to fall"
          },
          {
            "id": "B",
            "text": "người phòng ngừa rủi ro kỳ vọng kiếm được lợi nhuận từ hợp đồng tương lai",
            "sourceText": "the hedger expects to make a profit on the futures"
          },
          {
            "id": "C",
            "text": "vị trí giao ngay sẽ được thực hiện trong tương lai",
            "sourceText": "the spot position will be taken in the future"
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
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: vị trí giao ngay sẽ được thực hiện trong tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q3",
        "number": "3",
        "prompt": "Tăng cường cơ sở có nghĩa là",
        "sourcePrompt": "A strengthening of the basis means",
        "options": [
          {
            "id": "A",
            "text": "giá giao ngay tăng nhiều hơn giá giao sau",
            "sourceText": "the spot price rises more than the futures price"
          },
          {
            "id": "B",
            "text": "giá kỳ hạn giảm nhiều hơn giá giao ngay",
            "sourceText": "the futures price falls more than the spot price"
          },
          {
            "id": "C",
            "text": "lợi ích phòng ngừa rủi ro ngắn hạn",
            "sourceText": "a short hedger benefits"
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
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Tất cả các câu trả lời trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q4",
        "number": "4",
        "prompt": "Một phòng ngừa rủi ro trong đó tài sản cơ sở cho hợp đồng tương lai không phải là tài sản được phòng ngừa là",
        "sourcePrompt": "A hedge in which the asset underlying the futures is not the asset being hedged is",
        "options": [
          {
            "id": "A",
            "text": "một hàng rào chéo",
            "sourceText": "a cross hedge"
          },
          {
            "id": "B",
            "text": "hàng rào tối ưu",
            "sourceText": "an optimal hedge"
          },
          {
            "id": "C",
            "text": "một hàng rào cơ sở",
            "sourceText": "a basis hedge"
          },
          {
            "id": "D",
            "text": "hàng rào chênh lệch tối thiểu",
            "sourceText": "a minimum variance hedge"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: một hàng rào chéo. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q5",
        "number": "5",
        "prompt": "Khi hợp đồng tương lai hết hạn trước khi việc phòng hộ bị chấm dứt và người phòng ngừa chuyển sang thời điểm đáo hạn hợp đồng tương lai tiếp theo, nó được gọi là",
        "sourcePrompt": "When the futures expires before the hedge is terminated and the hedger moves into the next futures expiration, it is called",
        "options": [
          {
            "id": "A",
            "text": "trải rộng hàng rào",
            "sourceText": "spreading the hedge"
          },
          {
            "id": "B",
            "text": "lăn hàng rào về phía trước",
            "sourceText": "rolling the hedge forward"
          },
          {
            "id": "C",
            "text": "tối ưu trọng lượng hàng rào",
            "sourceText": "optimally weighting the hedge"
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: lăn hàng rào về phía trước. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q6",
        "number": "6",
        "prompt": "Thời hạn của hợp đồng tương lai (hợp đồng tương lai) được sử dụng trong tỷ lệ phòng hộ nhạy cảm với giá là",
        "sourcePrompt": "The duration of the futures contract used in the price sensitivity hedge ratio is",
        "options": [
          {
            "id": "A",
            "text": "khoảng thời gian trái phiếu giao ngay được phòng ngừa rủi ro bằng cách sử dụng giá tương lai thay vì giá giao ngay",
            "sourceText": "the duration of the spot bond being hedged using the futures price instead of the spot price"
          },
          {
            "id": "B",
            "text": "thời hạn của trái phiếu có thể giao được sử dụng giá giao ngay",
            "sourceText": "the duration of the deliverable bond using the spot price"
          },
          {
            "id": "C",
            "text": "thời hạn của trái phiếu có thể giao được sử dụng giá hợp đồng tương lai",
            "sourceText": "the duration of the deliverable bond using thefutures price"
          },
          {
            "id": "D",
            "text": "thời hạn của danh mục trái phiếu tổng thể",
            "sourceText": "the duration of the overall bond portfolio"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: thời hạn của trái phiếu có thể giao được sử dụng giá hợp đồng tương lai. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q7",
        "number": "7",
        "prompt": "Kỹ thuật nào có thể được sử dụng để tính tỷ lệ phòng ngừa sai lệch tối thiểu?",
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
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: hồi quy. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q8",
        "number": "8",
        "prompt": "Biện pháp nào sau đây được sử dụng trong tỷ lệ phòng ngừa độ nhạy cảm giá đối với hợp đồng tương lai trái phiếu?",
        "sourcePrompt": "Which of the following measures is used in the price sensitivity hedge ratio for bond futures?",
        "options": [
          {
            "id": "A",
            "text": "phiên bản beta",
            "sourceText": "beta"
          },
          {
            "id": "B",
            "text": "thời lượng",
            "sourceText": "duration"
          },
          {
            "id": "C",
            "text": "sự tương quan",
            "sourceText": "correlation"
          },
          {
            "id": "D",
            "text": "phương sai",
            "sourceText": "variance"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: thời lượng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q9",
        "number": "9",
        "prompt": "Giả sử bạn mua một tài sản ở mức 50 USD và bán một hợp đồng tương lai (hợp đồng tương lai) ở mức 53 USD. Lợi nhuận của bạn khi hết hạn là bao nhiêu nếu giá tài sản lên tới 49 USD? (Bỏ qua chi phí vận chuyển)",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $3. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q10",
        "number": "10",
        "prompt": "Giả sử bạn mua một tài sản ở mức 70 USD và bán một hợp đồng tương lai (hợp đồng tương lai) ở mức 72 USD. Lợi nhuận của bạn là bao nhiêu nếu trước khi hết hạn, bạn bán tài sản ở mức 75 USD và giá tương lai là 78 ​​USD?",
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
            "text": "không có đáp án nào ở trên",
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
            "text": "Các cổ đông không thể chịu đựng được tổn thất theo giá trị thị trường",
            "sourceText": "Shareholders cannot tolerate mark-to-market losses"
          },
          {
            "id": "C",
            "text": "Phòng ngừa rủi ro của các tập đoàn có thể có lợi thế về thuế",
            "sourceText": "Hedging by corporations can have tax advantages"
          },
          {
            "id": "D",
            "text": "Cổ đông không phải lúc nào cũng nhận thức được rủi ro của công ty mình",
            "sourceText": "Shareholders are not always aware of their firms' risks"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Các cổ đông không thể chịu đựng được tổn thất theo giá trị thị trường. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q12",
        "number": "12",
        "prompt": "Tìm lợi nhuận nếu nhà đầu tư mua hợp đồng tương lai tháng 7 ở mức 75, bán hợp đồng tương lai tháng 10 ở mức 78 và sau đó đảo ngược hợp đồng tương lai tháng 7 ở mức 72 và hợp đồng tương lai tháng 10 ở mức 77.",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: –2. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q13",
        "number": "13",
        "prompt": "Xác định tỷ lệ phòng ngừa rủi ro tối ưu cho trái phiếu kho bạc trị giá 1.000.000 USD với thời hạn được sửa đổi là 12,45 nếu hợp đồng tương lai (hợp đồng tương lai) có giá 90.000 USD và thời hạn được sửa đổi là 8,5 năm.",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 16,27. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q14",
        "number": "14",
        "prompt": "Lợi nhuận phòng ngừa rủi ro là bao nhiêu nếu trái phiếu được mua với giá 150.000 USD, hai hợp đồng tương lai (hợp đồng tương lai) được bán với giá 72.500 USD mỗi trái phiếu, sau đó trái phiếu được bán với giá 147.500 USD và hợp đồng tương lai được mua lại với giá 74.000 USD mỗi trái phiếu?",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: –$5,500. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q15",
        "number": "15",
        "prompt": "Tìm tỷ lệ phòng ngừa rủi ro cho hợp đồng tương lai chỉ số chứng khoán tối ưu nếu danh mục đầu tư trị giá 1.200.000 USD, hệ số beta là 1,15 và giá hợp đồng tương lai S&P 500 là 450,70 với hệ số nhân là 250.",
        "sourcePrompt": "Find the optimal stock index futures hedge ratio if the portfolio is worth $1,200,000, the beta is 1.15 and the S&P 500 futures price is 450.70 with a multiplier of 250.",
        "options": [
          {
            "id": "A",
            "text": "10:65",
            "sourceText": "10.65"
          },
          {
            "id": "B",
            "text": "12:25",
            "sourceText": "12.25"
          },
          {
            "id": "C",
            "text": "6123,80",
            "sourceText": "6123.80"
          },
          {
            "id": "D",
            "text": "5325.05",
            "sourceText": "5325.05"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 12:25. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q16",
        "number": "16",
        "prompt": "Trong tình huống nào sau đây bạn sẽ sử dụng phòng hộ ngắn?",
        "sourcePrompt": "In which of the following situations would you use a short hedge?",
        "options": [
          {
            "id": "A",
            "text": "kế hoạch mua cổ phiếu",
            "sourceText": "the planned purchase of a stock"
          },
          {
            "id": "B",
            "text": "kế hoạch mua giấy thương mại",
            "sourceText": "the planned purchase of commercial paper"
          },
          {
            "id": "C",
            "text": "kế hoạch phát hành trái phiếu",
            "sourceText": "the planned issuance of bonds"
          },
          {
            "id": "D",
            "text": "kế hoạch mua lại cổ phiếu để trang trải một vị thế bán khống",
            "sourceText": "the planned repurchase of stock to cover a short position"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: kế hoạch phát hành trái phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q17",
        "number": "17",
        "prompt": "Bạn nắm giữ một danh mục đầu tư chứng khoán trị giá 15 triệu USD với hệ số beta là 1,05. Bạn muốn hạ hệ số beta xuống 0,90 bằng cách sử dụng hợp đồng tương lai S&P 500, có giá là 460,20 và hệ số nhân là 250. Bạn nên làm gì giao dịch? Làm tròn đến toàn bộ hợp đồng gần nhất.",
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
        "prompt": "Bạn nắm giữ một danh mục đầu tư trái phiếu trị giá 10 triệu USD và thời hạn được điều chỉnh là 8,5. Bạn sẽ làm gì để tăng thời hạn lên 10 nếu giá tương lai là 93.000 USD và thời hạn được sửa đổi ngụ ý của nó là 9,25? Làm tròn đến toàn bộ hợp đồng gần nhất.",
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
        "prompt": "Câu nào sau đây về việc sử dụng hợp đồng tương lai trong phân bổ tài sản chiến thuật là đúng?",
        "sourcePrompt": "Which of the following statements about the use of futures in tactical asset allocation is correct?",
        "options": [
          {
            "id": "A",
            "text": "Thực hiện phân bổ tài sản chiến thuật bằng cách sử dụng hợp đồng tương lai là một hình thức định thời điểm thị trường.",
            "sourceText": "Implementing tactical asset allocation using futures is a form of market timing."
          },
          {
            "id": "B",
            "text": "Hợp đồng tương lai có thể được sử dụng để mua hoặc bán cổ phiếu một cách tổng hợp nhưng bạn không thể điều chỉnh đồng thời hệ số beta hoặc thời lượng.",
            "sourceText": "Futures can be used to synthetically buy or sell stocks but you cannot simultaneously adjust the beta or duration"
          },
          {
            "id": "C",
            "text": "Sự khác biệt giữa danh mục đầu tư nắm giữ và chỉ số làm cơ sở cho hợp đồng tương lai sẽ tạo ra lợi nhuận cho nhà đầu tư.",
            "sourceText": "A difference between the portfolio held and the index on which the futures is based will generate a gain for the investor."
          },
          {
            "id": "D",
            "text": "Việc sử dụng hợp đồng tương lai trong phân bổ tài sản chiến thuật sẽ tạo ra tiền mặt từ việc bán tổng hợp, sau đó được sử dụng trong giao dịch mua tổng hợp.",
            "sourceText": "The use of futures in tactical asset allocation will generate cash from the synthetic sale, which is then used in the synthetic purchase."
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "None of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Hợp đồng tương lai có thể được sử dụng để mua hoặc bán cổ phiếu một cách tổng hợp nhưng bạn không thể điều chỉnh đồng thời hệ số beta hoặc thời lượng.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q20",
        "number": "20",
        "prompt": "Mặc dù phòng hộ chéo có rủi ro cao hơn một chút so với phòng hộ thông thường nhưng nó sẽ giảm rủi ro nếu điều nào sau đây xảy ra?",
        "sourcePrompt": "Though a cross hedge has somewhat higher risk than an ordinary hedge, it will reduce risk if which of the following occurs?",
        "options": [
          {
            "id": "A",
            "text": "Giá kỳ hạn biến động nhiều hơn giá giao ngay",
            "sourceText": "futures prices are more volatile than spot prices"
          },
          {
            "id": "B",
            "text": "giao ngay và hợp đồng tương lai (hợp đồng tương lai) được định giá chính xác ngay từ đầu",
            "sourceText": "the spot and futures contracts are correctly priced at the onset"
          },
          {
            "id": "C",
            "text": "giá giao ngay và giá tương lai có mối tương quan thuận chiều",
            "sourceText": "spot and futures prices are positively correlated"
          },
          {
            "id": "D",
            "text": "giá tương lai ít biến động hơn giá giao ngay",
            "sourceText": "futures prices are less volatile than spot prices"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: giá giao ngay và giá tương lai có mối tương quan thuận chiều. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q21",
        "number": "21",
        "prompt": "Điều nào sau đây thể hiện chính xác lợi nhuận từ việc phòng ngừa rủi ro?",
        "sourcePrompt": "Which of the following correctly expresses the profit on a hedge?",
        "options": [
          {
            "id": "A",
            "text": "cơ sở khi hàng rào được đóng lại",
            "sourceText": "the basis when the hedge is closed"
          },
          {
            "id": "B",
            "text": "sự thay đổi về cơ sở",
            "sourceText": "the change in the basis"
          },
          {
            "id": "C",
            "text": "lợi nhuận giao ngay trừ đi lợi nhuận tương lai",
            "sourceText": "the spot profit minus the futures profit"
          },
          {
            "id": "D",
            "text": "lợi nhuận tương lai trừ đi lợi nhuận giao ngay",
            "sourceText": "the futures profit minus the spot profit"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: sự thay đổi về cơ sở. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q22",
        "number": "22",
        "prompt": "Điều gì xảy ra với cơ sở trong suốt thời hạn của hợp đồng?",
        "sourcePrompt": "What happens to the basis through the contract's life?",
        "options": [
          {
            "id": "A",
            "text": "ban đầu nó giảm, sau đó tăng",
            "sourceText": "it initially decreases, then increases"
          },
          {
            "id": "B",
            "text": "ban đầu nó tăng, sau đó giảm",
            "sourceText": "it initially increases, then decreases"
          },
          {
            "id": "C",
            "text": "nó vẫn tương đối ổn định",
            "sourceText": "it remains relatively steady"
          },
          {
            "id": "D",
            "text": "nó di chuyển về số 0",
            "sourceText": "it moves toward zero"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó di chuyển về số 0. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q23",
        "number": "23",
        "prompt": "Tìm lợi nhuận nếu nhà đầu tư tham gia giao dịch chênh lệch giá nội thị trường bằng cách bán hợp đồng tương lai tháng 9 ở mức 4,5 USD, mua hợp đồng tương lai tháng 12 ở mức 7,5 USD và sau đó đảo ngược hợp đồng tương lai tháng 9 ở mức 5,5 USD và hợp đồng tương lai tháng 12 ở mức 9,5 USD.",
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
            "text": "không có đáp án nào ở trên",
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
            "text": "sự không chắc chắn về quy mô của vị thế giao ngay",
            "sourceText": "the uncertainty about the size of the spot position"
          },
          {
            "id": "C",
            "text": "rủi ro của việc không khớp kỳ hạn hợp đồng tương lai với kỳ hạn giao ngay",
            "sourceText": "the risk of mismatching the futures maturity to the spot maturity"
          },
          {
            "id": "D",
            "text": "khả năng xảy ra lỗi hồi quy",
            "sourceText": "the possibility of regression error"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: khó khăn trong việc đo lường sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q25",
        "number": "25",
        "prompt": "Mối quan hệ giữa lợi tức giao ngay và lợi tức ngụ ý bởi giá tương lai được gọi là",
        "sourcePrompt": "The relationship between the spot yield and the yield implied by the futures price is called",
        "options": [
          {
            "id": "A",
            "text": "beta lợi suất",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: beta lợi suất. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q26",
        "number": "26",
        "prompt": "Tất cả những điều sau đây là các quyết định lựa chọn hợp đồng tương lai (hợp đồng tương lai) liên quan đến phòng ngừa rủi ro, ngoại trừ",
        "sourcePrompt": "All of the following are futures contract choice decisions related to hedging, except",
        "options": [
          {
            "id": "A",
            "text": "cơ sở tài sản (tài sản cơ bản) trong tương lai nào",
            "sourceText": "which future underlying asset"
          },
          {
            "id": "B",
            "text": "giá thực hiện (giá thực hiện)",
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
            "text": "Tất cả các câu trả lời trên đều là các quyết định lựa chọn hợp đồng tương lai (hợp đồng tương lai)",
            "sourceText": "all of the above are futures contract choice decisions"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: giá thực hiện (giá thực hiện). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q27",
        "number": "27",
        "prompt": "Phòng ngừa rủi ro bằng hợp đồng tương lai tiềm ẩn tất cả các rủi ro sau, ngoại trừ",
        "sourcePrompt": "Hedging with futures contracts entails all of the following risks, except",
        "options": [
          {
            "id": "A",
            "text": "đánh dấu vào thị trường có thể yêu cầu dòng tiền lớn",
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
            "text": "Tất cả các câu trả lời trên đều tiềm ẩn nguy cơ",
            "sourceText": "all of the above are potential risks"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Tất cả các câu trả lời trên đều tiềm ẩn nguy cơ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q28",
        "number": "28",
        "prompt": "Dựa trên cách tiếp cận tỷ lệ phòng ngừa chênh lệch tối thiểu, số lượng hợp đồng tương lai (hợp đồng tương lai) tối ưu để triển khai là bao nhiêu, với các thông tin sau. Hệ số tương quan giữa thay đổi giá của công cụ cơ sở và thay đổi giá hợp đồng tương lai (hợp đồng tương lai) là 0,95, độ lệch chuẩn của thay đổi giá trị vị thế cơ sở là 300% và độ lệch chuẩn của thay đổi giá hợp đồng tương lai (hợp đồng tương lai) là 11,4%.",
        "sourcePrompt": "Based on the minimum variance hedge ratio approach, what is the optimal number of futures contracts to deploy, given the following information. The correlation coefficient between changes in the underlying instrument’s price and changes in the futures contract price is 0.95, the standard deviation of the changes in the underlying position’s value is 300%, and the standard deviation of the changes in the futures contract’s price is 11.4%.",
        "options": [
          {
            "id": "A",
            "text": "dài 35 đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "long 35 futures contracts"
          },
          {
            "id": "B",
            "text": "dài 25 đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "long 25 futures contracts"
          },
          {
            "id": "C",
            "text": "dài 15 đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "long 15 futures contracts"
          },
          {
            "id": "D",
            "text": "short 25 hợp đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "short 25 futures contracts"
          },
          {
            "id": "E",
            "text": "ngắn 15 đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "short 15 futures contracts"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: short 25 hợp đồng tương lai (hợp đồng tương lai)s. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c10-q29",
        "number": "29",
        "prompt": "Dựa trên cách tiếp cận tỷ lệ phòng ngừa chênh lệch tối thiểu, hiệu quả phòng ngừa rủi ro là gì, với các thông tin sau. Hệ số tương quan giữa thay đổi giá của công cụ cơ sở và thay đổi giá hợp đồng tương lai (hợp đồng tương lai) là 0,70, độ lệch chuẩn của thay đổi giá trị vị thế cơ sở là 40% và độ lệch chuẩn của thay đổi giá hợp đồng tương lai (hợp đồng tương lai) là 50%. (Chọn câu trả lời gần nhất.)",
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
        "prompt": "Dựa trên cách tiếp cận tỷ lệ phòng ngừa rủi ro nhạy cảm về giá, số lượng hợp đồng tương lai (hợp đồng tương lai) tối ưu để triển khai là bao nhiêu, với các thông tin sau. Hệ số beta lợi suất là 0,65, giá trị hiện tại của thay đổi điểm cơ bản đối với danh mục trái phiếu cơ bản là 33.000 USD và giá trị hiện tại của thay đổi điểm cơ bản đối với trái phiếu hợp đồng tương lai (hợp đồng tương lai) là 325 USD. (Chọn câu trả lời gần nhất.)",
        "sourcePrompt": "Based on the price sensitivity hedge ratio approach, what is the optimal number of futures contracts to deploy, given the following information. The yield beta is 0.65, the present value of a basis point change for the underlying bond portfolio is $33,000, and the present value of a basis point change for the bond futures contract is $325. (Select the closest answer.)",
        "options": [
          {
            "id": "A",
            "text": "dài 100 hợp đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "long 100 futures contracts"
          },
          {
            "id": "B",
            "text": "dài 55 đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "long 55 futures contracts"
          },
          {
            "id": "C",
            "text": "short 66 hợp đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "short 66 futures contracts"
          },
          {
            "id": "D",
            "text": "short 22 hợp đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "short 22 futures contracts"
          },
          {
            "id": "E",
            "text": "ngắn 11 đồng tương lai (hợp đồng tương lai)s",
            "sourceText": "short 11 futures contracts"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: short 66 hợp đồng tương lai (hợp đồng tương lai)s. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Chênh lệch giữa lãi suất hoán đổi và lãi suất của chứng khoán Kho bạc có cùng kỳ hạn được gọi là lãi suất",
        "sourcePrompt": "The difference between the swap rate and the rate on a Treasury security of the same maturity is called the",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch hoán đổi",
            "sourceText": "swap spread"
          },
          {
            "id": "B",
            "text": "lựa chọn quyền rủi ro (cao cấp)",
            "sourceText": "risk premium"
          },
          {
            "id": "C",
            "text": "cơ sở hoán đổi",
            "sourceText": "swap basis"
          },
          {
            "id": "D",
            "text": "sự dàn trải",
            "sourceText": "settlement spread"
          },
          {
            "id": "E",
            "text": "LIBOR",
            "sourceText": "LIBOR"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: chênh lệch hoán đổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q2",
        "number": "2",
        "prompt": "Việc thanh toán hoán đổi lãi suất được thực hiện",
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
            "text": "vào bất kỳ ngày nào được các đối tác thỏa thuận",
            "sourceText": "at whatever dates are agreed upon by the counterparties"
          },
          {
            "id": "D",
            "text": "vào ngày 15 của tháng đã thỏa thuận",
            "sourceText": "on the 15th of the agreed-upon months"
          },
          {
            "id": "E",
            "text": "vào ngày cuối cùng của tháng",
            "sourceText": "on the last day of the month"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: vào bất kỳ ngày nào được các đối tác thỏa thuận. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q3",
        "number": "3",
        "prompt": "Để xác định lãi suất cố định trên một hợp đồng hoán đổi, bạn sẽ",
        "sourcePrompt": "To determine the fixed rate on a swap, you would",
        "options": [
          {
            "id": "A",
            "text": "sử dụng tính chẵn lẻ của call",
            "sourceText": "use put-call parity"
          },
          {
            "id": "B",
            "text": "định giá nó như việc phát hành trái phiếu có lãi suất cố định và mua trái phiếu có lãi suất thả nổi hoặc ngược lại",
            "sourceText": "price it as the issuance of a fixed rate bond and purchase of a floating rate bond or vice versa"
          },
          {
            "id": "C",
            "text": "sử dụng lãi suất cố định tương tự như trái phiếu không lãi suất có kỳ hạn tương đương",
            "sourceText": "use the same fixed rate as that of a zero coupon bond of equivalent maturity"
          },
          {
            "id": "D",
            "text": "sử dụng lãi suất gộp liên tục cho trái phiếu có kỳ hạn ngắn nhất",
            "sourceText": "use the continuously compounded rate for the shortest maturity bond"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: định giá nó như việc phát hành trái phiếu có lãi suất cố định và mua trái phiếu có lãi suất thả nổi hoặc ngược lại. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q4",
        "number": "4",
        "prompt": "Loại nào sau đây không phải là loại hoán đổi?",
        "sourcePrompt": "Which of the following is not a type of swap?",
        "options": [
          {
            "id": "A",
            "text": "hoán đổi thanh toán",
            "sourceText": "settlement swaps"
          },
          {
            "id": "B",
            "text": "trao đổi hàng hóa",
            "sourceText": "commodity swaps"
          },
          {
            "id": "C",
            "text": "hoán đổi lãi suất",
            "sourceText": "interest rate swaps"
          },
          {
            "id": "D",
            "text": "hoán đổi vốn cổ phần",
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
        "prompt": "Số tiền cơ bản dùng để thanh toán hoán đổi được gọi là",
        "sourcePrompt": "The underlying amount of money on which the swap payments are made is called",
        "options": [
          {
            "id": "A",
            "text": "giá trị quyết toán",
            "sourceText": "settlement value"
          },
          {
            "id": "B",
            "text": "giá trị thị trường",
            "sourceText": "market value"
          },
          {
            "id": "C",
            "text": "số tiền danh nghĩa",
            "sourceText": "notional amount"
          },
          {
            "id": "D",
            "text": "giá trị cơ sở",
            "sourceText": "base value"
          },
          {
            "id": "E",
            "text": "giá trị vốn sở hữu",
            "sourceText": "equity value"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: số tiền danh nghĩa. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q6",
        "number": "6",
        "prompt": "Loại hoán đổi cơ bản và phổ biến nhất được gọi là",
        "sourcePrompt": "The most basic and common type of swap is called",
        "options": [
          {
            "id": "A",
            "text": "hoán đổi cơ sở",
            "sourceText": "basis swap"
          },
          {
            "id": "B",
            "text": "trao đổi vani đơn giản",
            "sourceText": "plain vanilla swap"
          },
          {
            "id": "C",
            "text": "trao đổi giấy thường",
            "sourceText": "plain paper swap"
          },
          {
            "id": "D",
            "text": "trao đổi thương mại",
            "sourceText": "commercial swap"
          },
          {
            "id": "E",
            "text": "hoán đổi trái phiếu",
            "sourceText": "bond swap"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: trao đổi vani đơn giản. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q7",
        "number": "7",
        "prompt": "Hoán đổi lãi suất trong đó cả hai bên trả lãi suất thả nổi được gọi là hợp đồng hoán đổi lãi suất.",
        "sourcePrompt": "An interest rate swap with both sides paying a floating rate is called a",
        "options": [
          {
            "id": "A",
            "text": "trao đổi vani đơn giản",
            "sourceText": "plain vanilla swap"
          },
          {
            "id": "B",
            "text": "trao đổi hai chiều",
            "sourceText": "two-way swap"
          },
          {
            "id": "C",
            "text": "trao đổi thả nổi",
            "sourceText": "floating swap"
          },
          {
            "id": "D",
            "text": "trao đổi chênh lệch",
            "sourceText": "spread swap"
          },
          {
            "id": "E",
            "text": "hoán đổi cơ sở",
            "sourceText": "basis swap"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: hoán đổi cơ sở. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q8",
        "number": "8",
        "prompt": "Xem xét một giao dịch hoán đổi để trả tiền thả nổi A và nhận tiền B thả nổi. Loại hoán đổi nào sẽ được kết hợp với hoán đổi này để tạo ra một hoán đổi nhằm tạo ra một hoán đổi vanilla đơn giản bằng đồng tiền B.",
        "sourcePrompt": "Consider a swap to pay currency A floating and receive currency B floating. What type of swap would be combined with this swap to produce a swap to produce a plain vanilla swap in currency B.",
        "options": [
          {
            "id": "A",
            "text": "trả tiền B thả nổi, nhận tiền A cố định",
            "sourceText": "pay currency B floating, receive currency A fixed"
          },
          {
            "id": "B",
            "text": "trả tiền B cố định, nhận tiền A thả nổi",
            "sourceText": "pay currency B fixed, receive currency A floating"
          },
          {
            "id": "C",
            "text": "trả tiền B cố định, nhận tiền A cố định",
            "sourceText": "pay currency B fixed, receive currency A fixed"
          },
          {
            "id": "D",
            "text": "trả tiền B thả nổi, nhận tiền A thả nổi",
            "sourceText": "pay currency B floating, receive currency A floating"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: trả tiền B cố định, nhận tiền A thả nổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q9",
        "number": "9",
        "prompt": "Đối với một giao dịch hoán đổi tiền tệ với số tiền danh nghĩa là 10 triệu USD, số tiền danh nghĩa bằng bảng Anh nếu tỷ giá hối đoái là 1,55 USD là (xấp xỉ)",
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
            "text": "10 triệu bảng",
            "sourceText": "₤10 million"
          },
          {
            "id": "D",
            "text": "₤6,45 triệu",
            "sourceText": "₤6.45 million"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: ₤6,45 triệu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q10",
        "number": "10",
        "prompt": "Hoán đổi tiền tệ mà không trao đổi số tiền danh nghĩa có nhiều khả năng được sử dụng nhất trong tình huống nào?",
        "sourcePrompt": "A currency swap without the exchange of notional amount is most likely to be used in what situation?",
        "options": [
          {
            "id": "A",
            "text": "một công ty phát hành trái phiếu",
            "sourceText": "a company issuing a bond"
          },
          {
            "id": "B",
            "text": "một công ty tạo ra dòng tiền bằng ngoại tệ",
            "sourceText": "a company generating cash flows in a foreign currency"
          },
          {
            "id": "C",
            "text": "một công ty sắp xếp một khoản vay",
            "sourceText": "a company arranging a loan"
          },
          {
            "id": "D",
            "text": "một đại lý đang cố gắng phòng ngừa rủi ro cho một quyền chọn tiền tệ",
            "sourceText": "a dealer trying to hedge a currency option"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: một công ty tạo ra dòng tiền bằng ngoại tệ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q11",
        "number": "11",
        "prompt": "Điều nào sau đây phân biệt hoán đổi vốn cổ phần với hoán đổi tiền tệ?",
        "sourcePrompt": "Which of the following distinguishes equity swaps from currency swaps?",
        "options": [
          {
            "id": "A",
            "text": "thanh toán hoán đổi vốn cổ phần luôn được phòng ngừa rủi ro",
            "sourceText": "equity swap payments are always hedged"
          },
          {
            "id": "B",
            "text": "thanh toán hoán đổi vốn cổ phần được thực hiện vào ngày đầu tiên của tháng",
            "sourceText": "equity swap payments are made on the first day of the month"
          },
          {
            "id": "C",
            "text": "thanh toán hoán đổi vốn cổ phần có thể âm",
            "sourceText": "equity swap payments can be negative"
          },
          {
            "id": "D",
            "text": "thanh toán hoán đổi vốn cổ phần có nhiều rủi ro tín dụng hơn",
            "sourceText": "equity swap payments have more credit risk"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: thanh toán hoán đổi vốn cổ phần có thể âm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q12",
        "number": "12",
        "prompt": "Tìm khoản thanh toán ròng sắp tới trong một hợp đồng hoán đổi lãi suất đơn giản trong đó bên cố định trả 10% và lãi suất thả nổi cho khoản thanh toán sắp tới là 9,5%. Số tiền danh nghĩa là 20 triệu USD và các khoản thanh toán được dựa trên giả định là 180 ngày trong kỳ thanh toán và 360 ngày trong một năm.",
        "sourcePrompt": "Find the upcoming net payment in a plain vanilla interest rate swap in which the fixed party pays 10 percent and the floating rate for the upcoming payment is 9.5 percent. The notional amount is $20 million and payments are based on the assumption of 180 days in the payment period and 360 days in a year.",
        "options": [
          {
            "id": "A",
            "text": "người trả cố định trả 1.950.000 USD",
            "sourceText": "fixed payer pays $1,950,000"
          },
          {
            "id": "B",
            "text": "người trả cố định trả 950.000 USD",
            "sourceText": "fixed payer pays $950,000"
          },
          {
            "id": "C",
            "text": "người trả tiền thả nổi trả 1 triệu đô la",
            "sourceText": "floating payer pays $1 million"
          },
          {
            "id": "D",
            "text": "người trả tiền thả nổi trả 50.000 đô la",
            "sourceText": "floating payer pays $50,000"
          },
          {
            "id": "E",
            "text": "người trả cố định trả 50.000 USD",
            "sourceText": "fixed payer pays $50,000"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: người trả cố định trả 50.000 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q13",
        "number": "13",
        "prompt": "Tìm khoản thanh toán lãi suất sắp tới trong một giao dịch hoán đổi tiền tệ trong đó bên A trả đô la Mỹ với lãi suất cố định 5% trên số tiền danh nghĩa là 50 triệu USD và bên B trả bằng franc Thụy Sĩ với lãi suất cố định 4% trên số tiền danh nghĩa là 35 triệu SF. Các khoản thanh toán được thực hiện hàng năm với giả định là 360 ngày trong một năm và không có khoản ròng.",
        "sourcePrompt": "Find the upcoming payment interest payments in a currency swap in which party A pays U. S. dollars at a fixed rate of 5 percent on notional amount of $50 million and party B pays Swiss francs at a fixed rate of 4 percent on notional amount of SF35 million. Payments are annual under the assumption of 360 days in a year, and there is no netting.",
        "options": [
          {
            "id": "A",
            "text": "bên A trả 2.500.000 USD và bên B trả 1.400.000 SF",
            "sourceText": "party A pays $2,500,000, and party B pays SF1,400,000"
          },
          {
            "id": "B",
            "text": "bên A trả 1.400.000 SF và bên B trả 2.500.000 USD",
            "sourceText": "party A pays SF1,400,000, and party B pays $2,500,000"
          },
          {
            "id": "C",
            "text": "bên A trả 1.750.000 SF và bên B trả 1.400.000 SF",
            "sourceText": "party A pays SF1,750,000, and party B pays SF1,400,000"
          },
          {
            "id": "D",
            "text": "bên A trả 2.500.000 USD và bên B trả 2.000.000 USD",
            "sourceText": "party A pays $2,500,000, and party B pays $2,000,000"
          },
          {
            "id": "E",
            "text": "bên A trả 50 triệu USD và bên B trả 35 triệu SF",
            "sourceText": "party A pays $50 million, and party B pays SF35 million"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: bên A trả 2.500.000 USD và bên B trả 1.400.000 SF. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q14",
        "number": "14",
        "prompt": "Tìm khoản thanh toán ròng trong một giao dịch hoán đổi vốn cổ phần trong đó bên A trả lợi nhuận từ chỉ số chứng khoán và bên B trả lãi suất cố định là 6%. Số tiền danh nghĩa là 10 triệu USD. Chỉ số chứng khoán bắt đầu ở mức 1.000 và ở mức 1.055,15 vào cuối kỳ. Việc trả lãi được tính dựa trên 180 ngày trong kỳ và 360 ngày trong năm.",
        "sourcePrompt": "Find the net payment on an equity swap in which party A pays the return on a stock index and party B pays a fixed rate of 6 percent. The notional amount is $10 million. The stock index starts off at 1,000 and is at 1,055.15 at the end of the period. The interest payment is calculated based on 180 days in the period and 360 days in the year.",
        "options": [
          {
            "id": "A",
            "text": "bên B trả 851.500 USD",
            "sourceText": "party B pays $851,500"
          },
          {
            "id": "B",
            "text": "Parry B trả 48.500 USD",
            "sourceText": "parry B pays $48,500"
          },
          {
            "id": "C",
            "text": "bên B trả 251.500 USD",
            "sourceText": "party B pays $251,500"
          },
          {
            "id": "D",
            "text": "bên A trả 251.500 USD",
            "sourceText": "party A pays $251,500"
          },
          {
            "id": "E",
            "text": "bên A trả 851.500 USD",
            "sourceText": "party A pays $851,500"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: bên A trả 251.500 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q15",
        "number": "15",
        "prompt": "Tìm khoản thanh toán ròng sắp tới gần đúng cho một giao dịch hoán đổi vốn cổ phần, trong đó bên A trả lợi tức chỉ số chứng khoán 1 và bên B trả lợi tức chỉ số chứng khoán 2. Số tiền danh nghĩa là 25 triệu USD. Chỉ số chứng khoán 1 bắt đầu giai đoạn ở mức 1500 và tăng lên 1600 vào cuối giai đoạn. Chỉ số chứng khoán 2 bắt đầu giai đoạn ở mức 3500 và tăng lên 3300 vào cuối giai đoạn.",
        "sourcePrompt": "Find the approximate upcoming net payment on an equity swap in which party A pays the return on stock index 1 and party B pays the return on stock index 2. The notional amount is $25 million. Stock index 1 starts the period at 1500 and goes up to 1600 at the end of the period. Stock index 2 starts the period at 3500 and goes up to 3300 at the end of the period.",
        "options": [
          {
            "id": "A",
            "text": "Bên thanh toán chỉ số 1 trả khoảng 238.000 USD",
            "sourceText": "The party paying index 1 pays about $238,000"
          },
          {
            "id": "B",
            "text": "Bên thanh toán chỉ số 2 trả khoảng 238.000 USD",
            "sourceText": "The party paying index 2 pays about $238,000"
          },
          {
            "id": "C",
            "text": "Bên thanh toán chỉ số 2 trả khoảng 3,095 triệu USD",
            "sourceText": "The party paying index 2 pays about $3.095 million"
          },
          {
            "id": "D",
            "text": "Bên thanh toán chỉ số 1 trả khoảng 25 triệu USD",
            "sourceText": "The party paying index 1 pays about $25 million"
          },
          {
            "id": "E",
            "text": "Bên thanh toán chỉ số 1 trả khoảng 3,095 triệu USD",
            "sourceText": "The party paying index 1 pays about $3.095 million"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Bên thanh toán chỉ số 1 trả khoảng 3,095 triệu USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q16",
        "number": "16",
        "prompt": "Tìm lãi suất cố định trên một hợp đồng hoán đổi lãi suất đơn giản với các khoản thanh toán 180 ngày một lần (giả sử một năm có 360 ngày) trong một năm. Giá của trái phiếu Eurodollar không lãi suất là 0,9756 (180 ngày) và 0,9434 (360 ngày).",
        "sourcePrompt": "Find the fixed rate on a plain vanilla interest rate swap with payments every 180 days (assume a 360-day year) for one year. The prices of Eurodollar zero coupon bonds are 0.9756 (180 days) and 0.9434 (360 days).",
        "options": [
          {
            "id": "A",
            "text": "5,9 phần trăm",
            "sourceText": "5.9 percent"
          },
          {
            "id": "B",
            "text": "5 phần trăm",
            "sourceText": "5 percent"
          },
          {
            "id": "C",
            "text": "6 phần trăm",
            "sourceText": "6 percent"
          },
          {
            "id": "D",
            "text": "5,5 phần trăm",
            "sourceText": "5.5 percent"
          },
          {
            "id": "E",
            "text": "2,95 phần trăm",
            "sourceText": "2.95 percent"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 5,9 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q17",
        "number": "17",
        "prompt": "Sử dụng thông tin trong bài toán 16 để tìm lãi suất cố định trên một hợp đồng hoán đổi vốn cổ phần có chỉ số chứng khoán ở mức 2.000.",
        "sourcePrompt": "Use the information in problem 16 to find the fixed rate on an equity swap in which the stock index is at 2,000.",
        "options": [
          {
            "id": "A",
            "text": "5,9 phần trăm",
            "sourceText": "5.9 percent"
          },
          {
            "id": "B",
            "text": "5 phần trăm",
            "sourceText": "5 percent"
          },
          {
            "id": "C",
            "text": "6 phần trăm",
            "sourceText": "6 percent"
          },
          {
            "id": "D",
            "text": "2,95 phần trăm",
            "sourceText": "2.95 percent"
          },
          {
            "id": "E",
            "text": "3,5 phần trăm",
            "sourceText": "3.5 percent"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 5,9 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q18",
        "number": "18",
        "prompt": "Tìm giá trị thị trường của một hợp đồng hoán đổi vanilla đơn giản từ quan điểm của người trả lãi suất cố định, trong đó khoản thanh toán sắp tới sẽ diễn ra trong 30 ngày và có thêm một khoản thanh toán nữa sau 180 ngày sau đó. Lãi suất cố định là 7% và khoản thanh toán thả nổi sắp tới là 6,5%. Số tiền danh nghĩa là 15 triệu USD. Giả sử một năm có 360 ngày. Giá của trái phiếu Eurodollar không lãi suất là 0,9934 (30 ngày) và 0,9528 (210 ngày).",
        "sourcePrompt": "Find the market value of a plain vanilla swap from the perspective of the fixed rate payer in which the upcoming payment is in 30 days, and there is one more payment 180 days after that. The fixed rate is 7 percent and the upcoming floating payment is at 6.5 percent. The notional amount is $15 million. Assume 360 days in a year. The prices of Eurodollar zero coupon bonds are 0.9934 (30 days) and 0.9528 (210 days).",
        "options": [
          {
            "id": "A",
            "text": "người trả cố định trả $31.763,75",
            "sourceText": "the fixed payer pays $31,763.75"
          },
          {
            "id": "B",
            "text": "người trả cố định trả $71.527,50",
            "sourceText": "the fixed payer pays $71,527.50"
          },
          {
            "id": "C",
            "text": "người trả tiền thả nổi trả 49.500 đô la",
            "sourceText": "the floating payer pays $49,500"
          },
          {
            "id": "D",
            "text": "người trả tiền thả nổi trả 194.228 USD",
            "sourceText": "the floating payer pays $194,228"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: người trả cố định trả $71.527,50. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q19",
        "number": "19",
        "prompt": "Phát biểu nào sau đây về hợp đồng hoán đổi kỳ hạn cố định là không đúng?",
        "sourcePrompt": "Which of the following statements about constant maturity swaps is not true?",
        "options": [
          {
            "id": "A",
            "text": "tỷ giá CMT được liên kết với chứng khoán kho bạc Hoa Kỳ có thời hạn tương đương",
            "sourceText": "the CMT rate is linked to a U. S. treasury security of equivalent maturity"
          },
          {
            "id": "B",
            "text": "thời gian đáo hạn điển hình là từ 2 đến 5 năm",
            "sourceText": "the typical maturity is 2 to 5 years"
          },
          {
            "id": "C",
            "text": "sự trưởng thành là không đổi",
            "sourceText": "the maturity is constant"
          },
          {
            "id": "D",
            "text": "một tỷ giá được dựa trên chứng khoán có lãi suất dài hơn thời hạn thanh toán",
            "sourceText": "one rate is based on a security of a longer rate than the settlement period"
          },
          {
            "id": "E",
            "text": "Hoán đổi là một loại hoán đổi lãi suất",
            "sourceText": "the swap is a type of interest rate swap"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: sự trưởng thành là không đổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q20",
        "number": "20",
        "prompt": "Cách nào sau đây không phải là cách để chấm dứt trao đổi:",
        "sourcePrompt": "Which of the following is not a way to terminate a swap:",
        "options": [
          {
            "id": "A",
            "text": "tiền mặt của hai đối tác giải quyết giá trị thị trường",
            "sourceText": "the two counterparties cash settle the market value"
          },
          {
            "id": "B",
            "text": "tham gia vào một giao dịch hoán đổi ngược lại với một đối tác khác",
            "sourceText": "enter into an opposite swap with another counterparty"
          },
          {
            "id": "C",
            "text": "giữ hợp đồng hoán đổi cho đến ngày đáo hạn",
            "sourceText": "hold the swap to its maturity date"
          },
          {
            "id": "D",
            "text": "sử dụng hợp đồng kỳ hạn (hợp đồng kỳ hạn) hoặc quyền chọn trên hợp đồng hoán đổi để tham gia hợp đồng hoán đổi bù trừ",
            "sourceText": "use a forward contract or option on the swap to enter into an offsetting swap"
          },
          {
            "id": "E",
            "text": "vay số tiền danh nghĩa và trả hết cho đối tác",
            "sourceText": "borrow the notional amount and pay off the counterparty"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: vay số tiền danh nghĩa và trả hết cho đối tác. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Giá trị hiện tại của chuỗi thanh toán bằng đô la trong một hợp đồng hoán đổi tiền tệ trên số tiền danh nghĩa 1 đô la là 0,03 đô la. Giá trị hiện tại của chuỗi thanh toán bằng đồng euro trong cùng một giao dịch hoán đổi tiền tệ trên mỗi €1 là 0,0225 €. Tỷ giá hối đoái hiện tại là 1,05 USD/euro. Nếu hợp đồng hoán đổi có giá trị danh nghĩa là 100 triệu USD và 105 triệu euro, hãy tìm giá trị thị trường của hợp đồng hoán đổi từ góc độ bên trả euro và nhận đô la.",
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
            "text": "3.000.000 USD",
            "sourceText": "$3,000,000"
          },
          {
            "id": "D",
            "text": "–3.000.000 USD",
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
        "prompt": "Hoán đổi vốn cổ phần có thể được sử dụng cho tất cả những điều sau đây, ngoại trừ:",
        "sourcePrompt": "Equity swaps can be used for all of the following except:",
        "options": [
          {
            "id": "A",
            "text": "để mua cổ phiếu một cách tổng hợp",
            "sourceText": "to synthetically buy stock"
          },
          {
            "id": "B",
            "text": "bán cổ phiếu một cách tổng hợp",
            "sourceText": "to synthetically sell stock"
          },
          {
            "id": "C",
            "text": "để chuyển đổi cổ tức thành lãi vốn",
            "sourceText": "to convert dividends into capital gains"
          },
          {
            "id": "D",
            "text": "để sắp xếp lại một cách tổng hợp một danh mục đầu tư vốn cổ phần",
            "sourceText": "to synthetically re-align an equity portfolio"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: để chuyển đổi cổ tức thành lãi vốn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q24",
        "number": "24",
        "prompt": "Câu nào sau đây về hoán đổi khác biệt là đúng?",
        "sourcePrompt": "Which of the following statements about diff swaps is true?",
        "options": [
          {
            "id": "A",
            "text": "chúng liên quan đến việc thanh toán lãi bằng các loại tiền tệ riêng biệt",
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
            "text": "số tiền danh nghĩa giảm trong suốt thời hạn của hợp đồng hoán đổi",
            "sourceText": "the notional amount reduces throughout the life of the swap"
          },
          {
            "id": "E",
            "text": "số tiền danh nghĩa tăng lên trong suốt thời hạn của hợp đồng hoán đổi",
            "sourceText": "the notional amount increases throughout the life of the swap"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: chúng dựa trên sự khác biệt giữa lãi suất ở hai quốc gia. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q25",
        "number": "25",
        "prompt": "Hoán đổi lãi suất có thể được sử dụng cho tất cả các mục đích sau, ngoại trừ:",
        "sourcePrompt": "Interest rate swaps can be used for all of the following purposes except:",
        "options": [
          {
            "id": "A",
            "text": "vay theo lãi suất cơ bản",
            "sourceText": "to borrow at the prime rate"
          },
          {
            "id": "B",
            "text": "chuyển khoản vay có lãi suất cố định thành khoản vay có lãi suất thả nổi",
            "sourceText": "to convert a fixed-rate loan into a floating-rate loan"
          },
          {
            "id": "C",
            "text": "chuyển khoản vay theo lãi suất thả nổi thành khoản vay có lãi suất cố định",
            "sourceText": "to convert a floating-rate loan into a fixed-rate loan"
          },
          {
            "id": "D",
            "text": "suy đoán về lãi suất",
            "sourceText": "to speculate on interest rates"
          },
          {
            "id": "E",
            "text": "phòng ngừa rủi ro lãi suất",
            "sourceText": "to hedge interest rate risk"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: vay theo lãi suất cơ bản. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q26",
        "number": "26",
        "prompt": "Giá trị của hợp đồng hoán đổi lãi suất cố định, nhận lãi suất thả nổi được tìm thấy là giá trị của một",
        "sourcePrompt": "The value of a pay-fixed, receive floating interest rate swap is found as the value of a",
        "options": [
          {
            "id": "A",
            "text": "trái phiếu có lãi suất thả nổi nhân với giá trị của trái phiếu có lãi suất cố định.",
            "sourceText": "floating-rate bond times the value of a fixed-rate bond."
          },
          {
            "id": "B",
            "text": "trái phiếu có lãi suất thả nổi cộng với giá trị của trái phiếu có lãi suất cố định.",
            "sourceText": "floating-rate bond plus the value of a fixed-rate bond."
          },
          {
            "id": "C",
            "text": "trái phiếu lãi suất thả nổi trừ đi giá trị của trái phiếu lãi suất thả nổi khác.",
            "sourceText": "floating-rate bond minus the value of another floating-rate bond."
          },
          {
            "id": "D",
            "text": "trái phiếu có lãi suất cố định trừ đi giá trị của một trái phiếu có lãi suất cố định khác.",
            "sourceText": "fixed-rate bond minus the value of another fixed-rate bond."
          },
          {
            "id": "E",
            "text": "trái phiếu có lãi suất thả nổi trừ đi giá trị của trái phiếu có lãi suất cố định.",
            "sourceText": "floating-rate bond minus the value of a fixed-rate bond."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: trái phiếu có lãi suất thả nổi trừ đi giá trị của trái phiếu có lãi suất cố định.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q27",
        "number": "27",
        "prompt": "Hợp đồng hoán đổi cơ sở được định giá bằng cách thêm chênh lệch vào tỷ giá cao hơn hoặc trừ đi chênh lệch từ tỷ giá thấp hơn. Sự lây lan này được tìm thấy như",
        "sourcePrompt": "A basis swap is priced by adding a spread to the higher rate or subtracting a spread from the lower rate. This spread is found as",
        "options": [
          {
            "id": "A",
            "text": "chênh lệch giữa lãi suất thả nổi trên hợp đồng hoán đổi vanilla đơn giản dựa trên một trong các tỷ giá và lãi suất cố định trên hợp đồng hoán đổi vanilla đơn giản dựa trên tỷ giá kia.",
            "sourceText": "the difference between the floating rate on a plain vanilla swap based on one of the rates and the fixed rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "B",
            "text": "việc bổ sung lãi suất cố định trên hợp đồng hoán đổi vanilla đơn giản dựa trên một trong các tỷ giá và lãi suất cố định trên hợp đồng hoán đổi vanilla đơn giản dựa trên tỷ giá kia.",
            "sourceText": "the addition of the fixed rate on a plain vanilla swap based on one of the rates and the fixed rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "C",
            "text": "chênh lệch giữa lãi suất cố định trên hợp đồng hoán đổi vanilla đơn giản dựa trên một trong các tỷ giá và lãi suất cố định trên hợp đồng hoán đổi vanilla đơn giản dựa trên tỷ giá kia.",
            "sourceText": "the difference between the fixed rate on a plain vanilla swap based on one of the rates and the fixed rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "D",
            "text": "chênh lệch giữa lãi suất thả nổi trên hợp đồng hoán đổi vanilla đơn giản dựa trên một trong các lãi suất và lãi suất thả nổi trên hợp đồng hoán đổi vanilla đơn giản dựa trên tỷ giá kia.",
            "sourceText": "the difference between the floating rate on a plain vanilla swap based on one of the rates and the floating rate on a plain vanilla swap based on the other rate."
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên giải thích chính xác cách tìm ra sự lây lan này",
            "sourceText": "none of the above correctly explain how this spread is found"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: chênh lệch giữa lãi suất cố định trên hợp đồng hoán đổi vanilla đơn giản dựa trên một trong các tỷ giá và lãi suất cố định trên hợp đồng hoán đổi vanilla đơn giản dựa trên tỷ giá kia.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q28",
        "number": "28",
        "prompt": "Giá trị của một hợp đồng hoán đổi lãi suất thả nổi nhận trả cố định được tính là giá trị của một",
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
            "text": "trái phiếu lãi suất thả nổi trừ đi giá trị của trái phiếu lãi suất thả nổi khác.",
            "sourceText": "floating-rate bond minus the value of another floating-rate bond."
          },
          {
            "id": "D",
            "text": "trái phiếu có lãi suất cố định trừ đi giá trị của một trái phiếu có lãi suất cố định khác.",
            "sourceText": "fixed-rate bond minus the value of another fixed-rate bond."
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên xác định chính xác cách tìm thấy giá trị này.",
            "sourceText": "none of the above correctly identify how this value is found."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: trái phiếu có lãi suất thả nổi trừ đi giá trị của trái phiếu có lãi suất cố định.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q29",
        "number": "29",
        "prompt": "Các khoản thanh toán hoán đổi thường liên quan đến việc điều chỉnh một phần thời gian trong năm theo một cách nào đó. Sự điều chỉnh này được gọi là",
        "sourcePrompt": "Swap payments typically involve adjusting for the fraction of the year in some fashion. This adjustment is known as",
        "options": [
          {
            "id": "A",
            "text": "quy ước ghép lãi",
            "sourceText": "the compounding convention"
          },
          {
            "id": "B",
            "text": "kỳ tích lũy",
            "sourceText": "the accrual period"
          },
          {
            "id": "C",
            "text": "quy ước phân số",
            "sourceText": "the fraction convention"
          },
          {
            "id": "D",
            "text": "hội nghị thị trường tiền tệ",
            "sourceText": "the money market convention"
          },
          {
            "id": "E",
            "text": "thời hạn thanh toán",
            "sourceText": "the payment period"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: kỳ tích lũy. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c11-q30",
        "number": "30",
        "prompt": "Sự kết hợp giữa trả cố định bằng đồng euro và nhận bằng hoán đổi cố định bằng đô la với trả bằng đô la thả nổi và nhận bằng đồng euro cố định dẫn đến kết quả là",
        "sourcePrompt": "The combination of a pay euro fixed and receive dollar fixed swap with a pay dollar floating and receive euro fixed results in",
        "options": [
          {
            "id": "A",
            "text": "trao đổi tiền tệ",
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
        "prompt": "Điều nào sau đây là FRA 1 x 4?",
        "sourcePrompt": "Which of the following is a 1 x 4 FRA?",
        "options": [
          {
            "id": "A",
            "text": "FRA hết hạn sau một tháng và đồng Eurodollar cơ bản sẽ hết hạn sau ba tháng.",
            "sourceText": "The FRA expires in one month, and the underlying Eurodollar expires in three months."
          },
          {
            "id": "B",
            "text": "FRA hết hạn sau bốn tháng và đồng Eurodollar cơ bản sẽ hết hạn sau một tháng.",
            "sourceText": "The FRA expires in four months, and the underlying Eurodollar expires in one month."
          },
          {
            "id": "C",
            "text": "FRA hết hạn sau một tháng và đồng Eurodollar cơ bản sẽ hết hạn sau bốn tháng.",
            "sourceText": "The FRA expires in one month, and the underlying Eurodollar expires in four months."
          },
          {
            "id": "D",
            "text": "FRA hết hạn sau ba tháng và đồng Eurodollar cơ bản sẽ hết hạn sau bốn tháng.",
            "sourceText": "The FRA expires in three months, and the underlying Eurodollar expires in four months."
          },
          {
            "id": "E",
            "text": "FRA hết hạn sau một tháng và đồng Eurodollar cơ bản sẽ hết hạn sau 5 tháng.",
            "sourceText": "The FRA expires in one month, and the underlying Eurodollar expires in five months."
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: FRA hết hạn sau một tháng và đồng Eurodollar cơ bản sẽ hết hạn sau bốn tháng.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q2",
        "number": "2",
        "prompt": "Xác định giá trị của lãi suất quyền chọn mua (call option) tại thời điểm đáo hạn của khoản vay nếu quyền chọn mua có giá thực hiện là 12%, mệnh giá 50 triệu USD, khoản vay đáo hạn 90 ngày sau khi quyền chọn mua được thực hiện, quyền chọn mua hết hạn sau 60 ngày, quyền chọn mua quyền chọn (cao cấp) là 200.000 USD và LIBOR kết thúc ở mức 13%.",
        "sourcePrompt": "Determine the value of an interest rate call option at the maturity of a loan if the call has a strike of 12 percent, a face value of $50 million, the loan matures 90 days after the call is exercised, the call expires in 60 days, the call premium is $200,000, and LIBOR ends up at 13 percent.",
        "options": [
          {
            "id": "A",
            "text": "125.000 USD",
            "sourceText": "$125,000"
          },
          {
            "id": "B",
            "text": "$83,333",
            "sourceText": "$83,333"
          },
          {
            "id": "C",
            "text": "208.000 USD",
            "sourceText": "$208,000"
          },
          {
            "id": "D",
            "text": "–$75,000",
            "sourceText": "–$75,000"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 125.000 USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q3",
        "number": "3",
        "prompt": "Một ngân hàng thực hiện một khoản vay chiết khấu thuần túy trị giá 5 triệu USD trong 180 ngày với lãi suất LIBOR là 9%. Tuy nhiên, cùng lúc đó, nó thực hiện quyền chọn bán lãi suất có mức chênh lệch là 11%. Tìm tỷ suất lợi nhuận hàng năm của khoản vay. Bỏ qua chi phí của việc put.",
        "sourcePrompt": "A bank makes a $5 million 180-day pure discount loan at LIBOR of 9 percent. At the same time, however, it exercises an interest rate put that has a strike of 11 percent. Find the annualized rate of return on the loan. Ignore the cost of the put.",
        "options": [
          {
            "id": "A",
            "text": "9,34 phần trăm",
            "sourceText": "9.34 percent"
          },
          {
            "id": "B",
            "text": "11,47 phần trăm",
            "sourceText": "11.47 percent"
          },
          {
            "id": "C",
            "text": "9 phần trăm",
            "sourceText": "9 percent"
          },
          {
            "id": "D",
            "text": "11 phần trăm",
            "sourceText": "11 percent"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 11,47 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q4",
        "number": "4",
        "prompt": "Điều nào sau đây mô tả đúng nhất về trần lãi suất?",
        "sourcePrompt": "Which of the following best describes an interest rate cap?",
        "options": [
          {
            "id": "A",
            "text": "phòng ngừa rủi ro tiền mặt mang theo",
            "sourceText": "a cash-and-carry hedge"
          },
          {
            "id": "B",
            "text": "một loạt các hợp đồng kỳ hạn (hợp đồng kỳ hạn)",
            "sourceText": "a series of forward contracts"
          },
          {
            "id": "C",
            "text": "một loạt các call lãi suất",
            "sourceText": "a series of interest rate calls"
          },
          {
            "id": "D",
            "text": "quyền chọn mua (call option) spread",
            "sourceText": "a call option spread"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một loạt các call lãi suất. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q5",
        "number": "5",
        "prompt": "Một ngân hàng mua sàn lãi suất kết hợp với một khoản vay mà họ nắm giữ sẽ thực hiện bốn khoản thanh toán nửa năm bắt đầu từ sáu tháng kể từ bây giờ. Sàn có mức đình công là 9 phần trăm. LIBOR khi bắt đầu bốn kỳ thanh toán là 10, 11, 8 và 8,6%. Người viết sàn sẽ thanh toán cho ngân hàng vào ngày nào?",
        "sourcePrompt": "A bank buys an interest rate floor in conjunction with a loan it holds that will make four semiannual payments starting six months from now. The floor has a strike of 9 percent. LIBOR at the beginning of the four payment periods is 10, 11, 8, and 8.6 percent. On which dates will the floor writer make a payment to the bank?",
        "options": [
          {
            "id": "A",
            "text": "bây giờ và trong 24 tháng nữa",
            "sourceText": "now and in 24 months"
          },
          {
            "id": "B",
            "text": "trong 18 và 24 tháng",
            "sourceText": "in 18 and 24 months"
          },
          {
            "id": "C",
            "text": "trong 12 và 18 tháng",
            "sourceText": "in 12 and 18 months"
          },
          {
            "id": "D",
            "text": "trong 6, 12, 18 và 24 tháng",
            "sourceText": "in 6, 12, 18 and 24 months"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: trong 18 và 24 tháng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q6",
        "number": "6",
        "prompt": "Ưu điểm của cổ áo so với mũ lưỡi trai là",
        "sourcePrompt": "The advantage of a collar over a cap is",
        "options": [
          {
            "id": "A",
            "text": "nó làm giảm chi phí tự chi trả",
            "sourceText": "it lowers the out-of-pocket cost"
          },
          {
            "id": "B",
            "text": "nó mang lại khả năng mang lại lợi nhuận lớn hơn",
            "sourceText": "it offers the possibility of greater returns"
          },
          {
            "id": "C",
            "text": "nó loại bỏ rủi ro",
            "sourceText": "it eliminates the risk"
          },
          {
            "id": "D",
            "text": "nó có chi phí giao dịch thấp hơn",
            "sourceText": "it has lower transaction costs"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: nó làm giảm chi phí tự chi trả. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q7",
        "number": "7",
        "prompt": "FRA giống nhất với giao dịch nào sau đây",
        "sourcePrompt": "An FRA is most like which of the following transactions",
        "options": [
          {
            "id": "A",
            "text": "trần lãi suất",
            "sourceText": "an interest rate cap"
          },
          {
            "id": "B",
            "text": "sàn lãi suất",
            "sourceText": "an interest rate floor"
          },
          {
            "id": "C",
            "text": "vòng cổ lãi suất",
            "sourceText": "an interest rate collar"
          },
          {
            "id": "D",
            "text": "hợp đồng kỳ hạn (hợp đồng kỳ hạn)",
            "sourceText": "a forward contract"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: hợp đồng kỳ hạn (hợp đồng kỳ hạn). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q8",
        "number": "8",
        "prompt": "75 phần trăm, số tiền danh nghĩa là 20 triệu USD nếu tài sản cơ sở là 9 phần trăm khi đáo hạn là",
        "sourcePrompt": "75 percent, a notional amount of $20 million if the underlying is 9 percent at expiration is",
        "options": [
          {
            "id": "A",
            "text": "12.500 USD",
            "sourceText": "$12,500"
          },
          {
            "id": "B",
            "text": "–$12,500",
            "sourceText": "–$12,500"
          },
          {
            "id": "C",
            "text": "–$12,225",
            "sourceText": "–$12,225"
          },
          {
            "id": "D",
            "text": "$12,225",
            "sourceText": "$12,225"
          },
          {
            "id": "E",
            "text": "–$48,900",
            "sourceText": "–$48,900"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: $12,225. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q9",
        "number": "9",
        "prompt": "Lãi suất cố định trên một FRA hết hạn sau 30 ngày đối với LIBOR 180 ngày với lãi suất 30 ngày là 5% và lãi suất 210 ngày là 6% là",
        "sourcePrompt": "The fixed rate on an FRA expiring in 30 days on 180-day LIBOR with the 30-day rate being 5 percent and the 210 day rate being 6 percent is",
        "options": [
          {
            "id": "A",
            "text": "6 phần trăm",
            "sourceText": "6 percent"
          },
          {
            "id": "B",
            "text": "6,14 phần trăm",
            "sourceText": "6.14 percent"
          },
          {
            "id": "C",
            "text": "5 phần trăm",
            "sourceText": "5 percent"
          },
          {
            "id": "D",
            "text": "5,5 phần trăm",
            "sourceText": "5.5 percent"
          },
          {
            "id": "E",
            "text": "5,15 phần trăm",
            "sourceText": "5.15 percent"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: 6,14 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q10",
        "number": "10",
        "prompt": "Hoán đổi giống như hoán đổi kỳ hạn theo cách nào sau đây",
        "sourcePrompt": "Swaptions are like forward swaps in which of the following ways",
        "options": [
          {
            "id": "A",
            "text": "Cả hai đều không có rủi ro tín dụng",
            "sourceText": "Both are free of credit risk"
          },
          {
            "id": "B",
            "text": "Cả hai đều yêu cầu thực hiện trao đổi khi hết hạn",
            "sourceText": "Both require the execution of a swap at expiration"
          },
          {
            "id": "C",
            "text": "Chúng có cùng mức giá",
            "sourceText": "They have the same price"
          },
          {
            "id": "D",
            "text": "Cả hai đều được giao dịch trên các sàn giao dịch hoán đổi",
            "sourceText": "Both are traded on swaption exchanges"
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
        "id": "c12-q11",
        "number": "11",
        "prompt": "Tìm quyền lựa chọn (phí quyền chọn) của quyền chọn mua lãi suất được định giá chính xác trên LIBOR 30 ngày nếu tỷ giá kỳ hạn hiện tại là 7%, giá thực hiện là 7%, lãi suất kép liên tục rủi ro (lãi suất phi rủi ro) là 6,2%, độ biến động là 12% và quyền chọn sẽ hết hạn sau một năm. Số tiền danh nghĩa là 30 triệu USD.",
        "sourcePrompt": "Find the premium of a correctly priced interest rate call on 30-day LIBOR if the current forward rate is 7 percent, the strike is 7 percent, the continuously compounded risk-free rate is 6.2 percent, the volatility is 12 percent and the option expires in one year. The notional amount is $30 million.",
        "options": [
          {
            "id": "A",
            "text": "$0,0031",
            "sourceText": "$.0031"
          },
          {
            "id": "B",
            "text": "93.000 USD",
            "sourceText": "$93,000"
          },
          {
            "id": "C",
            "text": "$7,817",
            "sourceText": "$7,817"
          },
          {
            "id": "D",
            "text": "0,0012 USD",
            "sourceText": "$0.0012"
          },
          {
            "id": "E",
            "text": "36.000 USD",
            "sourceText": "$36,000"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: $7,817. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q12",
        "number": "12",
        "prompt": "Điều nào sau đây là hạn chế của việc sử dụng mô hình Đen để định giá quyền chọn lãi suất?",
        "sourcePrompt": "Which of the following is a limitation of using the Black model to price interest rate options?",
        "options": [
          {
            "id": "A",
            "text": "lãi suất phi rủi ro (tỷ lệ phi rủi ro) không phải là hằng số",
            "sourceText": "the risk-free rate is not constant"
          },
          {
            "id": "B",
            "text": "sự biến động không phải là hằng số",
            "sourceText": "the volatility is not constant"
          },
          {
            "id": "C",
            "text": "lãi suất không được phân phối chuẩn logarit",
            "sourceText": "interest rates are not lognormally distributed"
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
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Tất cả các câu trả lời trên. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q13",
        "number": "13",
        "prompt": "FRA khác với hợp đồng hoán đổi lãi suất ở điểm nào sau đây?",
        "sourcePrompt": "An FRA differs from an interest rate swap in which of the following ways?",
        "options": [
          {
            "id": "A",
            "text": "FRA có nhiều rủi ro tín dụng hơn",
            "sourceText": "An FRA has more credit risk"
          },
          {
            "id": "B",
            "text": "FRA được liên bang quy định",
            "sourceText": "FRAs are federally regulated"
          },
          {
            "id": "C",
            "text": "Theo truyền thống, việc thanh toán trong FRA bị trì hoãn",
            "sourceText": "Traditionally the payment in an FRA is delayed"
          },
          {
            "id": "D",
            "text": "FRA chỉ được sử dụng bởi các ngân hàng và giao dịch hoán đổi chỉ được sử dụng bởi các tập đoàn",
            "sourceText": "FRAs are used only by banks and swaps are used only by corporations"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Theo truyền thống, việc thanh toán trong FRA bị trì hoãn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q14",
        "number": "14",
        "prompt": "Điều nào sau đây không cần thiết để xác định khoản hoàn trả hoán đổi khi hết hạn?",
        "sourcePrompt": "Which of the following is not required to determine a swaption payoff at expiration?",
        "options": [
          {
            "id": "A",
            "text": "tỷ lệ tập thể dục",
            "sourceText": "the exercise rate"
          },
          {
            "id": "B",
            "text": "cấu trúc kỳ hạn của lãi suất trái phiếu bằng 0 khi hết hạn hoán đổi",
            "sourceText": "the term structure of zero coupon rates at the swaption expiration"
          },
          {
            "id": "C",
            "text": "thời gian đáo hạn của hợp đồng hoán đổi cơ bản",
            "sourceText": "the maturity of the underlying swap"
          },
          {
            "id": "D",
            "text": "lãi suất của trái phiếu có thời hạn tương đương như hợp đồng hoán đổi",
            "sourceText": "the yield on a bond of equivalent maturity as the swap"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: lãi suất của trái phiếu có thời hạn tương đương như hợp đồng hoán đổi. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q15",
        "number": "15",
        "prompt": "Tìm lợi ích của lãi suất quyền chọn mua (call option) lãi suất hàng năm với lãi suất thực hiện là 10% nếu lãi suất một kỳ khi đáo hạn là 11%. (Không cần điều chỉnh số ngày/360 độ và giả sử số tiền danh nghĩa là $1.)",
        "sourcePrompt": "Find the payoff of an interest rate call option on the annual rate with an exercise rate of 10 percent if the one-period rate at expiration is 11 percent. (No days/360 adjustment is necessary and assume a $1 notional amount.)",
        "options": [
          {
            "id": "A",
            "text": "0,12",
            "sourceText": "0.12"
          },
          {
            "id": "B",
            "text": "không",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 0,0090. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q16",
        "number": "16",
        "prompt": "Tìm giá trị thị trường gần đúng của một vị thế mua trong FRA với lãi suất cố định là 5%, trong đó hợp đồng sẽ hết hạn sau 20 ngày, lãi suất cơ bản là LIBOR 180 ngày, số tiền danh nghĩa là 25 triệu USD, lãi suất 20 ngày là 7% và lãi suất 200 ngày là 8,5%.",
        "sourcePrompt": "Find the approximate market value of a long position in an FRA at a fixed rate of 5 percent in which the contract expires in 20 days, the underlying is 180-day LIBOR, the notional amount is $25 million, the 20-day rate is 7 percent, and the 200-day rate is 8.5 percent.",
        "options": [
          {
            "id": "A",
            "text": "$433,658",
            "sourceText": "$433,658"
          },
          {
            "id": "B",
            "text": "–$454,954",
            "sourceText": "–$454,954"
          },
          {
            "id": "C",
            "text": "$322,819",
            "sourceText": "$322,819"
          },
          {
            "id": "D",
            "text": "–$322,819",
            "sourceText": "–$322,819"
          },
          {
            "id": "E",
            "text": "$454,954",
            "sourceText": "$454,954"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: $433,658. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q17",
        "number": "17",
        "prompt": "Tìm lãi suất của một khoản vay chiết khấu thuần túy được bảo đảm bằng FRA dài hạn nếu khoản vay trị giá 10 triệu USD và đáo hạn trong 30 ngày, FRA là LIBOR 30 ngày, lãi suất cố định trên FRA là 4% và LIBOR tại thời điểm khoản vay được thực hiện là 5%.",
        "sourcePrompt": "Find the rate on a pure discount loan hedged with a long FRA if the loan is for $10 million and matures in 30 days, the FRA is 30-day LIBOR, the fixed rate on the FRA is 4 percent, and LIBOR at the time the loan is taken out is 5 percent.",
        "options": [
          {
            "id": "A",
            "text": "4,87 phần trăm",
            "sourceText": "4.87 percent"
          },
          {
            "id": "B",
            "text": "0,25 phần trăm",
            "sourceText": "0.25 percent"
          },
          {
            "id": "C",
            "text": "5,18 phần trăm",
            "sourceText": "5.18 percent"
          },
          {
            "id": "D",
            "text": "4,13 phần trăm",
            "sourceText": "4.13 percent"
          },
          {
            "id": "E",
            "text": "2,04 phần trăm",
            "sourceText": "2.04 percent"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 4,13 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q18",
        "number": "18",
        "prompt": "Vị thế mua trong quyền chọn mua lãi suất sẽ phù hợp trong trường hợp nào sau đây:",
        "sourcePrompt": "A long position in an interest rate call would be appropriate for which of the following situations:",
        "options": [
          {
            "id": "A",
            "text": "một nhà giao dịch trái phiếu mong đợi lãi suất giảm",
            "sourceText": "a bond trader expects falling interest rates"
          },
          {
            "id": "B",
            "text": "người đi vay mong đợi lãi suất tăng",
            "sourceText": "a borrower expects rising interest rates"
          },
          {
            "id": "C",
            "text": "người cho vay mong đợi lãi suất tăng",
            "sourceText": "a lender expects rising interest rates"
          },
          {
            "id": "D",
            "text": "nhà kinh doanh chứng khoán phái sinh có nguy cơ lãi suất giảm",
            "sourceText": "a derivatives dealer is exposed to the risk of falling interest rates"
          },
          {
            "id": "E",
            "text": "một bên nắm giữ vị thế bán khống hợp đồng tương lai Eurodollar lo ngại về việc mất tiền",
            "sourceText": "a party holding a short position in Eurodollar futures is concerned about losing money"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: người đi vay mong đợi lãi suất tăng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q19",
        "number": "19",
        "prompt": "Việc hoán đổi người trả tiền tương đương với công cụ nào sau đây.",
        "sourcePrompt": "A payer swaption is equivalent to which of the following instruments.",
        "options": [
          {
            "id": "A",
            "text": "quyền chọn mua (call option) đối với trái phiếu",
            "sourceText": "a call option on a bond"
          },
          {
            "id": "B",
            "text": "quyền chọn mua tương lai trái phiếu kho bạc",
            "sourceText": "a long Treasury bond futures option"
          },
          {
            "id": "C",
            "text": "một hợp đồng tương lai Eurodollar dài hạn",
            "sourceText": "a long Eurodollar futures"
          },
          {
            "id": "D",
            "text": "trần lãi suất",
            "sourceText": "an interest rate cap"
          },
          {
            "id": "E",
            "text": "quyền chọn bán (put option) trái phiếu",
            "sourceText": "a put option on a bond"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: quyền chọn bán (put option) trái phiếu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q20",
        "number": "20",
        "prompt": "Chiến lược nào sau đây tái tạo vị thế mua trong FRA?",
        "sourcePrompt": "Which of the following strategies replicates a long position in an FRA?",
        "options": [
          {
            "id": "A",
            "text": "gửi tiền gửi có kỳ hạn Eurodollar dài hạn và gửi tiền gửi có kỳ hạn Eurodollar ngắn hạn",
            "sourceText": "long a long term Eurodollar time deposit and short a short-term Eurodollar time deposit"
          },
          {
            "id": "B",
            "text": "mua hợp đồng tương lai Eurodollar và bán quyền chọn Eurodollar",
            "sourceText": "long a Eurodollar futures and short a Eurodollar option"
          },
          {
            "id": "C",
            "text": "mua quyền chọn Eurodollar trên hợp đồng tương lai",
            "sourceText": "long a Eurodollar option on a futures"
          },
          {
            "id": "D",
            "text": "bán khống hợp đồng tương lai trái phiếu kho bạc dài hạn và bán khống hợp đồng tương lai trái phiếu kho bạc ngắn hạn",
            "sourceText": "short a long-term Treasury bond futures and short a short-term Treasury bond futures"
          },
          {
            "id": "E",
            "text": "trao đổi máy thu lâu",
            "sourceText": "long a receiver swaption"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: gửi tiền gửi có kỳ hạn Eurodollar dài hạn và gửi tiền gửi có kỳ hạn Eurodollar ngắn hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q21",
        "number": "21",
        "prompt": "Một FRA trong đó tỷ giá không được thiết lập theo tỷ giá trên thị trường được gọi là",
        "sourcePrompt": "An FRA in which the rate is not set according to rates in the market is called",
        "options": [
          {
            "id": "A",
            "text": "một FRA ngắn",
            "sourceText": "a short FRA"
          },
          {
            "id": "B",
            "text": "một FRA dài",
            "sourceText": "a long FRA"
          },
          {
            "id": "C",
            "text": "một FRA ngoài thị trường",
            "sourceText": "an off-market FRA"
          },
          {
            "id": "D",
            "text": "FRA được phòng ngừa rủi ro",
            "sourceText": "a hedged FRA"
          },
          {
            "id": "E",
            "text": "sự lây lan của FRA",
            "sourceText": "an FRA spread"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một FRA ngoài thị trường. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q22",
        "number": "22",
        "prompt": "Nếu người cho vay sử dụng vòng cổ, các giao dịch sẽ được thực hiện",
        "sourcePrompt": "If a lender uses a collar, the transactions would be",
        "options": [
          {
            "id": "A",
            "text": "mua một sàn ở một giá thực hiện (giá thực hiện), bán một sàn ở một giá thực hiện khác (giá thực hiện)",
            "sourceText": "buy a floor at one exercise price, sell a floor at another exercise price"
          },
          {
            "id": "B",
            "text": "mua sàn, bán cap",
            "sourceText": "buy a floor, sell a cap"
          },
          {
            "id": "C",
            "text": "bán một tầng, mua một cái nắp",
            "sourceText": "sell a floor, buy a cap"
          },
          {
            "id": "D",
            "text": "mua trần ở một giá thực hiện (giá thực hiện), bán sàn ở một giá thực hiện khác (giá thực hiện)",
            "sourceText": "buy a cap at one exercise price, sell a floor at another exercise price"
          },
          {
            "id": "E",
            "text": "mua vốn và bán sàn với cùng mức giá thực hiện (giá thực hiện)",
            "sourceText": "buy a cap and sell a floor at the same exercise price"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: mua sàn, bán cap. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q23",
        "number": "23",
        "prompt": "Hoán đổi người trả tiền sắp hết hạn. Hợp đồng hoán đổi cơ bản có thời hạn hai năm. Hệ số giá trị hiện tại là 0,9259 (một năm) và 0,8651 (hai năm). Tỷ lệ đình công là 7 phần trăm. Giá trị hoán đổi trên mỗi số tiền danh nghĩa $1 là bao nhiêu.",
        "sourcePrompt": "A payer swaption is expiring. The underlying swap has a two year maturity. Th e present value factors are 0.9259 (one year) and 0.8651 (two years). The strike rate is 7 percent. What is the value of the swaption per $1 notional amount.",
        "options": [
          {
            "id": "A",
            "text": "0,0000, vì nó hết tiền",
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
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 0,0095. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q24",
        "number": "24",
        "prompt": "Tìm lãi suất cố định trên một hợp đồng hoán đổi kỳ hạn đáo hạn sau 90 ngày, trong đó hợp đồng hoán đổi cơ bản có thời gian đáo hạn là 180 ngày và thực hiện thanh toán 90 ngày một lần. Giá của trái phiếu không lãi suất là 0,9877 (90 ngày), 0,9732 (180 ngày) và 0,9597 (270 ngày).",
        "sourcePrompt": "Find the fixed rate on a forward swap expiring in 90 days in which the underlying swap has a maturity of 180 days and makes payments every 90 days. The prices of zero coupon bonds are 0.9877 (90 days), 0.9732 (180 days), and 0.9597 (270 days).",
        "options": [
          {
            "id": "A",
            "text": "5,97 phần trăm",
            "sourceText": "5.97 percent"
          },
          {
            "id": "B",
            "text": "5,6 phần trăm",
            "sourceText": "5.6 percent"
          },
          {
            "id": "C",
            "text": "5,5 phần trăm",
            "sourceText": "5.5 percent"
          },
          {
            "id": "D",
            "text": "5,78 phần trăm",
            "sourceText": "5.78 percent"
          },
          {
            "id": "E",
            "text": "5 phần trăm",
            "sourceText": "5 percent"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: 5,78 phần trăm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q25",
        "number": "25",
        "prompt": "Tất cả những điều sau đây là cách sử dụng hoán đổi ngoại trừ",
        "sourcePrompt": "All of the following are uses of swaptions except",
        "options": [
          {
            "id": "A",
            "text": "suy đoán về lãi suất",
            "sourceText": "to speculate on interest rates"
          },
          {
            "id": "B",
            "text": "để mang lại sự linh hoạt vững chắc trong các khoản vay trong tương lai",
            "sourceText": "to give a firm flexibility in future borrowings"
          },
          {
            "id": "C",
            "text": "vay tiền",
            "sourceText": "to borrow money"
          },
          {
            "id": "D",
            "text": "để tạo ra các trái phiếu có thể gọi được từ các trái phiếu không thể gọi được",
            "sourceText": "to create callable from non-callable bonds"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: vay tiền. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q26",
        "number": "26",
        "prompt": "Giả sử công ty của bạn đã phát hành một trái phiếu có thể thu hồi được hai năm trước và còn ba năm nữa mới đến ngày thu hồi trái phiếu đầu tiên. Nếu lãi suất đã giảm trong hai năm qua và bạn tin rằng lãi suất sẽ không ở mức thấp này và việc kéo dài thời hạn của các khoản nợ sẽ mang lại lợi ích tốt nhất cho công ty, thì chiến lược nào sau đây là một trong những chiến lược tiềm năng để hoàn thành mục tiêu kéo dài thời hạn trong khi vẫn đảm bảo lãi suất giảm.",
        "sourcePrompt": "Suppose your firm issued a callable bond two years ago and it has three more years to go before the first call date. If interest rates have fallen over the past two years and you believe rates will not stay this low and that it would be in the firm’s best interest to lengthen the duration of the liabilities, which of the following is one potential strategy to accomplish the objective of lengthening the duration while also securing the lowering interest rate.",
        "options": [
          {
            "id": "A",
            "text": "mua một trao đổi người trả tiền",
            "sourceText": "buy a payer swaption"
          },
          {
            "id": "B",
            "text": "bán trao đổi người trả tiền",
            "sourceText": "sell a payer swaption"
          },
          {
            "id": "C",
            "text": "mua một bộ trao đổi đầu thu",
            "sourceText": "buy a receiver swaption"
          },
          {
            "id": "D",
            "text": "bán trao đổi đầu thu",
            "sourceText": "sell a receiver swaption"
          },
          {
            "id": "E",
            "text": "mua sàn lãi suất",
            "sourceText": "buy an interest rate floor"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: bán trao đổi đầu thu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q27",
        "number": "27",
        "prompt": "Giả sử công ty của bạn gần đây đã đầu tư vào một trái phiếu có thể thu hồi khi lãi suất cao và trái phiếu còn ba năm nữa trước ngày thu hồi đầu tiên. Nếu lãi suất dự kiến ​​sẽ giảm trong ba năm tới, chiến lược nào sau đây là một trong những chiến lược tiềm năng sẽ tận dụng quan điểm này.",
        "sourcePrompt": "Suppose your firm invested in a callable bond recently when interest rates were high and the bond has three more years to go before the first call date. If interest rates are expected to fall over the next three years, which of the following is one potential strategy would take advantage of this view.",
        "options": [
          {
            "id": "A",
            "text": "mua một trao đổi người trả tiền",
            "sourceText": "buy a payer swaption"
          },
          {
            "id": "B",
            "text": "bán trao đổi người trả tiền",
            "sourceText": "sell a payer swaption"
          },
          {
            "id": "C",
            "text": "mua một bộ trao đổi đầu thu",
            "sourceText": "buy a receiver swaption"
          },
          {
            "id": "D",
            "text": "bán trao đổi đầu thu",
            "sourceText": "sell a receiver swaption"
          },
          {
            "id": "E",
            "text": "mua sàn lãi suất",
            "sourceText": "buy an interest rate floor"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: mua một bộ trao đổi đầu thu. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q28",
        "number": "28",
        "prompt": "Điều nào sau đây mô tả đúng nhất về vòng cổ chi phí bằng 0 trong bối cảnh các công cụ phái sinh lãi suất?",
        "sourcePrompt": "Which of the following best describes a zero cost collar within the context of interest rate derivatives?",
        "options": [
          {
            "id": "A",
            "text": "Vòng cổ chi phí bằng 0 là vị thế mua (ngắn) trong giới hạn lãi suất và vị thế bán (dài) trong sàn lãi suất trong đó chi phí của giới hạn (sàn) bù đắp chính xác doanh thu từ mức trần (giới hạn).",
            "sourceText": "A zero cost collar is a long (short) position in an interest rate cap and a short (long) position in an interest rate floor where the cost of the cap (floor) exactly offsets the revenue from the floor (cap)."
          },
          {
            "id": "B",
            "text": "Vòng cổ chi phí bằng 0 là vị thế mua (ngắn) trong giới hạn lãi suất và vị thế bán (dài) trong sàn lãi suất trong đó chi phí của giới hạn (sàn) nhỏ hơn doanh thu từ sàn (giới hạn).",
            "sourceText": "A zero cost collar is a long (short) position in an interest rate cap and a short (long) position in an interest rate floor where the cost of the cap (floor) is less than the revenue from the floor (cap)."
          },
          {
            "id": "C",
            "text": "Vòng cổ chi phí bằng 0 là vị thế mua (ngắn) trong giới hạn lãi suất và vị thế bán (dài) trong sàn lãi suất trong đó chi phí của giới hạn (sàn) lớn hơn doanh thu từ mức trần (giới hạn).",
            "sourceText": "A zero cost collar is a long (short) position in an interest rate cap and a short (long) position in an interest rate floor where the cost of the cap (floor) is greater than the revenue from the floor (cap)."
          },
          {
            "id": "D",
            "text": "Vòng cổ chi phí bằng 0 là một lựa chọn chỉ có hiệu quả nếu lãi suất vẫn nằm trong một phạm vi được chỉ định.",
            "sourceText": "A zero cost collar is an option that pays off only if interest rates remain within a designated range."
          },
          {
            "id": "E",
            "text": "Vòng cổ chi phí bằng 0 là một lựa chọn chỉ có hiệu quả nếu lãi suất nằm ngoài phạm vi được chỉ định.",
            "sourceText": "A zero cost collar is an option that pays off only if interest rates fall outside of a designated range."
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Vòng cổ chi phí bằng 0 là vị thế mua (ngắn) trong giới hạn lãi suất và vị thế bán (dài) trong sàn lãi suất trong đó chi phí của giới hạn (sàn) bù đắp chính xác doanh thu từ mức trần (giới hạn).. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q29",
        "number": "29",
        "prompt": "Giả sử bạn có một khoản vay lãi suất thả nổi gắn liền với LIBOR 90 ngày và đã phòng ngừa rủi ro lãi suất bằng trần lãi suất. Lãi suất hiệu dụng hàng năm thực tế được trả cho khoản vay có trần được xác định bằng phương pháp tương đương với",
        "sourcePrompt": "Suppose you have a floating rate loan tied to 90-day LIBOR and have hedged the interest rate risk with an interest rate cap. The effective annual rate actually paid on the loan with the cap is found using a methodology equivalent to",
        "options": [
          {
            "id": "A",
            "text": "tính giá quyền chọn Black-Scholes-Merton",
            "sourceText": "computing the Black-Scholes-Merton option call price"
          },
          {
            "id": "B",
            "text": "tính giá trị hiện tại ròng",
            "sourceText": "computing the net present value"
          },
          {
            "id": "C",
            "text": "tính toán tỷ suất hoàn vốn nội bộ",
            "sourceText": "computing the internal rate of return"
          },
          {
            "id": "D",
            "text": "tính giá quyền chọn hàng hóa đen",
            "sourceText": "computing the Black commodity option call price"
          },
          {
            "id": "E",
            "text": "tính toán WACC",
            "sourceText": "computing the WACC"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: tính toán tỷ suất hoàn vốn nội bộ. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c12-q30",
        "number": "30",
        "prompt": "Khi định giá một lãi suất quyền chọn mua (call option), một cách tiếp cận là sử dụng giá quyền chọn mua (call option) đen được điều chỉnh theo giá trị hiện tại",
        "sourcePrompt": "When valuing an interest rate call option, one approach is to use the Black call option price adjusted for the present value",
        "options": [
          {
            "id": "A",
            "text": "trong m ngày của quyền chọn cơ sở sử dụng tỷ giá kỳ hạn gộp lãi liên tục.",
            "sourceText": "over the m days of the underlying option using the continuously compounded forward rate."
          },
          {
            "id": "B",
            "text": "trong m ngày của lãi suất cơ bản sử dụng lãi suất giao ngay gộp liên tục.",
            "sourceText": "over the m days of the underlying rate using the continuously compounded spot rate."
          },
          {
            "id": "C",
            "text": "trong những ngày còn lại của quyền chọn sử dụng lãi suất kỳ hạn gộp lãi liên tục.",
            "sourceText": "over the days remaining of the option using the continuously compounded forward rate."
          },
          {
            "id": "D",
            "text": "trong những ngày còn lại của quyền chọn sử dụng lãi suất giao ngay gộp liên tục.",
            "sourceText": "over the days remaining of the option using the continuously compounded spot rate."
          },
          {
            "id": "E",
            "text": "trong m ngày của lãi suất cơ bản sử dụng lãi suất kỳ hạn ghép lãi liên tục.",
            "sourceText": "over the m days of the underlying rate using the continuously compounded forward rate."
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: trong m ngày của lãi suất cơ bản sử dụng lãi suất kỳ hạn ghép lãi liên tục.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Quản lý rủi ro bao gồm tất cả những điều sau đây, ngoại trừ",
        "sourcePrompt": "Risk management encompasses all of the following except",
        "options": [
          {
            "id": "A",
            "text": "xác định mức độ rủi ro thực tế của một công ty",
            "sourceText": "determining a firm’s actual level of risk"
          },
          {
            "id": "B",
            "text": "xác định mức độ rủi ro mong muốn của công ty",
            "sourceText": "determining a firm’s desired level of risk"
          },
          {
            "id": "C",
            "text": "thiết lập các chính sách và thủ tục",
            "sourceText": "setting policies and procedures"
          },
          {
            "id": "D",
            "text": "theo dõi vị trí của bạn sau thực tế",
            "sourceText": "monitoring your position after-the-fact"
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
        "id": "c14-q2",
        "number": "2",
        "prompt": "Rủi ro thị trường là rủi ro nào sau đây",
        "sourcePrompt": "Market risk is which of the following",
        "options": [
          {
            "id": "A",
            "text": "rủi ro liên quan đến việc không ghi chép đúng các giao dịch thị trường",
            "sourceText": "the risk associated with failing to properly record market transactions"
          },
          {
            "id": "B",
            "text": "nguy cơ đại lý sẽ mất thị phần vào tay đại lý cạnh tranh",
            "sourceText": "the risk that a dealer will lose market share to a competing dealer"
          },
          {
            "id": "C",
            "text": "rủi ro liên quan đến sự biến động của các yếu tố như lãi suất và tỷ giá hối đoái",
            "sourceText": "the risk associated with movements in such factors as interest rates and exchange rates"
          },
          {
            "id": "D",
            "text": "nguy cơ chính phủ tuyên bố một giao dịch là bất hợp pháp",
            "sourceText": "the risk of the government declaring a transaction illegal"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: rủi ro liên quan đến sự biến động của các yếu tố như lãi suất và tỷ giá hối đoái. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
        "prompt": "Điều nào sau đây là cách giải thích về VAR trị giá 5 triệu đô la trong một năm với xác suất 5%.",
        "sourcePrompt": "Which of the following is the interpretation of a VAR of $5 million for one year at 5 percent probability.",
        "options": [
          {
            "id": "A",
            "text": "xác suất là 5% công ty sẽ lỗ ít nhất 5 triệu USD trong một năm",
            "sourceText": "the probability is 5 percent that the firm will lose at least $5 million in one year"
          },
          {
            "id": "B",
            "text": "xác suất ít nhất là 5% công ty sẽ lỗ 5 triệu USD trong một năm",
            "sourceText": "the probability is at least 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "C",
            "text": "xác suất là 5% công ty sẽ lỗ 5 triệu USD trong một năm",
            "sourceText": "the probability is 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "D",
            "text": "xác suất nhỏ hơn 5% là công ty sẽ lỗ 5 triệu USD trong một năm",
            "sourceText": "the probability is less than 5 percent that the firm will lose $5 million in one year"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: xác suất là 5% công ty sẽ lỗ ít nhất 5 triệu USD trong một năm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q5",
        "number": "5",
        "prompt": "Phương pháp nào sau đây không phải là phương pháp xác định VAR?",
        "sourcePrompt": "Which of the following are not methods of determining the VAR?",
        "options": [
          {
            "id": "A",
            "text": "phương pháp mô phỏng",
            "sourceText": "simulation method"
          },
          {
            "id": "B",
            "text": "phương pháp lịch sử",
            "sourceText": "historical method"
          },
          {
            "id": "C",
            "text": "phương pháp ước tính",
            "sourceText": "estimation method"
          },
          {
            "id": "D",
            "text": "phương pháp phân tích",
            "sourceText": "analytical method"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: phương pháp ước tính. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q6",
        "number": "6",
        "prompt": "Phương pháp nào sau đây không được sử dụng để giảm thiểu rủi ro tín dụng?",
        "sourcePrompt": "Which of the following methods is not used to reduce credit risk?",
        "options": [
          {
            "id": "A",
            "text": "phòng ngừa delta-gamma-vega",
            "sourceText": "delta-gamma-vega hedging"
          },
          {
            "id": "B",
            "text": "tài sản thế chấp",
            "sourceText": "collateral"
          },
          {
            "id": "C",
            "text": "đánh dấu thị trường",
            "sourceText": "marking to market"
          },
          {
            "id": "D",
            "text": "giới hạn số lượng công việc bạn làm với một bữa tiệc",
            "sourceText": "limiting the amount of business you do with a party"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: phòng ngừa delta-gamma-vega. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q7",
        "number": "7",
        "prompt": "Những loại rủi ro nào sau đây mà người kinh doanh chứng khoán phái sinh phải đối mặt?",
        "sourcePrompt": "Which of the following are types of risks faced by a derivatives dealer?",
        "options": [
          {
            "id": "A",
            "text": "rủi ro về thuế",
            "sourceText": "tax risk"
          },
          {
            "id": "B",
            "text": "rủi ro hoạt động",
            "sourceText": "operational risk"
          },
          {
            "id": "C",
            "text": "rủi ro kế toán",
            "sourceText": "accounting risk"
          },
          {
            "id": "D",
            "text": "rủi ro pháp lý",
            "sourceText": "legal risk"
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
        "id": "c14-q8",
        "number": "8",
        "prompt": "Lưới cho phép một công ty?",
        "sourcePrompt": "Netting permits a firm to?",
        "options": [
          {
            "id": "A",
            "text": "trừ đi khoản lỗ do tăng giá từ khoản lỗ do giảm giá",
            "sourceText": "subtract losses from price increases from losses from price decreases"
          },
          {
            "id": "B",
            "text": "thực hiện các giao dịch của nó với một đối tác nhất định với nhau",
            "sourceText": "net its transactions with a given counterparty against each other"
          },
          {
            "id": "C",
            "text": "trừ tất cả các khoản lãi của nó vào tất cả các khoản lỗ của nó",
            "sourceText": "net all of its gains against all of its losses"
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
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: thực hiện các giao dịch của nó với một đối tác nhất định với nhau. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q9",
        "number": "9",
        "prompt": "Rủi ro hệ thống là",
        "sourcePrompt": "Systemic risk is",
        "options": [
          {
            "id": "A",
            "text": "nguy cơ sụp đổ của toàn bộ hệ thống tài chính",
            "sourceText": "the risk of a failure of the entire financial system"
          },
          {
            "id": "B",
            "text": "rủi ro liên quan đến biến động thị trường rộng lớn",
            "sourceText": "the risk associated with broad market movements"
          },
          {
            "id": "C",
            "text": "nguy cơ thất bại của hệ thống quản lý rủi ro tài chính của công ty",
            "sourceText": "the risk of a failure of a firm’s financial risk management system"
          },
          {
            "id": "D",
            "text": "rủi ro biến động giá lớn trên toàn hệ thống tài chính",
            "sourceText": "the risk of large price movements throughout the financial system"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: nguy cơ sụp đổ của toàn bộ hệ thống tài chính. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q10",
        "number": "10",
        "prompt": "Điều nào sau đây là động lực chính cho sự phát triển trong thực hành quản lý rủi ro?",
        "sourcePrompt": "Which of the following is the primary impetus for the growth in the practice of risk management?",
        "options": [
          {
            "id": "A",
            "text": "máy tính nhanh hơn",
            "sourceText": "faster computers"
          },
          {
            "id": "B",
            "text": "mô hình định giá tốt hơn",
            "sourceText": "better pricing models"
          },
          {
            "id": "C",
            "text": "nâng cao kiến thức về quản lý rủi ro",
            "sourceText": "improved knowledge of risk management"
          },
          {
            "id": "D",
            "text": "quy định chặt chẽ hơn của chính phủ",
            "sourceText": "tighter government regulation"
          },
          {
            "id": "E",
            "text": "lo ngại về sự biến động",
            "sourceText": "concern over volatility"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: lo ngại về sự biến động. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q11",
        "number": "11",
        "prompt": "Mỗi điều sau đây là lợi ích của việc thực hành quản lý rủi ro của các công ty ngoại trừ",
        "sourcePrompt": "Each of the following is a benefit of practicing risk management by companies except",
        "options": [
          {
            "id": "A",
            "text": "các công ty có thể quản lý rủi ro tốt hơn các cổ đông của họ",
            "sourceText": "companies can manage risk better than their shareholders"
          },
          {
            "id": "B",
            "text": "quản lý rủi ro có thể tránh được chi phí phá sản",
            "sourceText": "risk management can avoid bankruptcy costs"
          },
          {
            "id": "C",
            "text": "quản lý rủi ro có thể giảm thuế",
            "sourceText": "risk management can lower taxes"
          },
          {
            "id": "D",
            "text": "quản lý rủi ro có thể tăng cơ hội việc làm",
            "sourceText": "risk management can increase employment opportunities"
          },
          {
            "id": "E",
            "text": "quản lý rủi ro có thể giúp ngăn chặn các công ty bỏ qua các cơ hội đầu tư có giá trị",
            "sourceText": "risk management can help prevent companies from passing up valuable investment opportunities"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: quản lý rủi ro có thể tăng cơ hội việc làm. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q12",
        "number": "12",
        "prompt": "Tìm số lượng hợp đồng tương lai Eurodollar, mỗi hợp đồng có delta là –$25 sẽ phòng ngừa delta cho danh mục đầu tư vị thế mua trong các hợp đồng hoán đổi với delta là 5.000 USD và một vị thế bán trong quyền chọn bán (put option) với delta là –$2.300.",
        "sourcePrompt": "Find the number of Eurodollar futures each having a delta of –$25 that would delta-hedge a portfolio of a long position in swaps with a delta of $5,000 and a short position in a put option with a delta of –$2,300.",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng dài 292",
            "sourceText": "long 292 contracts"
          },
          {
            "id": "B",
            "text": "bán khống 108 hợp đồng",
            "sourceText": "short 108 contracts"
          },
          {
            "id": "C",
            "text": "hợp đồng ngắn hạn 292",
            "sourceText": "short 292 contracts"
          },
          {
            "id": "D",
            "text": "hợp đồng dài hạn 200",
            "sourceText": "long 200 contracts"
          },
          {
            "id": "E",
            "text": "hợp đồng dài 108",
            "sourceText": "long 108 contracts"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: bán khống 108 hợp đồng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q13",
        "number": "13",
        "prompt": "Hoán đổi tổng lợi nhuận được mô tả tốt nhất là",
        "sourcePrompt": "A total return swap is best described as",
        "options": [
          {
            "id": "A",
            "text": "Một hợp đồng hoán đổi trong đó các khoản thanh toán chỉ bao gồm lãi vốn",
            "sourceText": "A swap in which the payments include only capital gains"
          },
          {
            "id": "B",
            "text": "một hợp đồng hoán đổi trong đó tổng lợi tức của một chỉ số chứng khoán được hoán đổi cho tổng lợi tức của trái phiếu",
            "sourceText": "a swap in which the total return on a stock index is swapped for the total return on a bond"
          },
          {
            "id": "C",
            "text": "một giao dịch hoán đổi trong đó lợi tức của một trái phiếu được hoán đổi để lấy một số khoản thanh toán khác",
            "sourceText": "a swap in which the return on one bond is swapped for some other payment"
          },
          {
            "id": "D",
            "text": "một hợp đồng hoán đổi được thiết kế để thay thế cho một hợp đồng hoán đổi cơ sở",
            "sourceText": "a swap designed to substitute for a basis swap"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: một giao dịch hoán đổi trong đó lợi tức của một trái phiếu được hoán đổi để lấy một số khoản thanh toán khác. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q14",
        "number": "14",
        "prompt": "Điều nào sau đây mô tả đúng nhất về hợp đồng hoán đổi nợ xấu?",
        "sourcePrompt": "Which of the following best describes a credit default swap?",
        "options": [
          {
            "id": "A",
            "text": "nó được bảo vệ chống lại mặc định",
            "sourceText": "it is protected against default"
          },
          {
            "id": "B",
            "text": "nó có tỷ lệ cao hơn để bù đắp cho khả năng một bên không trả được nợ",
            "sourceText": "it has a higher rate to compensate for the possibility of one party defaulting"
          },
          {
            "id": "C",
            "text": "nó có xếp hạng tín dụng cao hơn hầu hết các giao dịch hoán đổi khác",
            "sourceText": "it carries a higher credit rating than most other swaps"
          },
          {
            "id": "D",
            "text": "nó sẽ tắt nếu một bên khác bên ngoài hợp đồng hoán đổi mặc định",
            "sourceText": "it off if another party external to the swap defaults"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: nó sẽ tắt nếu một bên khác bên ngoài hợp đồng hoán đổi mặc định. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q15",
        "number": "15",
        "prompt": "Câu nào sau đây không đúng về quyền chọn chênh lệch tín dụng?",
        "sourcePrompt": "Which of the following statements is not true about a credit spread option?",
        "options": [
          {
            "id": "A",
            "text": "đó là một quyền chọn về mức chênh lệch của trái phiếu so với trái phiếu tham chiếu",
            "sourceText": "it is an option on the spread of a bond over a reference bond"
          },
          {
            "id": "B",
            "text": "giá trị của nó sẽ thay đổi theo những thay đổi trong nhận thức của nhà đầu tư về chất lượng tín dụng của một bên",
            "sourceText": "its value would change with changes in investors’ perceptions of a party’s credit quality"
          },
          {
            "id": "C",
            "text": "nó yêu cầu thanh toán trước một khoản phí quyền chọn (cao cấp)",
            "sourceText": "it requires payment of a premium up front"
          },
          {
            "id": "D",
            "text": "nó đòi hỏi trái phiếu cơ bản phải có tính thanh khoản tương đối",
            "sourceText": "it requires that the underlying bond be relatively liquid"
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
        "id": "c14-q16",
        "number": "16",
        "prompt": "Hình thức phòng ngừa rủi ro nào sau đây yêu cầu sử dụng quyền chọn?",
        "sourcePrompt": "Which of the following forms of hedging requires the use of options?",
        "options": [
          {
            "id": "A",
            "text": "phòng ngừa rủi ro đồng bằng",
            "sourceText": "delta hedging"
          },
          {
            "id": "B",
            "text": "phòng ngừa rủi ro thuần chay",
            "sourceText": "vega hedging"
          },
          {
            "id": "C",
            "text": "phòng ngừa gamma",
            "sourceText": "gamma hedging"
          },
          {
            "id": "D",
            "text": "phòng ngừa rủi ro tín dụng",
            "sourceText": "credit risk hedging"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: phòng ngừa rủi ro thuần chay. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q17",
        "number": "17",
        "prompt": "Nếu một công ty tham gia quản lý rủi ro để thu được lợi nhuận chênh lệch giá thì điều gì dễ bị bỏ qua?",
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
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: rủi ro tín dụng bổ sung mà nó giả định. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q18",
        "number": "18",
        "prompt": "Điều nào sau đây mô tả tốt nhất phương pháp chuẩn delta?",
        "sourcePrompt": "Which of the following best describes the delta normal method?",
        "options": [
          {
            "id": "A",
            "text": "một phương pháp quản lý hàng rào delta để đảm bảo gamma thấp",
            "sourceText": "a method of managing a delta hedge to assure a low gamma"
          },
          {
            "id": "B",
            "text": "phương pháp lịch sử khi phân phối chuẩn",
            "sourceText": "the historical method when the distribution is normal"
          },
          {
            "id": "C",
            "text": "phương pháp Monte Carlo khi giá thay đổi có phân phối chuẩn",
            "sourceText": "the Monte Carlo method when price changes are normally distributed"
          },
          {
            "id": "D",
            "text": "phương pháp phân tích được áp dụng cho các lựa chọn",
            "sourceText": "the analytical method applied to options"
          },
          {
            "id": "E",
            "text": "một phương pháp đo lường sự thay đổi trong delta của quyền chọn",
            "sourceText": "a method of measuring changes in an option’s delta"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: phương pháp phân tích được áp dụng cho các lựa chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q19",
        "number": "19",
        "prompt": "Rủi ro có thể xảy ra sai sót trong đầu vào của mô hình định giá được gọi là",
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
            "text": "rủi ro về giá",
            "sourceText": "pricing risk"
          },
          {
            "id": "D",
            "text": "rủi ro định giá",
            "sourceText": "valuation risk"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: rủi ro mô hình. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q20",
        "number": "20",
        "prompt": "Kỹ thuật nào sau đây là công cụ quản lý rủi ro thích hợp hơn cho một công ty mà giá trị tài sản không dễ đo lường được?",
        "sourcePrompt": "Which of the following techniques is a more appropriate risk management tool for a company in which asset value is not easily measurable?",
        "options": [
          {
            "id": "A",
            "text": "nguy cơ căng thẳng",
            "sourceText": "stress risk"
          },
          {
            "id": "B",
            "text": "giá trị tín dụng có nguy cơ",
            "sourceText": "credit value at risk"
          },
          {
            "id": "C",
            "text": "rủi ro thị trường",
            "sourceText": "market risk"
          },
          {
            "id": "D",
            "text": "đồng bằng có nguy cơ",
            "sourceText": "delta at risk"
          },
          {
            "id": "E",
            "text": "dòng tiền gặp rủi ro",
            "sourceText": "cash flow at risk"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: dòng tiền gặp rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q21",
        "number": "21",
        "prompt": "Trong điều khoản quyền chọn, trách nhiệm hữu hạn của cổ đông doanh nghiệp là",
        "sourcePrompt": "In option terms, the limited liability of corporate stockholders is",
        "options": [
          {
            "id": "A",
            "text": "hợp đồng kỳ hạn (hợp đồng kỳ hạn)",
            "sourceText": "a forward contract"
          },
          {
            "id": "B",
            "text": "quyền chọn mua (call option)",
            "sourceText": "a call option"
          },
          {
            "id": "C",
            "text": "quyền chọn bán (put option)",
            "sourceText": "a put option"
          },
          {
            "id": "D",
            "text": "một nơi bảo vệ",
            "sourceText": "a protective put"
          },
          {
            "id": "E",
            "text": "call ủy thác",
            "sourceText": "a fiduciary call"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: quyền chọn bán (put option). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q22",
        "number": "22",
        "prompt": "Rủi ro một bên sẽ không thanh toán trong khi đối tác đang gửi thanh toán được gọi là",
        "sourcePrompt": "The risk that a party will not pay while the counterparty is sending payment is called",
        "options": [
          {
            "id": "A",
            "text": "rủi ro chuyển khoản",
            "sourceText": "wire transfer risk"
          },
          {
            "id": "B",
            "text": "rủi ro thanh toán",
            "sourceText": "payment risk"
          },
          {
            "id": "C",
            "text": "rủi ro thanh toán",
            "sourceText": "settlement risk"
          },
          {
            "id": "D",
            "text": "rủi ro xuyên biên giới",
            "sourceText": "cross-border risk"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: rủi ro thanh toán. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q23",
        "number": "23",
        "prompt": "Một trái phiếu bị vỡ nợ tương đương với",
        "sourcePrompt": "A bond subject to default is equivalent to",
        "options": [
          {
            "id": "A",
            "text": "trao đổi người trả tiền",
            "sourceText": "a payer swaption"
          },
          {
            "id": "B",
            "text": "một call và một trái phiếu không bị vỡ nợ",
            "sourceText": "a call and a default-free bond"
          },
          {
            "id": "C",
            "text": "một lệnh put và một lệnh gọi",
            "sourceText": "a put and a call"
          },
          {
            "id": "D",
            "text": "một trái phiếu không có rủi ro vỡ nợ và một quyền chọn bán ngắn hạn",
            "sourceText": "a default-free bond and a short put"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: một trái phiếu không có rủi ro vỡ nợ và một quyền chọn bán ngắn hạn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q24",
        "number": "24",
        "prompt": "Công cụ nào sau đây có thể được sử dụng để thực hiện phòng hộ delta, gamma và vega?",
        "sourcePrompt": "Which of the following instruments could be used to execute a delta, gamma and vega hedge?",
        "options": [
          {
            "id": "A",
            "text": "trao đổi",
            "sourceText": "a swap"
          },
          {
            "id": "B",
            "text": "một lựa chọn",
            "sourceText": "an option"
          },
          {
            "id": "C",
            "text": "tương lai",
            "sourceText": "a futures"
          },
          {
            "id": "D",
            "text": "một FRA",
            "sourceText": "an FRA"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: một lựa chọn. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q25",
        "number": "25",
        "prompt": "Giá trị nào sau đây xấp xỉ Giá trị rủi ro ở mức 5% của danh mục đầu tư trị giá 10 triệu USD của tài sản A, có lợi nhuận kỳ vọng là 15% và độ biến động là 35%, và 15 triệu USD của tài sản B, có lợi nhuận kỳ vọng là 21% và độ biến động là 30%, trong đó mối tương quan giữa hai tài sản là 0,2.",
        "sourcePrompt": "Which of the following is approximately the Value at Risk at 5 percent of a portfolio of $10 million of asset A, whose expected return is 15 percent and volatility is 35 percent, and $15 million of asset B, whose expected return is 21 percent and volatility is 30 percent, where the correlation between the two assets is 0.2.",
        "options": [
          {
            "id": "A",
            "text": "5,6 triệu USD",
            "sourceText": "$5.6 million"
          },
          {
            "id": "B",
            "text": "10 triệu USD",
            "sourceText": "$10 million"
          },
          {
            "id": "C",
            "text": "15 triệu USD",
            "sourceText": "$15 million"
          },
          {
            "id": "D",
            "text": "1,25 triệu USD",
            "sourceText": "$1.25 million"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "none of the above"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: 5,6 triệu USD. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q26",
        "number": "26",
        "prompt": "Vị thế phòng hộ bằng delta là vị thế trong đó",
        "sourcePrompt": "A delta-hedged position is one in which the",
        "options": [
          {
            "id": "A",
            "text": "các vị thế giao ngay và phái sinh kết hợp có delta bằng một.",
            "sourceText": "combined spot and derivatives positions have a delta of one."
          },
          {
            "id": "B",
            "text": "vị trí giao ngay có delta bằng 0.",
            "sourceText": "spot position has a delta of zero."
          },
          {
            "id": "C",
            "text": "vị trí đạo hàm có delta bằng 0.",
            "sourceText": "derivatives position has a delta of zero."
          },
          {
            "id": "D",
            "text": "vị trí giao ngay và đạo hàm kết hợp có delta bằng 0.",
            "sourceText": "combined spot and derivatives positions have a delta of zero."
          },
          {
            "id": "E",
            "text": "vị trí giao ngay và phái sinh kết hợp có gamma bằng 0.",
            "sourceText": "combined spot and derivatives positions have a gamma of zero."
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: vị trí giao ngay và đạo hàm kết hợp có delta bằng 0.. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q27",
        "number": "27",
        "prompt": "Hàng rào delta và gamma là",
        "sourcePrompt": "A delta and gamma hedge is",
        "options": [
          {
            "id": "A",
            "text": "một trong đó vị trí điểm và đạo hàm kết hợp có delta bằng 0 và gamma bằng 0.",
            "sourceText": "one in which the combined spot and derivatives positions have a delta of zero and a gamma of zero."
          },
          {
            "id": "B",
            "text": "một điều không được đảm bảo là không có mọi rủi ro",
            "sourceText": "one that is not guaranteed to be free of all risks"
          },
          {
            "id": "C",
            "text": "chỉ có hiệu quả đối với những thay đổi nhỏ trong công cụ cơ bản.",
            "sourceText": "effective only for small changes in the underlying instrument."
          },
          {
            "id": "D",
            "text": "Tất cả các câu trả lời trên đều đúng",
            "sourceText": "all of the above statements are true"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên các câu lệnh là đúng",
            "sourceText": "none of the above statements are true"
          }
        ],
        "correctAnswer": "D",
        "explanation": "Đáp án đúng là D. Ý chính cần nhận ra là: Tất cả các câu trả lời trên đều đúng. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q28",
        "number": "28",
        "prompt": "Vị trí nào sau đây có hệ số veve âm?",
        "sourcePrompt": "Which of the following positions has a negative vega?",
        "options": [
          {
            "id": "A",
            "text": "Nhận hợp đồng hoán đổi lãi suất cố định và thanh toán lãi suất thả nổi dựa trên LIBOR",
            "sourceText": "Receive fixed and pay floating LIBOR-based interest rate swap contract"
          },
          {
            "id": "B",
            "text": "Gia súc ngắn hợp đồng tương lai (hợp đồng tương lai)",
            "sourceText": "Short cattle futures contract"
          },
          {
            "id": "C",
            "text": "Nhận thỏa thuận tỷ giá kỳ hạn thả nổi, thanh toán cố định dựa trên LIBOR",
            "sourceText": "Receive floating, pay fixed LIBOR-based forward rate agreement"
          },
          {
            "id": "D",
            "text": "Long Apple, Inc. quyền chọn bán (put option)",
            "sourceText": "Long Apple, Inc. put option"
          },
          {
            "id": "E",
            "text": "Quyền chọn mua chỉ số S&P 500 ngắn (quyền chọn mua)",
            "sourceText": "Short S&P 500 index call option"
          }
        ],
        "correctAnswer": "E",
        "explanation": "Đáp án đúng là E. Ý chính cần nhận ra là: Quyền chọn mua chỉ số S&P 500 ngắn (quyền chọn mua). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q29",
        "number": "29",
        "prompt": "Phòng ngừa rủi ro Delta, gamma và vega khá phức tạp. Xác định phát biểu sai.",
        "sourcePrompt": "Delta, gamma, and vega hedging is rather complex. Identify the false statement.",
        "options": [
          {
            "id": "A",
            "text": "Yêu cầu sử dụng bốn công cụ phòng ngừa rủi ro",
            "sourceText": "Requires the use of four hedging instruments"
          },
          {
            "id": "B",
            "text": "Ít nhất một trong các công cụ phải là một lựa chọn",
            "sourceText": "At least one of the instruments has to be an option"
          },
          {
            "id": "C",
            "text": "Liên quan đến việc thiết kế một danh mục đầu tư trong đó delta, gamma và vega được put bằng 0",
            "sourceText": "Involves designing a portfolio where delta, gamma, and vega are set equal to zero"
          },
          {
            "id": "D",
            "text": "Thường liên quan đến việc giải ba phương trình đồng thời",
            "sourceText": "Typically involves the solution to three simultaneous equations"
          },
          {
            "id": "E",
            "text": "Tất cả các câu trả lời trên đều đúng",
            "sourceText": "All of the above statements are true"
          }
        ],
        "correctAnswer": "A",
        "explanation": "Đáp án đúng là A. Ý chính cần nhận ra là: Yêu cầu sử dụng bốn công cụ phòng ngừa rủi ro. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q30",
        "number": "30",
        "prompt": "Phương pháp nào sau đây không phải là phương pháp tính Giá trị rủi ro?",
        "sourcePrompt": "Which of the following is not a method for computing Value at Risk?",
        "options": [
          {
            "id": "A",
            "text": "Phương pháp phân tích",
            "sourceText": "Analytical method"
          },
          {
            "id": "B",
            "text": "Phương pháp phương sai-hiệp phương sai",
            "sourceText": "Variance-covariance method"
          },
          {
            "id": "C",
            "text": "Phương pháp tổng hợp",
            "sourceText": "Comprehensive method"
          },
          {
            "id": "D",
            "text": "Phương pháp lịch sử",
            "sourceText": "Historical method"
          },
          {
            "id": "E",
            "text": "Phương pháp bình thường Delta",
            "sourceText": "Delta normal method"
          }
        ],
        "correctAnswer": "C",
        "explanation": "Đáp án đúng là C. Ý chính cần nhận ra là: Phương pháp tổng hợp. Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
      },
      {
        "id": "c14-q31",
        "number": "31",
        "prompt": "Giá trị hiện tại của khoản thanh toán được thực hiện để chuyển đổi một trái phiếu bị vỡ nợ thành một trái phiếu không bị vỡ nợ được gọi là",
        "sourcePrompt": "The present value of the payments made to convert a bond subject to default to a default-free bond is called the",
        "options": [
          {
            "id": "A",
            "text": "Chi phí quyền chọn",
            "sourceText": "Insurance cost"
          },
          {
            "id": "B",
            "text": "Trao đổi mặc định tín dụng quyền chọn (cao cấp)",
            "sourceText": "Credit default swap premium"
          },
          {
            "id": "C",
            "text": "Yếu tố rủi ro niên kim",
            "sourceText": "Annuity risk factor"
          },
          {
            "id": "D",
            "text": "Giá trị hiện tại của biến động mặc định",
            "sourceText": "Present value of the default volatility"
          },
          {
            "id": "E",
            "text": "không có đáp án nào ở trên",
            "sourceText": "None of the above"
          }
        ],
        "correctAnswer": "B",
        "explanation": "Đáp án đúng là B. Ý chính cần nhận ra là: Trao đổi mặc định tín dụng quyền chọn (cao cấp). Khi làm bài, hãy xác định thuật ngữ trung tâm của câu hỏi, phân biệt quyền và nghĩa vụ, rồi mới so sánh các lựa chọn. Các lựa chọn sai thường đánh tráo khái niệm, đổi chiều long/short, hoặc nhầm giữa giá quyền chọn và giá thực hiện."
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
