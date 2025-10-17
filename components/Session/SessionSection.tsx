import SingleSession from "../Common/SingleSession";
import sessionData from "./sessionData";

const SessionSection = () => {
  return (
    <section
      id="programmation"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2 block md:hidden ">
          {sessionData.reverse().map((session) => { 
            return (
            <div key={session.id} className="w-full">
              <div>
                <SingleSession session={session} />
              </div>
            </div>
          )})}
        </div>
        <div className="grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-2 md:grid hidden">
          <div className="w-[1/2]">
            {sessionData.map((session) => { 
              const isEven = session.id % 2 === 0;
              return (
              <div key={session.id} className="w-full mb-8">
              {isEven &&
                <div>
                  <SingleSession session={session} />
                </div>}
              </div>
            )})}
          </div>
          <div className="w-[1/2] mt-none md:mt-52">
            {sessionData.map((session) => { 
              const isEven = session.id % 2 === 0;
              return (
              <div key={session.id} className="w-full mb-8">
              {!isEven &&
                <div>
                  <SingleSession session={session} />
                </div>}
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionSection;
