import { GiCartwheel } from "react-icons/gi";

const SpinnerWheel = () => {
  return (
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-64 h-px my-8 bg-gray-400 border-0" />
      <span class="px-3 font-medium text-gray-400 bg-transparent left-1/2 ">
        <GiCartwheel className="text-2xl animate-pulse"/>
      </span>
      <hr class="w-64 h-px my-8 bg-gray-400 border-0" />
    </div>
  );
};
export default SpinnerWheel;
