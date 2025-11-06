import { Button } from "antd";
import { CircleCheckBig, Clock4, FileText, Plus } from "lucide-react";
import React from "react";

const Scratch = () => {
  return (
    <div className="flex flex-col px-8 pt-4 gap-6">
      <div className="gap-1 flex flex-col">
        <h1 className="text-4xl font-bold">Welcome, User!</h1>
        <span className="text-xl">
          Manage your service requests and track their status
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="w-full p-4 border-4 border-gray-300 rounded-2xl shadow-lg bg-white flex flex-col gap-2">
          <span className="text-lg flex gap-2">
            <FileText />
            Total Requests
          </span>
          <span className="text-5xl font-bold text-[#981F37]">3</span>
        </div>
        <div className="w-full p-4 border-4 border-gray-300 rounded-2xl shadow-lg bg-white flex flex-col gap-2">
          <span className="text-lg flex gap-2">
            <Clock4 />
            Pending
          </span>
          <span className="text-5xl font-bold text-yellow-400">3</span>
        </div>
        <div className="w-full p-4 border-4 border-gray-300 rounded-2xl shadow-lg bg-white flex flex-col gap-2">
          <span className="text-lg flex gap-2">
            <CircleCheckBig />
            Approved
          </span>
          <span className="text-5xl font-bold text-green-500">3</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">My Requests</h1>
          <span>View and track all your service requests</span>
        </div>
        <Button type="primary" className="py-5">
          <Plus />
          New Request
        </Button>
      </div>

      <div className="bg-green-400">hi</div>
    </div>
  );
};

export default Scratch;
