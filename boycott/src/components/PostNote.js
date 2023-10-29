import { useState } from "react";
import Button from "./Button";

const PostNote = () => {
  const [product, setProduct] = useState("");
  const [replacement, setReplacement] = useState("");
  const [hint, setHint] = useState("");
  const [comment, setComment] = useState("");

  const postNote = async () => {
    const res = await fetch("/note/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ product, replacement, hint, note: comment }),
    });

    const ress = await res.json();
    if (res.status === 200) {
      alert("تم بنجاح! شكرًا لك على إرسال تعليقك");
      setProduct("");
      setReplacement("");
      setComment("");
      setHint("");
    }
    return ress;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!product && !replacement && !comment) {
      alert("حقول الادخال جميعها فارغة، من فضلك تأكد من ملء الحقول");
      // /n All fields are empty, please make sure to fill in the fields
      return;
    }
    //todo post request
    try {
      postNote();
    } catch (e) {
      alert("حدث خطأ أثناء إرسال الرسالة. من فضلك حاول مرة أخرى");
      console.log("Error while posting data: ", e);
    }

    // setProduct("");
    // setReplacement("");
    // setComment("");
    // setHint("");
  };

  return (
    <div>
      <header className="header" style={{ marginBottom: "-2rem" }}>
        <h3>نموذج توصيات المنتجات والملاحظات </h3>
        {/* <h3> Product Recommendation & Feedback Form </h3> */}
        <br />
        <p style={{ color: "#17a2b8" }}>Help us help you</p>
        <p style={{ color: "#17a2b8" }}>ساعدنا نساعدك</p>
      </header>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Boycotted product - منتج المقاطعة</label>
          <input
            type="text"
            placeholder="المنتج الموصى به للمقاطعه"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Alternative product - المنتج البديل</label>
          <input
            type="text"
            placeholder="المنتج الذي من الممكن ان يستبدله "
            value={replacement}
            onChange={(e) => setReplacement(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Product category or type - نوع أو فئة المنتج </label>
          <input
            type="text"
            placeholder="أدخل نوع المنتج (مثل: إلكترونيات، بسكويت، طعام، إلخ)"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>General Comment - ملحوظة</label>
          <input
            type="text"
            placeholder="رأيك و تعليقك"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <br />
        <span style={{ fontSize: "small", color: "#17a2b8" }}>
          <p>Your opinion is important to us</p>
          <p>رأيك مهم بالنسبة لنا</p>
        </span>

        <Button
          type="submit"
          value="Submit ارسال"
          color="#17a2b8"
          text="Submit ارسال"
        />
      </form>
    </div>
  );
};

export default PostNote;
