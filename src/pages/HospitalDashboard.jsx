import React, { useState } from "react";
import { Sidebar, Dropdown, Avatar, Button, Navbar } from "flowbite-react";

const HospitalDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        aria-label="الشريط الجانبي لإدارة المستشفى"
        className="w-64 bg-gradient-to-b from-blue-600 to-blue-800  shadow-lg"
      >
        <div className="p-6 text-2xl font-semibold ">إدارة المستشفى</div>
        <ul className="space-y-3">
          <li>
            <Button
              onClick={() => handleTabChange("dashboard")}
              className={`w-full text-right ${
                activeTab === "dashboard" ? "bg-blue-700" : "bg-transparent"
              }`}
            >
              لوحة التحكم
            </Button>
          </li>
          <li>
            <Button
              onClick={() => handleTabChange("patients")}
              className={`w-full text-right ${
                activeTab === "patients" ? "bg-blue-700" : "bg-transparent"
              }`}
            >
              إدارة المرضى
            </Button>
          </li>
          <li>
            <Button
              onClick={() => handleTabChange("users")}
              className={`w-full text-right ${
                activeTab === "users" ? "bg-blue-700" : "bg-transparent"
              }`}
            >
              إدارة المستخدمين
            </Button>
          </li>
          <li>
            <Button
              onClick={() => handleTabChange("appointments")}
              className={`w-full text-right ${
                activeTab === "appointments" ? "bg-blue-700" : "bg-transparent"
              }`}
            >
              المواعيد
            </Button>
          </li>
        </ul>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Top Bar */}
        <Navbar fluid rounded className="shadow-md mb-6">
          <Navbar.Brand href="/">
            <img
              src="https://via.placeholder.com/40"
              alt="Logo"
              className="mr-3"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-800">
              لوحة إدارة المستشفى
            </span>
          </Navbar.Brand>
          <div className="flex items-center gap-4">
            <Dropdown label={<Avatar rounded />}>
              <Dropdown.Header>
                <span className="block text-sm">المسؤول</span>
                <span className="block truncate text-sm font-medium">
                  admin@example.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>الإعدادات</Dropdown.Item>
              <Dropdown.Item>تسجيل الخروج</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar>

        {/* Page Content */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {activeTab === "dashboard" && (
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                نظرة عامة على لوحة التحكم
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 bg-indigo-100 rounded-lg text-center shadow">
                  <p className="text-lg font-medium">إجمالي المرضى</p>
                  <p className="text-3xl font-bold text-indigo-800">350</p>
                </div>
                <div className="p-5 bg-green-100 rounded-lg text-center shadow">
                  <p className="text-lg font-medium">مواعيد اليوم</p>
                  <p className="text-3xl font-bold text-green-800">120</p>
                </div>
                <div className="p-5 bg-red-100 rounded-lg text-center shadow">
                  <p className="text-lg font-medium">العمليات المعلقة</p>
                  <p className="text-3xl font-bold text-red-800">10</p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "patients" && (
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                إدارة المرضى
              </h2>
              <p>
                إدارة بيانات المرضى، إضافة مريض جديد، تحديث المعلومات، وغيرها.
              </p>
            </div>
          )}
          {activeTab === "users" && (
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                إدارة المستخدمين
              </h2>
              <p>إدارة طاقم المستشفى، إضافة مستخدمين جدد، وتحديث الصلاحيات.</p>
            </div>
          )}
          {activeTab === "appointments" && (
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                إدارة المواعيد
              </h2>
              <p>
                عرض المواعيد القادمة، إعادة جدولة المواعيد، أو إلغاء المواعيد.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;
