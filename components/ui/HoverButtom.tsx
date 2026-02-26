"use client";

export default function HoverButton({color, background, children, border, link}: {color: string, background: string, children: React.ReactNode, border?: string, link?: string}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600&display=swap');

        .btn-modern {
          font-family: 'DM Sans', sans-serif;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: ${background};
          border: 2px solid ${border};
          color: ${color};
          padding: 16px 20px;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.04em;
          transition: border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Sliding background fill */
        .btn-modern::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #f5f5f5;
          border-radius: inherit;
          transform: translateY(100%);
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }

        .btn-modern:hover::before {
          transform: translateY(0%);
        }

        .btn-modern:hover {
          border-color: #e0e0e0;
        }

        /* Text wrapper: clips overflow so letters slide in/out */
        .btn-text-wrap {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          height: 1.2em;
          overflow: hidden;
          z-index: 1;
        }

        /* Original text — slides out downward on hover */
        .btn-text-top {
          display: block;
          color: #fff;
          transform: translateY(0);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Clone text — slides in from above on hover */
        .btn-text-bottom {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          color: #0a0a0a;
          transform: translateY(-110%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-modern:hover .btn-text-top {
          transform: translateY(110%);
          color: #0a0a0a;
        }

        .btn-modern:hover .btn-text-bottom {
          transform: translateY(0);
        }
      `}</style>

        <a href={link} className="btn-modern">
          <span className="btn-text-wrap">
            <span className="btn-text-top">{children}</span>
            <span className="btn-text-bottom">{children}</span>
          </span>
        </a>
    </>
  );
}