import React from "react";

const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary">Educational Qualification</h2>

      <div className="space-y-6">
        {/* Current Education */}
        <div>
          <h3 className="text-xl font-semibold">Diploma in Computer Science & Technology (CST)</h3>
          <p className="text-gray-700 dark:text-gray-300">Daffodil Polytechnic Institute</p>
          <p className="text-sm mt-1">Currently Running</p>
        </div>

        {/* Example for Past Education (add if you want) */}
        {/* <div>
          <h3 className="text-xl font-semibold">Higher Secondary Certificate (HSC)</h3>
          <p className="text-gray-700 dark:text-gray-300">Your College Name</p>
          <p className="text-sm mt-1">Year Completed: 2021</p>
        </div> */}
      </div>
    </section>
  );
};

export default Education;
