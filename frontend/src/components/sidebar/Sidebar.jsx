import React from "react";
import SearchBar from "./SearchBar";
import ChatContainer from "./ChatContainer";

import { FaDoorOpen } from "react-icons/fa";
import useLogout from "../../hooks/useLogout";

export default function Sidebar() {
  const { loading, logout } = useLogout();

  return (
    <div className="">
      <SearchBar />

      <div className="divider"></div>

      <ChatContainer />

      <div className="btn btn-sm py-2">
        <FaDoorOpen onClick={logout} />
      </div>
    </div>
  );
}
