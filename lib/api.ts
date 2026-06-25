export interface SummaryStats {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

export interface SummarySales {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}

export interface Country {
  id: string;
  title: string;
}

export interface Category {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface Company {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/api/v1/${paths.join('/')}`;

const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

// export const getSummaryStats = (init?: RequestInit) => {
//   return sendRequest<SummaryStats>(buildUrl('summary-stats', '1'), init);
// };
//
// export const getSummarySales = (init?: RequestInit) => {
//   return sendRequest<SummarySales[]>(buildUrl('summary-sales'), init);
// };

export const getSummaryStats = async (
  init?: RequestInit,
): Promise<SummaryStats> => {
  // Замість fetch повертаємо фейковий об'єкт, бо такого ендпоінту нема на MockAPI
  return new Promise((resolve) =>
    resolve({
      promotions: 12,
      categories: 8,
      newCompanies: 4,
      activeCompanies: 25,
    }),
  );
};

//export const getSummarySales = async (
//  init?: RequestInit,
//): Promise<SummarySales[]> => {
// Повертаємо порожній або фейковий масив продажів
//  return new Promise((resolve) => resolve([]));
//};

export const getSummarySales = async (
  init?: RequestInit,
): Promise<SummarySales[]> => {
  return new Promise((resolve) =>
    resolve([
      {
        id: '1',
        companyId: '1',
        companyTitle: 'Costco',
        sold: 120,
        income: 4500,
      },
      {
        id: '2',
        companyId: '2',
        companyTitle: 'Sprout',
        sold: 85,
        income: 3200,
      },
    ]),
  );
};

//export const getCountries = (init?: RequestInit) => {
//  return sendRequest<Country[]>(buildUrl('countries'), init);
//};

export const getCountries = async (init?: RequestInit): Promise<Country[]> => {
  // Повертаємо локальний масив країн, щоб сторінка не падала в 500 помилку
  return new Promise((resolve) =>
    resolve([
      { id: '1', title: 'Canada' },
      { id: '2', title: 'USA' },
      { id: '3', title: 'Ukraine' },
      { id: '4', title: 'Italy' },
    ]),
  );
};

//export const getCategories = (init?: RequestInit) => {
//  return sendRequest<Category[]>(buildUrl('categories'), init);
//};

export const getCategories = async (
  init?: RequestInit,
): Promise<Category[]> => {
  return new Promise((resolve) =>
    resolve([
      { id: '1', title: 'Products' },
      { id: '2', title: 'Services' },
      { id: '3', title: 'IT' },
      { id: '4', title: 'Health' },
    ]),
  );
};

//export const getCompanies = (init?: RequestInit) => {
//  return sendRequest<Company[]>(buildUrl('companies'), init);
//};

export const getCompanies = async (init?: RequestInit): Promise<Company[]> => {
  // Повертаємо локальний масив компаній з потрібними ID категорій та країн
  return new Promise((resolve) =>
    resolve([
      {
        id: '1',
        title: 'Costco',
        description: 'Costco Wholesale Corporation',
        status: CompanyStatus.Active,
        joinedDate: '2023-01-01',
        hasPromotions: true,
        categoryId: '1', // Збігається з "Products"
        categoryTitle: 'Products',
        countryId: '2', // Збігається з "USA"
        countryTitle: 'USA',
      },
      {
        id: '2',
        title: 'Sprout',
        description: 'Sprout Social Inc',
        status: CompanyStatus.Active,
        joinedDate: '2023-02-15',
        hasPromotions: true,
        categoryId: '2', // Збігається з "Services"
        categoryTitle: 'Services',
        countryId: '1', // Збігається з "Canada"
        countryTitle: 'Canada',
      },
    ]),
  );
};

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<Company>(buildUrl('companies', id), init);
};

//export const getPromotions = async (
//  params: Record<string, string> = {},
//  init?: RequestInit,
//) => {
//  return sendRequest<Promotion[]>(
//    `${buildUrl('promotions')}?${stringifyQueryParams(params)}`,
//    init,
//  );
//};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit,
): Promise<Promotion[]> => {
  // Повертаємо масив промоакцій локально, щоб третій слот знизу нарешті завантажився
  return new Promise((resolve) =>
    resolve([
      {
        id: '1',
        title: 'Summer Sale',
        description: 'Get 20% off on all products',
        discount: 20,
        companyId: '1',
        companyTitle: 'Costco',
      },
      {
        id: '2',
        title: 'Partner Discount',
        description: 'Special offer for IT services',
        discount: 15,
        companyId: '2',
        companyTitle: 'Sprout',
      },
    ]),
  );
};
