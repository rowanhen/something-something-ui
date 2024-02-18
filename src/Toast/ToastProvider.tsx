import {
  FC,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface ToastData {
  id: string;
  content: ReactNode;
}

interface ToastContextState {
  addToast: (content: ReactNode, id: string) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextState | undefined>(undefined);

export const ToastProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (content: ReactNode, id: string) => {
    setToasts((prevToasts) => [...prevToasts.slice(-2), { id, content }]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {toasts.map((toast) => toast.content)}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
