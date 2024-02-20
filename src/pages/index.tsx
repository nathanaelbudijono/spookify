import * as React from "react";

import Layout from "@/components/ui/layout";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import QuickBar from "@/modules/home/quickbar";
import YourLibary from "@/modules/home/yourLibary";
import Header from "@/modules/header";
import PopularRadio from "@/modules/home/radio";
import PopularArtist from "@/modules/home/artist";
import FreshFinds from "@/modules/home/freshFinds";
import Popular from "@/modules/home/popular";
import Seo from "@/components/ui/seo";
import Play from "@/modules/play";
import Footer from "@/modules/footer";

export default function Home() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [panelSize, setPanelSize] = React.useState(82);

  const handleResize = (newSize: number) => {
    setPanelSize(newSize);
  };

  return (
    <main>
      <Seo templateTitle="Home" />
      <Layout className="h-screen p-2">
        <ResizablePanelGroup direction="vertical" autoSaveId="persistence">
          {/* First Horizontal Panel */}
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px]"
            autoSaveId="persistence"
          >
            <ResizablePanel
              defaultSize={18}
              className="bg-base-100 overflow-hidden rounded-md"
              collapsible={true}
              onCollapse={() => setIsCollapsed(!true)}
              onExpand={() => setIsCollapsed(!false)}
              collapsedSize={10}
              minSize={11}
              maxSize={55}
              style={{ overflow: "hidden" }}
            >
              <div className="p-2">
                <QuickBar isCollapsed={isCollapsed} />
                <YourLibary isCollapsed={isCollapsed} />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={panelSize}
              onResize={handleResize}
              style={{ overflow: "auto" }}
              className="bg-gradient-to-b from-base-200 to-base-100 rounded-md"
            >
              <Header />
              <div className="py-3 px-4 relative">
                <PopularRadio panelSize={panelSize} />
                <PopularArtist panelSize={panelSize} />
                <FreshFinds panelSize={panelSize} />

                <Footer />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>

          {/* Second Horizontal Panel */}
          <ResizablePanelGroup style={{ height: "15%" }} direction="horizontal">
            <ResizablePanel defaultSize={20} className="bg-base-100  py-3 px-4">
              <Play />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanelGroup>
      </Layout>
    </main>
  );
}
