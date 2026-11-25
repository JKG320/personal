import {cp, mkdir, readdir, readFile, rm} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname, resolve, join} from 'node:path';
import {spawnSync} from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source=join(root, 'site'), output=join(root, 'dist');
async function files(folder) {
  return (await Promise.all((await readdir(folder, {withFileTypes:true})).map(async entry => entry.isDirectory() ? files(join(folder,entry.name)) : [join(folder,entry.name)]))).flat();
}
for (const path of await files(source)) {
  if (path.endsWith('.js')) {
    const result=spawnSync(process.execPath, ['--check',path], {encoding:'utf8'});
    if (result.status!==0) throw new Error(result.stderr);
  }
  if (/\.(?:js|html|css)$/.test(path)) {
    const text=await readFile(path,'utf8');
    for (const match of text.matchAll(/(?:from\s*|import\s*\(|src=|href=)["'](\.\.?\/[^"']+)["']/g)) {
      const relative=match[1].split(/[?#]/)[0];
      await readFile(resolve(dirname(path),relative));
    }
  }
}
await rm(output,{recursive:true,force:true});
await mkdir(output,{recursive:true});
await cp(source,output,{recursive:true});
console.log(`Production site verified and copied to dist/ (${(await files(output)).length} files).`);
