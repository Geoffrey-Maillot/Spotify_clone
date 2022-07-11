interface Props {
  children?: string;
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl2' | 'xl3';
  truncate?: boolean;
  color?:
    | 'white'
    | 'gray'
    | 'mediumGray'
    | 'lightGray'
    | 'veryLightGray'
    | 'blue'
    | 'lightWhite'
    | 'dark';
}

const fontSize: { [x: string]: string } = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl2: 'text-2xl',
  xl3: 'text-3xl',
};

const colors: { [x: string]: string } = {
  white: 'text-white',
  lightWhite: 'text-white/70',
  gray: 'text-gray-300',
  mediumGray: 'text-gray-150',
  lightGray: 'text-gray-200',
  veryLightGray: 'text-gray-100',
  blue: 'text-blue-100',
  dark: 'text-dark-400',
};

//Todo: Utiliser le truncate de tailwind pour mettre les 3 petits points quand un texte dépasse.  Voir sur Spotify, seul la 2nd ligne dépasse...

const Paragraph = ({
  children,
  label,
  size = 'sm',
  color = 'lightGray',
  truncate = true
}: Props) => (
  <p
    className={`font-circularBook ${truncate && 'line-clamp'} ${colors[color]} ${fontSize[size]}`}
  >
    {label ? label : children}
  </p>
);

export default Paragraph;
