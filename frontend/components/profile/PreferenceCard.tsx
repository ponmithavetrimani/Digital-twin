import React from "react";

interface PreferenceCardProps {
  responseStyle?: string;
  language?: string;
  memoryEnabled?: boolean;
}

export default function PreferenceCard({
  responseStyle = "Balanced",
  language = "English",
  memoryEnabled = true,
}: PreferenceCardProps) {
  return (
    <div className="card flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        Preferences <span className="text-primary">Control</span>
      </h2>

      {/* Response Style */}
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">Response Style</p>
        <p className="font-medium">{responseStyle}</p>
      </div>

      {/* Language */}
      <div className="flex justify-between">
        <p className="text-gray-500 text-sm">Language</p>
        <p className="font-medium">{language}</p>
      </div>

      {/* Memory Toggle */}
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">Memory System</p>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            memoryEnabled
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {memoryEnabled ? "Enabled" : "Disabled"}
        </span>
      </div>
    </div>
  );
}