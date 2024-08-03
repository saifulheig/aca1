"use client";
import React, { useState } from "react";
import TabContent from "./TabContent";

const AllCourses = () => {
  const courses = [
    { _id: "1", name: "Business Management" },
    { _id: "2", name: "Cloud Computing" },
    { _id: "3", name: "Digital Marketing" },
    { _id: "4", name: "Easy Quran Learning" },
    { _id: "5", name: "Graphic Design & Video Editing" },
    { _id: "6", name: "Language Learning" },
    { _id: "7", name: "Microsoft 365 Productivity Suite" },
  ];

  const courseDetails = [
    { _id: "1", title: "Course 1", category: { _id: "1" }, price: 100 },
    { _id: "2", title: "Course 2", category: { _id: "2" }, price: 200 },
    { _id: "3", title: "Course 3", category: { _id: "3" }, price: 300 },
  ];

  const [activeTab, setActiveTab] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  const courseRef = React.useRef(null);

  const openCourse = (courseId) => {
    const detailElement = courseRef.current;
    if (detailElement) {
      detailElement.removeAttribute("open");
    }
    setActiveTab(courseId);
  };

  const filterCoursesByCategory = () => {
    if (activeTab === "all") {
      return courseDetails;
    } else {
      return courseDetails.filter(
        (course) => course?.category?._id === activeTab
      );
    }
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className=" bg-white">
      <div className=" pt-36 pb-28">
        <div className=" max-w-screen-xl mx-auto px-14">
          <div className="flex items-center">
            <label className="input input-bordered flex items-center p-0">
              <input
                type="text"
                className="grow bg-[#F2F7FF] py-3 border-none text-base px-4"
                placeholder="Search"
              />
              <span className="bg-[#F2F7FF] py-3 flex items-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </label>
            <h1 className="mx-auto text-[#040432] text-4xl font-medium">Our Courses</h1>
          </div>
          <div className="lg:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.length > 0 && (
              <div className="  h-fit rounded-xl px-5 py-6 sticky top-24 hidden lg:block">
                <div>
                  <p className="text-[#153870] text-xs lg:text-base font-semibold pb-4 mt-5">
                    Category{" "}
                    <span className="text-[#8A8A8A] text-[10px] lg:text-sm">
                      ({courses.length})
                    </span>
                  </p>
                  <hr className="pb-4" />
                  {courses.map((course) => (
                    <p
                      key={course._id}
                      className={`cursor-pointer text-xs lg:text-base mb-7 ${
                        activeTab === course._id
                          ? "text-[#153870] font-semibold px-2 border-l-4 border-[#FD6309]"
                          : "text-[#585883]"
                      }`}
                      onClick={() => openCourse(course._id)}
                    >
                      {course.name}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {courses.length > 0 && (
              <div className=" h-fit rounded-xl lg:hidden flex justify-between mb-5">
                <div>
                  <ul className="menu menu-horizontal menu-dropdown px-1">
                    <li>
                      <details ref={courseRef}>
                        <summary className="text-xs lg:text-base font-semibold text-[#153870]">
                          Course
                        </summary>
                        <ul className="p-2  font-bold text-white rounded-t-none transform -translate-x-0 w-48">
                          {courses.map((course) => (
                            <li key={course._id}>
                              <a
                                className={`cursor-pointer text-xs lg:text-base mb-5 ${
                                  activeTab === course._id
                                    ? "text-[#153870] font-semibold px-2 border-l-4 border-[#153870]"
                                    : "text-[#627A9F]"
                                }`}
                                onClick={() => openCourse(course._id)}
                              >
                                {course.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {false ? ( // Change this to 'isLoading' when using dynamic data
              <div className="flex justify-center items-center "></div>
            ) : (
              <div className="lg:col-span-2 mt-10">
                <div
                  className="tabcontent"
                  style={{ display: activeTab === "all" ? "block" : "none" }}
                >
                  <div className="mb-5 flex justify-between items-center">
                    <p className="text-[#153870] text-xs lg:text-base font-semibold">
                      Our Courses
                    </p>
                  </div>
                  {/* <CourseList courses={courseDetails} /> */}
                  <TabContent></TabContent>
                </div>

                {courses.map((course) => (
                  <div
                    key={course._id}
                    id={course._id}
                    className="tabcontent"
                    style={{
                      display: activeTab === course._id ? "block" : "none",
                    }}
                  >
                    <div className="mb-5 lg:flex justify-between items-center">
                      <p className="text-[#153870] text-xs lg:text-base font-semibold">
                        {course.name}
                      </p>
                    </div>
                    <TabContent></TabContent>
                    {/* <CourseList courses={filterCoursesByCategory()} /> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
