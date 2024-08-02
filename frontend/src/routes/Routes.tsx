import { BrowserRouter, Routes as AppRotes, Route } from "react-router-dom";
import { MainLayout, Page } from "@/components";

export const Rotes = () => {
  return (
    <BrowserRouter>
      <AppRotes>
        <Route path='/' element={<MainLayout />}>
          <Route
            path='lagerverwaltung'
            element={<Page id='lagerverwaltung' heading='Lagerverwaltung' />}
          />
          <Route path='dashboard' element={<Page id='dashboard' heading='Dashboard' />} />
          <Route path='banking' element={<Page id='banking' heading='Banking' />} />
          <Route path='telefonie' element={<Page id='telefonie' heading='Telefonie' />} />
          <Route path='accounting' element={<Page id='accounting' heading='Accounting' />} />
          <Route path='verkauf' element={<Page id='verkauf' heading='Verkauf' />} />
          <Route path='statistik' element={<Page id='statistik' heading='Statistik' />} />
          <Route path='post-office' element={<Page id='post-office' heading='Post Office' />} />
          <Route
            path='administration'
            element={<Page id='administration' heading='Administration' />}
          />
          <Route path='help' element={<Page id='help' heading='Help' />} />
          <Route path='warenbestand' element={<Page id='warenbestand' heading='Warenbestand' />} />
          <Route
            path='auswahllisten'
            element={<Page id='auswahllisten' heading='Auswahllisten' />}
          />
          <Route path='einkauf' element={<Page id='einkauf' heading='Einkauf' />} />
          <Route path='rechn' element={<Page id='rechn' heading='Rechn' />} />
        </Route>
      </AppRotes>
    </BrowserRouter>
  );
};
