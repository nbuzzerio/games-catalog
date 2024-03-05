# Game Catalog

## Description

A front-end UI for displaying games from the RAWG.io API. Features include filtering by platform and genre, sorting by different criteria, and searching for games.

## Installation

Run the following command to install dependencies:

```bash
npm install
```

## Usage

To use the project, you will need an API key from RAWG.io. Place your API key in a `.env` file in the root directory:

```
API_KEY=[API KEY]
API_URL=https://api.rawg.io/api
PORT=[PORT NUMBER]
```

Then, start the development server:

```bash
npm run dev
```

## Folder Structure

The project's folder structure is as follows:

- `src`
  - `assets`: Contains project assets such as images and fonts.
  - `components`: Contains React components used in the project.
  - `hooks`: Contains custom React hooks used in the project.
  - `services`: Contains services for interacting with the RAWG.io API.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
