interface Props {
  children?: string;
  label?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl2' | 'xl3';
  color?: 'white' | 'gray' | 'lightGray';
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
  gray: 'text-gray-300',
  lightGray: 'text-gray-200',
};

//Todo: Utiliser le truncate de tailwind pour mettre les 3 petits points quand un texte dépasse.  Voir sur Spotify, seul la 2nd ligne dépasse...

const Paragraph = ({
  children,
  label,
  size = 'sm',
  color = 'lightGray',
}: Props) => (
  <p className={`font-circularBook ${colors[color]} ${fontSize[size]}`}>
    {label ? label : children}
  </p>
);

export default Paragraph;
