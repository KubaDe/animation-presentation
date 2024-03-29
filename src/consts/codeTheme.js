import theme from './theme'

export default {
  plain: {
    color: theme.colors.grey100,
    backgroundColor: theme.colors.grey800,
    height: '100%',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'hsl(30, 20%, 50%)'
      }
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: {
        color: theme.colors.green,
      }
    },
    {
      types: ['attr-name', 'string', 'char', 'builtin', 'insterted'],
      style: {
        color: 'hsl(75, 70%, 60%)'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css'
      ],
      style: {
        color: 'hsl(40, 90%, 60%)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90'
      }
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: 'hsl(350, 40%, 70%)'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: '0.7'
      }
    }
  ]
};
