import React from "react";
import img1 from "../../assests/jon.png";
import img2 from "../../assests/michaeljordan.png";
import img3 from "../../assests/jkrowling.png";
import img4 from "../../assests/oprah.png";
import img5 from "../../assests/walt-disney.png";
import gif from "../../assests/gif3.gif";
function opinionPage() {
  return (
    <div className="md:mx-10 mx-2 font-serif text-justify">
      <div>
        <h1 className="font-Primary text-[30px] md:text-[50px]">
          5 people who didn't give up
        </h1>
        <div className="md:flex my-2">
          <h2 className="font-Primary text-[12px] md:text-[25px] pr-10">
            When faced with a challenge, sometimes you have to think smarter and
            adjust course. <br />
            But often what it takes is sheer determination and perseverance.
            <br />
            It never hurts to be reminded that failure and rejection are minor
            speed bumps on the road to success.
          </h2>
          <div className="px-5 border-x-2 border-secondary">
            <p>Advertisment :</p>
            <img src={gif} alt="" className="grayscale" />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-secondary">
        <h1 className="font-Primary text-[30px]">1. Jack Ma</h1>
        <div className="md:flex">
          <h3 className="py-5 px-10">
            <img src={img1} alt="" className="grayscale" />
          </h3>
          <p>
            Ma experienced many failures in his life. He wanted to go to college
            but had trouble passing the entrance exam. On his first attempt he
            scored a meager 1 out of 120 possible points on the math portion of
            the exam. On his second try he failed again, and barely passed on
            his third attempt, which allowed him to enroll in the
            less-than-prestigious Hangzhou Teacher's Institute. Upon graduation
            he was rejected for over a dozen positions, including a role at
            Kentucky Fried Chicken where all of the other 24 applicants were
            accepted. Ultimately he got a job teaching English at a local
            university. Yet when he discovered the internet in 1995 while
            visiting a friend in the United States, he saw an opportunity to
            bring the world wide web to China. Here is an individual who barely
            made it into college, had failed at most of what he had done to
            date, whose only real job was as an English teacher and translator,
            who knew nothing about computers or e-mail or the internet. Yet his
            first reaction upon seeing the internet was to think he could add
            value and do something monumental. And he did: He created Alibaba
            from scratch and became one of the richest men in the world.
          </p>
        </div>
        <h1 className="font-Primary text-[30px]">2. Michael Jordan</h1>
        <div className="md:flex">
          <h3 className="py-5 px-16">
            <img src={img2} alt="" className="grayscale" />
          </h3>
          <p>
            Jordan was cut from his high school basketball team — a
            heartbreaking experience for any teenager. Then he became one of the
            greatest basketball players in the history of the game. He is the
            author of one of my favorite quotes about failure, one proudly
            displayed on the Failure Wall at my company: “I have missed more
            than 9,000 shots in my career. I have lost almost 300 games. On 26
            occasions I have been entrusted to take the game winning shot, and I
            missed. I have failed over and over and over again in my life. And
            that is why I succeed.” He is also the author of a lesser-known
            quote that is equally powerful: “Obstacles don't have to stop you.
            If you run into a wall, don't turn around and give up. Figure out
            how to climb it, go through it, or work around it.”
          </p>
        </div>
        <h1 className="font-Primary text-[30px]">3. J.K. Rowling</h1>
        <div className="md:flex">
          <h3 className=" px-8 md:w-[600px]">
            <img src={img3} alt="" className="grayscale" />
          </h3>
          <p>
            Rowling had her first Harry Potter novel rejected 12 times and was
            told “not to quit her day job.” Her latest novels (anonymously
            penned) continue to get rejection letters. She proudly posted those
            letters on twitter. And for good reason. Rowling is in great
            company; many successful writers rightfully consider their early
            rejections to be badges of honor. Stephen King's first book, Carrie,
            accumulated at least 30 rejection slips before it was accepted by
            Doubleday. Legend has it that Jack London's first story was rejected
            600 times before finally being published.
          </p>
        </div>
        <h1 className="font-Primary text-[30px]">4. Oprah Winfrey</h1>
        <div className="md:flex">
          <h3 className="  py-10 md:w-[700px] mx-14">
            <img src={img4} alt="" className="grayscale" />
          </h3>
          <p>
            Winfrey's on-air career had a rocky start. She was hired as
            co-anchor of the evening news at Baltimore's ABC affiliate, an
            enviable job for a young journalist, but was dropped after just a
            few months. Recommended Sports Business Minneapolis Golf Club splits
            with general manager hired in 2022 Career & Workplace Qualcomm is
            laying off 1,258 employees in California, 15% from Santa Clara
            Career & Workplace Five Marylanders make Forbes 400 list of
            wealthiest Americans She was sent from the anchor chair to an
            assortment of less prestigious jobs including writing and street
            reporting. But she was a slow writer and was constantly being yelled
            at to produce copy faster. Winfrey has called her early years at WJZ
            the “first and worst failure of her TV career,” and it's not hard to
            see why. Many people in her shoes would have changed into sandals,
            pursued a different career, quit, given up, something other than
            persist. But in retrospect, the lessons learned from her time in
            Baltimore were invaluable and she used them to point her in the
            right direction rather than change course. Eventually she moved on
            to better fitting positions, and the rest is history.
          </p>
        </div>
        <h1 className="font-Primary text-[30px]">5. Walt Disney</h1>
        <div className="md:flex">
          <h3 className=" px-14 md:w-[400px]">
            <img src={img5} alt="" className="grayscale" />
          </h3>
          <p>
            Disney was fired as a young man from his newspaper job for a lack of
            good ideas. Then he started his first animation company in 1921, but
            that quickly went bankrupt. He ended up eating dog food (literally)
            to survive. If you were subsisting on dog food because of the
            failure of your first animation company, would you start another
            animation company? Probably not. But that's exactly what Walt Disney
            did. In fact, he had to restart several more times after that before
            finally becoming successful.
          </p>
        </div>
        <p className="mt-5 first-letter:font-bold first-letter:text-[20px]">
          The stories of these individuals, including Michael Jordan, Jack Ma,
          J.K. Rowling, Oprah Winfrey, and Walt Disney, serve as powerful
          reminders of the importance of determination and perseverance in the
          face of challenges. Their successes were not handed to them on a
          silver platter; they encountered numerous failures, rejections, and
          setbacks along the way. What sets them apart is their ability to view
          failure not as a roadblock, but as a stepping stone toward success.
          These examples emphasize that success is not defined by the absence of
          failures but by the ability to learn, adapt, and persist despite
          failures. Each setback provided them with valuable lessons and the
          opportunity to refine their strategies, skills, and mindset. They
          didn't just endure failures; they embraced them, using the experience
          to fuel their determination and drive. In conclusion, these stories
          highlight the significance of grit, resilience, and a positive mindset
          in achieving one's goals. They inspire us to keep pushing forward,
          even when faced with seemingly insurmountable challenges, reminding us
          that with determination and perseverance, we can overcome obstacles
          and achieve remarkable success in our own lives.
        </p>
      </div>
    </div>
  );
}

export default opinionPage;
