import { FaLongArrowAltRight } from "react-icons/fa";
import SmallSection from "./SmallSection";
export default function Section3() {
  return (
    <section className="h-1/3 flex gap-4">
      <div className="w-1/2 h-full flex flex-col gap-2">
        <div className="flex gap-4 pt-5">
          <h2>Top choke points</h2>
          <button className="text-xs">View all</button>
        </div>
        <div className="w-full h-full bg-tertiaryBg rounded flex p-3 px-8 items-center gap-5">
          <div className="w-full">
            <h2>
              Top 3 Entities which are part of the most attack vectors to
              critical assets that affect 43.1% of critical assets (267/619)
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-400">
                  <td className="w-[60%] py-1 px-3">Entity name</td>
                  <td className="w-[20%] py-1 px-4">Critical asset</td>
                  <td className="w-[20%] py-1 px-4">Trend</td>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">Hezi nagar</td>
                  <td className="py-1 flex items-center justify-end gap-2 px-4">
                    213
                    <div className="flex">
                      <div className="p-1 py-1 bg-redBg rounded-s-sm"></div>
                      <div className="p-1 py-1 bg-redBg"></div>
                      <div className="p-1 py-1 bg-redBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg rounded-e-sm"></div>
                    </div>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4" />
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">Compute Engine default service account</td>
                  <td className="py-1 flex items-center justify-end gap-2 px-4">
                    141
                    <div className="flex rounded">
                      <div className="p-1 py-1 bg-redBg rounded-s-sm"></div>
                      <div className="p-1 py-1 bg-redBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg rounded-e-sm"></div>
                    </div>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4" />
                  </td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-1 px-4">gcppocsa</td>
                  <td className="py-1 flex items-center justify-end gap-2 px-4">
                    64
                    <div className="flex rounded">
                      <div className="p-1 py-1 bg-redBg rounded-s-sm"></div>
                      <div className="p-1 py-1 bg-secondaryBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg"></div>
                      <div className="p-1 py-1 bg-secondaryBg rounded-e-sm"></div>
                    </div>
                  </td>
                  <td className="py-1 px-4">
                    <FaLongArrowAltRight className="w-4 h-4" />
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
      <div className="w-1/2 h-full rounded flex flex-col gap-2">
        <div className="flex gap-4 pt-5">
          <h2>Top impacting attack techniques</h2>
          <button className="text-xs">View all</button>
        </div>
        <div className="w-full h-full flex gap-4">
          <SmallSection affected={10} critical={45}/>
          <SmallSection affected={39} critical={31}/>
          <SmallSection affected={9} critical={29}/>
        </div>
      </div>
    </section>
  );
}
