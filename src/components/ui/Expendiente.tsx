import type { FC } from "react";

interface ExpendienteProps {
  color?: string;
}
const Expendiente: FC<ExpendienteProps> = ({ color = "green" }) => {
  return (
    <article
      className={`rounded-b-2xl bg-${color}-300 shadow-md rounded-tr-2xl relative`}
    >
      <div
        className={`absolute rounded-tl-2xl -top-10 left-10 bg-${color}-500 p-4 rounded-tr-2xl text-white`}
      >
        EXP-DEMO-025
      </div>

      <div
        className={`flex items-center justify-between bg-${color}-500 rounded-tr-2xl p-4`}
      >
        <div className="flex ">
          <div
            className={`rounded-4xl p-4 bg-${color}-500 text-white border-gray-500  border-2`}
          >
            JD
          </div>
          <div className="flex flex-col gap-2 ml-5">
            <h5 className="font-bold text-white">Jhon Doe</h5>
            <p className="text-gray-50">Odontologia</p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
        </svg>
      </div>
      <div className="p-4 m-2 space-y-3">
        <div className="flex  items-center gap-2">
          <svg
            className="text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              fill="currentColor"
              d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
            />
          </svg>
          <p>21 años</p>
          <p>Masculino</p>
        </div>
        <div className="flex  items-center gap-2">
          <svg
            className="text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              fill="currentColor"
              d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1"
            />
          </svg>

          <p>1234567981</p>
        </div>
        <div className="flex  items-center gap-2">
          <svg
            className="text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              fill="currentColor"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
            />
          </svg>

          <p>jhonDoe@gmail.com</p>
        </div>

        <span
          className={`font-bold text-${color}-700 bg-${color}-400 p-2 rounded-2xl mt-4 inline-block`}
        >
          Odontologia
        </span>

        <hr />
        <div className="flex gap-4">
          <button
            className={`bg-${color}-500 p-4 rounded-2xl text-white flex justify-center items-center gap-1 basis-md cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 0h24v24H0z"
                fill="none"
              />
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M19 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2V4a2 2 0 0 1 2-2zm-4 6H5v12h10zm-5 7a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zm9-11H9v2h6a2 2 0 0 1 2 2v8h2zm-7 7a1 1 0 0 1 .117 1.993L12 13H8a1 1 0 0 1-.117-1.993L8 11z"
                />
              </g>
            </svg>
            Ver expediente
          </button>

          <button className="bg-white border-blue-400 rounded-2xl p-4 border-2 cursor-pointer">
            <svg
              className="text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 0h24v24H0z"
                fill="none"
              />
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5z"
                />
              </g>
            </svg>
          </button>
          <button className="bg-white border-gray-400 rounded-2xl p-4 border-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 0h24v24H0z"
                fill="none"
              />
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
              </g>
            </svg>
          </button>
          <button className="bg-white border-red-400 rounded-2xl p-4 border-2 cursor-pointer">
            <svg
              className="text-red-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path
                fill="currentColor"
                d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"
              />
              <path
                fill="currentColor"
                d="M9 10h2v8H9zm4 0h2v8h-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Expendiente;
