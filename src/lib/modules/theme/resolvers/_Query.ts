import type { ThemeModule } from '../_gen/module-types';

export const resolvers: ThemeModule.Resolvers = {
	Query: {
		theme: async (_root, args, { injector }: GraphQLModules.Context) => {
			console.log(`args.id`, args.id);
			return {
				id: args.id,
				name: `THEME_${args.id}`
			};
		},
		themes: async (_root, _args, { injector }: GraphQLModules.Context) => {
			return [{
				id: '007',
				name: `THEME_${7}`
			},{
				id: '008',
				name: `THEME_${8}`
			}];
		}
	}
};
