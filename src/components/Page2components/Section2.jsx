import { BsHexagonFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Section2() {
  return (
    <section className="h-1/4 flex flex-col gap-2">
      <div className="flex gap-4">
        <div className="flex gap-4 w-1/2">
          <h2>Scenarios at high risk</h2>
          <button className="text-xs">View all</button>
        </div>
        <div className="flex gap-4 w-1/2">
          <h2>Critical assets at risk</h2>
          <button className="text-xs">View all</button>
        </div>
      </div>
      <div className="flex gap-4 h-full">
        <div className="w-1/2 h-full bg-tertiaryBg rounded p-2 px-8 flex flex-col justify-center gap-2">
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="relative flex items-center w-12 h-12 justify-center">
                <BsHexagonFill className="absolute w-12 h-12 rotate-90 text-redBg" />
                <span className="text-tertiaryBg z-10 text-xl">F</span>
              </div>
              <h2 className="text-sm">
                {"(22) - On - Prem Risk | Workstations > DC"}
              </h2>
            </div>
            <div className="w-40 h-7 bg-blue-800"></div>
            <button className="p-2 border rounded">Take action</button>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="relative flex items-center w-12 h-12 justify-center">
                <BsHexagonFill className="absolute w-12 h-12 rotate-90 text-redBg" />
                <span className="text-tertiaryBg z-10 text-xl">F</span>
              </div>
              <h2 className="text-sm">
                {"(22) - On - Prem Risk | Workstations > DC"}
              </h2>
            </div>
            <div className="w-40 h-7 bg-blue-800"></div>
            <button className="p-2 border rounded">Take action</button>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="relative flex items-center w-12 h-12 justify-center">
                <BsHexagonFill className="absolute w-12 h-12 rotate-90 text-redBg" />
                <span className="text-tertiaryBg z-10 text-xl">F</span>
              </div>
              <h2 className="text-sm">
                {"(22) - On - Prem Risk | Workstations > DC"}
              </h2>
            </div>
            <div className="w-40 h-7 bg-blue-800"></div>
            <button className="p-2 border rounded">Take action</button>
          </div>
        </div>
        <div className="w-1/2 h-full bg-tertiaryBg rounded flex p-3 px-8 items-center gap-5">
          <div className="w-full">
            <h2>
              Critical assets compromised by attack vectors with the lowest
              average complexity
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-400">
                  <td className="w-[60%] py-1 px-3">Critical asset name</td>
                  <td className="w-[20%] py-1 px-4">Avg. complexity</td>
                  <td className="w-[20%] py-1 px-4">Trend</td>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">Raymond Butcher</td>
                  <td className="py-1 flex items-center justify-end gap-2 px-4">
                    2
                    <div className="flex gap-1">
                      <div className="p-1 py-[0.4rem] rounded-sm bg-redBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                    </div>
                    <span className="text-redBg">Low</span>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4"/>
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">testing</td>
                  <td className="py-1 flex items-center gap-2 px-4 justify-end">
                    2
                    <div className="flex gap-1">
                      <div className="p-1 py-[0.4rem] rounded-sm bg-redBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                    </div>
                    <span className="text-redBg">Low</span>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4"/>
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">ATM-Jump-Server</td>
                  <td className="py-1 flex items-center gap-2 px-4 justify-end">
                    2.11
                    <div className="flex gap-1">
                      <div className="p-1 py-[0.4rem] rounded-sm bg-redBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                      <div className="p-1 py-[0.4rem] rounded-sm bg-secondaryBg"></div>
                    </div>
                    <span className="text-redBg">Low</span>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 border-[5px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
