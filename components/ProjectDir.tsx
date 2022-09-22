import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
export default function About() {
  return (
    <section className="ml-[10%] mt-[5%] relative text-[#cdd6f4]" id="about">
      <div className="flex flex-row mb-[3%]">
        <h1 className="relative font-medium text-4xl"> / project directory</h1>
        <div className="pl-4 flex flex-col justify-center w-[50%]">
          <hr className="border-solid border-2 border-[#313244] min-w-max" />
          <h1 className="relative font-medium text-2xl text-[#313244]">
            looking for a specific one?
          </h1>
        </div>
      </div>
      <div className="flex flex-row mb-[1%]">
        <div
          className="w-96 rounded-l-3xl mr-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 30, 46, 0.75), rgb(30, 30, 46)) , url('https://picsum.photos/536/354')",
          }}
        ></div>
        <div className="-translate-x-96">
          <div className="flex flex-col align-items-center  max-w-2xl p-6 rounded-3xl">
            <div className="flex flex-row mb-[1%] items-center">
              <h1 className="relative font-medium text-3xl mr-[1%]">
                {" "}
                sample project
              </h1>

              <div className="pl-4 flex flex-col justify-center w-[50%]">
                <h1 className="relative font-medium text-2xl text-[#313244]">
                  sample project type
                </h1>
              </div>
            </div>
            <p>
              Quam et aut eum dolores dolore. Quia sed laboriosam rerum
              voluptatem dignissimos. Sequi tempora inventore perferendis. Ut et
              ut dolores sint. Tempora nesciunt consequatur id sunt vero.
            </p>
            <div className="flex flex-row mt-2">
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">sample label</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">html</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">css</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">react</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">open source</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-96 flex flex-col justify-center">
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              project website
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              chrome web store
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">github repo</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[1%]">
        <div
          className="w-96 rounded-l-3xl mr-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 30, 46, 0.75), rgb(30, 30, 46)) , url('https://picsum.photos/536/354')",
          }}
        ></div>
        <div className="-translate-x-96">
          <div className="flex flex-col align-items-center  max-w-2xl p-6 rounded-3xl">
            <div className="flex flex-row mb-[1%] items-center">
              <h1 className="relative font-medium text-3xl mr-[1%]">
                {" "}
                sample project
              </h1>

              <div className="pl-4 flex flex-col justify-center w-[50%]">
                <h1 className="relative font-medium text-2xl text-[#313244]">
                  sample project type
                </h1>
              </div>
            </div>
            <p>
              Quam et aut eum dolores dolore. Quia sed laboriosam rerum
              voluptatem dignissimos. Sequi tempora inventore perferendis. Ut et
              ut dolores sint. Tempora nesciunt consequatur id sunt vero.
            </p>
            <div className="flex flex-row mt-2">
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">sample label</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">html</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">css</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">react</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">open source</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-96 flex flex-col justify-center">
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              project website
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              chrome web store
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">github repo</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[1%]">
        <div
          className="w-96 rounded-l-3xl mr-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 30, 46, 0.75), rgb(30, 30, 46)) , url('https://picsum.photos/536/354')",
          }}
        ></div>
        <div className="-translate-x-96">
          <div className="flex flex-col align-items-center  max-w-2xl p-6 rounded-3xl">
            <div className="flex flex-row mb-[1%] items-center">
              <h1 className="relative font-medium text-3xl mr-[1%]">
                {" "}
                sample project
              </h1>

              <div className="pl-4 flex flex-col justify-center w-[50%]">
                <h1 className="relative font-medium text-2xl text-[#313244]">
                  sample project type
                </h1>
              </div>
            </div>
            <p>
              Quam et aut eum dolores dolore. Quia sed laboriosam rerum
              voluptatem dignissimos. Sequi tempora inventore perferendis. Ut et
              ut dolores sint. Tempora nesciunt consequatur id sunt vero.
            </p>
            <div className="flex flex-row mt-2">
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">sample label</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">html</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">css</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">react</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">open source</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-96 flex flex-col justify-center">
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              project website
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              chrome web store
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">github repo</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[1%]">
        <div
          className="w-96 rounded-l-3xl mr-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 30, 46, 0.75), rgb(30, 30, 46)) , url('https://picsum.photos/536/354')",
          }}
        ></div>
        <div className="-translate-x-96">
          <div className="flex flex-col align-items-center  max-w-2xl p-6 rounded-3xl">
            <div className="flex flex-row mb-[1%] items-center">
              <h1 className="relative font-medium text-3xl mr-[1%]">
                {" "}
                sample project
              </h1>

              <div className="pl-4 flex flex-col justify-center w-[50%]">
                <h1 className="relative font-medium text-2xl text-[#313244]">
                  sample project type
                </h1>
              </div>
            </div>
            <p>
              Quam et aut eum dolores dolore. Quia sed laboriosam rerum
              voluptatem dignissimos. Sequi tempora inventore perferendis. Ut et
              ut dolores sint. Tempora nesciunt consequatur id sunt vero.
            </p>
            <div className="flex flex-row mt-2">
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">sample label</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">html</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">css</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">react</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">open source</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-96 flex flex-col justify-center">
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              project website
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              chrome web store
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">github repo</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[1%]">
        <div
          className="w-96 rounded-l-3xl mr-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 30, 46, 0.75), rgb(30, 30, 46)) , url('https://picsum.photos/536/354')",
          }}
        ></div>
        <div className="-translate-x-96">
          <div className="flex flex-col align-items-center  max-w-2xl p-6 rounded-3xl">
            <div className="flex flex-row mb-[1%] items-center">
              <h1 className="relative font-medium text-3xl mr-[1%]">
                {" "}
                sample project
              </h1>

              <div className="pl-4 flex flex-col justify-center w-[50%]">
                <h1 className="relative font-medium text-2xl text-[#313244]">
                  sample project type
                </h1>
              </div>
            </div>
            <p>
              Quam et aut eum dolores dolore. Quia sed laboriosam rerum
              voluptatem dignissimos. Sequi tempora inventore perferendis. Ut et
              ut dolores sint. Tempora nesciunt consequatur id sunt vero.
            </p>
            <div className="flex flex-row mt-2">
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">sample label</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">html</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">css</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">react</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">open source</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-96 flex flex-col justify-center">
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              project website
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              chrome web store
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">github repo</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-row mb-[1%]">
        <div
          className="w-96 rounded-l-3xl mr-2"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(30, 30, 46, 0.75), rgb(30, 30, 46)) , url('https://picsum.photos/536/354')",
          }}
        ></div>
        <div className="-translate-x-96">
          <div className="flex flex-col align-items-center  max-w-2xl p-6 rounded-3xl">
            <div className="flex flex-row mb-[1%] items-center">
              <h1 className="relative font-medium text-3xl mr-[1%]">
                {" "}
                sample project
              </h1>

              <div className="pl-4 flex flex-col justify-center w-[50%]">
                <h1 className="relative font-medium text-2xl text-[#313244]">
                  sample project type
                </h1>
              </div>
            </div>
            <p>
              Quam et aut eum dolores dolore. Quia sed laboriosam rerum
              voluptatem dignissimos. Sequi tempora inventore perferendis. Ut et
              ut dolores sint. Tempora nesciunt consequatur id sunt vero.
            </p>
            <div className="flex flex-row mt-2">
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">sample label</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">html</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">css</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">react</span>
              </div>
              <div className="border border-[#a6adc8] rounded-md bg-[#181825] mr-2">
                <span className="text-[#a6adc8] px-3">open source</span>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-x-96 flex flex-col justify-center">
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              project website
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">
              chrome web store
            </h1>
          </div>
          <div className="flex flex-row mb-[1%] items-center">
            <FiExternalLink />
            <h1 className="relative font-medium text-sm mx-2">github repo</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
