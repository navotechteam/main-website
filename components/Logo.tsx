/**
 * โลโก้ Navo Tech (จากไฟล์โลโก้จริง ตัดชื่อภาษาไทยออก)
 *  - tone="color": โลโก้สีจริงสำหรับพื้นเข้ม (N สี + NAVO ขาว / TECH ม่วง)
 *  - tone="mono":  โลโก้สีเดียว เปลี่ยนสีตามพื้นของแต่ละส่วน (ใช้ไฟล์ SVG เป็น mask)
 *  - mark: เฉพาะสัญลักษณ์ N  ·  full: มีบรรทัด COMPANY LIMITED
 */
type Props = {
  tone?: "color" | "mono";
  mark?: boolean;
  full?: boolean;
  className?: string;
};

const B = "/asset/brand";

export default function Logo({ tone = "mono", mark = false, full = false, className = "" }: Props) {
  if (mark) {
    return tone === "color" ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={`${B}/mark-color.png`} alt="" aria-hidden="true" className={`logo-mark ${className}`} width={679} height={334} />
    ) : (
      <span aria-hidden="true" className={`logo-mark logo-mask logo-mask--mark ${className}`} />
    );
  }

  return (
    <span role="img" aria-label="Navo Tech" className={`logo ${full ? "logo--full" : ""} ${className}`}>
      {tone === "color" ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${B}/mark-color.png`} alt="" className="logo-n" width={679} height={334} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${B}/${full ? "wordmark-dark.png" : "wordmark-dark-short.png"}`}
            alt=""
            className="logo-w"
            width={1024}
            height={full ? 170 : 113}
          />
        </>
      ) : (
        <>
          <span className="logo-n logo-mask logo-mask--mark" />
          <span className={`logo-w logo-mask ${full ? "logo-mask--word" : "logo-mask--word-short"}`} />
        </>
      )}
    </span>
  );
}
