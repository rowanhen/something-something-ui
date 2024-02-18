import { FC, ReactNode, createContext, useContext } from "react";

interface PortalContextValue {
  portalRoot: HTMLElement | null;
}

const PortalContext = createContext<PortalContextValue>({ portalRoot: null });

export const PortalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const portalRoot =
    document.getElementById("portal-root") || document.createElement("div");

  if (!document.getElementById("portal-root")) {
    portalRoot.id = "portal-root";
    document.body.appendChild(portalRoot);
  }

  return (
    <PortalContext.Provider value={{ portalRoot }}>
      {children}
    </PortalContext.Provider>
  );
};

export const usePortal = () => {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error("usePortal must be used within a PortalProvider");
  }
  return context;
};
