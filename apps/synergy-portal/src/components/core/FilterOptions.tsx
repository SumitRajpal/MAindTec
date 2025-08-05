'use client';

import {
      Plus,
      Search
} from 'lucide-react';


interface FilterCheckboxGroupProps {
      title: string;
      options: string[];
}

const FilterCheckboxGroup: React.FC<FilterCheckboxGroupProps> = ({ title, options }) => (
      <div>
            <div className="text-sm font-semibold text-gray-700 mb-2">{title}</div>
            <div className="flex flex-col gap-2 text-sm text-gray-600 p-2 bg-gray-50 rounded-md">
                  {options.map((option) => (
                        <label key={option} className="flex items-center gap-2">
                              <input type="checkbox" className="form-checkbox text-black" />
                              {option}
                        </label>
                  ))}
            </div>
      </div>
);

const filterOptions = [
      {
            title: "Department",
            options: ["Aerospace", "Pharma", "Mechanical"],
      },
      {
            title: "Status",
            options: ["Active", "Completed", "On Hold"],
      },
      {
            title: "Priority",
            options: ["High", "Medium", "Low"],
      },
];
const FilterOption: React.FC = () => {
      return (
            <div className="h-auto w-72 bg-white border-r flex flex-col p-4 rounded-2xl shadow-sm">
                  <div>

                        <div className="flex items-center justify-between mb-6">
                              <h1 className="text-xl font-semibold text-gray-900">Project Filters</h1>
                        </div>


                        <div className="flex flex-col gap-3 mb-4">
                              <button className="bg-black w-full text-white text-sm px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                                    <Plus size={16} />
                                    Add New Project
                              </button>

                              <button className="bg-black w-full text-white text-sm px-3 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                                    <Search size={16} />
                                    Search Projects
                              </button>
                        </div>
                  </div>


                  <div className="flex flex-col gap-6 my-5">

                        <div className="flex flex-col gap-6">
                              {filterOptions.map((group) => (
                                    <FilterCheckboxGroup
                                          key={group.title}
                                          title={group.title}
                                          options={group.options}
                                    />
                              ))}
                        </div>
                  </div>
            </div>

      );
}

export default FilterOption;
