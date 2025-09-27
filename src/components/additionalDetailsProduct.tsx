import React, { useState } from "react";
import "@/assets/sass/_add-details-product.scss";

type Tab = {
  key: string;
  label: string;
  content: React.ReactNode;
};

interface AdditionalDetailsProps {
  tabs: Tab[];
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div className="additional-details my-5 text-center">
      <ul className="nav nav-tabs justify-content-center">
        {tabs.map((tab) => (
          <li key={tab.key} className="nav-item">
            <button
              className={`nav-link ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content mt-4 mb-3">
        {tabs.map(
          (tab) =>
            activeTab === tab.key && (
              <div key={tab.key} className="tab-pane active">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default AdditionalDetails;
