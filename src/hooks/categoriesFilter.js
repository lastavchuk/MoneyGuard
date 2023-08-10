export const useCategoriesType = value => {
    const expenseCategories = value.filter(
      category => category.type === 'EXPENSE'
    );
    const incomeCategories = value.filter(category => category.type === 'INCOME');
    return [expenseCategories, incomeCategories];
  };
  