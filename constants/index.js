export const types = {
    CHECKBOX: 'checkbox',
    DATE: 'date',
    EMAIL: 'email',
    INT: 'int',
    INT_ALLOW_ZERO: 'intAllowZero',
    LABEL: 'label',
    LINE: 'line',
    MASKED_DATE: 'maskedDate',
    MONEY: 'money',
    NUMBER: 'number',
    NUMBER_FORMAT: 'numberFormat',
    NUMBER_WITHOUT_LABEL: 'numberWithoutLabel',
    PERCENTAGE: 'percentage',
    RADIO: 'radio',
    SELECT: 'select',
    SELECT_DISABLED: 'selectDisabled',
    SELECT_MULTIPLE: 'selectMultiple',
    SELECT_SPECIAL_OPTIONS: 'selectSpecialOptions',
    SPACE: 'space',
    SUM: 'sum',
    TEXT: 'text',
    TEXT_AREA: 'textarea',
    TITLE: 'title',
    YEAR: 'Year',
    YES_NO: 'YesNoQuestion'
};

export const operators = [
    {value: 'eq', label: 'igual a', valueRequired: true},
    {value: 'ne', label: 'distinto de', valueRequired: true},
    {value: 'gt', label: 'mayor a', valueRequired: true},
    {value: 'gte', label: 'mayor o igual a', valueRequired: true},
    {value: 'lt', label: 'menor a', valueRequired: true},
    {value: 'lte', label: 'menor o igual a', valueRequired: true},
    {value: 'eq', label: 'igual a', valueRequired: true},
    {value: 'exists', label: 'fue respondida', valueRequired: false}
];
