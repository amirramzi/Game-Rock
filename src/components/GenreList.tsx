import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isloading, error } = useGenres();
  if (error) return null;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <Heading marginY={4} fontSize="2xl">
        Genres
      </Heading>
      {isloading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="3px">
            <HStack>
              <Image
                boxSize="46px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold " : "normal"}
                color={genre.id === selectedGenre?.id ? "lightBlue " : ""}
                variant="link"
                fontSize="md"
                whiteSpace="normal"
                textAlign="left">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
