## Channels recommended from Twitch - Scraper

This is a simple project to scrape the channels recommended from Twitch.

### How to run

1. Clone the repository
```bash
git clone
```

2. Install the dependencies
```bash
pnpm install
```

3. Set the environment variables in a `.env` file. You can use the `.env.example` file as a template.
```bash
create .env
```

4. Run the script
```bash
pnpm start
```

### Environment variables

- `URL`: The URL to scrape.
- `SELECTOR`: The CSS selector to use to get the channels.

### Dependencies

- `Pupeeteer`: To scrape the page.
- `dotenv`: To load the environment variables.
- `fs`: To write the data to a file.

### License

MIT License © 2023 [Nahuel G](https://linkedin.com/in/gomeznahuel)