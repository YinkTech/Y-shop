import React, { useEffect } from "react";
import james from "../assets/img/customer/james.jpg";
import greg from "../assets/img/customer/greg.jpeg";
import trevor from "../assets/img/customer/trevor.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Customers = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-5 mb-5">
      <div className="mx-auto text-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-[#333]">
          What our customer say about us
        </h2>

        <p data-aos="fade-up">
          Up maids an ample stood given. Certainly say suffering his him
          collected intention promotion. hill sold ham men made lose case too.{" "}
        </p>

        <div className="text-center mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <div
            data-aos="fade-up"
            className="flex-inline p-4"
            style={{
              margin: "auto",
              width: "280px",
              border: "1px solid #f4d0c2",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                src={james}
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "103px",
                  margin: "auto",
                  display: "inline-flex",
                  flexDirection: "column",
                }}
                alt="james"
              />
            </div>
            <div>
              <h4 className="my-3" style={{ fontWeight: "bolder" }}>
                James Pattinson
              </h4>
              <div>
                <span class="fa fa-star  checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "13px", marginTop: "20px" }}>
                Varius mattis suspendisse nulla ut suscipit est scelerisque.
                Sagittis neque augue ut Varius mattiS SuspendiSSe
              </p>
            </div>
          </div>{" "}
          <div
            data-aos="fade-up"
            className="flex-inline p-4"
            style={{
              margin: "auto",
              width: "280px",
              border: "1px solid #f4d0c2",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                src={greg}
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "103px",
                  margin: "auto",
                  display: "inline-flex",
                  flexDirection: "column",
                }}
                alt="greg"
              />
            </div>
            <div>
              <h4 className="my-3" style={{ fontWeight: "bolder" }}>
                Greg Stuart
              </h4>
              <div>
                <span class="fa fa-star  checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "13px", marginTop: "20px" }}>
                Varius mattis suspendisse nulla ut suscipit est scelerisque.
                Sagittis neque augue ut Varius mattiS SuspendiSSe
              </p>
            </div>
          </div>{" "}
          <div
            data-aos="fade-up"
            className="flex-inline p-4"
            style={{
              margin: "auto",
              width: "280px",
              border: "1px solid #f4d0c2",
              borderRadius: "10px",
            }}
          >
            <div>
              <img
                src={trevor}
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "103px",
                  margin: "auto",
                  display: "inline-flex",
                  flexDirection: "column",
                }}
                alt="trevor"
              />
            </div>
            <div>
              <h4 className="my-3" style={{ fontWeight: "bolder" }}>
                Trevor Mitchell
              </h4>
              <div>
                <span class="fa fa-star  checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: "13px", marginTop: "20px" }}>
                Varius mattis suspendisse nulla ut suscipit est scelerisque.
                Sagittis neque augue ut Varius mattiS SuspendiSSe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};