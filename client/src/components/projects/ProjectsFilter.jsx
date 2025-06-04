const selectOptions = [
  "Web2.0 Applications",
  "Web3.0 Applications",
  "UI/UX Design",
  "Web design",
  "Smart contracts",
  "Databases",
  "Blockchain",
  "Digital Marketing",
  "Crypto Trading",
];

const ProjectsFilter = ({ setSelectProject }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option value="All Projects" className="text-sm sm:text-md">
        All Projects
      </option>

      {selectOptions.map((option) => (
        <option value={option} className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProjectsFilter;
