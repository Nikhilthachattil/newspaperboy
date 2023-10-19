import React from "react";
import img2 from "../../assests/gif1.gif";
function Exclusives() {
  return (
    <div>
      <div className="relative font-Primary border-t-2 border-secondary mx-10 my-2 py-2 md:h-[70vh] bg-gray-200">
        <h1 className="font-bold md:text-[20px]">EXCLUSIVES :</h1>
        <h1 className="my-5">
          The Association between Artificial Intelligence Awareness and Employee
          Depression:
        </h1>
        <div className="md:grid grid-cols-3 grid-rows-2 gap-4">
          <div className="row-span-2 mb-5">
            <img src={img2} alt="" className="grayscale" />
          </div>
          <div className="col-span-2">
            <h5 className="font-serif text-[11px] md:text-[15px] text-justify mx-2 px-3  first-letter:text-7xl first-letter:font-bold first-letter:text-secondary dark:first-letter:text-secondary first-letter:mr-3 first-letter:float-left">
              The combination of artificial intelligence
              <span className="font-bold">(AI)</span> technology with the real
              economy has dramatically improved the efficiency of enterprises.
              However, the replacement of AI for employment also significantly
              impacts employees' cognition and psychological state. Based on the
              Conservation of Resources Theory, the relationship between AI
              awareness and employee depression is explored in this article
              while examining the mediating role of emotional exhaustion, as
              well as the moderating role of perceived organizational support.
              Based on a sample of 321 respondents, the empirical results show
              that <span className="font-bold">(1)</span>
              AI awareness is significantly positively correlated with
              depression; <span className="font-bold">(2)</span> emotional
              exhaustion plays a mediating role between AI awareness and
              depression; <span className="font-bold">(3)</span> perceived
              organizational support negatively moderates the relationship
              between emotional exhaustion and depression;
              <span className="font-bold">(4)</span> perceived organizational
              support negatively moderates the mediating role of emotional
              exhaustion between AI awareness and depression. The research
              conclusions provide a theoretical basis for organizations to take
              measures to intervene in the negative impact of changes in AI
              technology on employees' mental health.
            </h5>
          </div>
          <div className="col-span-2 col-start-2 row-start-2 mx-2 px-3 ">
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10049037/">
              <button className="font-serif text-justify mx-5 font-bold my-2 bg-secondary text-primary px-2">
                Read More...
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exclusives;
