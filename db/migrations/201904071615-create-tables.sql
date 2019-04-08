-- Since we don't consider Sequelize a mature enough tool for dealing with
-- migrations and since it's not reasonable to do this in a production
-- environment, you're supposed to manually run this migration by doing
-- `psql` on your local database URL. The `/bin/setup` script will
-- automatically do this for you as well.

CREATE TABLE ingredients (
  id          SERIAL
              PRIMARY KEY,

  name        VARCHAR(255)
              NOT NULL,

  created_at  TIMESTAMP WITH TIME ZONE
              NOT NULL
              DEFAULT now(),

  updated_at  TIMESTAMP WITH TIME ZONE
              NOT NULL
              DEFAULT now()
);

CREATE TABLE recipes (
  id          SERIAL
              PRIMARY KEY,

  title       VARCHAR(255) NOT NULL,

  description TEXT,

  created_at  TIMESTAMP WITH TIME ZONE
              NOT NULL
              DEFAULT now(),

  updated_at  TIMESTAMP WITH TIME ZONE
              NOT NULL
              DEFAULT now()
);

CREATE TABLE instructions (
  id                  SERIAL
                      PRIMARY KEY,

  recipe_id           BIGINT
                      NOT NULL
                      REFERENCES recipes(id)
                      ON DELETE CASCADE,

  instruction_content TEXT NOT NULL,

  created_at          TIMESTAMP WITH TIME ZONE
                      NOT NULL
                      DEFAULT now(),

  updated_at          TIMESTAMP WITH TIME ZONE
                      NOT NULL
                      DEFAULT now()
);

CREATE INDEX  idx_on_instructions_recipe_id
ON            instructions
USING         hash(recipe_id);

CREATE TABLE recipe_ingredients (
  id                    SERIAL
                        PRIMARY KEY,

  recipe_id             BIGINT
                        NOT NULL
                        REFERENCES recipes(id)
                        ON DELETE CASCADE,

  ingredient_id         BIGINT
                        NOT NULL
                        REFERENCES ingredients(id)
                        ON DELETE CASCADE,
                        
  special_instructions  TEXT,

  quantity              NUMERIC
                        NOT NULL,

  unit                  VARCHAR(30)
                        NOT NULL,

  created_at            TIMESTAMP WITH TIME ZONE
                        NOT NULL
                        DEFAULT now(),

  updated_at            TIMESTAMP WITH TIME ZONE
                        NOT NULL
                        DEFAULT now()
);

CREATE INDEX  idx_on_recipe_ingredients_recipe_id
ON            recipe_ingredients
USING         hash(recipe_id);

-- An index for recipe_ingredients.ingredient_id will not be required because
-- we'll not be doing lookups by this column.
