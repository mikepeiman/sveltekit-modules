import path, { join } from 'path';
import { createModuleHelper } from '../../graphql/helpers/createModuleHelper';
import { resolvers } from './_gen/resolvers';

const moduleFolderPath = join(path.resolve(path.dirname('')), 'src/lib/modules/theme');

export const themeModule = createModuleHelper({
	id: 'theme-module',
	moduleFolderPath,
	resolvers,
	providers: []
});
