import type { TheorySection } from "./course";

export const detailedTheoryByChapter: Record<number, TheorySection[]> = {
  1: [
    {
      heading: "Công cụ phái sinh là gì và vì sao gọi là phụ thuộc",
      body: `Derivative nghĩa là công cụ phái sinh. Từ "phái sinh" có nghĩa là giá trị của nó không tự đứng một mình, mà lấy giá trị từ một thứ khác gọi là tài sản cơ sở hoặc biến số cơ sở. Nếu hợp đồng phái sinh dựa trên cổ phiếu Apple, giá cổ phiếu Apple thay đổi thì giá hợp đồng thay đổi. Nếu hợp đồng dựa trên tỷ giá USD/VND, tỷ giá thay đổi thì giá hợp đồng thay đổi. Nếu hợp đồng dựa trên lãi suất, lãi suất thay đổi thì dòng tiền trong hợp đồng thay đổi.

Điểm quan trọng: tài sản cơ sở không nhất thiết phải là một vật cầm được. Nó có thể là cổ phiếu, trái phiếu, hàng hóa, chỉ số chứng khoán, tỷ giá, lãi suất hoặc một khoản vay. Vì vậy câu hỏi "phụ thuộc vào lãi suất là sao" có thể hiểu đơn giản là: hợp đồng đó thắng hay thua tùy theo lãi suất tương lai tăng hay giảm.`,
    },
    {
      heading: "Tài sản cơ sở: cổ phiếu, trái phiếu, lãi suất, tỷ giá",
      body: `Với cổ phiếu: một quyền chọn mua cổ phiếu cho phép người mua mua cổ phiếu ở giá đã định. Nếu giá cổ phiếu thị trường tăng cao hơn giá thực hiện, quyền chọn mua có giá trị hơn.

Với trái phiếu: giá trái phiếu thường đi ngược chiều lãi suất. Khi lãi suất thị trường tăng, trái phiếu cũ có coupon thấp kém hấp dẫn hơn nên giá giảm. Vì vậy phái sinh trên trái phiếu hoặc lãi suất có thể dùng để phòng ngừa rủi ro lãi suất.

Với lãi suất: ngân hàng hoặc doanh nghiệp vay nợ có thể sợ lãi suất tăng. Họ dùng FRA, futures lãi suất, option lãi suất hoặc swap để khóa, đổi hoặc giới hạn mức lãi suất phải trả. Đây là lý do lãi suất cũng là một underlying.`,
    },
    {
      heading: "Thị trường giao ngay và thị trường phái sinh",
      body: `Thị trường giao ngay, còn gọi là cash market hoặc spot market, là nơi mua bán tài sản thật và thanh toán gần như ngay lập tức. Ví dụ mua cổ phiếu hôm nay trên sàn là giao dịch giao ngay.

Thị trường phái sinh là nơi mua bán hợp đồng dựa trên tài sản đó. Ví dụ thay vì mua cổ phiếu ngay, bạn mua call option để có quyền mua cổ phiếu trong tương lai. Khi làm bài, thấy chữ cash market hoặc spot market thì chọn thị trường giao ngay. Thấy forward, futures, option, swap thì nghĩ đến thị trường phái sinh.`,
    },
    {
      heading: "Call, put, forward, futures và swap khác nhau ở đâu",
      body: `Call option cho người mua quyền mua. Put option cho người mua quyền bán. Người mua option có quyền nhưng không có nghĩa vụ, vì họ đã trả premium để mua quyền lựa chọn.

Forward và futures là hợp đồng mua hoặc bán trong tương lai và hai bên có nghĩa vụ thực hiện. Long forward hoặc long futures là bên cam kết mua tài sản trong tương lai. Short forward hoặc short futures là bên cam kết bán tài sản trong tương lai.

Swap là hợp đồng hoán đổi dòng tiền. Ví dụ interest rate swap: một bên trả lãi cố định, nhận lãi thả nổi; bên kia làm ngược lại. Swap thường dùng để đổi kiểu rủi ro chứ không phải mua bán một tài sản ngay lập tức.`,
    },
    {
      heading: "Hedging, speculation và arbitrage",
      body: `Hedging là phòng ngừa rủi ro. Người hedging thường đã có rủi ro ở tài sản thật, rồi dùng phái sinh để giảm thiệt hại nếu giá đi ngược ý muốn. Ví dụ đang sở hữu cổ phiếu thì mua put để giới hạn lỗ.

Speculation là đầu cơ. Người đầu cơ không nhất thiết có tài sản thật, họ dùng phái sinh để đặt cược vào hướng giá, lãi suất hoặc biến động.

Arbitrage là kinh doanh chênh lệch giá. Ý tưởng là mua rẻ ở nơi này, bán đắt ở nơi khác, hoặc kết hợp nhiều công cụ để tạo lợi nhuận gần như không rủi ro. Trong bài thi, arbitrage thường đi với law of one price và no-arbitrage.`,
    },
    {
      heading: "Bẫy thi chương 1",
      body: `Bẫy thường gặp là nhầm quyền với nghĩa vụ. Option: người mua có quyền, người bán option có nghĩa vụ nếu người mua thực hiện. Forward/futures: cả hai bên đều có nghĩa vụ.

Bẫy thứ hai là nhầm call với put. Call = quyền mua. Put = quyền bán.

Bẫy thứ ba là nghĩ phái sinh chỉ dựa trên cổ phiếu. Thực tế underlying có thể là lãi suất, tỷ giá, chỉ số, hàng hóa, trái phiếu hoặc biến số tài chính khác.`,
    },
  ],
  2: [
    {
      heading: "Hai kiểu thị trường quyền chọn: sàn giao dịch và OTC",
      body: `Quyền chọn có thể giao dịch trên sở giao dịch hoặc trên thị trường OTC. Trên sở giao dịch, hợp đồng thường được chuẩn hóa: tài sản cơ sở, quy mô hợp đồng, ngày đáo hạn, cách thanh toán và quy trình giao dịch đều theo quy định. Ưu điểm là minh bạch, thanh khoản tốt hơn và có clearinghouse đứng giữa giảm rủi ro đối tác.

OTC là giao dịch thỏa thuận riêng giữa hai bên. Ưu điểm là linh hoạt, có thể thiết kế đúng nhu cầu của khách hàng. Nhược điểm là khó thoát vị thế hơn, giá ít minh bạch hơn và có rủi ro đối tác cao hơn.`,
    },
    {
      heading: "Premium, strike price và exercise",
      body: `Premium là giá người mua phải trả để sở hữu quyền chọn. Đây không phải là giá mua tài sản cơ sở. Strike price hoặc exercise price là mức giá dùng nếu quyền chọn được thực hiện.

Ví dụ call có premium 2 USD, stock price 30 USD, strike 35 USD. Người nắm giữ call có quyền mua cổ phiếu ở 35 USD, không phải 2 USD, không phải 30 USD và không phải 32 USD. Premium chỉ là tiền mua quyền. Đây là dạng bẫy rất hay gặp trong chương 2.`,
    },
    {
      heading: "Moneyness: in-the-money, at-the-money, out-of-the-money",
      body: `Moneyness cho biết nếu thực hiện ngay thì option có lợi hay không. Với call: in-the-money khi S > X, at-the-money khi S gần bằng X, out-of-the-money khi S < X. Với put thì ngược lại: in-the-money khi S < X vì bạn có quyền bán cao hơn giá thị trường.

S là giá tài sản cơ sở hiện tại. X là giá thực hiện. Chỉ xét intrinsic value thì call có giá trị max(0, S - X), put có giá trị max(0, X - S).`,
    },
    {
      heading: "Clearinghouse, market maker và ký quỹ",
      body: `Clearinghouse đứng giữa người mua và người bán trên sàn, giúp bảo đảm nghĩa vụ thực hiện. Khi có clearinghouse, mỗi bên về mặt pháp lý giao dịch với clearinghouse thay vì phải tin trực tiếp vào bên còn lại.

Market maker cung cấp thanh khoản bằng cách báo cả giá mua và giá bán. Chênh lệch giữa bid và ask là bid-ask spread.

Người viết option có thể phải ký quỹ vì họ đang nhận nghĩa vụ. Nếu thị trường đi bất lợi và tài khoản xuống dưới mức duy trì, họ bị margin call và phải nộp thêm tiền.`,
    },
    {
      heading: "American và European option",
      body: `European option chỉ được thực hiện tại ngày đáo hạn. American option có thể được thực hiện bất cứ lúc nào trước hoặc tại ngày đáo hạn. Vì American linh hoạt hơn nên giá trị American option thường không thấp hơn European option cùng điều kiện.

Nhưng linh hoạt hơn không có nghĩa là lúc nào cũng nên thực hiện sớm. Với call kiểu Mỹ trên cổ phiếu không trả cổ tức, thường không tối ưu khi thực hiện sớm vì còn mất giá trị thời gian. Câu hỏi thi hay dùng chi tiết này để gài.`,
    },
  ],
  3: [
    {
      heading: "Giá option gồm giá trị nội tại và giá trị thời gian",
      body: `Option premium có hai phần: intrinsic value và time value. Intrinsic value là lợi ích nếu thực hiện ngay. Call: max(0, S - X). Put: max(0, X - S). Time value là phần còn lại của premium, phản ánh khả năng từ nay đến đáo hạn thị trường còn đi theo hướng có lợi.

Ví dụ call có giá 7, S = 50, X = 45. Intrinsic value = 5. Time value = 2. Nếu đề hỏi "minimum value if exercised now" thì dùng intrinsic. Nếu đề hỏi option price/premium thì phải xét cả time value.`,
    },
    {
      heading: "Các yếu tố ảnh hưởng đến giá call và put",
      body: `Khi S tăng, call tăng giá vì quyền mua rẻ hơn thị trường có lợi hơn; put giảm giá vì quyền bán ở X kém hấp dẫn hơn. Khi X tăng, call giảm giá còn put tăng giá.

Khi volatility tăng, cả call và put thường tăng giá vì option có payoff một chiều: lỗ tối đa của người mua bị giới hạn ở premium, nhưng lợi ích có thể tăng khi giá biến động mạnh.

Thời gian đến đáo hạn dài hơn thường làm option có giá trị hơn, nhất là American option. Lãi suất và cổ tức tác động khác nhau lên call/put vì chúng ảnh hưởng đến chi phí nắm giữ tài sản cơ sở và giá trị hiện tại của strike.`,
    },
    {
      heading: "Put-call parity",
      body: `Put-call parity là quan hệ no-arbitrage giữa call, put, cổ phiếu và trái phiếu phi rủi ro. Với European option trên cổ phiếu không trả cổ tức:

C + PV(X) = P + S0

Trong đó C là giá call, P là giá put, S0 là giá cổ phiếu hiện tại, PV(X) là giá trị hiện tại của strike price. Nếu một vế rẻ hơn vế kia, nhà đầu tư có thể mua vế rẻ và bán vế đắt để tạo arbitrage. Khi làm bài công thức, phải chú ý dấu cộng/trừ và giá trị hiện tại của X.`,
    },
    {
      heading: "Giới hạn trên và giới hạn dưới của giá option",
      body: `Option không thể có giá âm. Call không thể đắt hơn cổ phiếu vì quyền mua cổ phiếu không thể đáng giá hơn chính cổ phiếu. Put không thể đắt hơn giá trị hiện tại của strike đối với European put.

Lower bound quan trọng: European call trên cổ phiếu không cổ tức thường có c >= max(0, S0 - PV(X)). European put thường có p >= max(0, PV(X) - S0). Nếu đề hỏi "lowest possible value", đây là nhóm công thức cần nhớ.`,
    },
    {
      heading: "Early exercise",
      body: `American option có quyền thực hiện sớm nhưng quyền này chỉ có giá trị trong một số tình huống. American call trên cổ phiếu không trả cổ tức thường không nên thực hiện sớm vì giữ option vẫn còn upside và vẫn giữ được tiền strike đến sau. Nếu cổ phiếu trả cổ tức lớn, thực hiện sớm trước ngày giao dịch không hưởng quyền có thể hợp lý.

American put có thể đáng thực hiện sớm hơn trong một số trường hợp, nhất là khi put deep in-the-money và lãi suất dương, vì nhận strike sớm có giá trị.`,
    },
  ],
  4: [
    {
      heading: "Ý tưởng của mô hình nhị phân",
      body: `Binomial model giả định trong một bước thời gian, giá tài sản chỉ có thể đi lên hoặc đi xuống. Từ một giá S, giá kỳ sau là Su nếu tăng hoặc Sd nếu giảm. Từ hai khả năng này, ta tính payoff của option ở cuối kỳ rồi chiết khấu ngược về hiện tại.

Điểm cốt lõi không phải là dự đoán xác suất thật của thị trường, mà là tạo một cách định giá không có arbitrage. Vì vậy mô hình dùng risk-neutral probability thay vì xác suất chủ quan.`,
    },
    {
      heading: "Risk-neutral probability",
      body: `Trong mô hình một bước, xác suất trung lập rủi ro thường là:

p = [(1 + r) - d] / (u - d)

Nếu dùng lãi suất liên tục thì thay (1 + r) bằng e^(rT). Sau khi có p, giá option = giá trị hiện tại của payoff kỳ vọng trung lập rủi ro:

Option value = [p x payoff up + (1 - p) x payoff down] / (1 + r)

Bài thi hay yêu cầu tính p hoặc dùng p để định giá call/put.`,
    },
    {
      heading: "Replicating portfolio và delta",
      body: `Một cách hiểu khác là tạo danh mục gồm cổ phiếu và vay/cho vay phi rủi ro sao cho payoff giống hệt option ở cả trạng thái up và down. Nếu hai danh mục có payoff tương lai giống nhau thì theo no-arbitrage, giá hiện tại phải bằng nhau.

Delta trong cây nhị phân thường là:

Delta = (Cu - Cd) / (Su - Sd)

Delta cho biết cần bao nhiêu đơn vị tài sản cơ sở để bắt chước một option. Đây cũng là nền tảng của hedging.`,
    },
    {
      heading: "Cây nhiều bước và backward induction",
      body: `Với cây nhiều bước, bắt đầu từ cuối kỳ để tính payoff tại các node cuối. Sau đó đi ngược từng bước về hiện tại. Ở mỗi node, giá option bằng giá trị hiện tại của payoff kỳ vọng trung lập rủi ro ở hai node phía sau.

Với American option, tại mỗi node phải so sánh hai giá trị: giá trị nếu tiếp tục giữ option và giá trị nếu thực hiện ngay. Giá tại node là giá lớn hơn trong hai giá trị đó. Đây là điểm khác European option.`,
    },
    {
      heading: "Điều kiện no-arbitrage trong cây nhị phân",
      body: `Để mô hình hợp lý, lợi suất phi rủi ro phải nằm giữa kịch bản giảm và kịch bản tăng: d < 1 + r < u. Nếu không, sẽ xuất hiện arbitrage rõ ràng giữa tài sản rủi ro và tài sản phi rủi ro.

Khi đề cho u, d, r, bước đầu nên kiểm tra công thức p. Nếu p âm hoặc lớn hơn 1 thì dữ liệu đang vi phạm điều kiện no-arbitrage hoặc bạn đã dùng sai kỳ hạn/lãi suất.`,
    },
  ],
  5: [
    {
      heading: "Black-Scholes-Merton dùng để làm gì",
      body: `Mô hình Black-Scholes-Merton định giá European option trong môi trường lý tưởng. Nó thay cây nhị phân nhiều bước bằng mô hình liên tục. Đầu vào chính gồm S0, X, r, T, volatility sigma và nếu có thì dividend yield.

Mô hình giả định thị trường không có arbitrage, có thể vay/cho vay ở lãi suất phi rủi ro, giao dịch liên tục, không có chi phí giao dịch và giá tài sản đi theo phân phối lognormal. Trong bài thi, câu hỏi thường kiểm tra giả định, ý nghĩa biến số và tác động của volatility.`,
    },
    {
      heading: "Công thức cần hiểu, không chỉ học thuộc",
      body: `Với cổ phiếu không trả cổ tức:

C = S0 N(d1) - X e^(-rT) N(d2)
P = X e^(-rT) N(-d2) - S0 N(-d1)

N(d) là xác suất tích lũy của phân phối chuẩn. Có thể hiểu N(d1) liên quan đến delta của call, còn N(d2) liên quan đến xác suất trung lập rủi ro option kết thúc in-the-money. Nếu đề không bắt tính số, hãy tập trung vào quan hệ: call tăng khi S, r, sigma, T tăng; call giảm khi X tăng.`,
    },
    {
      heading: "Greeks",
      body: `Greeks đo độ nhạy của option. Delta đo option đổi bao nhiêu khi giá tài sản cơ sở đổi. Gamma đo delta đổi nhanh thế nào. Theta đo tác động của thời gian trôi qua, thường bất lợi cho người mua option. Vega đo tác động của volatility. Rho đo tác động của lãi suất.

Mẹo nhớ: delta liên quan hướng giá, gamma liên quan độ cong, theta liên quan thời gian, vega liên quan biến động, rho liên quan lãi suất. Bài thi hay hỏi Greek nào dùng để hedge rủi ro nào.`,
    },
    {
      heading: "Implied volatility",
      body: `Implied volatility là mức volatility được suy ra từ giá option thị trường. Nếu biết giá option đang giao dịch, ta có thể đảo ngược mô hình để tìm sigma khiến giá mô hình bằng giá thị trường.

Implied volatility không phải volatility lịch sử. Historical volatility nhìn về quá khứ, implied volatility phản ánh kỳ vọng và cung cầu hiện tại trên thị trường option. Khi thị trường lo sợ biến động lớn, implied volatility thường tăng, làm cả call và put tăng giá.`,
    },
    {
      heading: "Giới hạn của mô hình",
      body: `Black-Scholes-Merton mạnh vì cho công thức đóng và trực giác rõ, nhưng nó dựa trên giả định đơn giản. Thực tế có chi phí giao dịch, giới hạn bán khống, volatility không cố định, giá có thể nhảy mạnh và thị trường không giao dịch liên tục hoàn hảo.

Do đó khi gặp câu hỏi về model risk, volatility smile hoặc implied volatility khác nhau theo strike, hãy nhớ rằng thị trường thực tế không hoàn toàn giống giả định BSM.`,
    },
  ],
  6: [
    {
      heading: "Cách đọc một chiến lược quyền chọn",
      body: `Mỗi chiến lược quyền chọn nên đọc theo bốn câu hỏi: mua hay bán option, call hay put, strike nào, cùng hay khác ngày đáo hạn. Sau đó xác định kỳ vọng thị trường: tăng, giảm, đi ngang hay biến động mạnh.

Người mua option trả premium và có quyền. Người bán option nhận premium nhưng có nghĩa vụ. Vì vậy cùng là call, long call và short call có payoff ngược nhau. Khi làm bài, luôn vẽ nhanh payoff trong đầu trước khi chọn đáp án.`,
    },
    {
      heading: "Protective put và covered call",
      body: `Protective put = sở hữu tài sản cơ sở + mua put. Chiến lược này giống mua bảo hiểm: nếu giá giảm mạnh, put tăng giá giúp giới hạn lỗ. Breakeven thường là S0 + premium put.

Covered call = sở hữu tài sản cơ sở + bán call. Chiến lược này tạo thêm thu nhập premium nhưng giới hạn lợi nhuận phía trên, vì nếu giá tăng vượt strike thì cổ phiếu có thể bị gọi đi. Đây là chiến lược phù hợp khi kỳ vọng giá tăng nhẹ hoặc đi ngang.`,
    },
    {
      heading: "Bull spread và bear spread",
      body: `Bull spread dùng khi kỳ vọng giá tăng nhưng muốn giới hạn chi phí và rủi ro. Ví dụ bull call spread: mua call strike thấp, bán call strike cao. Lãi tối đa bị giới hạn, lỗ tối đa là net premium trả ra.

Bear spread dùng khi kỳ vọng giá giảm. Ví dụ bear put spread: mua put strike cao, bán put strike thấp. Chiến lược này hưởng lợi khi giá giảm nhưng vẫn giới hạn cả lãi và lỗ.`,
    },
    {
      heading: "Straddle và strangle",
      body: `Long straddle = mua call và mua put cùng strike, cùng đáo hạn. Long strangle = mua call và put khác strike. Cả hai đều đặt cược vào biến động mạnh, không cần biết giá tăng hay giảm. Straddle đắt hơn vì hai option thường gần at-the-money hơn.

Short straddle/strangle thì ngược lại: kỳ vọng thị trường ít biến động để giữ premium. Rủi ro của short volatility có thể rất lớn nếu giá chạy mạnh một hướng.`,
    },
    {
      heading: "Cách tính breakeven và max profit/loss",
      body: `Với chiến lược có nhiều option, hãy cộng toàn bộ premium trước: nếu trả tiền ròng là debit, đó thường là lỗ ban đầu; nếu nhận tiền ròng là credit, đó thường là lợi ban đầu nhưng đi kèm nghĩa vụ.

Breakeven là mức giá cuối kỳ khiến tổng payoff trừ chi phí bằng 0. Max profit/loss xác định bằng cách xét các vùng giá: dưới strike thấp, giữa các strike, trên strike cao. Không cần vẽ đẹp, chỉ cần chia vùng đúng.`,
    },
  ],
  7: [
    {
      heading: "Butterfly và condor",
      body: `Butterfly thường dùng khi kỳ vọng giá tài sản kết thúc gần một mức trung tâm. Long butterfly bằng call có thể xây từ mua call strike thấp, bán hai call strike giữa, mua call strike cao. Lãi lớn nhất ở strike giữa; lỗ bị giới hạn ở hai đầu.

Condor tương tự butterfly nhưng vùng lãi tối đa rộng hơn vì dùng bốn strike khác nhau. Đổi lại, lợi nhuận tối đa thường thấp hơn. Cả hai là chiến lược kỳ vọng biến động thấp hoặc giá đi ngang trong vùng.`,
    },
    {
      heading: "Collar",
      body: `Collar thường gồm sở hữu cổ phiếu, mua put bảo vệ và bán call phía trên. Put giới hạn lỗ khi giá giảm, call bán ra giúp tài trợ chi phí put nhưng giới hạn lợi nhuận khi giá tăng.

Nếu premium nhận từ call gần bằng premium trả cho put, chiến lược gọi là zero-cost collar. Đây là ví dụ rõ về trade-off: giảm rủi ro phía dưới nhưng đổi lại bỏ bớt upside phía trên.`,
    },
    {
      heading: "Calendar spread và diagonal spread",
      body: `Calendar spread dùng option cùng strike nhưng khác ngày đáo hạn. Nó nhạy với time decay và volatility giữa các kỳ hạn. Diagonal spread khác cả strike và ngày đáo hạn.

Các chiến lược này không chỉ đặt cược vào hướng giá mà còn đặt cược vào tốc độ trôi thời gian và thay đổi volatility. Khi đề nhắc khác maturity, hãy nghĩ đến calendar hoặc diagonal.`,
    },
    {
      heading: "Ratio spread và rủi ro không đối xứng",
      body: `Ratio spread là chiến lược số lượng option mua và bán không bằng nhau, ví dụ mua 1 call và bán 2 call strike cao. Nó có thể tạo premium thấp hoặc nhận premium, nhưng rủi ro có thể mở rộng nếu giá chạy quá mạnh.

Trong bài thi, thấy "unlimited loss" hoặc "naked written options" thì phải cẩn thận. Bán nhiều option hơn số được bảo vệ có thể làm payoff xấu đi rất nhanh ở vùng giá cực đoan.`,
    },
    {
      heading: "Box spread và arbitrage",
      body: `Box spread kết hợp bull spread và bear spread để tạo payoff cố định ở đáo hạn. Về lý thuyết, giá box hôm nay phải bằng giá trị hiện tại của payoff cố định đó. Nếu giá thị trường khác quá nhiều, có thể có arbitrage.

Box spread thường xuất hiện trong câu hỏi no-arbitrage: nếu payoff chắc chắn là X2 - X1 ở đáo hạn thì giá hiện tại phải gần PV(X2 - X1), sau khi xét chi phí giao dịch và lãi suất.`,
    },
  ],
  8: [
    {
      heading: "Forward price theo cost of carry",
      body: `Forward price là giá giao hàng trong tương lai khiến hợp đồng có giá trị ban đầu bằng 0. Với tài sản không có thu nhập và không có chi phí lưu kho, công thức đơn giản:

F0 = S0(1 + r)^T hoặc F0 = S0 e^(rT)

Ý nghĩa: nếu mua tài sản ngay, bạn phải bỏ tiền và chịu chi phí vốn. Forward price phải phản ánh chi phí vốn đó, nếu không sẽ có arbitrage giữa mua spot và ký forward.`,
    },
    {
      heading: "Thu nhập, cổ tức, chi phí lưu kho và convenience yield",
      body: `Nếu tài sản tạo thu nhập như cổ tức hoặc coupon, forward price giảm vì người giữ tài sản spot nhận được lợi ích đó. Nếu tài sản có chi phí lưu kho như hàng hóa, forward price tăng vì người giữ spot phải chịu chi phí.

Với commodity, convenience yield là lợi ích phi tiền mặt khi nắm giữ hàng thật, ví dụ có hàng để sản xuất khi thiếu nguồn cung. Convenience yield làm forward price giảm so với trường hợp chỉ có chi phí lưu kho.`,
    },
    {
      heading: "Giá trị của forward sau khi ký",
      body: `Forward price lúc khởi đầu được chọn để giá trị hợp đồng bằng 0. Nhưng sau đó, khi giá spot hoặc lãi suất thay đổi, hợp đồng có thể có giá trị dương với một bên và âm với bên kia.

Với long forward có delivery price K, giá trị thường có dạng:

Vt = St - PV(K)

Nếu St tăng cao hơn giá trị hiện tại của K, bên long có lợi. Nếu St giảm, bên short có lợi.`,
    },
    {
      heading: "Forward và futures khác nhau",
      body: `Forward là hợp đồng riêng, thường OTC, thanh toán một lần ở đáo hạn, linh hoạt nhưng có rủi ro đối tác. Futures giao dịch trên sàn, chuẩn hóa, có clearinghouse, ký quỹ và mark-to-market hằng ngày.

Mark-to-market nghĩa là lãi/lỗ được ghi nhận hằng ngày vào tài khoản ký quỹ. Vì dòng tiền đến sớm hoặc muộn khác nhau, futures price có thể khác forward price khi lãi suất biến động và payoff tương quan với lãi suất.`,
    },
    {
      heading: "Option trên futures",
      body: `Option on futures cho quyền vào vị thế futures. Call on futures cho quyền vào long futures; put on futures cho quyền vào short futures. Khi thực hiện, người mua không nhận tài sản cơ sở ngay mà nhận vị thế futures và thường có điều chỉnh tiền mặt theo giá futures hiện tại.

Bẫy thi là nhầm option trên futures với futures contract. Option vẫn là quyền, còn futures là nghĩa vụ.`,
    },
  ],
  9: [
    {
      heading: "Cash-and-carry arbitrage",
      body: `Cash-and-carry dùng khi futures/forward đang quá cao so với giá hợp lý. Ý tưởng: vay tiền mua tài sản spot, đồng thời bán futures. Đến đáo hạn, giao tài sản vào futures và dùng tiền nhận được trả nợ vay. Nếu futures price cao hơn fair value đủ lớn, phần chênh là lợi nhuận arbitrage.

Công thức nền là so sánh giá futures thị trường với fair value từ cost of carry. Nếu F thị trường > F hợp lý, nghĩ đến cash-and-carry.`,
    },
    {
      heading: "Reverse cash-and-carry arbitrage",
      body: `Reverse cash-and-carry dùng khi futures/forward đang quá thấp. Ý tưởng: bán khống tài sản spot, đầu tư tiền thu được ở lãi suất phi rủi ro, đồng thời mua futures. Đến đáo hạn, nhận tài sản từ futures để trả lại vị thế bán khống.

Nếu F thị trường < F hợp lý, nghĩ đến reverse cash-and-carry. Bài thi thường hỏi nên mua/bán spot và mua/bán futures theo hướng nào.`,
    },
    {
      heading: "Stock index futures",
      body: `Với chỉ số cổ phiếu, fair value phải tính cả dividend yield:

F0 = S0 e^[(r - q)T]

q là tỷ suất cổ tức liên tục. Nếu cổ tức kỳ vọng cao, futures price thấp hơn vì người giữ danh mục cổ phiếu spot nhận cổ tức còn người giữ futures thì không. Arbitrage chỉ thật sự có nếu chênh lệch vượt chi phí giao dịch, bid-ask spread và giới hạn bán khống.`,
    },
    {
      heading: "Arbitrage trong hàng hóa",
      body: `Với hàng hóa, fair value chịu ảnh hưởng bởi storage cost và convenience yield. Nếu chi phí lưu kho cao, futures có thể cao hơn spot nhiều. Nếu hàng vật chất khan hiếm và convenience yield cao, futures có thể thấp hơn dự đoán đơn giản.

Khi làm bài hàng hóa, không dùng máy móc công thức cổ phiếu. Hãy đọc xem đề có storage cost, lease rate hoặc convenience yield không.`,
    },
    {
      heading: "Tại sao arbitrage thực tế không luôn hoàn hảo",
      body: `Sách thường giả định không có chi phí giao dịch, vay/cho vay cùng lãi suất và bán khống dễ dàng. Thực tế có margin, giới hạn vốn, thuế, spread, chi phí lưu kho và rủi ro thực hiện. Vì vậy một chênh lệch nhỏ chưa chắc là arbitrage có thể khai thác.

Trong bài lý thuyết, nếu hỏi điều kiện arbitrage, hãy nhớ phải có lợi nhuận chắc chắn sau khi xét toàn bộ chi phí liên quan.`,
    },
  ],
  10: [
    {
      heading: "Long hedge và short hedge",
      body: `Short hedge dùng khi bạn đang sở hữu hoặc sẽ bán tài sản trong tương lai và sợ giá giảm. Ví dụ nông dân sẽ bán lúa sau ba tháng, họ bán futures để khóa giá.

Long hedge dùng khi bạn sẽ mua tài sản trong tương lai và sợ giá tăng. Ví dụ hãng hàng không cần mua nhiên liệu sau ba tháng, họ mua futures để khóa chi phí. Câu hỏi thi thường mô tả nỗi sợ trước: sợ giá giảm thì short hedge, sợ giá tăng thì long hedge.`,
    },
    {
      heading: "Basis risk",
      body: `Basis = spot price - futures price. Basis risk là rủi ro basis thay đổi làm hedge không hoàn hảo. Ngay cả khi dùng futures đúng hướng, bạn vẫn có thể không khóa được giá chính xác vì futures và spot không di chuyển hoàn toàn cùng nhau.

Basis risk xuất hiện khi tài sản cần hedge khác tài sản futures, ngày cần hedge khác ngày đáo hạn futures, hoặc địa điểm/chất lượng hàng hóa khác nhau.`,
    },
    {
      heading: "Hedge ratio tối ưu",
      body: `Hedge ratio tối ưu thường là:

h* = rho x sigmaS / sigmaF

Trong đó rho là tương quan giữa thay đổi spot và futures, sigmaS là độ lệch chuẩn thay đổi spot, sigmaF là độ lệch chuẩn thay đổi futures. Nếu spot và futures di chuyển gần như giống nhau, h* gần 1. Nếu tương quan thấp, hedge kém hiệu quả hơn.`,
    },
    {
      heading: "Số lượng hợp đồng futures cần dùng",
      body: `Sau khi có hedge ratio, số hợp đồng tối ưu:

N* = h* x QA / QF

QA là quy mô vị thế cần hedge, QF là quy mô của một hợp đồng futures. Nếu kết quả không nguyên, thực tế phải làm tròn. Trong bài thi, chú ý đơn vị: số cổ phiếu, số thùng dầu, mệnh giá trái phiếu hoặc giá trị danh mục.`,
    },
    {
      heading: "Cross hedge, rolling hedge và spread",
      body: `Cross hedge là hedge bằng futures trên tài sản khác nhưng có tương quan cao. Ví dụ không có futures đúng loại nhiên liệu nên dùng hợp đồng dầu gần tương quan. Rolling hedge là liên tục thay hợp đồng gần đáo hạn bằng hợp đồng xa hơn khi kỳ hạn cần hedge dài hơn kỳ hạn futures thanh khoản.

Spread strategy thường liên quan mua một futures và bán futures khác để đặt cược vào chênh lệch giá giữa hai kỳ hạn, hai tài sản hoặc hai thị trường.`,
    },
  ],
  11: [
    {
      heading: "Swap là hoán đổi dòng tiền",
      body: `Swap không phải là mua bán một tài sản ngay, mà là thỏa thuận hoán đổi dòng tiền theo thời gian. Hai bên thường thanh toán phần chênh lệch ròng vào các ngày thanh toán.

Swap phổ biến nhất là interest rate swap. Một bên trả fixed rate và nhận floating rate; bên kia nhận fixed và trả floating. Notional principal thường chỉ dùng để tính lãi, không trao đổi thật trong swap lãi suất vanilla.`,
    },
    {
      heading: "Payer swap và receiver swap",
      body: `Bên trả fixed, nhận floating thường được gọi là payer swap hoặc pay-fixed swap. Bên nhận fixed, trả floating là receiver swap.

Nếu lãi suất thị trường tăng, bên trả fixed thường có lợi vì họ trả mức cố định cũ thấp hơn và nhận floating cao hơn. Nếu lãi suất giảm, bên nhận fixed thường có lợi. Đây là trực giác quan trọng khi làm câu hỏi về vị thế swap.`,
    },
    {
      heading: "Định giá swap",
      body: `Một interest rate swap có thể xem như chênh lệch giữa trái phiếu fixed-rate và floating-rate, hoặc như một chuỗi FRA. Tại ngày bắt đầu, fixed rate thường được chọn sao cho giá trị swap bằng 0.

Sau khi lãi suất thay đổi, swap có giá trị dương với một bên và âm với bên kia. Nếu đề hỏi giá trị swap, hãy xác định bạn đang đứng phía pay-fixed hay receive-fixed trước khi xét dấu.`,
    },
    {
      heading: "Currency swap",
      body: `Currency swap hoán đổi dòng tiền bằng hai đồng tiền khác nhau. Khác interest rate swap, currency swap thường có trao đổi principal ban đầu và cuối kỳ. Nó dùng để quản trị rủi ro tỷ giá hoặc tiếp cận nguồn vốn ngoại tệ thuận lợi hơn.

Câu hỏi thường gài giữa interest rate swap và currency swap: interest rate swap vanilla dùng cùng đồng tiền và không trao đổi notional; currency swap liên quan hai đồng tiền và thường trao đổi principal.`,
    },
    {
      heading: "Rủi ro của swap",
      body: `Swap thường là OTC nên có rủi ro đối tác. Nếu một bên đang có giá trị dương mà bên kia phá sản, bên có lợi có thể không nhận đủ dòng tiền kỳ vọng. Ngoài ra còn có market risk do lãi suất/tỷ giá thay đổi, liquidity risk nếu muốn thoát vị thế, và operational risk trong xác nhận, thanh toán.

Clearing và collateral giúp giảm rủi ro nhưng không làm rủi ro biến mất hoàn toàn.`,
    },
  ],
  12: [
    {
      heading: "Forward rate và FRA",
      body: `Forward rate là lãi suất ngụ ý cho một giai đoạn tương lai, suy ra từ cấu trúc kỳ hạn lãi suất hiện tại. FRA, tức forward rate agreement, là hợp đồng khóa lãi suất cho một khoản vay hoặc khoản đầu tư trong tương lai.

Người mua FRA thường được hiểu là bên hưởng lợi khi lãi suất tham chiếu tăng so với rate đã khóa. Người bán FRA hưởng lợi khi lãi suất giảm. Khi làm bài, phải xác định bên nào sợ lãi suất tăng hay giảm.`,
    },
    {
      heading: "Payoff của FRA",
      body: `FRA thanh toán vào đầu kỳ vay giả định, nên payoff thường được chiết khấu về thời điểm thanh toán. Công thức có nhiều biến thể theo quy ước ngày, nhưng trực giác là:

Nếu lãi suất thị trường > lãi suất hợp đồng, bên long FRA có lợi.
Nếu lãi suất thị trường < lãi suất hợp đồng, bên short FRA có lợi.

Đừng nhầm notional với số tiền lãi/lỗ. Notional chỉ là cơ sở để tính phần chênh lệch lãi.`,
    },
    {
      heading: "Cap, floor và collar",
      body: `Interest rate cap bảo vệ người đi vay trước rủi ro lãi suất tăng. Cap là tập hợp nhiều caplet, mỗi caplet trả tiền khi lãi suất tham chiếu vượt cap rate.

Floor bảo vệ người cho vay hoặc nhà đầu tư trước rủi ro lãi suất giảm. Floorlet trả tiền khi lãi suất xuống dưới floor rate.

Collar kết hợp mua cap và bán floor, hoặc ngược lại, để giới hạn lãi suất trong một vùng và giảm chi phí premium.`,
    },
    {
      heading: "Swaptions",
      body: `Swaption là option trên swap. Payer swaption cho quyền vào swap trả fixed, nhận floating. Receiver swaption cho quyền vào swap nhận fixed, trả floating.

Nếu bạn sợ lãi suất tăng và muốn quyền được trả fixed trong tương lai, payer swaption có giá trị. Nếu bạn sợ lãi suất giảm và muốn quyền nhận fixed, receiver swaption phù hợp hơn. Bẫy thi nằm ở chữ payer/receiver.`,
    },
    {
      heading: "Duration và rủi ro lãi suất",
      body: `Trái phiếu và danh mục thu nhập cố định nhạy với lãi suất. Duration đo mức nhạy giá tương đối với thay đổi lãi suất; convexity đo độ cong của quan hệ giá và lãi suất.

Khi lãi suất tăng, giá trái phiếu giảm. Khi lãi suất giảm, giá trái phiếu tăng. Phái sinh lãi suất giúp điều chỉnh duration hoặc giới hạn rủi ro mà không cần mua bán toàn bộ danh mục trái phiếu.`,
    },
  ],
  13: [
    {
      heading: "Exotic option khác option cơ bản ở đâu",
      body: `Option cơ bản có payoff phụ thuộc chủ yếu vào giá tài sản tại đáo hạn. Exotic option có payoff phức tạp hơn: phụ thuộc đường đi của giá, mức rào cản, giá trung bình, giá cao nhất/thấp nhất hoặc điều kiện kích hoạt.

Ví dụ Asian option dựa trên giá trung bình; barrier option chỉ tồn tại hoặc mất hiệu lực nếu giá chạm rào cản; lookback option nhìn lại giá tốt nhất trong kỳ. Vì payoff phức tạp nên định giá và quản trị rủi ro khó hơn.`,
    },
    {
      heading: "Structured products",
      body: `Structured product là sản phẩm kết hợp trái phiếu, option và đôi khi swap để tạo payoff theo nhu cầu. Ví dụ một note bảo toàn vốn có thể gồm trái phiếu zero-coupon để hoàn vốn gốc và call option để tham gia upside của chỉ số.

Ưu điểm là tạo payoff phù hợp khẩu vị nhà đầu tư. Nhược điểm là phí, thanh khoản, rủi ro đối tác và độ phức tạp. Bài thi thường hỏi sản phẩm này gồm những mảnh phái sinh nào.`,
    },
    {
      heading: "Credit derivatives và CDS",
      body: `Credit default swap, gọi tắt là CDS, giống bảo hiểm rủi ro vỡ nợ. Người mua protection trả premium định kỳ; người bán protection phải bồi thường nếu reference entity xảy ra credit event.

CDS giúp chuyển rủi ro tín dụng mà không cần bán trái phiếu cơ sở. Tuy nhiên nó tạo rủi ro đối tác và có thể làm hệ thống tài chính liên kết chặt hơn.`,
    },
    {
      heading: "Portfolio insurance và dynamic hedging",
      body: `Portfolio insurance cố gắng giới hạn lỗ danh mục bằng cách tạo payoff giống protective put. Có thể mua put thật hoặc dùng dynamic hedging, tức liên tục điều chỉnh vị thế cổ phiếu/futures theo thị trường.

Dynamic hedging phụ thuộc vào giả định giao dịch liên tục và thanh khoản. Khi thị trường nhảy giá hoặc thanh khoản biến mất, hedge có thể không hoạt động như mô hình.`,
    },
    {
      heading: "Model risk",
      body: `Model risk là rủi ro mô hình định giá hoặc mô hình đo rủi ro sai. Với sản phẩm phức tạp, chỉ cần giả định volatility, correlation, recovery rate hoặc hành vi lãi suất sai là giá và hedge có thể lệch lớn.

Khi gặp câu hỏi quản trị rủi ro phái sinh nâng cao, câu trả lời thường không chỉ là tính công thức mà còn phải kiểm soát giả định, kiểm định mô hình, stress test và giới hạn vị thế.`,
    },
  ],
  14: [
    {
      heading: "Các loại rủi ro tài chính",
      body: `Rủi ro thị trường là rủi ro do giá, lãi suất, tỷ giá, volatility hoặc spread thay đổi. Rủi ro tín dụng là rủi ro đối tác không trả được tiền. Rủi ro thanh khoản là không thể giao dịch hoặc huy động tiền đúng lúc với chi phí hợp lý. Rủi ro vận hành đến từ lỗi hệ thống, con người, quy trình hoặc pháp lý.

Phái sinh có thể giảm một rủi ro nhưng làm tăng rủi ro khác. Ví dụ hedge giá bằng futures giảm market risk nhưng tạo nhu cầu ký quỹ và liquidity risk.`,
    },
    {
      heading: "Value at Risk và Expected Shortfall",
      body: `VaR trả lời câu hỏi: trong một khoảng thời gian và mức tin cậy nhất định, khoản lỗ tối đa dự kiến là bao nhiêu trong điều kiện bình thường. Ví dụ 1-day 95% VaR = 1 triệu nghĩa là có 5% khả năng lỗ vượt 1 triệu trong một ngày.

Expected Shortfall nhìn vào phần đuôi xấu hơn VaR: nếu lỗ đã vượt ngưỡng VaR, trung bình lỗ là bao nhiêu. Expected Shortfall thường cung cấp thông tin tốt hơn về tail risk.`,
    },
    {
      heading: "Stress testing và scenario analysis",
      body: `Stress test kiểm tra danh mục dưới các cú sốc lớn: lãi suất tăng mạnh, tỷ giá biến động, thị trường cổ phiếu giảm sâu, liquidity cạn kiệt. Scenario analysis xây dựng các kịch bản cụ thể, có thể dựa trên lịch sử hoặc giả định.

VaR thường dựa trên phân phối và điều kiện bình thường, còn stress test hỏi "nếu điều tệ xảy ra thì sao". Hai công cụ bổ sung cho nhau, không thay thế nhau.`,
    },
    {
      heading: "Hedging policy và risk limits",
      body: `Một tổ chức cần quy định rõ ai được giao dịch phái sinh, được dùng công cụ nào, mục đích là hedge hay trading, giới hạn vị thế là bao nhiêu và báo cáo cho ai. Nếu không có chính sách, phái sinh dễ bị dùng để đầu cơ ngoài kiểm soát.

Risk limits có thể dựa trên notional, delta, VaR, stress loss, counterparty exposure hoặc liquidity. Giới hạn tốt phải đo được, theo dõi được và có người chịu trách nhiệm khi vượt giới hạn.`,
    },
    {
      heading: "Đánh giá hiệu quả hedge",
      body: `Một hedge tốt không nhất thiết tạo lợi nhuận, mà giảm biến động hoặc bảo vệ mục tiêu đã định. Nếu tài sản thật lỗ nhưng phái sinh lãi bù lại, hedge đang hoạt động. Nếu tài sản thật lãi nhưng phái sinh lỗ, đó cũng có thể là kết quả bình thường của hedge.

Khi đánh giá, phải so sánh với mục tiêu ban đầu: khóa giá, giới hạn lỗ, giảm duration, ổn định dòng tiền hay bảo vệ tỷ giá.`,
    },
  ],
  15: [
    {
      heading: "Quản trị rủi ro cấp tổ chức",
      body: `Quản trị rủi ro không chỉ là phòng ban tính toán mô hình. Nó là hệ thống gồm hội đồng quản trị, ban điều hành, chính sách, giới hạn, báo cáo, kiểm soát nội bộ và văn hóa ra quyết định. Mục tiêu là để tổ chức biết mình đang chịu rủi ro gì, chịu bao nhiêu và có phù hợp với năng lực vốn hay không.

Risk appetite là mức rủi ro tổ chức sẵn sàng chấp nhận để đạt mục tiêu. Nếu không có risk appetite rõ, các bộ phận có thể tự tạo rủi ro vượt quá khả năng chịu đựng chung.`,
    },
    {
      heading: "Ba tuyến phòng thủ",
      body: `Tuyến một là đơn vị kinh doanh, nơi tạo ra rủi ro và phải quản lý rủi ro hằng ngày. Tuyến hai là quản trị rủi ro và tuân thủ, đặt khung chính sách, giám sát và thách thức tuyến một. Tuyến ba là kiểm toán nội bộ, đánh giá độc lập xem hệ thống kiểm soát có hoạt động không.

Mô hình này giúp tránh tình trạng người tạo rủi ro tự kiểm tra mình mà không có giám sát độc lập.`,
    },
    {
      heading: "Kiểm soát giao dịch phái sinh",
      body: `Với phái sinh, tổ chức cần tách biệt front office, middle office và back office. Front office giao dịch. Middle office đo rủi ro, kiểm tra giới hạn và định giá độc lập. Back office xác nhận, thanh toán và đối chiếu.

Nếu một người vừa giao dịch, vừa định giá, vừa xác nhận thì rủi ro gian lận và sai sót rất cao. Đây là điểm thường xuất hiện trong câu hỏi về quản trị rủi ro tổ chức.`,
    },
    {
      heading: "Báo cáo và escalation",
      body: `Rủi ro phải được báo cáo đúng cấp, đúng thời điểm và dễ hiểu. Báo cáo tốt không chỉ liệt kê số liệu mà chỉ ra vị thế nào tạo rủi ro, rủi ro vượt giới hạn nào, nguyên nhân và hành động cần làm.

Escalation nghĩa là khi vượt giới hạn hoặc có sự kiện bất thường, vấn đề phải được đưa lên cấp có thẩm quyền nhanh chóng. Không escalation kịp thời có thể biến một lỗi nhỏ thành tổn thất lớn.`,
    },
    {
      heading: "Văn hóa rủi ro",
      body: `Mô hình và chính sách chỉ hiệu quả nếu văn hóa tổ chức ủng hộ việc nói thật về rủi ro. Nhân viên phải có quyền nêu vấn đề, quản lý không được khuyến khích che giấu lỗ, và thưởng phạt không nên chỉ dựa trên lợi nhuận ngắn hạn.

Trong bài thi, nếu thấy câu hỏi về quản trị rủi ro toàn tổ chức, đáp án tốt thường nhấn mạnh trách nhiệm rõ ràng, độc lập kiểm soát, báo cáo minh bạch và phù hợp với mục tiêu kinh doanh.`,
    },
  ],
};
