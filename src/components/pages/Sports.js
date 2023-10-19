import React from "react";
import img1 from "../../assests/messiworldcup.webp";
import img2 from "../../assests/messi.png";
import img3 from "../../assests/mbappe.jpg";

function Sports() {
  return (
    <div className="mx-10 font-serif text-justify">
      <div className="md:flex mb-5">
        <div className="mr-5">
          <h1 className="font-Primary text-[20px] md:text-[40px]">
            Lionel Messi brings euphoria to beleaguered Argentines
          </h1>
          <h3 className="md:text-[30px] my-3">
            A third World Cup title generated a rare moment of happiness for a
            country battered by inflation.
          </h3>
          <h6 className="font-bold opacity-50">
            Published : Dec 19, 2022 15:33 IST
          </h6>
        </div>
        <div className=" pt-5 md:w-[800px]">
          <img className="grayscale" src={img1} alt="" />
          <p className="text-[10px] ">
            Argentina's Lionel Messi kisses the trophy after winning the World
            Cup final match between Argentina and France at the Lusail Stadium
            in Qatar on December 18. | Photo Credit: AP/Martin Meissner
          </p>
        </div>
      </div>
      <p className="first-letter:font-bold first-letter:text-7xl first-letter:text-Secondary dark:first-letter:text-Secondary first-letter:mr-3 first-letter:float-left">
        Argentina's third World Cup title, following a match set to go down as
        an all-time classic, generated a rare moment of euphoria and happiness
        for a country battered by near three-digit inflation and facing months
        of economic and political uncertainty.
      </p>

      <p>
        Joyous fans, decked out in the national flag's sky blue and white
        colours, gathered in downtown Buenos Aires on the afternoon of December
        18 to celebrate a victory that, at times, appeared likely to slip from
        the team's grasp. Winning football's ultimate prize, Argentina's first
        in 36 years, provided a much-needed distraction from the misery of
        day-to-day life.
      </p>
      <p>
        Joyous fans, decked out in the national flag's sky blue and white
        colours, gathered in downtown Buenos Aires on the afternoon of December
        18 to celebrate a victory that, at times, appeared likely to slip from
        the team's grasp. Winning football's ultimate prize, Argentina's first
        in 36 years, provided a much-needed distraction from the misery of
        day-to-day life.
      </p>
      <p>
        The penalty shootout win over France—the teams were tied at 3-3 after
        extra time at Lusail Stadium in Qatar—was also a personal triumph for
        captain and team talisman Lionel Messi. In hoisting the trophy into the
        Qatar night, Messi burnished his image as the greatest player in the
        world, and potentially of all time.
      </p>

      <div className="md:grid grid-cols-3 grid-rows-5 gap-4 border-t-2 border-secondary">
        <div className="row-span-5">
          <h1 className="md:text-[30px] my-3 font-Primary bg-secondary text-white px-2">
            “Dream come true”
          </h1>
          <p className=" first-letter:text-7xl first-letter:text-Secondary dark:first-letter:text-Secondary first-letter:mr-3 first-letter:float-left">
            Argentina's third World Cup title, following a match set to go down
            as an all-time classic, generated a rare moment of euphoria and
            happiness for a country battered by near three-digit inflation and
            facing months of economic and political uncertainty. Joyous fans,
            decked out in the national flag's sky blue and white colours,
            gathered in downtown Buenos Aires on the afternoon of December 18 to
            celebrate a victory that, at times, appeared likely to slip from the
            team's grasp. Winning football's ultimate prize, Argentina's first
            in 36 years, provided a much-needed distraction from the misery of
            day-to-day life. The penalty shootout win over France—the teams were
            tied at 3-3 after extra time at Lusail Stadium in Qatar—was also a
            personal triumph for captain and team talisman Lionel Messi. In
            hoisting the trophy into the Qatar night, Messi burnished his image
            as the greatest player in the world, and potentially of all time.
            “Dream come true” The prospect of seeing him lift the World Cup at
            age 35 prompted thousands of Argentines to make the arduous and
            expensive trip to Qatar—fans such as 41-year-old Emiliano Piano. He
            attended all seven of Argentina's games, first staying with his
            partner and then with five friends who arrived later. “Personally,
            this is a dream come true,” Piano said by telephone amid a throng of
            fans celebrating in Qatar. “After five World Cups chasing this, at
            long last I could see Messi as a world champion.” Messi netted the
            game's opening goal—from the penalty spot—scored again in extra time
            to make it 3-2, and rolled in his spot-kick during the shootout.
            When Gonzalo Montiel fired in the winning kick, Messi sank to his
            knees in the centre circle and was engulfed by his teammates. “It's
            just crazy that it happened this way,” he said. “I wanted this so
            very much.”
          </p>
        </div>
        <div className="row-span-5 ">
          <img className="grayscale " src={img2} alt="" />
          <h1 className="bg-secondary text-white font-Primary text-center">
            Messi not done yet
          </h1>
          <p className="mt-10 bg-gray-200 mb-5">
            After the albiceleste started their campaign with a stunning loss to
            Saudi Arabia, it was Messi whose performances helped drive the team
            to five straight victories before December 18's showdown. Messi said
            he's not going to hang up his famous Argentine jersey just yet.
          </p>
          <div className="bg-gray-200 text-secondary py-5 font-Primary px-2 border-t-2 border-secondary">
            <p>France's Kylian Mbappe walks with the Golden Boot award (AP)</p>
            <img src={img3} alt="" className="px-2 grayscale " />
          </div>
        </div>
        <p className="row-span-5 pt-2">
          Argentina's third World Cup title, following a match set to go down as
          an all-time classic, generated a rare moment of euphoria and happiness
          for a country battered by near three-digit inflation and facing months
          of economic and political uncertainty. Joyous fans, decked out in the
          national flag's sky blue and white colours, gathered in downtown
          Buenos Aires on the afternoon of December 18 to celebrate a victory
          that, at times, appeared likely to slip from the team's grasp. Winning
          football's ultimate prize, Argentina's first in 36 years, provided a
          much-needed distraction from the misery of day-to-day life. The
          penalty shootout win over France—the teams were tied at 3-3 after
          extra time at Lusail Stadium in Qatar—was also a personal triumph for
          captain and team talisman Lionel Messi. In hoisting the trophy into
          the Qatar night, Messi burnished his image as the greatest player in
          the world, and potentially of all time. “Dream come true” The prospect
          of seeing him lift the World Cup at age 35 prompted thousands of
          Argentines to make the arduous and expensive trip to Qatar—fans such
          as 41-year-old Emiliano Piano. He attended all seven of Argentina's
          games, first staying with his partner and then with five friends who
          arrived later. “Personally, this is a dream come true,” Piano said by
          telephone amid a throng of fans celebrating in Qatar. “After five
          World Cups chasing this, at long last I could see Messi as a world
          champion.” Messi netted the game's opening goal—from the penalty
          spot—scored again in extra time to make it 3-2, and rolled in his
          spot-kick during the shootout. When Gonzalo Montiel fired in the
          winning kick, Messi sank to his knees in the centre circle and was
          engulfed by his teammates. “It's just crazy that it happened this
          way,” he said. “I wanted this so very much.”
        </p>
      </div>
    </div>
  );
}

export default Sports;
