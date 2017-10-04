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
    YES_NO: 'YES_NO'
};

export const operators = [
    {value: 'operator.EQUALS', label: 'igual a', valueRequired: true},
    {value: 'operator.NOT_EQUALS', label: 'distinto de', valueRequired: true},
    {value: 'operator.GREATER_THAN', label: 'mayor a', valueRequired: true},
    {value: 'operator.GREATER_OR_EQUAL_THAN', label: 'mayor o igual a', valueRequired: true},
    {value: 'operator.LESS_THAN', label: 'menor a', valueRequired: true},
    {value: 'operator.LESS_OR_EQUAL_THAN', label: 'menor o igual a', valueRequired: true},
    {value: 'operator.EXISTS', label: 'fue respondida', valueRequired: false}
];
