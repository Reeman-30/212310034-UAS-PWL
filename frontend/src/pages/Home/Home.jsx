import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/message/MessageContainer";

export default function Home() {
  return (
    <div className="card bg-slate-700 w-4/5 h-auto shadow-xl">
      <div className="flex flex-row card-body">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}
