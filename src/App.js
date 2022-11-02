import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

export default function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark': ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* SETTINGS FLOATING BUTTON  */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                className="text-3xl p-3 hover:drop-hover-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* SIDEBAR */}
          {activeMenu ? (
            <div className="w-72 ease-in-out duration-200 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 ease-in-out duration-200 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* NAVIGATION BAR */}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            {/* ROUTES */}
            <div className='ease-in-out duration-200'>

              {/* THEME SETTINGS COMPONENT */}
              {themeSettings && <ThemeSettings />}
              

              <Routes>

                {/* DASHBOARD  */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* PAGES */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* APPS */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* CHARTS */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
