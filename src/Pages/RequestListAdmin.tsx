import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

type InfoRent = {
  id?: string;
  Area?: string;
  Locaiton?: { placeName: string };
  State?: string;
  Number?: string;
  Name?: string;
  Underprocess?: string;
  Approved?: string;
  Rejected?: string;
};
function RequestListAdmin() {
  const [Info, getInfo] = React.useState<InfoRent[]>([]);

  const [MyState, setMyState] = React.useState<InfoRent>({
    State: "New",
  });

  React.useEffect(() => {
    axios
      .get("https://64f37a17edfa0459f6c69e5b.mockapi.io/Rent")
      .then((res) => {
        getInfo(res.data);
      });
  }, []);

  let cunt = 1;

  const nav = useNavigate();
  const newState = localStorage.getItem("id");
  const UpdateState = () => {
    axios
      .put(`https://64f37a17edfa0459f6c69e5b.mockapi.io/Rent/${newState}`, {
        State: MyState.State,
      })
      .then(() => {
        nav("/RequestListAdmin");
      });
  };

  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="bg-white w-full h-1"></div>
        <div className="flex-1 flex flex-wrap">
          <div className="p-2 bg-[#0C0A3E] w-full md:w-60 flex flex-col md:flex ">
            <nav>
              <a className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200">
                <i className="fas fa-home mr-2"></i>Profile
              </a>
              <a
                className="block  py-2.5 px-4 my-4 rounded transition duration-200  bg-white text-[#0C0A3E]"
                href="#"
              >
                <i className="fas fa-users mr-2"></i>Request history
              </a>
            </nav>
          </div>
          <div className="flex-1 p-4 lg:w-full md:w-1/2 ">
            <div className=" bg-white pb-4 shadow rounded-lg lg:w-full md:w-full w-auto">
              <table className="lg:w-full table-auto text-sm mb-4 md:w-1/2 w-[10]">
                <thead className="bg-yellow-200 rounded-t-lg lg:w-full md:w-full w-auto">
                  <tr className="text-sm leading-normal w-[20vw] lg:w-full md:w-1/2">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase  text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm">
                      ID
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">
                      House address
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">
                      Status
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">
                      Phone
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-[.4rem] text-grey-light border-b border-grey-light lg:text-sm md:text-sm ">
                      Area of roof
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Info.map((item) => {
                    return (
                      <tr className="hover:bg-grey-lighter" key={item.id}>
                        <td className="py-2 px-4 border-b border-grey-light border border-dashed  rounded-full h-10 w-10 text-[.4rem] lg:text-sm md:text-sm">
                          #{cunt++}
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">
                          {item.Locaiton.placeName}
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">
                          <select
                            name=""
                            id=""
                            onClick={() => {
                              localStorage.setItem("id", String(item.id));
                              UpdateState();
                              console.log(MyState);
                              
                            }}
                            onChange={(e) => {
                              setMyState({ ...MyState, State: e.target.value });
                            }}
                          >
                            <option
                              onChange={() => {
                                localStorage.setItem("id", String(item.State));
                              }}
                            >
                             {item.State}
                            </option>

                            <option
                              onChange={() => {
                                localStorage.setItem("id", String(item.Underprocess));
                              }}
                              // value={MyState.Underprocess}
                            >
                              Underprocess
                            </option>

                            <option
                              onChange={() => {
                                localStorage.setItem("id", String(item.Approved));
                              }}
                              // value={MyState.Approved}
                            >
                              Approved
                            </option>

                            <option
                              onChange={() => {
                                localStorage.setItem("id", String(item.Rejected));
                              }}
                              // value={MyState.Rejected}
                            >
                             Rejected
                            </option>
                            
                          </select>
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">
                          {item.Number}
                        </td>
                        <td className="py-2 px-4 border-b border-grey-light border-r text-[.4rem] lg:text-sm md:text-sm">
                          {item.Area}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-white"></div>
    </>
  );
}

export default RequestListAdmin;
