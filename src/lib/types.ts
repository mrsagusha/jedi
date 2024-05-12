interface SlideItem {
  id: number;
  image: string;
  name: string;
}

interface Tab {
  id: number;
  name: string;
}

interface OperationFormData {
  name: string;
  email: string;
  message: string;
}

export type { SlideItem, Tab, OperationFormData };
