import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="max-w-4xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 rounded-2xl shadow-lg transition-colors duration-300"
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center text-primary">
        Educational Qualification
      </h2>

      <div className="space-y-8">
        {/* Current Education */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Diploma in Computer Science & Technology (CST)
          </h3>
          <p className="text-lg font-medium text-orange-600 dark:text-orange-400">
            Daffodil Polytechnic Institute
          </p>
          <p className="mt-1 text-gray-600 dark:text-gray-400 italic">Currently Running</p>
        </div>

        {/* Example Past Education (Optional) */}
        {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            Higher Secondary Certificate (HSC)
          </h3>
          <p className="text-lg font-medium text-orange-600 dark:text-orange-400">
            Some College Name
          </p>
          <p className="mt-1 text-gray-600 dark:text-gray-400 italic">2019 - 2021</p>
        </div> */}
      </div>
    </section>
  );
};

export default Education;

