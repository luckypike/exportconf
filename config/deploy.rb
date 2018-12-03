# config valid for current version and patch releases of Capistrano
lock "~> 3"

set :application, "exportconf"
set :repo_url, "git@github.com:luckypike/exportconf.git"

set :deploy_to, "/home/deploy/apps/krdsovet.ru"

append :linked_files, "config/master.key"

append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system", "public/uploads"

set :ssh_options, { forward_agent: true }
set :keep_releases, 5

Rake::Task["deploy:assets:backup_manifest"].clear_actions
