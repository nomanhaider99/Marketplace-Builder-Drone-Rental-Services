const user = {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'ID',
        description: 'A unique identifier for the user.',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The full name of the user.',
        validation: (Rule) => Rule.required().min(3).max(50).error('Name must be between 3 and 50 characters.'),
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        description: 'The email address of the user.',
        validation: (Rule) =>
          Rule.required()
            .regex(
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              { name: 'email', invert: false },
              'Please enter a valid email address.'
            )
            .error('A valid email is required.'),
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
        description: 'The hashed password of the user.',
        validation: (Rule) =>
          Rule.required()
            .min(8)
            .max(100)
            .error('Password must be at least 8 characters long.'),
        options: {
          isHighlighted: false, 
        },
      },
    ],
  };
  