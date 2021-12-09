import type { ThemeModule } from '../_gen/module-types';

export const resolvers: ThemeModule.Resolvers = {
	Mutation: {
		createTheme: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return {
				id: 'newId 🚀',
				name: _args.name
			};
		}
	}
};
