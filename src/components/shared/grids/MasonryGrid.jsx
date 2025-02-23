import WindowGrid from "../../tests/WindowGrid";

import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const SmIcons = [
  {
    icon: <FaLinkedin />,
  },
  {
    icon: <FaGithubAlt />,
  },
  {
    icon: <FaFacebook />,
  },
  {
    icon: <FaInstagram />,
  },
];

const MasonryGrid = () => {
  return (
    <>
      <div id="grid-wrapper" className="md:mx-5 mx-0 2xl:px-[50px]">
        <div
          id="grid"
          className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-2 2xl:p-[100px] p-5"
        >
          <div
            id="sq1"
            className="sq-styles 2xl:col-span-1 col-span-2 2xl:row-span-2 row-span-1 rounded-lg bg-gradient-to-r from-green-500 to-green-700 mb-4 2xl:mr-4"
          >
            <div>
              <b>Hovey Roofing Ex</b>
              <div id="img-wrapper" className="w-full h-64 bg-test1">
                <div id="img-container">hov roof img</div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At
                soluta delectus quia obcaecati officiis veniam? Laboriosam rerum
                molestias facere, similique saepe ad velit hic quas modi! Atque
                reiciendis aperiam consequatur.
              </p>
            </div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}

          {/* //? COMBINE 2, 3 SIDE BY SIDE, W /FLEX v*/}
          <div
            id="flex"
            class="flex md:flex-row flex-col sq-styles space-4 col-span-2"
          >
            <div
              id="sq2"
              className="sq-styles rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500"
            >
              pink-indigo-sq2
              <p>
                <b>Main focus- astro templates. </b> CTA to website interactive
                packages
              </p>
              <p class="pb-3">
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                itaque libero! Tempora dolore totam beatae nesciunt. Quam,
                harum, mollitia odio esse, voluptates similique nesciunt
                aspernatur iure dolorum laboriosam dolor. Nobis?
              </p>
              <p>
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                itaque libero! Tempora dolore totam beatae nesciunt. Quam,
                harum, mollitia odio esse, voluptates similique nesciunt
                aspernatur iure dolorum laboriosam dolor. Nobis?
              </p>
            </div>
            <div
              id="sq3"
              className="w-[200px] sq-styles md:mt-0 mt-5 md:ml-5 2xl:my-0 rounded-lg bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 "
            >
              <WindowGrid />
            </div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}

          {/* //? COMBINE 2, 3 SIDE BY SIDE, W /FLEX ^*/}
          <div
            id="sq4"
            className="col-span-2 row-span-1 my-4 sq-styles rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            red-yellow-sq4
            <p>
              <b>Laughing Coyote Templates-</b>
              orem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
              voluptatem, architecto mollitia temporibus hic incidunt,
              dignissimos distinctio corrupti nihil eligendi in molestiae facere
              ipsa quos reprehenderit cum earum quasi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              totam voluptatem, architecto mollitia temporibus hic incidunt,
              dignissimos distinctio corrupti nihil eligendi in molestiae facere
              ipsa quos reprehenderit cum earum quasi!
            </p>
          </div>

          {/* //TODO: 5, 6 SIDE BY SIDE v*/}
          <div
            id="flex"
            class="flex md:flex-row flex-col md:space-x-4 col-span-3"
          >
            <div
              id="sq5"
              className="sq-styles 2xl:col-span-2 col-span-1 row-span-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600"
            >
              red-yellow-rtg5- <b>(site 2) About LC- Blurb</b>
              <p>
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                nobis ea magni quasi, corporis distinctio labore cumque totam
                voluptate officia, non aspernatur et accusamus. Rerum odio
                itaque perferendis facere molestiae? sum dolor sit amet
                consectetur adipisicing elit. Cum nobis ea magni quasi, corporis
                distinctio labore cumque totam voluptate officia, non asperna
              </p>
              <p>
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                itaque libero! Tempora dolore totam beatae nesciunt. Quam,
                harum, mollitia odio esse, voluptates similique nesciunt
                aspernatur iure dolorum laboriosam dolor. Nobis?
              </p>
            </div>
            {/*  */}
            <></>
            {/*  */}
            {/*  //*: DIVIDE */}

            <div
              id="6"
              className="sq-styles 2xl:ml-5 md:mt-0 mt-5 col-span-3 row-span-1 rounded-lg xbg-gradient-to-r bg-test1"
            >
              <h3>
                white-sq6- <b>CTA</b>
              </h3>
              <p>
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                itaque libero! Tempora dolore totam beatae nesciunt. Quam,
                harum, mollitia odio esse, voluptates similique nesciunt
                aspernatur iure dolorum laboriosam dolor. Nobis?
              </p>
            </div>
          </div>
          {/* //TODO: 5, 6 SIDE BY SIDE v*/}
        </div>
      </div>
    </>
  );
};

export default MasonryGrid;
